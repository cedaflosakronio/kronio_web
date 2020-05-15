import { createModule, action, mutation } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { Token, UserData, LoginTelForm } from '../types/authObject';


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
	public token: Token = null;
	public user: UserData = null;

	get headers() {
		if (this.token) {
			return {
				Authorization: 'Bearer ' + this.token.accessToken,
				'Content-Type': 'application/json',
			};
		} else {
			return {
				'Content-Type': 'application/json',
			};
		}
	}

	get hasUser(): boolean {
		return this.user ? true : false;
	}

	get hasToken(): boolean {
		return (this.token) ? true : false;
	}

	get fullName() {
		return this.user && `${this.user.firstname} ${this.user.lastname}`;
	}

	@mutation loadToken() {
		const accessToken = localStorage.getItem('USER-ACCESS-TOKEN');
		const expiresIn = +localStorage.getItem('USER-EXPIRE-TOKEN');
		if (accessToken && expiresIn) this.token = new Token({ accessToken, expiresIn });
	}

	@mutation logout() {
		this.token = null;
		this.user = null;
		localStorage.removeItem('USER-ACCESS-TOKEN');
		localStorage.removeItem('USER-EXPIRE-TOKEN');
	}

	@mutation setUser(data: any) {
		if (data.user) {
			this.token = new Token(data);
			this.user = new UserData(data.user);
		} else if (data.id) {
			this.user = new UserData(data);
		}
		localStorage.setItem('USER-EXPIRE-TOKEN', data.token.expiresIn);
		localStorage.setItem('USER-ACCESS-TOKEN', data.token.accessToken);
	}

	@action async isLoggedIn(): Promise<boolean> {
		if (this.hasToken) {
			if (this.hasUser) {
				return true;
			} else {
				await this.getUser();
			}
		}
		return this.user ? true : false;
	}

	@action async getUser() {
		this.logout();
		return new Promise((resolve, reject) => {
			axios.get(AuthUrl.get_user, { headers: this.headers })
				.then(response => {
					if (response.data.id) {
						this.setUser(response.data);
						resolve();
					} else {
						console.log(response.data);
						reject();
					}
				})
				.catch(e => {
					// tslint:disable-next-line: no-console
					console.log(' Descripción de error: \n' + e);
					reject();
				});
		});
	}

	@action
	public async login_tel_pass(loginData: LoginTelForm): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			axios
				.post(AuthUrl.login_telephone_password, loginData, { headers: this.headers })
				.then(response => {
					this.setUser(response.data);
					resolve(true);
				})
				.catch(e => {
					console.log(' Descripción de error: \n' + e);
					reject(false);
				});
		});
	}
}
