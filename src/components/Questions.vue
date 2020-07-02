<template>
    <div class="container">
        <b-jumbotron>

    <template v-slot:lead>
        {{num+1}}. {{quest.question}}
    </template>

    <hr class="my-4">

    <b-list-group>
        <b-list-group-item class="opts" v-for="(opt, index) in opts" :key="index" @click="select(index)"
        :class="selected===index? 'chose' : ''">{{opt}}</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#" @click="submit()"
    :disabled='this.selected===null'>Submit</b-button>
    <b-button variant="success" href="#" @click="next" :disabled='this.selected===null'>Next</b-button>
    </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        quest: Object,
        next: Function,
        num: Number,
        addScore: Function,
        addQuest: Function
    },
    data(){
        return{
            selected: null,
            correct: null,
            answers: []
        }
    },
    methods: {
        select(index){
            this.selected = index;
        },
        submit(){
            this.addQuest();
            if(this.selected===this.correct && this.selected !== null){
                document.getElementsByClassName('opts')[this.correct].classList.remove('chose');
                document.getElementsByClassName('opts')[this.correct].classList.add('green');
                this.addScore();
            }else if(this.selected!==this.correct && this.selected !== null){
                document.getElementsByClassName('opts')[this.correct].classList.add('green');
                document.getElementsByClassName('opts')[this.selected].classList.remove('chose');
                document.getElementsByClassName('opts')[this.selected].classList.add('red');
            }
        },
        options(opts){
            this.answers = opts;
            this.correct = this.answers.indexOf(this.quest.correct_answer);
        },
        shuffle(arra1) {
            let ctr = arra1.length;
            let temp;
            let index;
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = arra1[ctr];
                arra1[ctr] = arra1[index];
                arra1[index] = temp;
            }
            return arra1;
        }
    },
    computed: {
        opts(){
            let opts = this.quest.incorrect_answers;
            opts.push(this.quest.correct_answer);
            this.shuffle(opts);
            this.options(opts);
            return opts;
        }
    }
}
</script>

<style scoped>
.opts:hover{
    background-color: rgb(235, 235, 235);
    cursor: pointer;
}

.red{
    background-color: rgb(235, 62, 62);
}

.red:hover{
    background-color: rgb(235, 62, 62);
}

.green{
    background-color: rgb(99, 228, 99);
}

.green:hover{
    background-color: rgb(99, 228, 99);
}

.chose{
    background-color: dodgerblue;
}

.chose:hover{
    background-color: dodgerblue;
}

</style>