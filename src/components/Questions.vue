<template>
    <div class="container">
        <b-jumbotron>

    <template v-slot:lead>
        {{quest.question}}
    </template>

    <hr class="my-4">

    <b-list-group>
        <b-list-group-item class="opts" v-for="(opt, index) in options" :key="index">{{opt}}</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#" @click="next">Next</b-button>
    </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        quest: Object,
        next: Function
    },
    data(){
        return{
            selected: null
        }
    },
    computed: {
        options(){
            let opts = this.quest.incorrect_answers;
            opts.push(this.quest.correct_answer);
            return opts;
        }
    },
    methods: {
        select(){
            
        }
    }
}
</script>

<style scoped>
.opts:hover{
    background-color: rgb(235, 235, 235);
    cursor: pointer;
}
</style>