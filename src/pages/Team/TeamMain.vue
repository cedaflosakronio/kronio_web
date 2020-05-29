<template>
	<div class="app">
		<div class="body" v-if="main">
			<div class="columns is-centered">
				<div class="column is-10">
					<div class="card box-height">
						<header class="card-header tabs-header">
							<div class="columns">
								<div class="column"></div>
								<div class="column is-four-fifths">
									<div class="tabs is-fullwidth">
										<ul>
											<li @click="showTab(1)" v-bind:class="[employee ? 'is-active' : '']">
												<a>
													<span class="tabs-label">Empleados</span>
												</a>
											</li>
											<li @click="showTab(2)" v-bind:class="[documents ? 'is-active' : '']">
												<a>
													<span class="tabs-label">Documentos</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="column">
									<b-dropdown aria-role="list" class="button-options">
										<span class="button-options" slot="trigger">
											<b-icon icon="plus"></b-icon>
										</span>

										<b-dropdown-item aria-role="listitem" @click="newEmployee">
											<p class="item-title">Invitar nuevo empleado</p>
											<p class="item-text">Selecciona lo que desees aplicar.</p>
										</b-dropdown-item>
										<b-dropdown-item aria-role="listitem" @click="importEmployee()">
											<p class="item-title">Importar empleados</p>
											<p class="item-text">Importa empleados en masa</p>
										</b-dropdown-item>
									</b-dropdown>
								</div>
							</div>
						</header>
						<div class="card-content">
							<div class="content">
								<div v-if="employee">
									<TeamEmpleados />
								</div>
								<div v-if="documents">
									<TeamDocuments @details="showDetails" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<InvitarEmpleado />
			<CrearEmpleado />
			<ImportarEmpleado />
		</div>
		<transition name="fade">
			<div class="body" v-if="!main">
				<AjustesEmpleado @settings="handleSettings" />
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
import TeamEmpleados from '@/components/team/team-employee.vue';
import TeamDocuments from '@/components/team/team-documents.vue';
import InvitarEmpleado from '@/components/team/md-invitar-empleado.vue';
import CrearEmpleado from '@/components/team/md-crear-empleado.vue';
import ImportarEmpleado from '@/components/team/md-importar-empleado.vue';
import AjustesEmpleado from '@/components/team/team-settings-employee.vue';

@Component({
	components: {
		NavBar,
		LogoSVG,
		TeamEmpleados,
		TeamDocuments,
		InvitarEmpleado,
		CrearEmpleado,
		ImportarEmpleado,
		AjustesEmpleado,
	},
})
export default class ConfigAdmin extends PageBase {
	public employee: boolean = true;
	public documents: boolean = false;

	public main: boolean = true;

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
		this.$modal.show('md-invitar-empleado');
	}

	public async exit() {
		this.$router.push('/app');
	}

	public async showTab(item: number) {
		if (item == 1) {
			this.employee = true;
			this.documents = false;
		} else {
			this.documents = true;
			this.employee = false;
		}
	}

	public newEmployee() {
		this.$modal.show('md-crear-empleado');
	}

	public importEmployee() {
		this.$modal.show('md-importar-empleado');
	}

	public showDetails(data: any) {
		this.main = false;
	}

	public handleSettings(value: boolean) {
		this.main = value;
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
		margin-top: 3%;
	}

	.content ul {
		list-style: disc outside;
		margin-left: 0em;
		margin-top: 1em;
	}

	.tabs-header {
		background: #8969eb;
	}

	.tab-content {
		display: none;
	}

	.tabs {
		margin-left: auto;
		margin-right: auto;
		width: 70%;
		background-color: #8969eb;
		color: #ffffff;
	}

	.tabs-label {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
		color: #ffffff;
	}

	.tabs li.is-active a {
		border-bottom-color: #ffffff;
		color: #8969eb;
	}

	.tabs a {
		align-items: center;
		border-bottom-color: #8969eb;
		border-bottom-style: solid;
		border-bottom-width: 3px;
		color: #4a4a4a;
		display: flex;
		justify-content: center;
		margin-bottom: -1px;
		padding: 0.5em 1em;
		vertical-align: top;
	}

	//Boton + del tab
	.button-options {
		background-color: transparent;
		margin-top: auto;
		margin-bottom: auto;
		padding-top: 4%;
		font-size: 30px;
		color: #ffffff;
	}

	.item-title {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 10px;
		line-height: 15px;

		color: #7a7979;
	}

	.item-text {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 10px;
		line-height: 15px;

		color: rgba(122, 121, 121, 0.5);
	}

	.dropdown-menu {
		display: none;
		left: -180px;
		min-width: 12rem;
		padding-top: 4px;
		position: absolute;
		top: 100%;
		z-index: 20;
	}

	.card-header {
		display: block;
	}
}
</style>
