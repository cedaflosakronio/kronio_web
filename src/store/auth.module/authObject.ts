import { IsNotEmpty, IsPhoneNumber, Matches, IsEmail } from 'class-validator';
import { BaseValidate } from '@/utils/Validate';

export class LoginBase extends BaseValidate {
	constructor(data: { username: string; password: string }) {
		super();
		this.username = data.username;
		this.password = data.password;
	}
	username: string;

	@IsNotEmpty({ message: 'empty' })
	password: string;
}

export class LoginTelForm extends LoginBase {
	constructor(data: LoginBase) {
		super(data);
		this.username = data.username;
	}
	@IsPhoneNumber('EC', { message: 'formatnumber' })
	@Matches(/^(\+593)/, { message: 'initnumber' })
	@IsNotEmpty({ message: 'empty' })
	username: string;
}
export class LoginEmailForm extends LoginBase {
	constructor(data: LoginBase) {
		super(data);
		this.username = data.username;
	}
	@IsEmail({}, { message: 'formatemail' })
	@IsNotEmpty({ message: 'empty' })
	username: string;
}

export class Token {
	constructor(data: Token) {
		this.expiresIn = data.expiresIn;
		this.accessToken = data.accessToken;
	}
	expiresIn: number;
	accessToken: string;
}

export class UserData extends BaseValidate {
	constructor(dataApi: {
		id?: string;
		email?: string;
		telephone?: string;
		lastname?: string;
		firstname?: string;
		numid?: string;
		change_password?: boolean;
		role?: string;
		statusEmail?: string;
		statusTelephone?: string;
		lastLogin?: {};
		data?: {};
	}) {
		super();
		this.id = dataApi.id;
		this.email = dataApi.email;
		this.telephone = dataApi.telephone;
		this.lastname = dataApi.lastname;
		this.firstname = dataApi.firstname;
		this.numid = dataApi.numid;
		this.change_password = dataApi.change_password;
		this.role = dataApi.role;
		this.statusEmail = dataApi.statusEmail;
		this.statusTelephone = dataApi.statusTelephone;
		this.lastLogin = dataApi.lastLogin;
		this.data = dataApi.data;
	}

	id?: string;
	email?: string;
	telephone?: string;
	lastname?: string;
	firstname?: string;
	numid?: string;
	change_password?: boolean;
	role?: string;
	statusEmail?: string;
	statusTelephone?: string;
	lastLogin?: {};
	data?: {};
}
