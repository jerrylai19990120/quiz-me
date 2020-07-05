<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
     
     <b-navbar-brand href="#">
        <img src="../assets/quiz.png" style="width: 30px" alt="">
        Quiz-Me
    </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

  </b-navbar>
    <b-card-group columns>
    <QuizCard class="quizCard" name='A movie geek?' icon='movie' 
    des='Test out how much you know from the movies universe and rarely people get passed 70% of this quiz.' path_quiz="/movie-quiz"/>
    <QuizCard class="quizCard" name='See if you a Tech guy' icon='computer' des='Wanna see how much you know about comouters and tech? Come try it out. Hard to score:)' path_quiz="/tech-quiz"/>
    <QuizCard class="quizCard" name='Real car fans' icon='vehicle' des='Crazy car fans, see how many question can you get right.' path_quiz="/car-quiz"/>
    <QuizCard class="quizCard" name='Math Genius' icon='math' des='Brainstorm the world and come try this math quiz out, IQ contest.' path_quiz="/math-quiz"/>
    <QuizCard class="quizCard" name='Enjoy small handy things' icon='gadget' des='Little knowledge quiz for the things you used.' path_quiz="/gadget-quiz"/>
    <QuizCard class="quizCard" name='Anime World' icon='anime' des='See if you are a real anime lover, hard quiz to get through.' path_quiz="/anime-quiz"/>
    <QuizCard class="quizCard" name='Animals Lover' icon='animal' des='Animals lovers, pets lovers. Come check this out!' path_quiz="/animal-quiz"/>
    <QuizCard class="quizCard" name='Artsy Quiz' icon='arts' des='Like arts? Then come check out the quiz to find out how much you like arts.' path_quiz="arts-quiz"/>
    <QuizCard class="quizCard" name='Reading Enthusiast' icon='books' des='See the inner beauty of yourself--How many book you have read.' path_quiz="/books-quiz"/>
    <QuizCard class="quizCard" name='Like board game?' icon='boardGame' des='Enjoy playing board games? Try out this one to see how much you know about board game.' path_quiz="/boardGame-quiz"/>
    <QuizCard class="quizCard" name='Cartoon fans' icon='cartoon' des='Cartoon lovers? Lets see how much you know' path_quiz="/cartoon-quiz"/>
    <QuizCard class="quizCard" name='Marvel or DC?' icon='comics' des='Marvel fans or DC fans, lots of comics question to fit your need.' path_quiz="/comics-quiz"/>
    <QuizCard class="quizCard" name='Test if you know enough' icon='celebrity' des='Chris Brown fan or other celebrities fans? See how much you know about them.' path_quiz="/celebrity-quiz"/>
    <QuizCard class="quizCard" name='Just general knowledge' icon='general' des='Just some general knowledge for you to have fun :)' path_quiz="/general-quiz"/>
    <QuizCard class="quizCard" name='Know enough of the earth' icon='geography' des='How much do you know about the earth? 95% of people cant pass this quiz.' path_quiz="/geo-quiz"/>
    <QuizCard class="quizCard" name='Classy flow' icon='history' des='Call it a history expert why not come see if you are really a history expert.' path_quiz="/history-quiz"/>
    <QuizCard class="quizCard" name='Like politics?' icon='politcs' des='Like US politics, Republicans or Democrats. Or maybe some international politics.' path_quiz="/politics-quiz"/>
    <QuizCard class="quizCard" name='Music Quiz' icon='music' des='Hip hop, Soul, Pop all that you know. Bet you dont know enough.' path_quiz="/music-quiz"/>
    <QuizCard class="quizCard" name='Ancient Geek' icon='mythology' des='Look Here! All the amazing questions of mythology are here.' path_quiz="/myth-quiz"/>
    <QuizCard class="quizCard" name='Love the Outdoors' icon='nature' des='Enjoy the breeze near the lake or a quiet walk in the forest.' path_quiz="/nature-quiz"/>
    <QuizCard class="quizCard" name='Grind dont stop' icon='sports' des='Sport guy? See how much you actually know about sports across the world.' path_quiz="/sports-quiz"/>
    <QuizCard class="quizCard" name='Musical vibe' icon='theater' des='Definitely the right place to see if you are a real musical fan.' path_quiz="/musical-quiz"/>
    <QuizCard class="quizCard" name='TV Geek' icon='tv' des='Wanna check out how good you are at all the shows?' path_quiz="/tv-quiz"/>
    <QuizCard class="quizCard" name='Gamer or not?' icon='videoGame' des='Console and PC gamers. Conquer this quiz to prove that you are a real gamer.' path_quiz="/videoGame-quiz" style="margin-bottom:26px"/>
    </b-card-group>
    </div>
    
    
</template>

<script>
import QuizCard from "./QuizCard";
export default {
    components: {
        QuizCard
    }
}
</script>

,<style scoped>
.quizCard{
    float: left; 
    margin-left: 72px;
    margin-top: 36px;
    margin-right: 72px;
}
.bg-info{
    background-color: #FC4444 !important;
}
.info{
    width: 66px;
    height: 66px;
    margin-right: 68vw;
    margin-top: -28vh;
    float: left;
}
</style>