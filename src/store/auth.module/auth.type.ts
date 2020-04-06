export interface IUserAdminPermissions {
	is_admin: boolean;
	is_register_user: boolean;
	is_edit_user: boolean;
	is_option_user: boolean;
	is_change_permission_user: boolean;
	is_register_teacher: boolean;
	is_academic: boolean;
	is_academic_option: boolean;
	is_register_student: boolean;
	is_edit_student: boolean;
	is_register_ex_student: boolean;
	is_change_value_student: boolean;
	is_change_course_student: boolean;
	is_option_platform_student: boolean;
	is_scores_student: boolean;
	is_financial: boolean;
	is_register_payment: boolean;
	is_create_types_values: boolean;
	is_edit_types_values: boolean;
	is_edit_doc: boolean;
	is_django_admin: boolean;
}

export interface ITeacherPermissions {
	is_admin: boolean;
	is_change_score: boolean;
}

export interface IProfile {
	id: string;
	str: string;
	str_group?: string;
	group: string;
}

export interface IProfileAdmin extends IProfile {
	type_profile: 0;
	permissions: IUserAdminPermissions;
}

export interface IProfileTeacher extends IProfile {
	type_profile: 1;
	permissions: ITeacherPermissions;
}

export interface IProfileStudent extends IProfile {
	type_profile: 2;
}

export interface IUser {
	id: string;
	last_login: Date;
	is_superuser: boolean;
	is_active: boolean;
	is_change_password: boolean;
}

export interface IAuth {
	jwt?: string;
	user?: IUser;
	profile?: IProfileAdmin | IProfileTeacher | IProfileStudent;
	profiles?: (IProfileAdmin | IProfileTeacher | IProfileStudent)[];
}

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
