import { createModule, mutation, action } from 'vuex-class-component';
import axios from 'axios';
import config from '../config.store';
import { vxm } from '@/store';
import { TodayManageWork, Mark, MarkUserInterface, MarkUserInterfaceRow } from '../types/coreWorkObjects';

const CoreWorkUrl = {
	work: config.Kronio + 'public/work',
};

const VuexModule = createModule({
	strict: false,
});

export default class CoreWorkStore extends VuexModule {
	public todayManageWork: TodayManageWork[] = [];
	public marks: Mark[] = [];

	get currentTodayManageWork() {
		if (this.todayManageWork.length) {
			return this.todayManageWork[0];
		}
	}

	get markUserInterface(): MarkUserInterface {
		const mui = new MarkUserInterface();
		const bound = this.marks.length;
		for (let index = 0; index < bound; index += 2) {
			const mark_entry = { ...this.marks[index] };
			if (index + 1 < bound) {
				const mark_exit = { ...this.marks[index + 1] };
				mui.rows.push(MarkUserInterfaceRow.create_2P(mark_entry.markTime, mark_exit.markTime));
			} else {
				mui.rows.push(MarkUserInterfaceRow.create_1P(mark_entry.markTime));
			}
		}
		return mui;
	}

	@mutation set_today_manage_works(data) {
		if (Array.isArray(this.todayManageWork) && this.todayManageWork.length > 0) {
			this.todayManageWork = [];
		}
		data.forEach(e => {
			this.todayManageWork.push(new TodayManageWork(e));
		});
	}

	@mutation set_multiple_marks(data: Mark[]) {
		if (Array.isArray(this.marks) && this.marks.length > 0) {
			this.marks = [];
		}
		data.forEach(e => this.marks.push(Mark.createFromMark(e)));
	}

	@action async get_today_works() {
		const enterprise = vxm.core_profile.currentProfile.enterprise;
		const id = vxm.core_profile.currentProfile.id;
		const url = `${CoreWorkUrl.work}/${enterprise}/profile/${id}/works/date`;
		return new Promise((resolve, reject) => {
			axios
				.post(url, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					if (Array.isArray(data) && !(typeof data[0] === 'undefined')) {
						data[0].id && (this.set_today_manage_works(data), resolve());
					} else {
						//console.log(data);
						reject();
					}
				})
				.catch(e => {
					//console.log(' Descripción de error: \n' + e);
					e;
					reject();
				});
		});
	}

	@action async get_marks(date: string = 'now') {
		const enterprise = vxm.core_profile.currentProfile.enterprise;
		const id = vxm.core_profile.currentProfile.id;
		const url = `${CoreWorkUrl.work}/${enterprise}/profile/${id}/marks/${date}`;
		return new Promise((resolve, reject) => {
			axios
				.get(url, { headers: vxm.auth.headers })
				.then(response => {
					const data = response.data;
					if (Array.isArray(data) && !(typeof data[0] === 'undefined')) {
						if (data[0].id) {
							this.set_multiple_marks(data);
							resolve();
						}
					} else {
						//console.log(data);
						reject();
					}
				})
				.catch(e => {
					//console.log(' Descripción de error: \n' + e);
					e;
					reject();
				});
		});
	}
}
