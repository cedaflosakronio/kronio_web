<template>
	<nav
		class="navbar navbar-menu-no-transition is-fixed-top is-paddingless"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<router-link class="navbar-item link navbar-menu-section navbar-menu-touch-full" to="/">
				<slot name="navbar-brand" />
			</router-link>
		</div>

		<div class="navbar-menu">
			<ul class="navbar-menu-start">
				<li class="navbar-menu-section navbar-menu-section_menu navbar-menu-touch-hide">
					<component
						v-for="(item, index) in menu_start_content"
						:key="index"
						:is="item.element"
						:id="item.id"
						ref="links"
						:class="[
							'navbar-menu-link',
							{
								'navbar-menu-has-dropdown': item.dropdown,
							},
						]"
						:data-dropdown="item.dropdown"
						:aria-haspopup="item.dropdown && 'true'"
						:aria-expanded="item.dropdown && 'false'"
						:href="item.href"
						:to="item.path"
					>
						<span>
							<i v-if="item.icon" :class="['fas', 'fa-' + item.icon, 'icon-pr']"></i>
							{{ item.title }}
						</span>
					</component>
				</li>
			</ul>

			<ul class="navbar-end">
				<li class="navbar-menu-section navbar-menu-section_menu navbar-menu-touch-hide">
					<component
						v-for="(item, index) in menu_end_content"
						:key="index"
						:is="item.element"
						:id="item.id"
						ref="links"
						:class="[
							'navbar-menu-link',
							{
								'navbar-menu-has-dropdown': item.dropdown,
							},
						]"
						:data-dropdown="item.dropdown"
						:aria-haspopup="item.dropdown && 'true'"
						:aria-expanded="item.dropdown && 'false'"
						:href="item.href"
						:to="item.path"
					>
						<span>
							<i v-if="item.icon" :class="['fas', 'fa-' + item.icon, 'icon-pr']"></i>
							{{ item.title }}
						</span>
					</component>
				</li>
				<div class="spacing-end"></div>
				<slot name="navbar-end" />
			</ul>
		</div>
		<div
			ref="mob"
			:class="[
				'navbar-menu-section',
				'navbar-menu-section_touch',
				{
					'navbar-menu-open': active_touch_menu,
				},
			]"
		>
			<div class="navbar-menu-touch" @click="onClickHamburger">
				<div class="navbar-menu-touch__hamburger">
					<div class="navbar-menu-touch-line" />
					<div class="navbar-menu-touch-line" />
					<div class="navbar-menu-touch-line" />
				</div>
			</div>
			<div class="navbar-menu-touch-content">
				<transition name="navbar-menu-touch-anim">
					<div v-show="active_touch_menu" class="navbar-menu-touch-content__wrap">
						<div class="navbar-menu-touch-close" @click="onClickHamburger" />
						<component
							v-for="(section, index) in menu_touch_content"
							:is="section.element === 'button' ? 'b-collapse' : section.element"
							class="section_touch"
							ref="sections_touch"
							:id="section.id"
							:key="index"
							animation="slide"
							:href="section.href"
							:to="section.path"
							:open="is_open_collapse == index"
							@open="is_open_collapse = index"
						>
							<div
								v-if="section.element === 'button'"
								slot="trigger"
								slot-scope="props"
								class="card-header"
								role="button"
							>
								<p class="card-header-title">
									<i v-if="section.icon" :class="['fas', 'fa-' + section.icon, 'icon-pr']"></i>
									{{ section.title }}
								</p>
								<a class="card-header-icon">
									<b-icon :icon="props.open ? 'angle-up' : 'angle-down'"> </b-icon>
								</a>
							</div>
							<div v-if="section.element === 'button'" class="card-content">
								<component
									v-for="(item, i) in section.children"
									:key="i"
									:is="item.element"
									:id="item.id"
									:href="item.href"
									:to="item.path"
									ref="items_touch"
								>
									<div
										:class="{
											'content-centered': item.text_centered,
										}"
									>
										<div v-if="item.title" class="content-top">
											<i v-if="item.icon" :class="['fas', 'fa-' + item.icon, 'icon-pr']"></i>
											{{ item.title }}
										</div>
										<div v-if="item.description" class="content-bottom">
											{{ item.description }}
										</div>
									</div>
								</component>
							</div>
							<div v-else class="card-header" role="button">
								<p class="card-header-title">
									<i v-if="section.icon" :class="['fas', 'fa-' + section.icon, 'icon-pr']"></i>
									{{ section.title }}
								</p>
							</div>
						</component>
					</div>
				</transition>
			</div>
		</div>
		<div class="navbar-menu-dropdown navbar-menu-touch-hide">
			<div ref="background" class="navbar-menu-background">
				<div ref="backgroundAlt" class="navbar-menu-background-alt" />
			</div>
			<div ref="arrow" class="navbar-menu-arrow" />
			<div ref="dropdownContainer" class="navbar-menu-dropdown-container">
				<div
					v-for="(dropdown, index) in menu_dropdown_content"
					ref="sections"
					:key="index"
					class="navbar-menu-dropdown-section"
					:data-dropdown="dropdown.dropdown"
					aria-hidden="false"
				>
					<div class="navbar-menu-dropdown-content">
						<div class="content navbar-menu-start">
							<div class="menu-item-dropdown">
								<div class="dropdown-wrap">
									<component
										v-for="(item, i) in dropdown.children"
										:key="i"
										:is="item.element"
										:id="item.id"
										class="dropdown-wrap__content"
										:href="item.href"
										:to="item.path"
										ref="items"
									>
										<span v-if="item.icon">
											<i :class="['fas', 'fa-' + item.icon]"></i>
										</span>
										<div
											:class="{
												'content-centered': item.text_centered,
											}"
										>
											<div v-if="item.title" class="content-top">
												{{ item.title }}
											</div>
											<div v-if="item.description" class="content-bottom">
												{{ item.description }}
											</div>
										</div>
									</component>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { INavBarTitle, INavBarItem } from '@/utils/types.utils';

declare global {
	interface Element {
		is_navbar: boolean;
	}
}

@Component
export default class NavBar extends Vue {
	@Prop({ type: Array, default: () => [] }) menu_start!: INavBarTitle[];
	@Prop({ type: Array, default: () => [] }) menu_end!: INavBarTitle[];
	@Prop({ type: [Number, String], default: 380, validator: val => +val >= 0 }) baseWidth!: number | string;
	@Prop({ type: [Number, String], default: 400, validator: val => +val >= 0 }) baseHeight!: number | string;
	@Prop({ type: [Number, String], default: 10, validator: val => +val >= 0 }) screenOffset!: number | string;
	@Prop({ type: Boolean, default: false }) show_touch_menu!: boolean;

	private pointerEvent: { end: string; enter: string; leave: string } = { end: '', enter: '', leave: '' };
	private activeDropdown: Element | undefined;
	private enableTransitionTimeout: any;
	private disableTransitionTimeout: any;
	private closeDropdownTimeout: any;
	private isDragging: boolean = false;
	private events_items: { [id: string]: { [event: string]: (evt: Event) => void } } = {};
	private active_touch_menu: boolean = this.show_touch_menu;
	private touchEvent: string = '';
	private is_open_collapse: number = -1;

	@Watch('show_touch_menu', { immediate: true })
	public change_show_touch_menu(val: boolean) {
		if (this.active_touch_menu !== val) {
			this.active_touch_menu = val;
		}
	}

	@Watch('active_touch_menu', { immediate: true })
	public change_active_touch_menu(val: boolean) {
		if (val) {
			this.registerEventMob();
		} else {
			this.unregisterEventMob();
		}
	}

	get menu_start_content() {
		return (this.get_menu_items(this.menu_start) as INavBarTitle[]).map(item => {
			if (item.children) {
				item.children = item.children.filter(e => e.is_only_desktop || !e.is_only_touch);
			}
			return item;
		});
	}

	get menu_end_content() {
		return (this.get_menu_items(this.menu_end) as INavBarTitle[]).map(item => {
			if (item.children) {
				item.children = item.children.filter(e => e.is_only_desktop || !e.is_only_touch);
			}
			return item;
		});
	}

	get menu_dropdown_content() {
		return [...this.menu_start_content, ...this.menu_end_content].filter(
			item => item.dropdown && (item.is_only_desktop || !item.is_only_touch),
		);
	}

	get menu_touch_content() {
		return [
			...(this.get_menu_items(this.menu_start) as INavBarTitle[]).map(item => {
				if (item.children) {
					item.children = item.children.filter(e => !e.is_only_desktop || e.is_only_touch);
				}
				return item;
			}),
			...(this.get_menu_items(this.menu_end) as INavBarTitle[]).map(item => {
				if (item.children) {
					item.children = item.children.filter(e => !e.is_only_desktop || e.is_only_touch);
				}
				return item;
			}),
		].filter(item => !item.is_only_desktop || item.is_only_touch);
	}

	public get_menu_items(item: (INavBarTitle | INavBarItem)[] | undefined): (INavBarTitle | INavBarItem)[] {
		let item_res: (INavBarTitle | INavBarItem)[] = [];
		if (item) {
			item_res = item.map(e => {
				let el: INavBarTitle | INavBarItem = {
					...e,
					id: `id-${Math.random()
						.toFixed(6)
						.substring(2)}`,
				};
				if (!e.title) {
					e.title = 'title';
				}
				if ((e as INavBarTitle).children) {
					el = {
						...el,
						children: this.get_menu_items((e as INavBarTitle).children) as INavBarItem[],
						dropdown: `${e.title.toLowerCase()}-${Math.random()
							.toFixed(4)
							.substring(2)}`,
						element: 'button',
					};
				} else {
					if (e.path) {
						el = {
							...el,
							element: 'router-link',
						};
					} else {
						el = {
							...el,
							element: 'a',
						};
					}
				}
				this.save_events(el);
				return el;
			});
		}
		return item_res;
	}

	public save_events(item: INavBarTitle | INavBarItem) {
		if (item.id && item.listeners) {
			this.events_items[item.id] = item.listeners;
		}
	}

	get hasDropdownEls(): Element[] {
		const links = this.$refs.links || [];

		return (links as (Vue | Element)[]).filter((link: Vue | Element) => {
			if (link instanceof Vue) {
				link = (link as Vue).$el;
			}
			return (link as Element).classList.contains('navbar-menu-has-dropdown');
		}) as Element[];
	}

	get sectionEls() {
		const sections = this.$refs.sections || [];

		return (sections as Element[]).map(el => ({
			el,
			name: el.getAttribute('data-dropdown'),
			content: el.children[0],
		}));
	}

	private mounted() {
		// PointerEvent interface represents the state of a DOM event
		this.pointerEvent = window.PointerEvent
			? { end: 'pointerup', enter: 'pointerenter', leave: 'pointerleave' }
			: { end: 'touchend', enter: 'mouseenter', leave: 'mouseleave' };

		const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints;
		this.touchEvent = touchSupport ? 'touchend' : 'click';

		this.registerGlobalEvents();
		this.registerDropdownElsEvents();
		this.registerDropdownContainerEvents();
		this.registerItemEvents();
	}

	private beforeDestroy() {
		this.unregisterGlobalEvents();
		this.unregisterItemEvents();
		this.unregisterEventMob();
		this.unregisterItemEvents();
	}

	private registerItemEvents() {
		const items: Element[] = [
			...(this.$refs.items as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
			...(this.$refs.links as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
			...(this.$refs.sections_touch as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
			...(this.$refs.items_touch as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
		];

		items.forEach(item => {
			if (this.events_items[item.id]) {
				Object.entries(this.events_items[item.id]).map(([event, emit]) => {
					item.addEventListener(event, emit);
				});
			}
		});
	}

	private unregisterItemEvents() {
		const items: Element[] = [
			...(this.$refs.items as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
			...(this.$refs.links as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
			...(this.$refs.sections_touch as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
			...(this.$refs.items_touch as (Vue | Element)[]).map(e => {
				if (e instanceof Vue) {
					e = (e as Vue).$el;
				}
				return e as Element;
			}),
		];

		items.forEach(item => {
			if (this.events_items[item.id]) {
				Object.entries(this.events_items[item.id]).map(([event, emit]) => {
					item.removeEventListener(event, emit);
				});
			}
		});
	}

	private registerGlobalEvents() {
		window.addEventListener('resize', this.windowResizeHandler);
		document.addEventListener('touchmove', this.touchMoveHandler);
		document.addEventListener('touchstart', this.touchStartHandler);
		document.body.addEventListener(this.pointerEvent.end, this.eventEndHandler);
	}

	private registerDropdownElsEvents() {
		this.hasDropdownEls.forEach(el => {
			// Events have been registered
			if (el.is_navbar) {
				return;
			}

			el.addEventListener('focusin', () => {
				this.stopCloseTimeout();
				this.openDropdown(el);
			});

			el.addEventListener(this.pointerEvent.enter, (evt: Event) => {
				if ((evt as PointerEvent).pointerType !== 'touch') {
					this.stopCloseTimeout();
					this.openDropdown(el);
				}
			});

			el.addEventListener(this.pointerEvent.end, (evt: Event) => {
				evt.preventDefault();
				evt.stopPropagation();
				this.toggleDropdown(el);
			});

			el.addEventListener(this.pointerEvent.leave, (evt: Event) => {
				if ((evt as PointerEvent).pointerType !== 'touch') {
					this.startCloseTimeout();
				}
			});

			el.is_navbar = true;
		});
	}

	private registerDropdownContainerEvents() {
		// Events have been registered
		if ((this.$refs.dropdownContainer as Element).is_navbar) {
			return;
		}

		(this.$refs.dropdownContainer as Element).addEventListener(this.pointerEvent.end, (evt: Event) => {
			evt.stopPropagation();
		});

		(this.$refs.dropdownContainer as Element).addEventListener(this.pointerEvent.enter, (evt: Event) => {
			if ((evt as PointerEvent).pointerType !== 'touch') {
				this.stopCloseTimeout();
			}
		});

		(this.$refs.dropdownContainer as Element).addEventListener(this.pointerEvent.leave, (evt: Event) => {
			if ((evt as PointerEvent).pointerType !== 'touch') {
				this.startCloseTimeout();
			}
		});

		(this.$refs.dropdownContainer as Element).is_navbar = true;
	}

	private unregisterGlobalEvents() {
		window.removeEventListener('resize', this.windowResizeHandler);
		document.removeEventListener('touchmove', this.touchMoveHandler);
		document.removeEventListener('touchstart', this.touchStartHandler);
		document.body.removeEventListener(this.pointerEvent.end, this.eventEndHandler);
	}

	private toggleDropdown(el: Element) {
		if (this.activeDropdown === el) {
			this.closeDropdown();
		} else {
			this.openDropdown(el);
		}
	}

	private openDropdown(el: Element) {
		if (this.activeDropdown === el) {
			return;
		}

		this.$emit('open-dropdown', el);

		this.$el.classList.add('navbar-menu-overlay-active');
		this.$el.classList.add('navbar-menu-dropdown-active');
		this.activeDropdown = el;
		this.activeDropdown.setAttribute('aria-expanded', 'true');
		this.hasDropdownEls.forEach(el => el.classList.remove('navbar-menu-active'));
		el.classList.add('navbar-menu-active');

		const activeDataDropdown = el.getAttribute('data-dropdown');
		let direction = 'navbar-menu-left';
		let offsetWidth = 0;
		let offsetHeight = 0;
		let content: HTMLElement | undefined;

		this.sectionEls.forEach(item => {
			item.el.classList.remove('navbar-menu-active');
			item.el.classList.remove('navbar-menu-left');
			item.el.classList.remove('navbar-menu-right');

			if (item.name === activeDataDropdown) {
				item.el.setAttribute('aria-hidden', 'false');
				item.el.classList.add('navbar-menu-active');
				direction = 'navbar-menu-right';
				offsetWidth = (item.content as HTMLElement).offsetWidth;
				offsetHeight = (item.content as HTMLElement).offsetHeight;
				content = item.content as HTMLElement;
			} else {
				item.el.classList.add(direction);
				item.el.setAttribute('aria-hidden', 'true');
			}
		});

		const bodyWidth = document.documentElement.offsetWidth;
		const rootRect = this.$el.getBoundingClientRect();
		const rect = el.getBoundingClientRect();
		const leftPosition = rect.left - rootRect.left;
		let centerPosition = leftPosition - offsetWidth / 2 + rect.width / 2;

		if (centerPosition + rootRect.left < +this.screenOffset) {
			centerPosition = +this.screenOffset - rootRect.left;
		}

		const rightOffset = centerPosition + rootRect.left + offsetWidth;
		if (rightOffset > bodyWidth - +this.screenOffset) {
			centerPosition -= rightOffset - bodyWidth + +this.screenOffset;

			if (centerPosition < +this.screenOffset - rootRect.left) {
				centerPosition = +this.screenOffset - rootRect.left;
				offsetWidth = bodyWidth - +this.screenOffset * 2;
			}
		}

		const ratioWidth = offsetWidth / +this.baseWidth;
		const ratioHeight = offsetHeight / +this.baseHeight;

		clearTimeout(this.disableTransitionTimeout);
		this.enableTransitionTimeout = setTimeout(() => {
			this.$el.classList.remove('navbar-menu-no-transition');
		}, 50);

		(this.$refs.dropdownContainer as HTMLElement).style.transform = `translate(${centerPosition}px, ${
			(el as HTMLElement).offsetTop
		}px)`;
		(this.$refs.dropdownContainer as HTMLElement).style.width = `${offsetWidth}px`;
		(this.$refs.dropdownContainer as HTMLElement).style.height = `${offsetHeight}px`;

		(this.$refs.arrow as HTMLElement).style.transform = `translate(${leftPosition + rect.width / 2}px, ${
			(el as HTMLElement).offsetTop
		}px) rotate(45deg)`;
		(this.$refs.background as HTMLElement).style.transform = `translate(${centerPosition}px, ${
			(el as HTMLElement).offsetTop
		}px) scaleX(${ratioWidth}) scaleY(${ratioHeight})`;
		(this.$refs.backgroundAlt as HTMLElement).style.transform = `translateY(${
			content ? (content.children[0] as HTMLElement).offsetHeight / ratioHeight : 0
		}px)`;
	}

	private closeDropdown() {
		if (!this.activeDropdown) {
			return;
		}

		this.$emit('close-dropdown', this.activeDropdown);

		this.hasDropdownEls.forEach(el => {
			el.classList.remove('navbar-menu-active');
		});

		const activeDropdownSection = (this.$refs.dropdownContainer as Element).querySelector('[aria-hidden="false"]');
		if (activeDropdownSection) {
			activeDropdownSection.setAttribute('aria-hidden', 'true');
		}

		clearTimeout(this.enableTransitionTimeout);

		this.disableTransitionTimeout = setTimeout(() => {
			this.$el.classList.add('navbar-menu-no-transition');
		}, 50);

		this.$el.classList.remove('navbar-menu-overlay-active');
		this.$el.classList.remove('navbar-menu-dropdown-active');

		this.activeDropdown.setAttribute('aria-expanded', 'false');
		this.activeDropdown = undefined;
	}

	private startCloseTimeout() {
		this.closeDropdownTimeout = setTimeout(() => {
			this.closeDropdown();
		}, 50);
	}

	private stopCloseTimeout() {
		clearTimeout(this.closeDropdownTimeout);
	}

	private touchMoveHandler() {
		this.isDragging = true;
	}

	private touchStartHandler() {
		this.isDragging = false;
	}

	private eventEndHandler() {
		if (!this.isDragging) {
			this.closeDropdown();
		}
	}

	private windowResizeHandler() {
		(this.$refs.dropdownContainer as HTMLElement).removeAttribute('style');
		(this.$refs.arrow as HTMLElement).removeAttribute('style');
		(this.$refs.background as HTMLElement).removeAttribute('style');
		(this.$refs.backgroundAlt as HTMLElement).removeAttribute('style');

		this.closeDropdown();
	}

	private onClickHamburger() {
		this.emitChangeMob(!this.active_touch_menu);
	}

	private registerEventMob() {
		document.body.addEventListener(this.touchEvent, this.eventEndHandlerMob);
	}

	private unregisterEventMob() {
		document.body.removeEventListener(this.touchEvent, this.eventEndHandlerMob);
	}

	private emitChangeMob(toggle: boolean) {
		this.active_touch_menu = toggle;
		this.$emit('change_show_touch', toggle);
	}

	private eventEndHandlerMob(evt: Event) {
		if (this.$refs.mob !== evt.target && !(this.$refs.mob as Element).contains(evt.target as Node)) {
			this.emitChangeMob(false);
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar.navbar-menu-no-transition,
.navbar-menu-overlay-active {
	background: #8969eb;

	.navbar-menu-link {
		color: white;
	}
}
</style>
