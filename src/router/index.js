import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
Vue.use(VueRouter);

const routes = [

  {
    path: "/ContactUs",
    name: "ContactUs",
    component:ContactUs,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/",
    name: "Main",
    component: Main,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
