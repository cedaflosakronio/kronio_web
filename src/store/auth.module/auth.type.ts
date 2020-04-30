export interface ILoginForm {
	username?: string;
	password?: string;
}

export class LoginForm implements ILoginForm {
	constructor(data: ILoginForm) {
		this.username = data.username ? data.username : '';
		this.password = data.password ? data.password : '';
	}

	public username: string;
	public password: string;
}

export interface IRegisterAdminPerson {
	names?: string;
	lastnames?: string;
	email?: string;
	password?: string;
	password_verified?: string;
}

export class RegisterAdminPersonForm implements IRegisterAdminPerson {
	constructor(data: IRegisterAdminPerson) {
		this.names = data.names ? data.names : '';
		this.lastnames = data.lastnames ? data.lastnames : '';
		this.email = data.email ? data.email : '';
		this.password = data.password ? data.password : '';
		this.password_verified = data.password_verified ? data.password_verified : '';
	}

	public names: string;
	public lastnames: string;
	public email: string;
	public password: string;
	public password_verified: string;
}

export interface IRegisterAdminPerson2 {
	id?: string;
	address?: string;
	prefix?: string;
	phone?: string;
	birthday?: Date;
}

export class RegisterAdminPerson2Form implements IRegisterAdminPerson2 {
	constructor(data: IRegisterAdminPerson2) {
		this.id = data.id ? data.id : '';
		this.address = data.address ? data.address : '';
		this.prefix = data.prefix ? data.prefix : '';
		this.phone = data.phone ? data.phone : '';
		this.birthday = data.birthday ? data.birthday : new Date();
	}

	public id: string;
	public address: string;
	public prefix: string;
	public phone: string;
	public birthday: Date;
}

export interface IRegisterAdminEnterprise {
	name_enterprise?: string;
	id_enterprise?: string;
	type_enterprise?: string;
	size_enterprise?: number;
}

export class RegisterAdminEnterpriseForm implements IRegisterAdminEnterprise {
	constructor(data: IRegisterAdminEnterprise) {
		this.name_enterprise = data.name_enterprise ? data.name_enterprise : '';
		this.id_enterprise = data.id_enterprise ? data.id_enterprise : '';
		this.type_enterprise = data.type_enterprise ? data.type_enterprise : '';
		this.size_enterprise = data.size_enterprise ? data.size_enterprise : 0;
	}

	public name_enterprise: string;
	public id_enterprise: string;
	public type_enterprise: string;
	public size_enterprise: number;
}

export interface IRegisterAdminEnterprise2 {
	address?: string;
	prefix?: string;
	phone?: string;
	city?: string;
	country?: string;
}

export class RegisterAdminEnterprise2Form implements IRegisterAdminEnterprise2 {
	constructor(data: IRegisterAdminEnterprise2) {
		this.address = data.address ? data.address : '';
		this.prefix = data.prefix ? data.prefix : '';
		this.phone = data.phone ? data.phone : '';
		this.city = data.city ? data.city : '';
		this.country = data.country ? data.country : '';
	}

	public address: string;
	public prefix: string;
	public phone: string;
	public city: string;
	public country: string;
}

export interface IRegisterEmployeePersonForm {
	names?: string;
	lastnames?: string;
	email?: string;
	password?: string;
	password_verified?: string;
}

export class RegisterEmployeePersonForm implements IRegisterEmployeePersonForm {
	constructor(data: IRegisterEmployeePersonForm) {
		this.names = data.names ? data.names : '';
		this.lastnames = data.lastnames ? data.lastnames : '';
		this.email = data.email ? data.email : '';
		this.password = data.password ? data.password : '';
		this.password_verified = data.password_verified ? data.password_verified : '';
	}

	public names: string;
	public lastnames: string;
	public email: string;
	public password: string;
	public password_verified: string;
}

export interface IRegisterEmployeePerson2 {
	id?: string;
	address?: string;
	prefix?: string;
	phone?: string;
	birthday?: Date;
}

export class RegisterEmployeePerson2Form implements IRegisterEmployeePerson2 {
	constructor(data: IRegisterEmployeePerson2) {
		this.id = data.id ? data.id : '';
		this.address = data.address ? data.address : '';
		this.prefix = data.prefix ? data.prefix : '';
		this.phone = data.phone ? data.phone : '';
		this.birthday = data.birthday ? data.birthday : new Date();
	}

	public id: string;
	public address: string;
	public prefix: string;
	public phone: string;
	public birthday: Date;
}

export class IForgotPassMain {
	email_phone?: string;
}

export class ForgotPassMainForm implements IForgotPassMain {
	constructor(data: IForgotPassMain) {
		this.email_phone = data.email_phone ? data.email_phone : '';
	}

	public email_phone: string;
}

export class IForgotPassCode {
	code1?: string;
	code2?: string;
	code3?: string;
	code4?: string;
	code5?: string;
	code6?: string;
}

export class ForgotPassCodeForm implements IForgotPassCode {
	constructor(data: IForgotPassCode) {
		this.code1 = data.code1 ? data.code1 : '';
		this.code2 = data.code2 ? data.code2 : '';
		this.code3 = data.code3 ? data.code3 : '';
		this.code4 = data.code4 ? data.code4 : '';
		this.code5 = data.code5 ? data.code5 : '';
		this.code6 = data.code6 ? data.code6 : '';
	}

	public code1: string;
	public code2: string;
	public code3: string;
	public code4: string;
	public code5: string;
	public code6: string;
}

export class IForgotPassNew {
	password?: string;
	repeat_password?: string;
}

export class ForgotPassNewForm implements IForgotPassNew {
	constructor(data: IForgotPassNew) {
		this.password = data.password ? data.password : '';
		this.repeat_password = data.repeat_password ? data.repeat_password : '';
	}

	public password: string;
	public repeat_password: string;
}
