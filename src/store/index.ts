import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';

import AuthStore from './auth.module/auth.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		months: [
			'Enero',
			'Febrero',
			'Marzo',
			'Abril',
			'Mayo',
			'Junio',
			'Julio',
			'Agosto',
			'Septiembre',
			'Octubre',
			'Noviembre',
			'Diciembre',
		],
		days: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
	},
	modules: {
		...extractVuexModule(AuthStore),
	},
});

export const vxm = {
	auth: createProxy(store, AuthStore),
};
