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
		component: () => import('@/pages/Register/RegisterAdminPerson.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/registerAdminpersonmore',
		name: 'RegisterAdminPerson2',
		component: () => import('@/pages/Register/RegisterAdminPerson2.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/registerAdminenterprise',
		name: 'RegisterAdminEnterprise',
		component: () => import('@/pages/Register/RegisterAdminEnterprise.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/registerAdminenterprisemore',
		name: 'RegisterAdminEnterprise2',
		component: () => import('@/pages/Register/RegisterAdminEnterprise2.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/registerinvitationEmployee',
		name: 'WellcomeInvitation',
		component: () => import('@/pages/InvitationEmployee/wellcomeinvitation.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/registerEmployeePerson',
		name: 'RegisterEmployeePerson',
		component: () => import('@/pages/InvitationEmployee/employeePersonal.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/registerEmployeePersonmore',
		name: 'RegisterEmployeePerson2',
		component: () => import('@/pages/InvitationEmployee/employeePerson2.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/forgotpassmain',
		name: 'ForgotPassMain',
		component: () => import('@/pages/ForgotPassword/forgotpass.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/forgotpasscode',
		name: 'ForgotPassCode',
		component: () => import('@/pages/ForgotPassword/forgotpasscode.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/forgotpassnew',
		name: 'ForgotPassNew',
		component: () => import('@/pages/ForgotPassword/forgotpassnew.vue'),
		meta: {
			free_page: true,
		},
	},
	{
		path: '/forgotpasslogin',
		name: 'ForgotPassLogin',
		component: () => import('@/pages/ForgotPassword/forgotpasslogin.vue'),
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
				component: () => import(/* webpackChunkName: "home" */ '@/pages/MainApp/Home.vue')
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
