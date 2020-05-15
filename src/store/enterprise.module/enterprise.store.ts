import { createModule, mutation, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { vxm } from '@/store';
import { CreateEnterpriseForm, EnterpriseData } from '../types/enterpriseObjects';

const EnterpriseUrl = {
	create_enterprise: config.TaquionEnterprise + 'public/enterprise/create',
	update_enterprise: config.TaquionEnterprise + 'public/enterprise/update',
};

const VuexModule = createModule({
	strict: false,
});

export default class EnterpriseStore extends VuexModule {
	public entepriseData: EnterpriseData = null;

	@mutation set_enterprise(data: any) {
		this.entepriseData = new EnterpriseData(data);
	}

	@action async create_enterprise(createEnterpriseForm: CreateEnterpriseForm) {
		return new Promise<boolean>((resolve, reject) => {
			axios
				.post(
					EnterpriseUrl.create_enterprise,
					createEnterpriseForm,
					{ headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					(data.id) ? (this.set_enterprise(data), resolve())
						: (console.log(data), reject())
				})
				.catch(e => {
					console.log(' Descripción de error: \n' + e);
					reject();
				});
		});
	}

	@action async update_enterprise(enterpriseData: EnterpriseData) {
		return new Promise<boolean>((resolve, reject) => {
			axios
				.patch(
					`${EnterpriseUrl.update_enterprise}/${this.entepriseData.id}/`,
					enterpriseData,
					{ headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					(data.id) ? (this.set_enterprise(data), resolve())
						: (console.log(data), reject())
				})
				.catch(e => {
					console.log('Descripción de error: \n' + e);
					reject();
				});
		});
	}
}
