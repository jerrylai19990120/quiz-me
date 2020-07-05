<template>
  <div id="app">
    <Header :score='this.score' :totalQuest='this.total'/>
    <Questions 
    v-if="this.questions.length>0"
    :quest='questions[curr]'
                :next='next'
                :num='curr'
                :score='this.score' :total='this.total'
                :addScore='addScore'
                :addQuest='addQuest'/>
  </div>
  
</template>


<script>
import Header from "./Header";
import Questions from "./Questions";

export default {
  props: {
      my_quiz: String,
      show: Boolean
  },
  components: {
    Header,
    Questions
  },
  data(){
    return{
      curr: 0,
      questions: [],
      score: 0,
      total: 0
    }
  },
  mounted: function(){
      this.fetchData(this.my_quiz);
  },
  methods:{
    next(){
      this.curr++;
      let answers = document.getElementsByClassName('opts');
      for(let i=0;i<answers.length;i++){
        answers[i].classList.remove('chose');
        answers[i].classList.remove('red');
        answers[i].classList.remove('green');
      }
    },
    addScore(){
      this.score++;
    },
    addQuest(){
      this.total++;
    },
    fetchData(url){
        fetch(url ,{
        method: "get"
      })

      .then((response) => {
        return response.json();
      })

      .then((data) => {
        this.questions = data.results;
      })
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>