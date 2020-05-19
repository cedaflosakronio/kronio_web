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
							<p class="title-publications is-fullwidth">Tipo de publicación</p>
						</header>
						<div class="card-content">
							<div class="content">
								<p class="text-info">¿Quieres hacer un comunicado, crear un evento de empresa?</p>
								<div v-if="!showNewOptions" class="columns is-centered">
									<div class="column is-3 margin-box">
										<div @click="show()" class="box">
											<article class="media">
												<div class="media-content">
													<div class="content">
														<div class="columns is-centered">
															<div class="column is-fullwidth has-text-centered">
																<img src="../../assets/documents.png" alt="" />
																<p class="title-type-publications">Comunicado</p>
																<p class="subtitle-type-publications">
																	Escribe un comunicado y envíalo por e-mail a los
																	empleados. Novedades en la empresa, acontecimientos
																	importantes.
																</p>
															</div>
														</div>
													</div>
												</div>
											</article>
										</div>
									</div>
									<div class="column is-3 margin-box">
										<div @click="show()" class="box">
											<article class="media">
												<div class="media-content">
													<div class="content">
														<div class="columns is-centered">
															<div class="column is-fullwidth has-text-centered">
																<img src="../../assets/documents.png" alt="" />
																<p class="title-type-publications">Evento</p>
																<p class="subtitle-type-publications">
																	Crea un nuevo evento de empresa y notifica a los
																	empleados. Añadiremos el evento al calendario de la
																	empresa.
																</p>
															</div>
														</div>
													</div>
												</div>
											</article>
										</div>
									</div>
								</div>
								<div v-if="showNewOptions" class="columns is-centered">
									<div class="column is-4 margin-box">
										<div @click="$modal.show('md-new-publication')" class="box">
											<article class="media">
												<div class="media-content">
													<div class="content">
														<div class="columns is-centered">
															<div class="column is-fullwidth has-text-centered">
																<img src="../../assets/documents.png" alt="" />
																<p class="title-type-publications">
																	Título del comunicado
																</p>
																<p class="subtitle-type-publications">
																	Escribe toda la información que quieras transmitir a
																	tus empleados. Cuando tengas todo listo, haz click
																	en continuar para configurar los últimos ajustes del
																	mismo.
																</p>
															</div>
														</div>
														<div class="columns is-centered">
															<div class="column is-10">
																<button class="button btn-wellcome is-fullwidth">
																	Continuar
																</button>
															</div>
														</div>
													</div>
												</div>
											</article>
										</div>
									</div>
									<div class="column is-4 margin-box">
										<div @click="$modal.show('md-new-publication')" class="box">
											<article class="media">
												<div class="media-content">
													<div class="content">
														<div class="columns is-centered">
															<div class="column is-fullwidth has-text-centered">
																<img src="../../assets/documents.png" alt="" />
																<p class="title-type-publications">Título del evento</p>
																<p class="subtitle-type-publications">
																	Escribe todos los detalles importantes del evento
																	para tus empleados.
																</p>
																<label class="label label-out-form has-text-left">
																	Fecha y hora del evento
																</label>
																<div class="columns is-centered">
																	<div class="column is-5 border-form">
																		<div class="field">
																			<label class="label label-form"
																				>Fecha del evento</label
																			>
																			<b-datepicker
																				class="no-border-form"
																				v-model="birthday"
																				placeholder="Fecha del evento"
																				icon="calendar-today"
																				editable
																			>
																			</b-datepicker>
																		</div>
																	</div>
																	<div class="column is-1"></div>
																	<div class="column is-5 border-form">
																		<div class="field">
																			<label class="label label-form"
																				>Hora de inicio</label
																			>
																			<b-datepicker
																				class="no-border-form"
																				v-model="birthday"
																				placeholder="Hora de inicio"
																				popover-direction="left"
																				icon="calendar-today"
																				editable
																			>
																			</b-datepicker>
																		</div>
																	</div>
																</div>
																<label class="label label-out-form has-text-left">
																	Ubicación
																</label>
																<div class="columns is-centered">
																	<div class="column is-11 border-form">
																		<div class="field">
																			<label
																				class="label label-form is-pulled-left"
																				>Ubicación del evento</label
																			>
																			<input
																				class="input no-border-form"
																				type="text"
																				placeholder="¿Dónde se celebrará el evento?"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="columns is-centered">
															<div class="column is-10">
																<button class="button btn-wellcome is-fullwidth">
																	Continuar
																</button>
															</div>
														</div>
													</div>
												</div>
											</article>
										</div>
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
	public showNewOptions: boolean = false;
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

	public async show() {
		if (this.showNewOptions) {
			this.showNewOptions = false;
		} else {
			this.showNewOptions = true;
		}
	}
}
</script>

<style lang="scss">
.app {
	.body {
		margin-top: 4rem;
		height: calc(120vh - 4rem);
	}

	.box-height {
		height: calc(95vh - 3rem);
		margin-top: 2%;
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
		color: #8969eb;
		cursor: pointer;
		margin-left: 5%;
	}

	.tabs-header {
		background: #f2f5ff;
	}

	.title-publications {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		color: #8969eb;
		margin-left: 35%;
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
}
</style>
