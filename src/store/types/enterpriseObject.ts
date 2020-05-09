import { IsNotEmpty, Matches, IsEmail, IsAlphanumeric } from 'class-validator';
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
	constructor(data: { start_date?: string; end_date: string }) {
		super();
		this.start_date = data.start_date;
		this.end_date = data.end_date;
	}

	@IsNotEmpty({ message: 'empty' })
	start_date?: string;

	@IsNotEmpty({ message: 'empty' })
	end_date: string;
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
	constructor(data: { type?: string }) {
		super();
		this.type = data.type;
	}

	@IsNotEmpty({ message: 'empty' })
	type?: string;
}
