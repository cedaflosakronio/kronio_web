import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { sync } from 'vuex-router-sync';
import { router } from './router';
import { store } from './store';
import Buefy from 'buefy';
import './styles/index.scss';

Vue.use(Buefy, { defaultIconPack: 'fas' });

Vue.config.productionTip = false;

const unsync = sync(store, router);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');

unsync();
