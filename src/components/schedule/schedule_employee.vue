<template>
	<div class="app-setting">
		<div class="body" id="body-id">
			<div class="columns is-centered">
				<div class="column is-10">
					<div class="box-sombra"></div>
					<div class="card box-height">
						<header class="card-header tabs-header">
							<div class="columns">
								<div class="column">
									<span @click="exit()" class="close-btn">
										<i class="fas fa-arrow-circle-left"></i>
									</span>
								</div>
								<div class="column is-four-fifths">
									<div class="dropdown" :class="dropSelected ? 'is-active' : ''">
										<div class="dropdown-trigger" @click="dropSelect">
											<div class="columns">
												<div
													class="column is-four-fifths"
													style="margin-top:auto; margin-bottom:auto;"
												>
													<p class="title-publications is-fullwidth">Belen Zavala</p>
												</div>
												<div class="column">
													<i class="fas fa-chevron-up"></i>
													<i class="fas fa-chevron-down"></i>
												</div>
											</div>
										</div>
										<div class="dropdown-menu dropdown-box-general" id="dropdown-menu" role="menu">
											<div class="dropdown-content">
												<div class="field dropdown-item">
													<p class="control has-icons-left has-icons-right">
														<input
															class="input"
															type="text"
															placeholder="Filtrar por nombre"
														/>
														<span class="icon is-small is-left">
															<i class="fas fa-search"></i>
														</span>
													</p>
												</div>
												<div class="columns" @click="itemSelect">
													<div class="column icon-color">
														<i class="fas fa-circle"></i>
													</div>
													<div class="column is-four-fifths box-item-dropdown">
														<p class="text-dropdown">Belen Zavala Luque</p>
													</div>
													<div class="column"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</header>
						<div class="card-content">
							<div class="content">
								<div class="container-history-employee">
									<div class="columns box-search">
										<div class="column centered box-header-options">
											<div
												class="dropdown box-select-turn"
												:class="selectTurn ? 'is-active' : ''"
											>
												<div class="dropdown-trigger">
													<button
														class="button boton-select-turn"
														aria-haspopup="true"
														aria-controls="dropdown-menu"
														@click="seleccionarTurno"
													>
														<div class="columns">
															<div class="column">
																<span>Seleccionar turno</span>
															</div>
															<div class="column">
																<span class="icon is-small">
																	<i class="fas fa-angle-down" aria-hidden="true"></i>
																</span>
															</div>
														</div>
													</button>
												</div>
												<div
													class="dropdown-menu dropdown-alignment"
													id="dropdown-menu"
													role="menu"
												>
													<div class="dropdown-content">
														<a href="#" class="dropdown-item" @click="seleccionarTurno"
															>Item 1</a
														>
														<a class="dropdown-item" @click="seleccionarTurno">Item 1</a>
														<a
															href="#"
															class="dropdown-item is-active"
															@click="seleccionarTurno"
															>Item 1</a
														>
														<a href="#" class="dropdown-item" @click="seleccionarTurno"
															>Item 1</a
														>
														<hr class="dropdown-divider" />
														<a href="#" class="dropdown-item" @click="seleccionarTurno"
															>Item 1</a
														>
													</div>
												</div>
											</div>
										</div>
										<div class="column centered box-header-options">
											<b-input
												v-model="busqueda"
												placeholder="Filtrar por nombre"
												icon-pack="fas"
												icon="search"
												size="medium"
												rounded
												class="input-text"
											/>
										</div>
									</div>
									<b-table :data="data" centered>
										<template slot-scope="props">
											<b-table-column field="day" label="Dias" centered>
												<div class="columns">
													<div class="column is-three-fifths">
														<p class="data-text">{{ props.row.day }}</p>
													</div>
												</div>
											</b-table-column>

											<b-table-column field="horas_estimadas" label="Turnos trabajados" centered>
												<div
													class="columns is-centered"
													v-for="hour in props.row.turns"
													:key="hour"
												>
													<div class="column is-2">
														<input
															type="text"
															class="input has-text-centered"
															v-model="hour.hour_start"
														/>
													</div>
													<div class="column is-1">-</div>
													<div class="column is-2">
														<input
															type="text"
															class="input has-text-centered"
															v-model="hour.hour_end"
														/>
													</div>
													<br />
												</div>
											</b-table-column>

											<b-table-column field="ausencias" label="Ausencias" centered>
												<div class="columns is-centered">
													<div class="column is-1">
														<svg
															width="11"
															height="11"
															viewBox="0 0 11 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="5.5"
																cy="5.5"
																r="5"
																fill="#FF2C5C"
																stroke="#FF2C5C"
															/>
														</svg>
													</div>
													<div class="column is-10">
														<p class="data-text-employee">{{ props.row.ausencias }}</p>
													</div>
												</div>
											</b-table-column>

											<b-table-column field="horas_totales" label="Horals totales" centered>
												<p class="data-text-employee">{{ props.row.horas_totales }}</p>
											</b-table-column>
										</template>
									</b-table>
								</div>
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

@Component({
	components: {
		NavBar,
		LogoSVG,
	},
})
export default class ScheduleEmployee extends PageBase {
	private selectExpiran: boolean = false;
	private save: boolean = false;
	public showNewOptions: boolean = false;
	private menu_start: INavBarTitle[] = [];
	public selectTurn = false;

	//Manejo dropdown
	private dropSelected: boolean = false;
	public dropSelect() {
		this.dropSelected = true;
	}

	public itemSelect() {
		this.dropSelected = false;
	}

	public data = [
		{
			id: 1,
			day: '1 mayo - viernes',
			turns: [
				{
					hour_start: '08:00',
					hour_end: '13:00',
				},
				{
					hour_start: '14:00',
					hour_end: '17:15',
				},
			],
			ausencias: 'Dia laboral',
			horas_totales: '8h15min',
		},
		{
			id: 2,
			day: '3 mayo - domingo',
			turns: [
				{
					hour_start: '08:00',
					hour_end: '13:00',
				},
				{
					hour_start: '14:00',
					hour_end: '17:15',
				},
			],
			ausencias: '0h',
			horas_totales: '0h',
		},
		{
			id: 3,
			day: '4 mayo - lunes',
			turns: [
				{
					hour_start: '08:00',
					hour_end: '13:00',
				},
			],
			ausencias: '0h',
			horas_totales: '0h',
		},
		{
			id: 4,
			day: '5 mayo- martes',
			turns: [
				{
					hour_start: '08:00',
					hour_end: '13:00',
				},
			],
			ausencias: '0h',
			horas_totales: '0h',
		},
		{
			id: 5,
			day: '5 mayo- martes',
			turns: [
				{
					hour_start: '08:00',
					hour_end: '13:00',
				},
			],
			ausencias: '0h',
			horas_totales: '0h',
		},
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
	}

	public async exit() {
		const el = document.getElementById('body-id').remove();
		this.$emit('settings', true);
	}

	public seleccionarTurno() {
		this.selectTurn = !this.selectTurn;
	}
}
</script>

<style lang="scss" scoped>
.tab-general {
	margin: 0;
	padding: 0;
	background-color: #8969eb;
}

.app {
	.container-history-employee {
		padding: 3% 5% 3% 5%;
		border-radius: 10%;
	}
	.text-tab {
		color: #ffffff;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
	}
	.card-content {
		/* margin-left: 0;
        margin-right: 0; */
		margin: 0;
		padding-right: 0;
		padding-left: 0;
		padding-top: 14px;
	}
	.card-header {
		background-color: transparent;
		display: block;
	}
	.option-expiran {
		background: #e5e5e5;
		border-radius: 4px;
	}
	.option-expiran-close {
		position: relative;
		left: 0;
	}
	.option-expiran-dia {
		background: #e5e5e5;
		border-radius: 4px;
	}
	#id {
		margin: 0;
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 18px;
		color: #7d9cff;
		background-color: transparent;
		border-color: transparent;
	}
	.mensaje {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 18px;
		color: #ffffff;
	}
	.notices .snackbar .action.is-dark .button {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 18px;
		color: #7d9cff;
	}
	.select:not(.is-multiple):not(.is-loading)::after {
		border-color: #7a7979;
		right: 1.125em;
		z-index: 4;
	}
	.btn-container {
		height: 24%;
		margin: 0;
		padding-left: 0;
		padding-right: 0;
	}

	.btn-guardar {
		background: #335eea;
		border-radius: 4px;
		height: 100%;
		color: #ffffff;
	}

	.body {
		margin-top: 4rem;
		height: calc(120vh - 4rem);
	}

	.box-height {
		width: calc(100vw - 4rem);
		height: 97%;
		margin-top: 2%;
		border-radius: 8px;
		//box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;
	}

	.box-sombra {
		position: absolute;
		width: 82%;
		height: 100px;
		left: 9%;
		right: auto;
		top: 68px;
		background: #7959d9;
		transform: matrix(1, 0, 0, -1, 0, 0);
		//border-top: 8px solid;
		border-radius: 22px;
	}

	.input,
	.taginput .taginput-container.is-focusable,
	.textarea,
	.select select {
		background-color: transparent;
		border-color: transparent;
		border-radius: 0px;
		color: #7a7979;
	}

	.border-form {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		margin-top: 5%;
		margin-bottom: 2%;
	}

	.label-left {
		margin-right: 80%;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5);
		text-align: left;
	}

	.contenido {
		border-bottom: 1px solid rgba(122, 121, 121, 0.5);
		margin-top: 30px;
		margin-bottom: 30px;
	}

	.input,
	.taginput .taginput-container.is-focusable,
	.textarea {
		box-shadow: transparent;
		max-width: 100%;
		width: 100%;
	}

	.container-text {
		background: #ffffff;

		margin-bottom: 10%;
		text-align: left;
		//padding: 7%;
		padding-top: 7%;
		//width: 30%;
	}

	.titulo {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		margin-left: 10%;
		margin-right: 10%;
		color: #7a7979;
	}

	.subtitulo {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 21px;
		margin-left: 10%;
		margin-right: 40%;
		color: rgba(122, 121, 121, 0.5);
	}

	.label-left-descripcion {
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5);
		text-align: left;
	}

	.input-value {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 18px;
		/* identical to box height */

		color: #7a7979;
	}

	.label-form {
		padding-left: 3%;
		font-weight: 500;
		font-size: 18px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5) !important;
	}

	.text-info {
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		color: rgba(122, 121, 121, 0.5);
	}

	.close-btn {
		font-size: 46px;
		color: #ffffff;
		cursor: pointer;
		margin-left: 5%;
		margin-right: 5%;
	}

	.tarjeta {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		padding: 5%;
	}

	.tarjeta-select {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		width: 100%;
		padding-left: 6%;
		padding-top: 5%;
		padding-bottom: 5%;
	}

	.tarjeta-container {
		width: 65%;
		height: 100%;
		background: #ffffff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 50px;
		margin-right: 25%;
		margin-top: auto;
		margin-bottom: auto;
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		align-items: center;
	}

	.input,
	.taginput .taginput-container.is-focusable,
	.textarea {
		box-shadow: 0;
		max-width: 100%;
		width: 100%;
	}

	.tabs-header {
		background: #8969eb;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		box-shadow: #8969eb;
		color: #ffffff;
	}

	.title-publications {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		color: #ffffff;
		margin-left: auto;
		margin-right: auto;
		padding-top: 1%;
	}

	.title-type-publications {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
		color: #7a7979;
		margin-top: 5%;
	}

	.subtitle-type-publications {
		font-weight: normal;
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		color: rgba(122, 121, 121, 0.5);
		padding-left: 15%;
		padding-right: 15%;
	}

	.margin-box {
		margin-top: 5%;
		cursor: pointer;
	}

	.border-form {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		margin-top: 5%;
		margin-bottom: 2%;
	}

	.label-form {
		padding-left: 3%;
		font-weight: 500;
		font-size: 18px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5) !important;
	}

	.label-out-form {
		color: #7a7979;
		font-weight: normal;
		font-size: 12px;
		line-height: 18px;
		padding-left: 2%;
	}

	.btn-wellcome {
		background: #335eea;
		border-radius: 4px;
		color: #ffffff;
		font-size: 25px;
	}

	.no-border-form {
		border: 0px !important;
		box-shadow: none !important;
		font-size: 15px;
	}
	//Boton ... del tab
	.button-options {
		background-color: transparent;
		margin: auto;
		padding-top: 1%;
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

	.dropdown-box-general {
		width: 278.5px;
		left: -25% !important;
	}

	.dropdown-menu {
		left: 0;
		min-width: 12rem;
		padding-top: 4px;
		top: 100%;
		z-index: 20;
	}

	.box-item-dropdown {
		margin-top: auto;
		margin-bottom: auto;
	}

	.text-dropdown {
		font-size: 12px;
		line-height: 18px;
		text-align: left;
		color: #7a7979;
	}

	.icon-color {
		color: #8969eb;
		margin-left: 5%;
	}
	.box-select-turn {
		width: 100%;
	}
	.box-header-options {
		padding-left: 5%;
		padding-right: 5%;
	}
	.boton-select-turn {
		background: #ffffff;
		border: 1px solid #d1dcfe;
		box-sizing: border-box;
		border-radius: 17px;
		width: 360%;
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		color: rgba(122, 121, 121, 0.5);
	}
}
</style>
