import { createModule, mutation, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { vxm } from '@/store';
import { ManageWork, AddRemoveEmployeeToWorkManager, ManageWorkFilterData } from '../types/coreManageWorkObjects';
import { EmployeelistPage, ProfileData } from '../types/coreProfileObjects';

const CoreManageWorkUrl = {
	create_manage_work: config.Kronio + 'public/create_manage_work',
	manage_work: config.Kronio + 'public/manage_work',
};

const VuexModule = createModule({
	strict: false,
});

export default class CoreManageWorkStore extends VuexModule {
	public manager_work_id: string = null;
	public allMangeWork: ManageWork[] = [];
	public selected_manage_work: string = null;

	@mutation set_all_manage_work(data) {
		if (Array.isArray(this.allMangeWork) && this.allMangeWork.length > 0) {
			this.allMangeWork = [];
		}
		data.forEach(e => {
			this.allMangeWork.push(ManageWork.createFromManageWork(e));
		});
	}

	get manageWorkListFilterData(): ManageWorkFilterData[] {
		const manageWorkList: ManageWorkFilterData[] = [];
		this.allMangeWork.forEach(el => {
			let code: string = el.code;
			let description: string = el.description;
			if (code.length > 3) code = code.slice(0, 3);
			if (description.length > 5) description = description.slice(0, 5);
			const fullName: string = `${description}${code}`;
			let time: string = '';
			time = el.points[0].time
				? el.points[0].time.slice(0, 5) + 'h'
				: `${el.points[0].time_begin_local} - ${el.points[0].time_end_local}`;
			const profiles_array: ProfileData[] = [];
			el.profiles.forEach(profile => {
				profiles_array.push(new ProfileData(profile));
			});
			manageWorkList.push(new ManageWorkFilterData(el.id, fullName, time, el.name_days, profiles_array));
		});
		return manageWorkList;
	}

	get employeeScheduleListPage(): EmployeelistPage[] {
		if (this.manageWorkListFilterData && this.selected_manage_work) {
			const work_manager: ManageWorkFilterData = this.manageWorkListFilterData.filter(
				w => w.id_work_manager === this.selected_manage_work,
			)[0];
			if (work_manager.profiles.length > 0) {
				const employee_mw = new Set(work_manager.profiles.map(e => e.id));
				return vxm.core_profile.employeeListPage.map(e => {
					if (employee_mw.has(e.profile_id)) {
						e.selected = true;
					}
					return e;
				});
			} else {
				return vxm.core_profile.employeeListPage;
			}
		} else {
			return null;
		}
	}

	@action async create_manage_work(createManageWork: ManageWork) {
		return new Promise((resolve, reject) => {
			axios
				.post(CoreManageWorkUrl.create_manage_work, createManageWork, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					if (data.id) {
						this.manager_work_id = data.id;
						resolve();
					} else {
						//console.log(data);
						reject();
					}
				})
				.catch(e => {
					//console.log(' Descripción de error: \n' + e);
					reject();
				});
		});
	}

	@action async manage_work_add_remove_employee(info: {
		addRemoveEmployeeToWorkManager: AddRemoveEmployeeToWorkManager;
		type: 'ADD' | 'REMOVE';
	}): Promise<boolean> {
		return new Promise(resolve => {
			const { addRemoveEmployeeToWorkManager, type } = info;
			const url_type = type === 'ADD' ? 'add_employee' : 'remove_employee';
			const url = `${CoreManageWorkUrl.manage_work}/${vxm.core_profile.currentProfile.enterprise}/${this.selected_manage_work}/${url_type}`;
			axios
				.post(url, addRemoveEmployeeToWorkManager, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					typeof data === 'boolean' ? resolve(data) : resolve(false);
				})
				.catch(e => {
					//console.log(' Descripción de error: \n' + e);
					resolve(false);
				});
		});
	}

	@action async get_all_manage_work() {
		return new Promise((resolve, reject) => {
			axios
				.get(`${CoreManageWorkUrl.manage_work}/${vxm.core_profile.currentProfile.enterprise}/`, {
					headers: vxm.auth.headers,
				})
				.then(response => {
					const data = response.data;
					if (Array.isArray(data) && !(typeof data[0] === 'undefined')) {
						data[0].id && (this.set_all_manage_work(data), reject());
					} else {
						//console.log(data);
						resolve();
					}
				})
				.catch(e => {
					//console.log(' Descripción de error: \n' + e);
					resolve();
				});
		});
	}
}
