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