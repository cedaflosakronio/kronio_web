interface INavBarElement {
	id?: string;
	title?: string;
	icon?: string;
	element?: string;
	path?: string | { name: string };
	href?: string;
	is_only_touch?: boolean;
	is_only_desktop?: boolean;
	listeners?: { [key: string]: (evt: Event) => void };
}

export interface INavBarItem extends INavBarElement {
	text_centered?: boolean;
	description?: string;
}

export interface INavBarTitle extends INavBarElement {
	dropdown?: string;
	children?: INavBarItem[];
}
