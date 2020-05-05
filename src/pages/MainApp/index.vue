<template>
	<div class="app">
		<div v-if="!isLoading">
			<NavBar :menu_start="menu_start" :menu_end="menu_end">
				<template slot="navbar-brand">
					<LogoSVG />
				</template>
				<template slot="navbar-end">
					<a class="navbar-item" @click="logout()">
						Salir
						<i class="fas fa-sign-out-alt icon-pl"></i>
					</a>
				</template>
			</NavBar>
			<div class="body">
				<router-view></router-view>
			</div>
		</div>
		<b-loading :active.sync="isLoading"></b-loading>
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';

@Component({
	components: { NavBar, LogoSVG },
})
export default class MainApp extends PageBase {
	private isLoading: boolean = true;

	private menu_start: INavBarTitle[] = [
		// {
		// 	title: 'Prueba 1',
		// 	children: [
		// 		{
		// 			title: 'Prueba 1.1',
		// 			description: 'Este es un mensaje de prueba',
		// 			icon: 'user-plus',
		// 			is_only_desktop: true,
		// 			listeners: {
		// 				click: () => {
		// 					console.log('Hola');
		// 				},
		// 			},
		// 		},
		// 		{
		// 			title: 'Prueba 1.2',
		// 			description: 'Este es un mensaje de prueba',
		// 			path: { name: 'Error' },
		// 			icon: 'users',
		// 		},
		// 	],
		// },
		// {
		// 	title: 'Prueba 2',
		// 	children: [
		// 		{
		// 			title: 'Prueba 2.1',
		// 			description: 'Este es un mensaje de prueba',
		// 			icon: 'user-minus',
		// 			is_only_desktop: true,
		// 			listeners: {
		// 				click: () => {
		// 					console.log('Hola');
		// 				},
		// 			},
		// 		},
		// 		{
		// 			title: 'Prueba 2.2',
		// 			description: 'Este es un mensaje de prueba',
		// 			path: { name: 'Error' },
		// 			icon: 'cogs',
		// 		},
		// 	],
		// },
	];

	private menu_end: INavBarTitle[] = [
		{
			icon: 'bell',
			is_only_desktop: true,
			children: [
				{
					title: 'Sin notificaciones',
					text_centered: true,
				},
			],
		},
		{
			icon: 'user',
			is_only_desktop: true,
			children: [
				{
					title: 'Su perfil',
					icon: 'user-cog',
					description: 'Puede consultar y modificar la iformación de su perfil',
				},
				{
					title: 'Configuraciones',
					icon: 'cog',
					description: 'Puede configurar un poco y dejar KiteBlue mucho más comodo para usted',
				},
			],
		},
	];

	public async created() {
		await super.created();
		const timer = setInterval(() => {
			if (this.auth_data) {
				this.isLoading = false;
				clearInterval(timer);
				this.redirect();
			}
		}, 100);
	}

	public redirect() {
		if (this.auth_data && this.auth_data.profile && this.auth_data.profile.type_profile !== 0) {
			this.$router.push('/error');
		}
	}
}
</script>

<style lang="scss">
.app {
	.body {
		margin-top: 4rem;
		height: calc(100vh - 4rem);
	}
}
</style>
