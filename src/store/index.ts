import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';

import AuthStore from './auth.module/auth.store';
import CoreProfileStore from './core.module/core.profile';
import CoreManageWorkStore from './core.module/core.managework';
import EnterpriseStore from './enterprise.module/enterprise.store';
import navigationProps from './navigation.module/navigationProps';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		...extractVuexModule(AuthStore),
		...extractVuexModule(CoreProfileStore),
		...extractVuexModule(CoreManageWorkStore),
		...extractVuexModule(EnterpriseStore),
		...extractVuexModule(navigationProps),
	},
});

export const vxm = {
	auth: createProxy(store, AuthStore),
	core_profile: createProxy(store, CoreProfileStore),
	core_manageWork: createProxy(store, CoreManageWorkStore),
	enterprise: createProxy(store, EnterpriseStore),
	navigation_props: createProxy(store, navigationProps),
};
