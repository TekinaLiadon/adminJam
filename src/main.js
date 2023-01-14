import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueSmoothScroll from "vue3-smooth-scroll";
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

const Vue = createApp(App);

Vue.use(store).use(router).use(VueSmoothScroll).use(Oruga)

Vue.mount("#app");

export default Vue;
