import Vue from "vue";
//import App from "./App.vue";
import Header from "./components/Header.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(Header),
}).$mount("#app");
