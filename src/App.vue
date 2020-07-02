<template>
  <div id="app">
    <Header />
    <Questions 
    v-if="this.questions.length>0"
    :quest='questions[curr]'
                :next='next'
                :num='curr'
                />
  </div>
</template>


<script>
import Header from "./components/Header";
import Questions from "./components/Questions";

export default {
  name: "app",
  components: {
    Header,
    Questions
  },
  data(){
    return{
      curr: 0,
      questions: []
    }
  },
  mounted: function(){
      fetch("https://opentdb.com/api.php?amount=16&category=11&difficulty=medium&type=multiple",{
        method: "get"
      })

      .then((response) => {
        return response.json();
      })

      .then((data) => {
        this.questions = data.results;
      })
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
