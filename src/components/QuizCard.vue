<template>
    <div>
  <b-card
    :title='name'
    :img-src="require(`../assets/${icon}.jpg`)"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{des}}
    </b-card-text>
    <router-link :to="path_quiz">
    <b-button :href="path_quiz" variant="primary" class="startBtns">Quiz</b-button></router-link>
  </b-card>
</div>
</template>

<script>
export default {
    props: {
        name: String,
        des: String,
        icon: String,
        path_quiz: String
    }
}
</script>

<style scoped>
.btn-primary {
    color: #fff;
    background-color: #FC4444;
    border-color: #FC4444;
}
.btn-primary:hover {
    color: #fff;
    background-color: #d43838;
    border-color: #d43838;
}

.btn-primary:focus {
    color: #fff;
    background-color: #FC4444;
    border-color: #FC4444;
}

a{
    color: #fff;
    background-color: #FC4444;
    border-color: #FC4444;
}

</style>