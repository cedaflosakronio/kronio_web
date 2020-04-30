import { IsNotEmpty, Length, IsPhoneNumber, Matches, IsNumberString } from 'class-validator';
import { BaseValidate } from '@/utils/Validate';

export class LoginTelForm extends BaseValidate {
	constructor(data: { telephone?: string; password?: string }) {
		super();
		this.telephone = data.telephone;
		this.password = data.password;
	}

	@IsPhoneNumber('EC', { message: 'formatEC' })
	@Matches(/^(\+593)/, { message: 'formatnumberEC' })
	@IsNotEmpty({ message: 'empty' })
	telephone?: string;

	@IsNotEmpty({ message: 'empty' })
	password?: string;
}

export class SignInDataPersonal extends BaseValidate {
	constructor(data: {
		nombre?: string;
		apellido?: string;
		password?: string;
		repeatpassword?: string;
		identificacion?: string;
		direccion?: string;
		telefono?: string;
		birthday?: string;
	}) {
		super();
		this.nombre = data.nombre;
		this.apellido = data.apellido;
		this.password = data.password;
		this.repeatpassword = data.repeatpassword;
		this.identificacion = data.identificacion;
		this.direccion = data.direccion;
		this.telefono = data.telefono;
		this.birthday = data.birthday;
	}
	@IsNotEmpty({ message: 'empty' })
	nombre?: string;

	@IsNotEmpty({ message: 'empty' })
	apellido?: string;

	@IsNotEmpty({ message: 'empty' })
	password?: string;

	@IsNotEmpty({ message: 'empty' })
	repeatpassword?: string;

	@IsNotEmpty({ message: 'empty' })
	identificacion?: string;

	@IsNotEmpty({ message: 'empty' })
	direccion?: string;

	@IsNotEmpty({ message: 'empty' })
	telefono?: string;

	@IsNotEmpty({ message: 'empty' })
	birthday?: string;
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

	@Matches(/^[0-9]+$/, { message: 'formatid' })
	@IsNumberString({ message: 'numberstringid' })
	@Length(10, 10, { message: 'lengthidempresa' })
	@IsNotEmpty({ message: 'emptyid' })
	numid?: string;
	change_password?: boolean;
	role?: string;
	statusEmail?: string;
	statusTelephone?: string;
	lastLogin?: {};
	data?: {};
}
