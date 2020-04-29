import { IsNotEmpty, Length, ValidateIf, IsPhoneNumber, Matches, IsNumberString, IsEmail } from 'class-validator';
import { BaseValidate, Error } from '@/utils/Validate';
import deepCopy from '@/utils/deep_copy.utils';

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
