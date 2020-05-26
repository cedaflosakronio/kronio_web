import { Vue } from 'vue-property-decorator';
import { vxm } from '@/store';

export default abstract class PageBase extends Vue {
	public store = vxm;

	public async created() {
		await this.loadPage();
	}

	private async loadPage() {
		// Para evitar la autenticación en el desarrollo
		console.log('Pagina cargada', await this.store.auth);
		return;
		if (await this.store.auth.isLoggedIn()) {
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
		this.store.auth.logout();
		this.$router.push('/login');
	}
}
