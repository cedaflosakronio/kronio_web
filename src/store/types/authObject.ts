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
