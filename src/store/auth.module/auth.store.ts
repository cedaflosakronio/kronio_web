import { createModule, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { Token, UserData } from '../types';


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
}
