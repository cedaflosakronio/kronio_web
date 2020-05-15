import { IsNotEmpty, IsInt, IsNumberString, Length, IsIn, IsString, IsEmail, Matches } from 'class-validator';
import { Subscription } from './coreProfileObjects';
import { BaseValidate } from '@/utils/Validate';

export class CreateEnterpriseForm extends BaseValidate {
	constructor(data: { name: string; code: string; max_users: number }) {
		super();
		this.name = data.name;
		this.code = data.code;
		this.max_users = data.max_users;
	}

	@Matches(/^[a-zA-Z-ZñÑáéíóúÁÉÍÓÚ0-9\s]+$/, { always: true, message: 'formatletter' })
	@IsString({ always: true })
	@Length(3, 50, { message: 'lengthname' })
	@IsNotEmpty({ message: 'emptyname' })
	name: string;

	@Matches(/^[0-9]+$/, { always: true })
	@IsNumberString({ always: true })
	@Length(10, 13, { message: 'lengthidempresa' })
	@IsNotEmpty({ message: 'emptyidempresa' })
	code: string;

	@IsInt({ always: true })
	@IsIn([10, 50, 100, 250], { message: 'rangeteam' })
	@IsNotEmpty({ message: 'rangeteam' })
	max_users: number;
}

export class EnterpriseDataValidation extends BaseValidate {
	constructor(dataApi: {
		id?: string;
		created?: string;
		updated?: string;
		name?: string;
		web?: string;
		address?: string;
		telephone?: string;
		email?: string;
		country?: string;
		city?: string;
		bustype?: string;
		code?: string;
		status?: string;
		max_users?: number;
		subscription?: Subscription;
	}) {
		super();
		this.id = dataApi.id;
		this.created = dataApi.created;
		this.updated = dataApi.updated;
		this.name = dataApi.name;
		this.web = dataApi.web;
		this.address = dataApi.address;
		this.city = dataApi.city;
		this.code = dataApi.code;
		this.email = dataApi.email;
		this.telephone = dataApi.telephone;
		this.country = dataApi.country;
		this.bustype = dataApi.bustype;
		this.status = dataApi.status;
		this.max_users = dataApi.max_users;
		this.subscription = dataApi.subscription;
	}

	id: string;
	created: string;
	updated: string;
	name: string;
	web: string;
	code: string;

	@Matches(/^[a-zA-Z-ZñÑáéíóúÁÉÍÓÚ0-9\s]+$/, { always: true, message: 'formatoaddress' })
	@Length(2, 50, { message: 'lengthaddress' })
	@IsNotEmpty({ message: 'emptyadress' })
	address: string;

	@Matches(/^[0-9]+$/, { always: true, message: 'formatophone' })
	@IsNumberString({ always: true })
	@Length(7, 10, { message: 'lengthphone' })
	@IsNotEmpty({ message: 'emptyphone' })
	telephone: string;

	@IsEmail({}, { message: 'email' })
	@Length(5, 50, { message: 'lengthemail' })
	@IsNotEmpty({ message: 'emptyemail' })
	email: string;

	@IsNotEmpty({ message: 'emptycountry' })
	country: string;

	@IsNotEmpty({ message: 'emptycity' })
	city: string;

	@IsNotEmpty({ message: 'emptybustype' })
	bustype: string;

	status: string;
	max_users: number;

	subscription: Subscription;
}

export class EnterpriseData {
	id?: string;
	created?: string;
	updated?: string;
	name?: string;
	web?: string;
	address?: string;
	city?: string;
	code?: string;
	email?: string;
	data?: {
		telephone?: string;
		country?: string;
		bustype?: string;
	};
	status?: string;
	max_users?: number;
	subscription?: Subscription;

	constructor();
	// tslint:disable-next-line: unified-signatures
	constructor(dataApi: EnterpriseData | EnterpriseDataValidation);
	constructor(dataApi?: EnterpriseData | EnterpriseDataValidation) {
		if (dataApi) {
			this.id = dataApi.id;
			this.created = dataApi.created;
			this.updated = dataApi.updated;
			this.name = dataApi.name;
			this.web = dataApi.web;
			this.address = dataApi.address;
			this.city = dataApi.city;
			this.code = dataApi.code;
			this.email = dataApi.email;
			this.status = dataApi.status;
			this.max_users = dataApi.max_users;
			this.subscription = dataApi.subscription;
			if (dataApi instanceof EnterpriseDataValidation) {
				this.data = {
					telephone: dataApi.telephone,
					country: dataApi.country,
					bustype: dataApi.bustype,
				};
			} else {
				this.data = dataApi.data;
			}
		}
	}
}
