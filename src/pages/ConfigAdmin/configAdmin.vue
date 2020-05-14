<template>
	<div class="app">
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
			<div class="columns is-centered">
				<div class="column is-10">
					<div class="box box-height">
						<article class="media">
							<div class="media-content">
								<div class="content">
									<b-tabs position="is-centered" class="block">
										<b-tab-item label="Perfil"></b-tab-item>
										<b-tab-item label="Empresa">
											<ConfigEnterprise />
										</b-tab-item>
										<b-tab-item label="Ajustes"></b-tab-item>
										<b-tab-item label="Plan"></b-tab-item>
										<b-tab-item label="Facturación"></b-tab-item>
									</b-tabs>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
import ConfigEnterprise from '@/components/config-enterprise.vue';

@Component({
	components: { NavBar, LogoSVG, ConfigEnterprise },
})
export default class ConfigAdmin extends PageBase {
	private menu_start: INavBarTitle[] = [];

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
	}
}
</script>

<style lang="scss">
.app {
	.body {
		margin-top: 4rem;
		height: calc(100vh - 4rem);
	}

	.box-height {
		height: calc(90vh - 3rem);
	}
}
</style>
