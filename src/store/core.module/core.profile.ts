import { createModule, mutation, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { vxm } from '@/store';
import {
	ProfileData,
	CreateProfileBossForm,
	CreateProfileEmployeeForm,
	EmployeelistPage,
} from '../types/coreProfileObjects';
import { EnterpriseData } from '../types/enterpriseObjects';

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
	public enterpriseSubscription: EnterpriseData[] = [];
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

	@mutation set_enterprise_with_subscription(data) {
		if (Array.isArray(this.enterpriseSubscription) && this.enterpriseSubscription.length > 0) {
			this.enterpriseSubscription = [];
		}
		data.forEach(e => {
			this.enterpriseSubscription.push(new EnterpriseData(e));
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

	get currentEnterpriseSubs() {
		if (Array.isArray(this.enterpriseSubscription) && this.enterpriseSubscription.length > 0) {
			return this.enterpriseSubscription[0];
		} else {
			return null;
		}
	}

	get employeeListPage(): EmployeelistPage[] {
		const employee_array: EmployeelistPage[] = [];
		this.employeesProfileList.forEach(e => {
			employee_array.push(new EmployeelistPage(e));
		});
		return employee_array;
	}

	@action async create_profile_boss(createProfileBossForm: CreateProfileBossForm) {
		return new Promise<boolean>((resolve, reject) => {
			axios
				.post(CoreUrl.create_profile_boss, createProfileBossForm, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					if (data.id) {
						this.set_profile_id(data);
						resolve();
					} else {
						console.log('create_profile_boss', data);
						reject();
					}
				})
				.catch(e => {
					console.log(' Descripción de error: \n' + e);
					reject();
				});
		});
	}

	@action async get_enterprise_with_subscription() {
		return new Promise<boolean>((resolve, reject) => {
			axios
				.get(CoreUrl.enterprise, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					if (Array.isArray(data) && !(typeof data[0] === 'undefined')) {
						if (data[0].id) {
							this.set_enterprise_with_subscription(data);
							resolve();
						}
					} else {
						console.log(data);
						reject();
					}
				})
				.catch(e => {
					console.log(' Descripción de error: \n' + e);
					reject();
				});
		});
	}

	@action async create_profile_employee(createProfileEmployeeForm: CreateProfileEmployeeForm) {
		return new Promise<boolean>((resolve, reject) => {
			axios
				.post(CoreUrl.create_profile_boss, createProfileEmployeeForm, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					if (data.id) {
						resolve();
						this.set_profile_id(data);
					} else {
						console.log(data);
						reject();
					}
				})
				.catch(e => {
					console.log(' Descripción de error: \n' + e);
					reject();
				});
		});
	}

	@action async get_employees_profiles() {
		return new Promise((resolve, reject) => {
			axios
				.get(`${CoreUrl.employee_profiles}/${this.currentProfile.enterprise}/`, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					if (Array.isArray(data) && !(typeof data[0] === 'undefined')) {
						if (data[0].id) {
							this.set_employee_profile_list(data);
							resolve();
						}
					} else {
						console.log(data);
						reject();
					}
				})
				.catch(e => {
					console.log(' Descripción de error: \n' + e);
					reject();
				});
		});
	}
}
