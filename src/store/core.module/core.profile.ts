import { createModule, mutation, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { vxm } from '@/store';

const CoreUrl = {
	profile: config.Kronio + 'public/profile',
	create_profile_boss: config.Kronio + 'public/profile/create/boss',
	create_profile_employee: config.Kronio + 'public/profile/create/employee',
	create_subscription: config.Kronio + 'public/create_subscription',
	invite_employee: config.Kronio + 'public/profile/invite',
	valid_employee_email: config.Kronio + 'query/profile/valid/email',
	enterprise: config.Kronio + 'public/enterprise',
	employee_profiles: config.Kronio + 'public/employee',
};

const VuexModule = createModule({
	strict: false,
});

export default class CoreProfileStore extends VuexModule {

}
