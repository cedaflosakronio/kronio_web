import { createModule } from 'vuex-class-component';
import { LoginTelForm, LoginEmailForm } from '../types/authObject';

const VuexModule = createModule({
	strict: false,
});

export default class NavigationProps extends VuexModule {}
