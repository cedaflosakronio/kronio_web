import { createModule, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';

import { IAuth, ILoginForm } from './auth.type';

const AuthUrl = {
	login_telephone_password: config.TaquionAuth + 'public/login/telephone/password',
	get_user: config.TaquionAuth + 'public/auth/user',
	signup_telephone: config.TaquionAuth + 'public/signup/telephone',
	confirm_user_by_telephone: config.TaquionAuth + 'public/auth/confirm/user/telephone',
	update_user_data: config.TaquionAuth + 'public/auth/update',
	update_email: config.TaquionAuth + 'public/auth/update/email',
};

const VuexModule = createModule({
	strict: false,
});

export default class AuthStore extends VuexModule {
	public auth_data: IAuth = {};
	public temporal_login: boolean = false;

	get headers() {
		if (this.auth_data.jwt) {
			return {
				Authorization: `JWT ${this.auth_data.jwt}`,
				'Content-Type': 'application/json',
			};
		} else {
			return {
				'Content-Type': 'application/json',
			};
		}
	}

	get isLoggedIn(): boolean {
		return !!(this.auth_data.jwt && this.auth_data.user);
	}

	get isLoggedApp(): boolean {
		return !!localStorage.getItem('jwt');
	}

	@action
	public async isLogged(): Promise<boolean> {
		if (this.isLoggedApp) {
			if (!this.isLoggedIn) {
				const jwt = localStorage.getItem('jwt');
				if (jwt) {
					this.auth_data.jwt = jwt;
					await this.getUser();
				}
			}
		}
		return this.temporal_login;
		// Usar variable temporal
		return this.auth_data.user ? true : false;
	}

	@action
	public async getUser(): Promise<boolean> {
		return await axios
			.get(AuthUrl.get_user, { headers: this.headers })
			.then(response => {
				this.auth_data.user = response.data.user;
				this.auth_data.profile = response.data.profile;
				this.auth_data.profiles = response.data.all_profile;
				return true;
			})
			.catch(() => {
				return false;
			});
	}

	@action
	public async logout() {
		this.auth_data = {};
		localStorage.removeItem('jwt');
		// Usar variable temporal
		this.temporal_login = false;
	}

	@action
	public async login(loginData: ILoginForm): Promise<boolean> {
		this.temporal_login = true;
		return this.temporal_login;
		// Usar variable temporal
		return await axios
			.post(AuthUrl.login_telephone_password, loginData)
			.then(response => {
				this.auth_data.jwt = response.data.token;
				this.auth_data.user = response.data.user;
				this.auth_data.profile = response.data.profile;
				this.auth_data.profiles = response.data.all_profile;
				if (this.auth_data.jwt) {
					localStorage.setItem('jwt', this.auth_data.jwt);
				}
				return true;
			})
			.catch(() => {
				return false;
			});
	}
}
