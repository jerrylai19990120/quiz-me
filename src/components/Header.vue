<template>
    <div class="header-nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/">
    <b-navbar-brand href="/">
        <img src="../assets/quiz.png" style="width: 30px" alt="">
        Quiz-Me
    </b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/">
        <b-nav-item href='/'>Back</b-nav-item></router-link>
        <b-nav-item href="#" disabled>Score: {{score}} / {{totalQuest}}</b-nav-item>
      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
export default {
    props: {
        score: Number,
        totalQuest: Number
    }
}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link.disabled {
    color: white;
}
.bg-info{
    background-color: #FC4444 !important;
}
.navbar-dark .navbar-nav .nav-link {
    color: white;
}
</style>