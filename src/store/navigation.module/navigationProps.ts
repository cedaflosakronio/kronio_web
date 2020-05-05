import { createModule } from 'vuex-class-component';
import { CreateEnterpriseForm } from '../types/enterpriseObjects';

const VuexModule = createModule({
	strict: false,
});

export default class NavigationProps extends VuexModule {
	public createEnterpriseForm: CreateEnterpriseForm = null;
}
