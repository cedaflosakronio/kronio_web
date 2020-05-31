<template>
	<div class="app">
		<div class="body" v-if="main">
			<div class="columns is-centered">
				<div class="column is-9">
					<div class="card box-height">
						<header class="card-header tabs-header">
							<div class="columns is-centered">
								<div class="column is-half">
									<div class="tabs is-fullwidth">
										<ul>
											<li @click="showTab(1)" v-bind:class="[turno ? 'is-active' : '']">
												<a>
													<span class="tabs-label">Crear turnos</span>
												</a>
											</li>
											<li @click="showTab(2)" v-bind:class="[asignar ? 'is-active' : '']">
												<a>
													<span class="tabs-label">Asignar turnos</span>
												</a>
											</li>
											<li @click="showTab(3)" v-bind:class="[historial ? 'is-active' : '']">
												<a>
													<span class="tabs-label">Historial</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</header>
						<div class="card-content">
							<div class="content">
								<div v-if="turno">
									<CreateTurn />
								</div>
								<div v-if="asignar">
									<AssignTurn />
								</div>
								<div v-if="historial">
									<History @details="showDetails" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<transition name="fade">
			<div class="body" v-if="!main">
				<ScheduleEmployee @settings="handleSettings" />
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
import MainMarking from '@/components/team/assistance/team-marking.vue';
import MainInconsistencies from '@/components/team/assistance/team-inconsistancies.vue';
import CreateTurn from '@/components/schedule/schedule-create-turn.vue';
import AssignTurn from '@/components/schedule/schedule-assign-turn.vue';
import History from '@/components/schedule/schedule-history.vue';
import ScheduleEmployee from '@/components/schedule/schedule_employee.vue';

@Component({
	components: {
		NavBar,
		LogoSVG,
		MainMarking,
		MainInconsistencies,
		CreateTurn,
		AssignTurn,
		History,
		ScheduleEmployee,
	},
})
export default class ConfigAdmin extends PageBase {
	public turno: boolean = true;
	public asignar: boolean = false;
	public historial: boolean = false;

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
	}

	public async exit() {
		this.$router.push('/app');
	}

	public async showTab(item: number) {
		switch (item) {
			case 1:
				this.turno = true;
				this.asignar = false;
				this.historial = false;
				break;
			case 2:
				this.turno = false;
				this.asignar = true;
				this.historial = false;
				break;

			default:
				this.turno = false;
				this.asignar = false;
				this.historial = true;
				break;
		}
	}

	public showDetails(data: any) {
		this.main = false;
	}

	public handleSettings(value: boolean) {
		this.main = value;
	}
}
</script>

<style lang="scss" scoped>
.app {
	.body {
		margin-top: 4rem;
		height: calc(110vh - 4rem);
	}

	.box-height {
		height: calc(100vh - 3rem);
		margin-top: 3%;
	}

	.content ul {
		list-style: disc outside;
		margin-left: 0em;
		margin-top: 1em;
	}

	.tabs-header {
		background: #8969eb;
		display: block;
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
}
</style>
