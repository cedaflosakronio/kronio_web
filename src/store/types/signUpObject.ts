import { IsNotEmpty, IsPhoneNumber, Matches, IsEmail, Length, ValidateIf, IsIn, IsDate } from 'class-validator';
import { BaseValidate, Error } from '@/utils/Validate';
import deepCopy from '@/utils/deep_copy.utils';

export class SignUpUserBase extends BaseValidate {
	constructor(data: {
		name: string;
		lastname: string;
		email?: string;
		password: string;
		password_repeat: string;

		identifier: string;
		address: string;
		telephone: string;
		birthday: Date;
	}) {
		super();

		this.name = data.name;
		this.lastname = data.lastname;
		this.email = data.email;
		this.password = data.password;
		this.password_repeat = data.password_repeat;

		this.identifier = data.identifier;
		this.address = data.address;
		this.telephone = data.telephone;
		this.birthday = data.birthday;
	}

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatname' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
	name: string;

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatlastname' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
	lastname: string;

	@ValidateIf(o => o.page_number === 1)
	email?: string;

	@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, { message: 'formatpassword' })
	@Length(6, 13, { message: 'lengthpassword' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
	password: string;

	@Length(6, 20, { message: 'equalpassword' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
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

	@Matches(/^[0-9]+$/, { message: 'formatidentifier' })
	@Length(10, 10, { message: 'lengthidentifier' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	identifier: string;

	@Length(6, 250, { message: 'lengthaddress' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	address: string;

	@IsPhoneNumber('EC', { message: 'formatnumber' })
	@Matches(/^(\+593)/, { message: 'initnumber' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	telephone: string;

	@IsDate({ message: 'formatdate' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	birthday: Date;
}

export class SignUpEmployee extends SignUpUserBase {
	constructor(data: SignUpUserBase) {
		super(data);
	}
}
export class SignUpAdmin extends SignUpUserBase {
	constructor(data: SignUpUserBase) {
		super(data);
		this.email = data.email;
	}
	@IsEmail({}, { message: 'formatemail' })
	@IsNotEmpty({ message: 'empty' })
	email?: string;
}

export class SignUpCompanyBase extends BaseValidate {
	constructor(data: {
		name: string;
		identifier: string;
		type: string;
		size: string;

		address: string;
		telephone: string;
		city: string;
		country: string;
	}) {
		super();

		this.name = data.name;
		this.identifier = data.identifier;
		this.type = data.type;
		this.size = data.size;

		this.address = data.address;
		this.telephone = data.telephone;
		this.city = data.city;
		this.country = data.country;
	}

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatname' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
	name: string;

	@Matches(/^[0-9]+$/, { message: 'formatidentifier' })
	@Length(13, 13, { message: 'lengthidentifier' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	identifier: string;

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formattype' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
	type: string;

	@IsIn([10, 50, 100, 250], { message: 'rangesize' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
	size: string;

	@Length(6, 250, { message: 'lengthaddress' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	address: string;

	@IsPhoneNumber('EC', { message: 'formatnumber' })
	@Matches(/^(\+593)/, { message: 'initnumber' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	telephone: string;

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatcity' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	city: string;

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatcountry' })
	@ValidateIf(o => o.page_number === 2)
	@IsNotEmpty({ message: 'empty' })
	country: string;
}
