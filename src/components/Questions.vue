<template>
    <div class="container">
        <b-jumbotron>

    <template v-slot:lead>
        {{num+1}}. {{quest.question}}
    </template>

    <hr class="my-4">

    <b-list-group>
        <b-list-group-item class="opts" v-for="(opt, index) in this.answers" :key="index" @click="select(index)"
        :class="selected===index? 'chose' : ''">{{opt}}</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#" @click="submit()">Submit</b-button>
    <b-button variant="success" href="#" @click="next">Next</b-button>
    </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        quest: Object,
        next: Function,
        num: Number
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
            if(this.selected===this.correct && this.selected !== null){
                document.getElementsByClassName('opts')[this.correct].classList.remove('chose');
                document.getElementsByClassName('opts')[this.correct].classList.add('green');
            }else if(this.selected!==this.correct && this.selected !== null){
                document.getElementsByClassName('opts')[this.correct].classList.add('green');
                document.getElementsByClassName('opts')[this.selected].classList.remove('chose');
                document.getElementsByClassName('opts')[this.selected].classList.add('red');
            }
        },
        options(){
            this.answers = this.quest.incorrect_answers;
            this.answers.push(this.quest.correct_answer);
            this.shuffle(this.answers);
            this.correct = this.answers.indexOf(this.quest.correct_answer);
        },
        shuffle(arra1) {
            var ctr = arra1.length, temp, index;
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
    mounted: function(){
        this.options();
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