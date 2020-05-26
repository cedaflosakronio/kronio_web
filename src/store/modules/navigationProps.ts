import { createModule } from 'vuex-class-component';

const VuexModule = createModule({
	strict: false,
});

export default class NavigationProps extends VuexModule {}
