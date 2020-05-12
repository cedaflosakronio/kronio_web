import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { sync } from 'vuex-router-sync';
import { router } from './router';
import { store } from './store';
import Buefy from 'buefy';
import './styles/index.scss';
import VCalendar from 'v-calendar';
import vmodal from 'vue-js-modal';

Vue.use(VCalendar, {
	componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
	highlight: {
		color: 'purple',
		fillMode: 'light',
		contentClass: 'italic', // Class provided by TailwindCSS
	},
	locales: {
		es: {
			firstDayOfWeek: 1,
			masks: {
				L: 'YYYY-MM-DD',
				weekdays: 'W',
			},
		},
	},
});

Vue.use(vmodal, {
	dialog: true,
	dynamic: true,
	dynamicDefaults: {
		foo: 'foo',
	},
});

Vue.use(Buefy, { defaultIconPack: 'fas' });

Vue.config.productionTip = false;

const unsync = sync(store, router);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');

unsync();
