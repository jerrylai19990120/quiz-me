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
    component: Quiz
  }
];

const router = new VueRouter({
  routes
});

export default router;
