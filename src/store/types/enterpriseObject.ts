import { IsNotEmpty, Matches, IsEmail, ValidateIf, IsDate, IsBoolean, IsOptional } from 'class-validator';
import { BaseValidate } from '@/utils/Validate';

export class CreateEmployee extends BaseValidate {
	constructor(data: { email: string; name: string; lastname: string }) {
		super();
		this.email = data.email;
		this.name = data.name;
		this.lastname = data.lastname;
	}
	@IsEmail({}, { message: 'formatemail' })
	@IsNotEmpty({ message: 'empty' })
	email: string;

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatname' })
	@IsNotEmpty({ message: 'empty' })
	name: string;

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatlastname' })
	@IsNotEmpty({ message: 'empty' })
	lastname: string;
}
export class VactionRequest extends BaseValidate {
	constructor(data: { start_date?: Date; end_date: Date }) {
		super();
		this.start_date = data.start_date;
		this.end_date = data.end_date;
	}

	@IsDate({ message: 'formatdate' })
	@IsNotEmpty({ message: 'empty' })
	start_date?: Date;

	@IsDate({ message: 'formatdate' })
	@IsNotEmpty({ message: 'empty' })
	end_date: Date;
}
export class PostponedVacation extends BaseValidate {
	constructor(data: { description?: string }) {
		super();
		this.description = data.description;
	}

	@IsNotEmpty({ message: 'empty' })
	description?: string;
}
export class CreatePublication extends BaseValidate {
	constructor(data: {
		type: string;
		start_date: Date;
		start_time: string;
		sendemail: boolean;
		allowcomment: boolean;
	}) {
		super();
		this.type = data.type;
		this.start_date = data.start_date;
		this.start_time = data.start_time;
		this.sendemail = data.sendemail;
		this.allowcomment = data.allowcomment;
	}

	@IsNotEmpty({ message: 'empty' })
	type: string;

	@IsDate({ message: 'formatdate' })
	@IsNotEmpty({ message: 'empty' })
	start_date: Date;

	@IsNotEmpty({ message: 'empty' })
	start_time: string;

	@IsBoolean({ message: 'formatsendemail' })
	@IsNotEmpty({ message: 'empty' })
	sendemail: boolean;

	@IsBoolean({ message: 'formatallowcomment' })
	@IsNotEmpty({ message: 'empty' })
	allowcomment: boolean;
}
export class VacationPolicies extends BaseValidate {
	constructor(data: { name: string; description?: string }) {
		super();
		this.name = data.name;
		this.description = data.description;
	}

	@Matches(/^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/, { message: 'formatname' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.page_number === 1)
	name: string;

	@IsOptional()
	@ValidateIf(o => o.page_number === 1)
	description?: string;
}
