import { IsNotEmpty, IsPhoneNumber, Matches, IsEmail, Length, ValidateIf } from 'class-validator';
import { BaseValidate, Error } from '@/utils/Validate';
import deepCopy from '@/utils/deep_copy.utils';

export class ResetPasswordBase extends BaseValidate {
	constructor(data: { username: string; code: string; password: string; password_repeat: string }) {
		super();
		this.username = data.username;
		this.code = data.code;
		this.password = data.password;
		this.password_repeat = data.password_repeat;
	}

	@ValidateIf(o => o.page_number === 1)
	username: string;

	@Length(5, 5, { message: 'lengthcode' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 2)
	code: string;

	@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, { message: 'formatpassword' })
	@Length(6, 13, { message: 'lengthpassword' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 3)
	password: string;

	@Length(6, 20, { message: 'equalpassword' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 3)
	password_repeat: string;

	public validate(): boolean {
		super.validate();
		if (this.password !== this.password_repeat) {
			const error = new Error();
			error.target = deepCopy(this);
			error.property = 'passowrd';
			error.value = this.password;
			error.children = [];
			error.constraints = {
				password_not_equal: 'equalpassword',
			};
			this.errors.push(error);
		}
		if (this.errors.length > 0) {
			return true;
		} else {
			return false;
		}
	}
}

export class ResetPassTelForm extends ResetPasswordBase {
	constructor(data: ResetPasswordBase) {
		super(data);
		this.username = data.username;
	}
	@IsPhoneNumber('EC', { message: 'formatnumber' })
	@Matches(/^(\+593)/, { message: 'initnumber' })
	@IsNotEmpty({ message: 'empty' })
	username: string;
}
export class ResetPassEmailForm extends ResetPasswordBase {
	constructor(data: ResetPasswordBase) {
		super(data);
		this.username = data.username;
	}
	@IsEmail({}, { message: 'formatemail' })
	@IsNotEmpty({ message: 'empty' })
	username: string;
}
