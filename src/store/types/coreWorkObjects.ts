import { ManageWork } from './coreManageWorkObjects';
import { TypeMarkWork } from '@/utils/enums/Mark';
import moment, { Moment } from 'moment';

export class TodayManageWork {
	id: string;
	manage_work: ManageWork;
	date: string;

	constructor(dataApi: TodayManageWork) {
		this.id = dataApi.id;
		this.manage_work = dataApi.manage_work;
		this.date = dataApi.date;
	}

	get localDate() {
		return new Date(this.date);
	}
}

export class MarkTime {
	private readonly momentTime: Moment;
	constructor(public apiTime: string) {
		this.momentTime = moment.utc(this.apiTime);
	}

	get utcDateTime() {
		return moment(this.momentTime).format();
	}

	get localDateTime() {
		return moment(this.momentTime)
			.local()
			.format();
	}

	get localTime() {
		return moment(this.momentTime)
			.local()
			.format('HH:mm:ss');
	}

	public localTimeFormat(format: string = 'HH:mm') {
		return moment(this.momentTime)
			.local()
			.format(format);
	}
}

export class Mark {
	id: string;
	work: {
		id: string;
		date: string;
	};
	datetime: string;
	latitude: string;
	longitud: string;
	destination: string;
	filename: string;
	type: TypeMarkWork;
	markTime: MarkTime;

	static createFromMark(dataApi: Mark) {
		const mark = new Mark();
		mark.id = dataApi.id;
		mark.work = {
			id: dataApi.work.id,
			date: dataApi.work.date,
		};
		mark.datetime = dataApi.datetime;
		mark.latitude = dataApi.latitude;
		mark.longitud = dataApi.longitud;
		mark.destination = dataApi.destination;
		mark.filename = dataApi.filename;
		mark.type = dataApi.type;
		mark.markTime = new MarkTime(mark.datetime);
		return mark;
	}

	static create_2P(datetime: string) {
		const mark = new Mark();
		mark.datetime = datetime;
		mark.markTime = new MarkTime(mark.datetime);
		return mark;
	}
}

export class MarkUserInterfaceRow {
	private _entry: MarkTime;
	private _exit: MarkTime;
	private _total: Moment;

	get entry(): string {
		return this._entry ? this._entry.localTimeFormat() : '-';
	}

	get exit(): string {
		return this._exit ? this._exit.localTimeFormat() : '-';
	}

	get total(): string {
		return this._total ? this._total.format('HH[h] mm[m]') : '-';
	}

	get entryAsMarkTime(): MarkTime {
		return this._entry;
	}

	get totalAsMoment(): Moment {
		return this._total;
	}

	static create_1P(entry: MarkTime) {
		const row = new MarkUserInterfaceRow();
		row._entry = entry;
		return row;
	}

	static create_2P(entry: MarkTime, exit: MarkTime) {
		const row = new MarkUserInterfaceRow();
		row._entry = entry;
		row._exit = exit;
		row._total = row.calculateTotal();
		return row;
	}

	calculateTotal() {
		const format = 'HH:mm:ss';
		const startTime = moment(this._entry.localTimeFormat(format), format);
		const endTime = moment(this._exit.localTimeFormat(format), format);
		const hrs = moment.utc(endTime.diff(startTime)).format('HH');
		const min = moment.utc(endTime.diff(startTime)).format('mm');
		const sec = moment.utc(endTime.diff(startTime)).format('ss');
		const total = [hrs, min, sec].join(':');
		return moment(total, format);
	}
}

export class MarkUserInterface {
	rows: MarkUserInterfaceRow[];
	constructor() {
		this.rows = [];
	}

	get totalWorkTime() {
		if (this.rows.length) {
			// Cuando recien se marca el inicio se setea el cronometro en 0
			const accummulator: Moment = moment('00:00:00', 'HH:mm:ss');
			for (let index = 0; index < this.rows.length; index++) {
				const total_moment = this.rows[index].totalAsMoment;
				// Si esta en la ultima fila solo con marcacion de entrada
				if (index === this.rows.length - 1 && !total_moment) {
					const entry = this.rows[index].entryAsMarkTime;
					const fake_total = this.calculateFakeTotal(entry);
					accummulator
						.add(fake_total.hours(), 'hours')
						.add(fake_total.minutes(), 'minutes')
						.add(fake_total.seconds(), 'seconds');
				} else {
					accummulator
						.add(total_moment.hours(), 'hours')
						.add(total_moment.minutes(), 'minutes')
						.add(total_moment.seconds(), 'seconds');
				}
			}
			return [accummulator.hours(), accummulator.minutes(), accummulator.seconds()];
		}
		return [];
	}

	private calculateFakeTotal(entry: MarkTime) {
		const format = 'HH:mm:ss';
		const now = moment();
		const startTime = moment(entry.localTimeFormat(format), format);
		const endTime = moment(now.format(format), format);
		const hrs = moment.utc(endTime.diff(startTime)).format('HH');
		const min = moment.utc(endTime.diff(startTime)).format('mm');
		const sec = moment.utc(endTime.diff(startTime)).format('ss');
		const total = [hrs, min, sec].join(':');
		console.log('hola', total);
		return moment(total, format);
	}
}
