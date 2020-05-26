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
		this.prefix = data.prefix;
		this.phone = data.phone ? data.phone : '';
		this.birthday = data.birthday;
	}

	public id: string;
	public address: string;
	public prefix?: string;
	public phone: string;
	public birthday?: Date;
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
		this.size_enterprise = data.size_enterprise;
	}

	public name_enterprise: string;
	public id_enterprise: string;
	public type_enterprise: string;
	public size_enterprise?: number;
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
		this.prefix = data.prefix;
		this.phone = data.phone;
		this.city = data.city;
		this.country = data.country;
	}

	public address: string;
	public prefix?: string;
	public phone?: string;
	public city?: string;
	public country?: string;
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
		this.prefix = data.prefix;
		this.phone = data.phone ? data.phone : '';
		this.birthday = data.birthday;
	}

	public id: string;
	public address: string;
	public prefix?: string;
	public phone: string;
	public birthday?: Date;
}
