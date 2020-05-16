import { createModule } from 'vuex-class-component';
import { LoginTelForm, LoginEmailForm } from '../auth.module/authObject';

const VuexModule = createModule({
	strict: false,
});

export default class NavigationProps extends VuexModule {}
