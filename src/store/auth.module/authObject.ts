import { IsNotEmpty, Length, IsPhoneNumber, Matches, IsEmail } from 'class-validator';
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

export class RegisterEmailForm extends BaseValidate {
	constructor(data: { email?: string; lastname?: string; firstname?: string; password?: string }) {
		super();
		this.email = data.email;
		this.lastname = data.lastname;
		this.firstname = data.firstname;
		this.password = data.password;
	}

	@IsNotEmpty({ message: 'emailempty' })
	@IsEmail({}, { message: 'formatemail' })
	email?: string;

	@IsNotEmpty({ message: 'lastnamesempty' })
	lastname?: string;

	@IsNotEmpty({ message: 'namesempty' })
	firstname?: string;

	@IsNotEmpty({ message: 'passwordempty' })
	@Length(5, 50, { message: 'lengthpassword' })
	password?: string;
}

export class RegisterPhoneForm extends BaseValidate {
	constructor(data: { telephone?: string; lastname?: string; firstname?: string; password?: string }) {
		super();
		this.telephone = data.telephone;
		this.lastname = data.lastname;
		this.firstname = data.firstname;
		this.password = data.password;
	}

	@IsNotEmpty({ message: 'email_empty' })
	telephone?: string;

	@IsNotEmpty({ message: 'lastname_empty' })
	lastname?: string;

	@IsNotEmpty({ message: 'firstname_empty' })
	firstname?: string;

	@IsNotEmpty({ message: 'password_empty' })
	@Length(5, 50, { message: 'length_password' })
	password?: string;
}

export class PhoneCodeForm extends BaseValidate {
	constructor(data: { telephone?: string; code?: string }) {
		super();
		this.telephone = data.telephone;
		this.code = data.code;
	}

	@IsNotEmpty({ message: 'emailempty' })
	telephone?: string;

	@IsNotEmpty({ message: 'codeempty' })
	code?: string;
}

export class UserForm extends BaseValidate {
	constructor(data: { numid?: string; firstname?: string; lastname?: string; data?: {} }) {
		super();
		this.numid = data.numid;
		this.firstname = data.firstname;
		this.lastname = data.lastname;
		this.data = data.data;
	}

	@IsNotEmpty({ message: 'numid_empty' })
	numid?: string;

	@IsNotEmpty({ message: 'firstname_empty' })
	firstname?: string;

	@IsNotEmpty({ message: 'lastname_empty' })
	lastname?: string;

	@IsNotEmpty({ message: 'data_empty' })
	data?: {};
}

export class ChangePasswordForm extends BaseValidate {
	constructor(data: { oldPassword?: string; newPassword?: string }) {
		super();
		this.oldPassword = data.oldPassword;
		this.newPassword = data.newPassword;
	}

	@IsNotEmpty({ message: 'oldpassword_empty' })
	oldPassword?: string;

	@IsNotEmpty({ message: 'newPassword_empty' })
	newPassword?: string;
}
