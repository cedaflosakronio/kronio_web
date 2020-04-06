import { Vue } from 'vue-property-decorator';
import { vxm } from '@/store';
import { IAuth } from '@/store/types';

export default abstract class PageBase extends Vue {
	public auth_data!: IAuth;
	public auth = vxm.auth;

	public async created() {
		await this.loadPage();
	}

	private async loadPage() {
		if (await this.auth.isLogged()) {
			this.auth_data = this.auth.auth_data;
			if (this.$route.meta.free_page) {
				this.$router.push('/app');
			}
		} else {
			if (!this.$route.meta.free_page) {
				this.$router.push('/login');
			}
		}
	}

	public logout() {
		this.auth.logout().then(() => {
			this.$router.push('/login');
		});
	}
}
