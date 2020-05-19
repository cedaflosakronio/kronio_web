export interface ILoginForm {
	username?: string;
	password?: string;
}

export class LoginForm implements ILoginForm {
	constructor(data: ILoginForm) {
		this.username = data.username ? data.username : '';
		this.password = data.password ? data.password : '';
	}

	public username: string;
	public password: string;
}
