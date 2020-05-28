<template>
	<div class="app">
		<div class="body">
			<div class="columns is-centered">
				<div class="column is-full">
					<div class="card box-height">
						<div class="card-content">
							<div class="columns box-header">
								<div class="column"></div>
								<div class="column is-one-fifth">
									<div class="columns">
										<div class="column">
											<i class="fas fa-chevron-left"></i>
										</div>
										<div class="column">
											<p class="header-year">2020</p>
										</div>
										<div class="column">
											<i class="fas fa-chevron-right"></i>
										</div>
									</div>
								</div>
								<div class="column"></div>
							</div>
							<div class="columns">
								<div class="column box-left">
									<svg
										width="60"
										height="60"
										viewBox="0 0 60 60"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M58.9998 49.0005H20.4139L6.70698 35.2936C6.32323 34.8963 5.69023 34.8853 5.29298 35.2691C4.89573 35.6528 4.88473 36.2858 5.26848 36.6831C5.27648 36.6914 5.28473 36.6996 5.29298 36.7076L10.109 41.5235L4.49999 49.0005H0.999997C0.447749 49.0005 0 49.4483 0 50.0005C0 50.5528 0.447749 51.0005 0.999997 51.0005H6.13198L1.168 58.4455C0.861497 58.905 0.985497 59.526 1.445 59.8325C1.90449 60.139 2.52549 60.015 2.83199 59.5555L8.53497 51.0005H20.9999V59.0005C20.9999 59.5527 21.4477 60.0005 21.9999 60.0005C22.5522 60.0005 22.9999 59.5527 22.9999 59.0005V51.0005H50.4648L56.1648 59.5555C56.4713 60.015 57.0923 60.139 57.5518 59.8325C58.0113 59.526 58.1353 58.905 57.8288 58.4455L52.8678 51.0005H58.9998C59.5521 51.0005 59.9998 50.5528 59.9998 50.0005C59.9998 49.4483 59.5521 49.0005 58.9998 49.0005ZM6.99998 49.0005L11.537 42.9515L17.5859 49.0005H6.99998Z"
											fill="#7A7979"
										/>
										<path
											d="M56.001 41.9999H24.4151L23.0011 40.5859V20.3999C23.5972 20.7859 24.291 20.9941 25.0011 20.9999C25.802 20.9954 26.5806 20.7358 27.2241 20.2589C27.689 19.9269 28.3132 19.9269 28.7781 20.2589C30.0948 21.2486 31.9073 21.2486 33.2241 20.2589C33.689 19.9269 34.3132 19.9269 34.7781 20.2589C36.1881 21.3143 38.1452 21.2349 39.4651 20.0689C39.8081 19.7826 40.0008 19.3547 39.9881 18.908C39.6341 10.067 31.7721 3 22.0011 3C11.2542 3 4.32417 10.066 4.01217 18.9059C4.00105 19.3536 4.19417 19.7819 4.53717 20.0699C5.2218 20.6632 6.09542 20.9928 7.00116 20.9999C7.80204 20.9954 8.58066 20.7358 9.22416 20.2589C9.68903 19.9269 10.3133 19.9269 10.7782 20.2589C12.0949 21.2486 13.9074 21.2486 15.2241 20.2589C15.689 19.9269 16.3133 19.9269 16.7781 20.2589C18.0139 21.1954 19.7056 21.2519 21.0011 20.3999V38.5899L13.7081 31.2969C13.3176 30.9065 12.6846 30.9065 12.2941 31.2969L9.29416 34.2969C8.90378 34.6874 8.90378 35.3204 9.29416 35.7109L21.2941 47.7109C21.4822 47.897 21.7365 48.0009 22.0011 47.9999H56.001C56.5533 47.9999 57.001 47.5521 57.001 46.9999V42.9999C57.001 42.4476 56.5533 41.9999 56.001 41.9999ZM20.0471 18.642C19.7454 18.8696 19.379 18.9949 19.0011 18.9999C18.6233 18.9946 18.257 18.8692 17.9551 18.642C16.7885 17.8001 15.2138 17.8001 14.0471 18.642C13.4318 19.1201 12.5705 19.1201 11.9551 18.642C10.7885 17.8001 9.21378 17.8001 8.04716 18.642C7.74541 18.8696 7.37904 18.9949 7.00116 18.9999C6.65179 18.9961 6.31154 18.8877 6.02417 18.6889C6.45617 10.614 12.9841 4.99999 22.0011 4.99999C30.5431 4.99999 37.5011 10.99 37.9751 18.6919C37.6881 18.8889 37.3491 18.9961 37.0011 18.9999C36.6232 18.9946 36.2569 18.8692 35.9551 18.642C34.7885 17.8 33.2137 17.8 32.0471 18.642C31.4317 19.1201 30.5705 19.1201 29.9551 18.642C28.7885 17.8 27.2137 17.8 26.0471 18.642C25.4317 19.1201 24.5705 19.1201 23.9551 18.642C22.7885 17.8 21.2137 17.8 20.0471 18.642ZM55.001 45.9999H22.4151L11.4152 34.9999L13.0011 33.4139L21.2931 41.7059L23.2931 43.7059C23.4807 43.894 23.7355 43.9999 24.0011 43.9999H55.001V45.9999Z"
											fill="#7A7979"
										/>
										<path
											d="M51.0013 4.44531C48.4862 4.44806 46.4481 6.48618 46.4453 9.0013C46.4453 11.5175 48.4851 13.5573 51.0013 13.5573C53.5175 13.5573 55.5573 11.5175 55.5573 9.0013C55.5573 6.48506 53.5175 4.44531 51.0013 4.44531ZM51.0013 11.5573C49.5897 11.5573 48.4453 10.4129 48.4453 9.0013C48.4469 7.5903 49.5903 6.44693 51.0013 6.44531C52.4129 6.44531 53.5573 7.58968 53.5573 9.0013C53.5573 10.4129 52.4129 11.5573 51.0013 11.5573Z"
											fill="#7A7979"
										/>
										<path
											d="M44.777 8H43C42.4477 8 42 8.44775 42 9C42 9.55225 42.4477 9.99999 43 9.99999H44.777C45.3292 9.99999 45.777 9.55225 45.777 9C45.777 8.44775 45.3292 8 44.777 8Z"
											fill="#7A7979"
										/>
										<path
											d="M47.3081 3.89413L46.0502 2.63614C45.6529 2.25251 45.0198 2.26351 44.6362 2.66076C44.2619 3.04826 44.2619 3.66263 44.6362 4.05013L45.8942 5.30813C46.2914 5.69188 46.9244 5.68088 47.3081 5.28363C47.6824 4.896 47.6824 4.28163 47.3081 3.89413Z"
											fill="#7A7979"
										/>
										<path
											d="M51 0C50.4477 0 50 0.447749 50 0.999997V2.77699C50 3.32924 50.4477 3.77699 51 3.77699C51.5522 3.77699 52 3.32924 52 2.77699V0.999997C52 0.447749 51.5522 0 51 0Z"
											fill="#7A7979"
										/>
										<path
											d="M57.364 2.63653C56.9735 2.24616 56.3405 2.24616 55.95 2.63653L54.692 3.89453C54.2947 4.27828 54.2837 4.91127 54.6675 5.30852C55.0512 5.70577 55.6842 5.71677 56.0815 5.33302C56.0899 5.32502 56.098 5.31677 56.106 5.30852L57.364 4.05053C57.7544 3.66003 57.7544 3.02703 57.364 2.63653Z"
											fill="#7A7979"
										/>
										<path
											d="M58.9996 8H57.2227C56.6704 8 56.2227 8.44775 56.2227 9C56.2227 9.55225 56.6704 9.99999 57.2227 9.99999H58.9996C59.5519 9.99999 59.9996 9.55225 59.9996 9C59.9996 8.44775 59.5519 8 58.9996 8Z"
											fill="#7A7979"
										/>
										<path
											d="M57.3632 13.9492L56.1052 12.6912C55.7147 12.3008 55.0817 12.3008 54.6912 12.6912C54.3008 13.0817 54.3008 13.7147 54.6912 14.1052L55.9492 15.3632C56.3465 15.747 56.9795 15.736 57.3632 15.3387C57.7375 14.9511 57.7375 14.3367 57.3632 13.9492Z"
											fill="#7A7979"
										/>
										<path
											d="M51 14.2227C50.4477 14.2227 50 14.6704 50 15.2227V16.9996C50 17.5519 50.4477 17.9996 51 17.9996C51.5522 17.9996 52 17.5519 52 16.9996V15.2227C52 14.6704 51.5522 14.2227 51 14.2227Z"
											fill="#7A7979"
										/>
										<path
											d="M47.2848 12.6908C46.8973 12.3166 46.2829 12.3166 45.8953 12.6908L44.6373 13.9488C44.2401 14.3326 44.2291 14.9656 44.6128 15.3628C44.9966 15.7601 45.6296 15.7711 46.0268 15.3873C46.0352 15.3793 46.0433 15.3711 46.0513 15.3628L47.3093 14.1048C47.6929 13.7076 47.682 13.0745 47.2848 12.6908Z"
											fill="#7A7979"
										/>
									</svg>
									<p class="text-title">Diana no ha solicitado ninguna ausencia</p>
									<p class="text-subtitle">
										Para crear una ausencia para Diana, haz clic en el botón situado en la parte
										superior derecha de esta página.
									</p>
								</div>
								<div class="column box-right">
									<div class="columns box-days">
										<div class="column">
											<p class="text-days-number">15</p>
											<p class="text-days">Días totales</p>
										</div>
										<div class="column">
											<p class="text-days-number">15</p>
											<p class="text-days">Disponibles</p>
										</div>
										<div class="column">
											<p class="text-days-number">0</p>
											<p class="text-days">Días usados</p>
										</div>
									</div>
									<div class="columns">
										<div class="column">
											<div class="columns">
												<div class="column is-one-fifth"></div>
												<div class="column is-one-fifth">
													<svg
														width="14"
														height="14"
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<circle cx="7" cy="7" r="6.5" stroke="#8969EB" />
													</svg>
												</div>
												<div class="column">
													<p class="text-info">Hoy</p>
												</div>
											</div>
										</div>
										<div class="column">
											<div class="columns">
												<div class="column is-one-fifth"></div>
												<div class="column is-one-fifth">
													<i class="fas fa-circle circle-vacaciones"></i>
												</div>
												<div class="column">
													<p class="text-info">Vaciones</p>
												</div>
											</div>
										</div>
										<div class="column">
											<div class="columns">
												<div class="column is-one-fifth"></div>
												<div class="column is-one-fifth">
													<i class="fas fa-circle circle-enf"></i>
												</div>
												<div class="column">
													<p class="text-info">Enfermedad</p>
												</div>
											</div>
										</div>
									</div>
									<div class="columns">
										<div class="column">
											<div class="columns">
												<div class="column is-one-fifth"></div>
												<div class="column is-one-fifth">
													<i class="fas fa-circle circle-enf-familiar"></i>
												</div>
												<div class="column">
													<p class="text-info">Enfermedad de un familiar</p>
												</div>
											</div>
										</div>
										<div class="column">
											<div class="columns">
												<div class="column is-one-fifth"></div>
												<div class="column is-one-fifth">
													<i class="fas fa-circle circle-maternidad"></i>
												</div>
												<div class="column">
													<p class="text-info">Maternidad / Paternidad</p>
												</div>
											</div>
										</div>
										<div class="column">
											<div class="columns">
												<div class="column is-one-fifth"></div>
												<div class="column is-one-fifth">
													<i class="fas fa-circle circle-otro"></i>
												</div>
												<div class="column">
													<p class="text-info">Otro</p>
												</div>
											</div>
										</div>
									</div>
									<br />
									<hr />
									<br />
									<vc-calendar :rows="4" :columns="3" />
									<br />
									<hr />
									<br />
									<p class="text-title t-end">Ajustes de vacaciones</p>
									<p class="text-subtitle t-end">
										Añade o resta días del total disponible del empleado.
									</p>
									<div class="column is-half box-button">
										<button class="button btn-ajustes is-fullwidth">Añade ajustes</button>
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
	.card-content {
		background-color: transparent;
		padding: 1.5rem;
		padding-top: 0;
	}

	.box-height {
		width: calc(100vw - 4rem);
		height: auto;
		border-radius: 8px;
		//box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;
	}

	.body {
		margin-top: 0;
		height: calc(120vh - 4rem);
	}

	.box-header {
		background-color: #8969eb;
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		text-align: center;

		color: #ffffff;
	}

	.header-year {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		text-align: center;

		color: #ffffff;
	}

	.box-left {
		padding-top: 10%;
		margin-left: auto;
		margin-right: auto;
		padding-left: 15%;
		padding-right: 15%;
	}

	.text-title {
		font-size: 14px;
		line-height: 21px;
		text-align: center;

		color: #7a7979;
	}

	.text-subtitle {
		font-size: 12px;
		line-height: 18px;
		text-align: center;

		color: rgba(122, 121, 121, 0.5);
	}

	.box-right {
		padding-top: 5%;
	}

	.box-days {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		margin-left: 25%;
		margin-right: 25%;
		margin-bottom: 5%;
	}

	.text-days-number {
		font-size: 24px;
		line-height: 36px;
		/* identical to box height */

		text-align: center;

		color: #7a7979;
	}

	.text-days {
		font-size: 16px;
		line-height: 24px;
		text-align: center;

		color: #7a7979;
	}

	.text-info {
		font-size: 12px;
		line-height: 18px;
		text-align: left;
		color: #7a7979;
	}

	.circle-enf-familiar {
		color: #1dd0c5;
	}

	.circle-circle-enf {
		color: #4bbc2f;
	}

	.circle-enf {
		color: #4bbc2f;
	}

	.circle-vacaciones {
		color: #ff843f;
	}

	.circle-maternidad {
		color: #40ccf9;
	}

	.circle-otro {
		color: #a46cec;
	}

	.t-end {
		text-align: left;
	}

	.box-button {
		margin-left: auto;
		margin-right: auto;
	}

	.btn-ajustes {
		background: #ffffff;
		border: 1px solid #335eea;
		box-sizing: border-box;
		border-radius: 4px;
	}
}
</style>
