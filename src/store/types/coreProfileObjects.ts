import { IsNotEmpty, Length, ValidateIf, Matches, IsEmail } from 'class-validator';
import { UserData } from '../auth.module/authObject';
import { BaseValidate } from '@/utils/Validate';
import { PROFILE_ROLE } from '@/utils/enums/Profile';

interface IBaseProfileForm {
	enterprise?: string;
	day_birth?: string;
	address?: string;
	city?: string;
	data?: object;
}

export class BaseProfileForm extends BaseValidate implements IBaseProfileForm {
	constructor(data: IBaseProfileForm) {
		super();
		this.enterprise = data.enterprise;
		this.day_birth = data.day_birth;
		this.address = data.address;
		this.city = data.city;
		this.data = data.data;
	}
	@Matches(/^[a-zA-Z-ZñÑáéíóúÁÉÍÓÚ0-9\s]+$/, { message: 'formatoaddress' })
	@Length(2, 50, { message: 'lengthaddress' })
	@IsNotEmpty({ message: 'emptyaddress' })
	address?: string;

	@IsNotEmpty({ message: 'emptycity' })
	city?: string;

	@IsNotEmpty({ message: 'emptyfecha' })
	day_birth?: string;

	enterprise?: string;

	data?: object;
}

export class CreateProfileBossForm extends BaseProfileForm implements IBaseProfileForm {
	constructor(data: IBaseProfileForm) {
		super(data);
	}
}

interface ICreateProfileEmployeeForm extends IBaseProfileForm {
	email?: string;
}

export class CreateProfileEmployeeForm extends BaseProfileForm {
	constructor(data: ICreateProfileEmployeeForm) {
		super(data);
		this.email = data.email;
	}

	email?: string;
}

export class EmailVerifyValidation extends BaseValidate {
	constructor(data: { email: string }) {
		super();
		this.email = data.email;
	}

	@IsEmail({}, { message: 'formatemail' })
	@IsNotEmpty({ message: 'emptyemail' })
	email?: string;
}

export class InvitationEmail extends BaseValidate {
	constructor(data: { first_email?: string; second_email?: string; third_email?: string }) {
		super();
		this.first_email = data.first_email;
		this.second_email = data.second_email;
		this.third_email = data.third_email;
	}

	@IsEmail({}, { message: 'format' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.second_email === '' && o.third_email === '')
	first_email?: string;

	@IsEmail({}, { message: 'format' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.first_email === '' && o.third_email === '')
	second_email?: string;

	@IsEmail({}, { message: 'format' })
	@IsNotEmpty({ message: 'empty' })
	@ValidateIf(o => o.first_email === '' && o.second_email === '')
	third_email?: string;
}

export class CreateSubscriptionForm {
	enterprise: string;
	plan: string;
}

export class Subscription {
	id: string;
	created: string;
	updated: string;
	plan: Plan;
}

export class Plan {
	id: string;
	created: string;
	updated: string;
	description: string;
	value: string;
}

export class InviteEmployeeForm {
	enterprise: string;
	email: string;
}

export class ProfileData {
	id: string;
	created: string;
	updated: string;
	version: number;
	enterprise: string;
	numid?: string;
	day_birth: string;
	address: string;
	city: string;
	data: {};
	role: PROFILE_ROLE;
	status: string;
	user?: UserData;

	constructor(dataApi: ProfileData | null) {
		if (dataApi) {
			this.id = dataApi.id;
			this.created = dataApi.created;
			this.updated = dataApi.updated;
			this.version = dataApi.version;
			this.enterprise = dataApi.enterprise;
			this.numid = dataApi.numid;
			this.day_birth = dataApi.day_birth;
			this.address = dataApi.address;
			this.city = dataApi.city;
			this.data = dataApi.data;
			this.role = dataApi.role;
			this.status = dataApi.status;
			this.user = dataApi.user;
		}
	}
}

export class ValidEmailData {
	status: boolean;
	id: string;

	constructor(dataApi: ValidEmailData) {
		this.status = dataApi.status;
		this.id = dataApi.id;
	}
}

export class EmployeelistPage {
	user_id: string;
	image: string;
	status: string;
	full_name: string;
	profile_id: string;
	selected: boolean = false;
	constructor(p: ProfileData) {
		this.user_id = p.user.id;
		this.image = '~/assets/images/p1.jpg';
		this.full_name = `${p.user.firstname} ${p.user.lastname}`;
		this.status = 'cl-green';
		this.profile_id = p.id;
	}
}
