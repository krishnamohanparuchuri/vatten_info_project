import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueToastify from "vue-toastify";

const toastSettings = {
	position: "top-right",
	successDuration: 4500,
	canPause: true,


}
console.log(Vue);

import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.use(VueToastify,
	toastSettings);

console.log(Vue);


new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
