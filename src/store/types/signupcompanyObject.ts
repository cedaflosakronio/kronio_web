import { IsNotEmpty, IsPhoneNumber, Matches, IsEmail, Length, ValidateIf, IsIn } from 'class-validator';
import { BaseValidate } from '@/utils/Validate';
export class SignInCompanyBase extends BaseValidate {
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
