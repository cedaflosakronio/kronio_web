import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '*',
		redirect: '/app',
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "login" */ '@/pages/Login.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/registerAdminperson',
		name: 'RegisterAdminPerson',
		component: () => import(/* webpackChunkName: "register_admin_person" */ '@/pages/Register/RegisterAdminPerson.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/app',
		name: 'MainApp',
		component: () => import(/* webpackChunkName: "index_app" */ '@/pages/MainApp/index.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import(/* webpackChunkName: "home" */ '@/pages/MainApp/Home.vue'),
			},
			{
				path: '/error',
				name: 'Error',
				component: () => import(/* webpackChunkName: "error" */ '@/pages/Error.vue'),
			},
		],
	},
];

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
