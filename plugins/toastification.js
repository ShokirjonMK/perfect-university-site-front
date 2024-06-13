import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: window.innerWidth > 450 ? 4 : 2,
  newestOnTop: true,
  hideProgressBar: true,
  timeout: 3000,
  hideProgressBar: false,
  timeout: 10000,
  icon: true
});
