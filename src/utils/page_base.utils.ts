import { Vue } from 'vue-property-decorator';
import { vxm } from '@/store';

export default abstract class PageBase extends Vue {
	public store = vxm;

	public async created() {
		await this.loadPage();
	}

	private async loadPage() {
		/*
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
		*/
		this.$router.push('/login');
	}

	public logout() {
		/*
		this.auth.logout().then(() => {
			this.$router.push('/login');
		});
		*/
	}
}
