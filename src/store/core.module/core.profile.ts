import { createModule, mutation, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { vxm } from '@/store';
import { ProfileData, CreateProfileBossForm, CreateProfileEmployeeForm } from '../types/coreProfileObjects';

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
	public profiles: ProfileData[] = [];
	public employee_email: string = null;
	public employeesProfileList: ProfileData[] = [];

	@mutation set_profile_id(data) {
		this.profiles = [new ProfileData(data)];
	}

	@mutation set_all_profiles_from_current_user(data) {
		if (Array.isArray(this.profiles) && this.profiles.length > 0) {
			this.profiles = [];
		}
		data.forEach(e => {
			this.profiles.push(new ProfileData(e));
		});
	}

	@mutation set_employee_profile_list(data) {
		if (Array.isArray(this.employeesProfileList) && this.employeesProfileList.length > 0) {
			this.employeesProfileList = [];
		}
		data.forEach(e => {
			this.employeesProfileList.push(new ProfileData(e));
		});
	}

	get currentProfile() {
		if (Array.isArray(this.profiles) && this.profiles.length > 0) {
			return this.profiles[0];
		} else {
			return null;
		}
	}

	get hasProfile() {
		return this.currentProfile ? true : false;
	}

	@action async create_profile_boss(createProfileBossForm: CreateProfileBossForm) {
		await axios
			.post(
				CoreUrl.create_profile_boss,
				createProfileBossForm,
				{ headers: vxm.auth.headers },
			)
			.then(response => {
				const data = response.data;
				if (data.id) {
					this.set_profile_id(data);
				} else {
					// tslint:disable-next-line: no-console
					console.log('create_profile_boss', data);
				}
			})
			.catch(e => {
				// tslint:disable-next-line: no-console
				console.log(' Descripción de error: \n' + e);
			});
	}

	@action async create_profile_employee(createProfileEmployeeForm: CreateProfileEmployeeForm) {
		await axios
			.post(
				CoreUrl.create_profile_boss,
				createProfileEmployeeForm,
				{ headers: vxm.auth.headers },
			)
			.then(response => {
				const data = response.data;
				if (data.id) {
					this.set_profile_id(data);
				} else {
					// tslint:disable-next-line: no-console
					console.log(data);
				}
			})
			.catch(e => {
				// tslint:disable-next-line: no-console
				console.log(' Descripción de error: \n' + e);
			});
	}

}
