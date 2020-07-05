import Vue from "vue";
import VueRouter from "vue-router";
import Quiz from "@/components/Quiz";
import Collections from '@/components/Collections';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Collections",
    component: Collections
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/movie-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=11&difficulty=medium&type=multiple"}
  },
  {
    path: "/math-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=19&difficulty=medium&type=multiple"}
  },
  {
    path: "/tech-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=18&difficulty=medium&type=multiple"}
  },
  {
    path: "/gadget-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=30&difficulty=medium&type=multiple"}
  },
  {
    path: "/anime-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=31&difficulty=medium&type=multiple"}
  },
  {
    path: "/car-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=28&difficulty=medium&type=multiple"}
  },
  {
    path: "/animal-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=27&difficulty=medium&type=multiple"}
  },
  {
    path: "/arts-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=25&difficulty=medium&type=multiple"}
  },
  {
    path: "/books-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=10&difficulty=medium&type=multiple"}
  },
  {
    path: "/boardGame-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=16&difficulty=medium&type=multiple"}
  },
  {
    path: "/cartoon-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=32&difficulty=medium&type=multiple"}
  },
  {
    path: "/celebrity-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=26&difficulty=medium&type=multiple"}
  },
  {
    path: "/comics-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=29&difficulty=medium&type=multiple"}
  },
  {
    path: "/general-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=9&difficulty=medium&type=multiple"}
  },
  {
    path: "/geo-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=22&difficulty=medium&type=multiple"}
  },
  {
    path: "/history-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=23&difficulty=medium&type=multiple"}
  },
  {
    path: "/politics-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=24&difficulty=medium&type=multiple"}
  },
  {
    path: "/sports-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=21&difficulty=medium&type=multiple"}
  },
  {
    path: "/music-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=12&difficulty=medium&type=multiple"}
  },
  {
    path: "/myth-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=20&difficulty=medium&type=multiple"}
  },
  {
    path: "/nature-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=17&difficulty=medium&type=multiple"}
  },
  {
    path: "/musical-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=13&difficulty=medium&type=multiple"}
  },
  {
    path: "/tv-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=14&difficulty=medium&type=multiple"}
  },
  {
    path: "/videoGame-quiz",
    name: "Quiz",
    component: Quiz,
    props: {my_quiz: "https://opentdb.com/api.php?amount=16&category=15&difficulty=medium&type=multiple"}
  }
];

const router = new VueRouter({
  routes
});

export default router;
