import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';

import AuthStore from './auth.module/auth.store';
import GeneralProfile from './core.module/core.profile';
import EnterpriseStore from './enterprise.module/enterprise.store';
import navigationProps from './navigation.module/navigationProps';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		...extractVuexModule(AuthStore),
		...extractVuexModule(GeneralProfile),
		...extractVuexModule(EnterpriseStore),
		...extractVuexModule(navigationProps),
	},
});

export const vxm = {
	auth: createProxy(store, AuthStore),
	core_profile: createProxy(store, GeneralProfile),
	enterprise: createProxy(store, EnterpriseStore),
	navigation_props: createProxy(store, navigationProps),
};
