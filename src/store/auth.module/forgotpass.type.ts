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
