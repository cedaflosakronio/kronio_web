<template>
	<div class="app">
		<div class="body">
			<div class="columns is-centered">
				<div class="column is-full">
					<div class="columns box-general">
						<div class="column is-half box-general">
							<div class="columns box-inputs">
								<div class="column is-full">
									<div class="column">
										<p class="box-title">Horario Fijo</p>
									</div>
									<div class="column">
										<input class="input" type="text" placeholder="Código" />
									</div>
									<div class="column">
										<input class="input" type="text" placeholder="Descripción" />
									</div>
									<div class="column">
										<p class="box-subtitle">Seleccione los días</p>
									</div>
									<div class="column">
										<div class="columns is-mobile box-dia">
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="dayClick('L')"
													v-bind:class="[lunes ? 'box-days-selected' : '']"
												>
													L
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="dayClick('MA')"
													v-bind:class="[martes ? 'box-days-selected' : '']"
												>
													M
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="dayClick('MI')"
													v-bind:class="[miercoles ? 'box-days-selected' : '']"
												>
													M
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="dayClick('J')"
													v-bind:class="[jueves ? 'box-days-selected' : '']"
												>
													J
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="dayClick('V')"
													v-bind:class="[viernes ? 'box-days-selected' : '']"
												>
													V
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="dayClick('S')"
													v-bind:class="[sabado ? 'box-days-selected' : '']"
												>
													S
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="dayClick('D')"
													v-bind:class="[domingo ? 'box-days-selected' : '']"
												>
													D
												</p>
											</div>
										</div>
									</div>
									<div class="column">
										<div class="columns">
											<div class="column">
												<p class="input-label-text">Inicio</p>
												<input class="input input-center" type="time" placeholder />
											</div>
											<div class="column">
												<p class="input-label-text">Fin</p>
												<input class="input input-center" type="time" placeholder />
											</div>
										</div>
									</div>
									<div class="column">
										<p class="input-label-text">Tiempo de break</p>
									</div>
									<div class="column">
										<input class="input input-center" type="time" placeholder />
									</div>
									<div class="column">
										<p class="input-label-text">Tiempo de tolerancia</p>
									</div>
									<div class="column">
										<input class="input input-center" type="time" placeholder />
									</div>
									<div class="column">
										<button class="button btn-wellcome is-fullwidth">Crear</button>
									</div>
								</div>
							</div>
						</div>
						<div class="column is-half box-general">
							<div class="columns box-inputs is-mobile">
								<div class="column is-full">
									<div class="column">
										<p class="box-title">Horario Flexible</p>
									</div>
									<div class="column">
										<input class="input" type="text" placeholder="Código" />
									</div>
									<div class="column">
										<input class="input" type="text" placeholder="Descripción" />
									</div>
									<div class="column">
										<p class="box-subtitle">Seleccione los días</p>
									</div>
									<div class="column">
										<div class="columns is-mobile box-dia">
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="sdayClick('L')"
													v-bind:class="[slunes ? 'box-days-selected' : '']"
												>
													L
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="sdayClick('MA')"
													v-bind:class="[smartes ? 'box-days-selected' : '']"
												>
													M
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="sdayClick('MI')"
													v-bind:class="[smiercoles ? 'box-days-selected' : '']"
												>
													M
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="sdayClick('J')"
													v-bind:class="[sjueves ? 'box-days-selected' : '']"
												>
													J
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="sdayClick('V')"
													v-bind:class="[sviernes ? 'box-days-selected' : '']"
												>
													V
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="sdayClick('S')"
													v-bind:class="[ssabado ? 'box-days-selected' : '']"
												>
													S
												</p>
											</div>
											<div class="column box-label-dia">
												<p
													class="box-days"
													@click="sdayClick('D')"
													v-bind:class="[sdomingo ? 'box-days-selected' : '']"
												>
													D
												</p>
											</div>
										</div>
									</div>
									<div class="column">
										<div class="columns">
											<div class="column">
												<p class="input-label-text">Inicio</p>
												<input class="input input-center" type="time" placeholder />
											</div>
											<div class="column">
												<p class="input-label-text">Fin</p>
												<input class="input input-center" type="time" placeholder />
											</div>
										</div>
									</div>
									<div class="column">
										<p class="input-label-text">Tiempo de break</p>
									</div>
									<div class="column">
										<input class="input input-center" type="time" placeholder />
									</div>
									<div class="column">
										<p class="input-label-text">Tiempo de tolerancia</p>
									</div>
									<div class="column">
										<input class="input input-center" type="time" placeholder />
									</div>
									<div class="column">
										<button class="button btn-wellcome is-fullwidth">Crear</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<MdNewPublication />
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
import MdNewPublication from '@/components/md-new-publication.vue';

@Component({
	components: { NavBar, LogoSVG, MdNewPublication },
})
export default class NewPublications extends PageBase {
	public lunes = false;
	public martes = false;
	public miercoles = false;
	public jueves = false;
	public viernes = false;
	public sabado = false;
	public domingo = false;
	public diasSemana = '--';

	public slunes = false;
	public smartes = false;
	public smiercoles = false;
	public sjueves = false;
	public sviernes = false;
	public ssabado = false;
	public sdomingo = false;

	private selectExpiran: boolean = false;
	private save: boolean = false;
	public showNewOptions: boolean = false;
	private menu_start: INavBarTitle[] = [];
	public data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	private dia = 1;
	private tipos = [
		{
			id: 0,
			value: 'Días laborables',
		},
		{
			id: 1,
			value: 'Días calendarios',
		},
	];
	private diasAcumulables = [
		{
			id: 0,
			value: 'Sí',
		},
		{
			id: 1,
			value: 'No',
		},
	];
	private expiracion = [
		{
			id: 0,
			value: 'Final de enero',
		},
		{
			id: 1,
			value: 'Final de febrero',
		},
		{
			id: 2,
			value: 'Final de marzo',
		},
		{
			id: 3,
			value: 'Final de abril',
		},
		{
			id: 4,
			value: 'Final de mayo',
		},
		{
			id: 5,
			value: 'Final de junio',
		},
		{
			id: 6,
			value: 'Final de julio',
		},
		{
			id: 7,
			value: 'Final de agosto',
		},
		{
			id: 8,
			value: 'Final de septiembre',
		},
		{
			id: 9,
			value: 'Final de octubre',
		},
		{
			id: 10,
			value: 'Final de noviembre',
		},
		{
			id: 11,
			value: 'Final de diciembre',
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
	private mostrarExpiracion: boolean = false;
	calcularDiasSeleccionados() {
		const suma =
			(this.lunes ? 1 : 0) +
			(this.martes ? 1 : 0) +
			(this.miercoles ? 1 : 0) +
			(this.jueves ? 1 : 0) +
			(this.viernes ? 1 : 0) +
			(this.sabado ? 1 : 0) +
			(this.domingo ? 1 : 0);
		this.diasSemana = suma == 0 ? '--' : suma.toString();
	}
	dayClick(dia: string) {
		switch (dia) {
			case 'L':
				this.lunes = !this.lunes;
				this.calcularDiasSeleccionados();
				break;
			case 'MA':
				this.martes = !this.martes;
				this.calcularDiasSeleccionados();
				break;
			case 'MI':
				this.miercoles = !this.miercoles;
				this.calcularDiasSeleccionados();
				break;
			case 'J':
				this.jueves = !this.jueves;
				this.calcularDiasSeleccionados();
				break;
			case 'V':
				this.viernes = !this.viernes;
				this.calcularDiasSeleccionados();
				break;
			case 'S':
				this.sabado = !this.sabado;
				this.calcularDiasSeleccionados();
				break;
			case 'D':
				this.domingo = !this.domingo;
				this.calcularDiasSeleccionados();
				break;
			default:
				break;
		}
	}
	sdayClick(dia: string) {
		switch (dia) {
			case 'L':
				this.slunes = !this.slunes;
				this.calcularDiasSeleccionados();
				break;
			case 'MA':
				this.smartes = !this.smartes;
				this.calcularDiasSeleccionados();
				break;
			case 'MI':
				this.smiercoles = !this.smiercoles;
				this.calcularDiasSeleccionados();
				break;
			case 'J':
				this.sjueves = !this.sjueves;
				this.calcularDiasSeleccionados();
				break;
			case 'V':
				this.sviernes = !this.sviernes;
				this.calcularDiasSeleccionados();
				break;
			case 'S':
				this.ssabado = !this.ssabado;
				this.calcularDiasSeleccionados();
				break;
			case 'D':
				this.sdomingo = !this.sdomingo;
				this.calcularDiasSeleccionados();
				break;
			default:
				break;
		}
	}
	diaAcumulableSeleccion() {
		this.mostrarExpiracion = this.diasAcumulables[this.dia].id == 0;
		this.save = this.diasAcumulables[this.dia].id == 0;
	}
	public showExpiran() {
		this.selectExpiran = !this.selectExpiran;
	}
	public async created() {
		await super.created();
	}

	public message(): string {
		// this.name will be typed
		return 'Hello, ' + this.$props;
	}

	alerta() {
		this.$buefy.snackbar.open({
			message:
				'<div class="columns"><div class="column is-three-quarters"><p class="mensaje">Datos guardados.</p></div><div class="column"><button :click="deshacer()" type="is-text" style="background-color: transparent; border: 0;color: #7D9CFF;font-family: Poppins;font-style: normal;font-weight: normal;font-size: 12px;line-height: 18px;">Deshacer</button></div></div>',
			type: 'is-white',
			position: 'is-bottom-left',
			actionText: 'X',
			queue: false,
			onAction: () => {
				//console.log('Accion cerrrar');
			},
			indefinite: true,
		});
	}

	public deshacer() {
		//console.log('Deshacer');
	}

	public async show() {
		if (this.showNewOptions) {
			this.showNewOptions = false;
		} else {
			this.showNewOptions = true;
		}
	}
}
</script>

<style lang="scss" scoped>
.app {
	.body {
		margin-top: 0;
		height: calc(120vh - 4rem);
	}

	.box-general {
		padding-right: 10%;
		padding-left: 10%;
		margin-top: 5%;
		@media screen and (max-width: 1440px) {
			padding-right: 5%;
			padding-left: 5%;
		}
	}

	.box-inputs {
		background: #ffffff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 5%;
	}

	.dia {
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		color: #7a7979;
	}

	.box-subtitle {
		font-size: 11px;
		line-height: 16px;
		text-align: left;
		color: #7a7979;
	}

	.input-label-text {
		font-size: 11px;
		line-height: 16px;
		text-align: center;
		color: #7a7979;
	}

	.btn-wellcome {
		background: #335eea;
		border-radius: 4px;
		color: #ffffff;
		font-size: 25px;
	}

	.box-title {
		font-weight: 500;
		font-size: 15px;
		line-height: 22px;
		text-align: center;
		color: #7a7979;
	}

	.input-center {
		text-align: center;
		font-size: 13px;
		line-height: 19px;
		color: rgba(122, 121, 121, 0.5);
	}

	.box-days {
		background: #ffffff;
		border-radius: 3px;
		font-size: 15px;
		text-align: center;
		color: rgba(122, 121, 121, 0.5);
		height: 115%;
		@media screen and (max-width: 768px) {
			height: 10%;
			width: 10%;
			padding-top: 18%;
		}
		@media screen and (max-width: 1024px) {
			height: 25px;
			width: 25px;
		}
	}
	.box-days-selected {
		background: #335eea;
		border-radius: 3px;
		font-size: 15px;
		text-align: center;
		color: #ffffff;
		height: 115%;
		@media screen and (max-width: 768px) {
			height: 10%;
			width: 10%;
			padding-top: 18%;
		}
		@media screen and (max-width: 1024px) {
			height: 25px;
			width: 25px;
		}
	}

	.box-dia {
		@media screen and (max-width: 768px) {
			display: flex;
		}
		@media screen and (max-width: 1024px) {
			display: flex;
		}
	}

	.box-label-dia {
		@media screen and (max-width: 1024px) {
			padding: 1%;
		}
	}
}
</style>
