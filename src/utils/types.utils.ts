interface INavBarElement {
	id?: string;
	title?: string;
	icon?: string;
	icon_class?: string;
	element?: string;
	path?: string | { name: string };
	href?: string;
	is_only_touch?: boolean;
	is_only_desktop?: boolean;
	listeners?: { [key: string]: (evt: Event) => void };
}

export interface INavBarItem extends INavBarElement {
	text_centered?: boolean;
	active?: boolean;
	description?: string;
}

export interface INavBarTitle extends INavBarElement {
	text_class?: string;
	image?: string;
	icon_position?: 'left' | 'right';
	dropdown?: string;
	children?: INavBarItem[];
}
