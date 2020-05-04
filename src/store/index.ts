import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';

import AuthStore from './auth.module/auth.store';
import GeneralProfile from './profile.module/profile.general';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		...extractVuexModule(AuthStore),
		...extractVuexModule(GeneralProfile),
	},
});

export const vxm = {
	auth: createProxy(store, AuthStore),
	profile_general: createProxy(store, GeneralProfile),
};
