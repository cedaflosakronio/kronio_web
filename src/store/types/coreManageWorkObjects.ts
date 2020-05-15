import { DAY_WEEK, TYPE_REPEAT } from '@/utils/enums/Calendar';
import { ProfileData } from './coreProfileObjects';
import moment from 'moment';

export class PointManageWork {
	name: string;
	description: string;
	latitude: string;
	longitud: string;
	radius: string;
	time_begin: string;
	time_end: string;
	time: string;

	public static createFromPoint(data: PointManageWork) {
		const point = new PointManageWork();
		point.name = data.name;
		point.description = data.description;
		point.latitude = data.latitude;
		point.longitud = data.longitud;
		point.radius = data.radius;
		point.time_begin = data.time_begin;
		point.time_end = data.time_end;
		point.time = data.time;
		return point;
	}

	static create_NDTBTE(name: string, description: string, time_begin: string, time_end: string) {
		const point = new PointManageWork();
		point.name = name;
		point.description = description;
		this.ZERO_LATITUDE_LONGITUD_RADIUS(point);
		point.time_begin = time_begin;
		point.time_end = time_end;
		return point;
	}

	static create_NDT(name: string, description: string, time) {
		const point = new PointManageWork();
		point.name = name;
		point.description = description;
		this.ZERO_LATITUDE_LONGITUD_RADIUS(point);
		point.time = time;
		return point;
	}

	private static ZERO_LATITUDE_LONGITUD_RADIUS(point: PointManageWork) {
		point.latitude = '0';
		point.longitud = '0';
		point.radius = '0';
	}

	get time_begin_moment() {
		return moment.utc(this.time_begin, 'HH:mm:ss');
	}

	get time_end_moment() {
		return moment.utc(this.time_end, 'HH:mm:ss');
	}

	get time_begin_local() {
		return this.time_begin_moment.local().format('HH:mm');
	}

	get time_end_local() {
		return this.time_end_moment.local().format('HH:mm');
	}
}

export class ManageWork {
	id: string;
	created: string;
	updated: string;
	version: number;
	active: boolean;
	code: string;
	description: string;
	points: PointManageWork[];
	outs: PointManageWork[];
	name_days: DAY_WEEK[];
	type_repeat: TYPE_REPEAT;
	date_begin: string;
	date_end: string;
	enterprise?: string;
	group_profile?: string;
	profiles: string[] | ProfileData[];

	static createFromManageWork(data: ManageWork) {
		const manageWork = new ManageWork();
		manageWork.id = data.id;
		manageWork.created = data.created;
		manageWork.updated = data.updated;
		manageWork.version = data.version;
		manageWork.active = data.active;
		manageWork.code = data.code;
		manageWork.description = data.description;
		manageWork.points = [];
		data.points.forEach(point => {
			manageWork.points.push(PointManageWork.createFromPoint(point));
		});
		manageWork.outs = data.outs;
		manageWork.name_days = data.name_days;
		manageWork.type_repeat = data.type_repeat;
		manageWork.date_begin = data.date_begin;
		manageWork.date_end = data.date_end;
		manageWork.enterprise = data.enterprise;
		manageWork.group_profile = data.group_profile;
		manageWork.profiles = data.profiles;
		return manageWork;
	}

	static create_CDPONT_DB_DE_E(
		code: string,
		description: string,
		points: PointManageWork[],
		outs: PointManageWork[],
		name_days: DAY_WEEK[],
		type_repeat: TYPE_REPEAT,
		date_begin: string,
		date_end: string,
		enterprise: string,
	) {
		const manageWork = new ManageWork();
		manageWork.code = code;
		manageWork.description = description;
		manageWork.points = points;
		manageWork.outs = outs;
		manageWork.name_days = name_days;
		manageWork.type_repeat = type_repeat;
		manageWork.date_begin = date_begin;
		manageWork.date_end = date_end;
		manageWork.enterprise = enterprise;
		return manageWork;
	}
}

export class AddRemoveEmployeeToWorkManager {
	profiles: string[] = [];
	constructor(profiles: string[]) {
		this.profiles = Array.from(profiles);
	}
}

export class ManageWork2 {
	id: string;
	name: string;
	description: string;
}

export class ManageWorkFilterData {
	id_work_manager: string;
	fullName: string;
	time: string;
	days: DAY_WEEK[];
	profiles: ProfileData[];
	constructor(id_work_manager: string, fullName: string, time: string, days: DAY_WEEK[], profiles: ProfileData[]) {
		this.id_work_manager = id_work_manager;
		this.fullName = fullName;
		this.time = time;
		this.days = days;
		this.profiles = profiles.map(e => new ProfileData(e));
	}
}
