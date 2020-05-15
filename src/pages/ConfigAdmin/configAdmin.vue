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
					<div class="card box-height">
						<header class="card-header tabs-header">
							<span @click="exit()" class="close-btn"><i class="far fa-times-circle"></i></span>
							<div class="tabs is-fullwidth">
								<ul>
									<li @click="showTab(1)" v-bind:class="[profile ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Profile</span>
										</a>
									</li>
									<li @click="showTab(2)" v-bind:class="[enterprise ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Empresa</span>
										</a>
									</li>
									<li @click="showTab(3)" v-bind:class="[plan ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Plan</span>
										</a>
									</li>
									<li @click="showTab(4)" v-bind:class="[invoice ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Facturación</span>
										</a>
									</li>
								</ul>
							</div>
						</header>
						<div class="card-content">
							<div class="content">
								<div v-if="profile">profile</div>
								<div v-if="enterprise"><ConfigEnterprise /></div>
								<div v-if="plan">plan</div>
								<div v-if="invoice">invoice</div>
							</div>
						</div>
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
	public profile: boolean = true;
	public enterprise: boolean = false;
	public config: boolean = false;
	public plan: boolean = false;
	public invoice: boolean = false;
	public isActive: boolean = false;

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

	public async exit() {
		this.$router.push('/app');
	}

	public async showTab(item: number, event: any) {
		if (item == 1) {
			this.profile = true;
			this.enterprise = false;
			this.plan = false;
			this.invoice = false;
		} else if (item == 2) {
			this.enterprise = true;
			this.profile = false;
			this.plan = false;
			this.invoice = false;
		} else if (item == 3) {
			this.enterprise = false;
			this.profile = false;
			this.plan = true;
			this.invoice = false;
		} else if (item == 4) {
			this.enterprise = false;
			this.profile = false;
			this.plan = false;
			this.invoice = true;
		}
	}
}
</script>

<style lang="scss">
.app {
	.body {
		margin-top: 4rem;
		height: calc(210vh - 4rem);
	}

	.box-height {
		height: calc(190vh - 3rem);
	}

	.content ul {
		list-style: disc outside;
		margin-left: 0em;
		margin-top: 1em;
	}

	.tabs-header {
		background: #f2f5ff;
	}

	.tab-content {
		display: none;
	}

	.tabs {
		margin-left: auto;
		margin-right: auto;
		width: 70%;
	}

	.tabs-label {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
		color: #8969eb;
	}

	.close-btn {
		font-size: 46px;
		color: #8969eb;
		cursor: pointer;
		margin-left: 5%;
	}
}
</style>
