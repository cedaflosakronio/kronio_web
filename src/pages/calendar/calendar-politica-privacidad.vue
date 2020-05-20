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
					<div class="box-sombra"></div>
					<div class="card box-height">
						<header class="card-header tabs-header">
							<span @click="exit()" class="close-btn"><i class="fas fa-arrow-circle-left"></i></span>
							<p class="title-publications is-fullwidth">Políticas de vaciones de Nombredelaempresa</p>
						</header>
						<div class="card-content">
							<div class="content">
								<div class="columns">
									<div class="column is-half container-text">
										<p class="titulo">
											Información básica
										</p>
										<p class="subtitulo">
											Nombre y descripción de esta política de vacaciones.
										</p>
									</div>
									<div class="column is-half">
										<div class="tarjeta-container">
											<div class="field tarjeta">
												<p class="label-left-descripcion">Nombre</p>
												<div class="control">
													<input
														class="input input-value"
														type="text"
														value="shalalala"
														placeholder="Ingrese nombre"
													/>
												</div>
											</div>
											<div class="field tarjeta">
												<p class="label-left-descripcion">Descripción (opcional)</p>
												<div class="control">
													<input
														class="input input-value"
														type="text"
														value="shalalala"
														placeholder="Ingrese nombre"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="contenido"></div>
							<div class="content">
								<div class="columns">
									<div class="column is-half">
										<div class="container-text">
											<p class="titulo">
												Días de vacaciones
											</p>
											<p class="subtitulo">
												Gestiona desde aquí el total de días de vacaciones que tus empleados
												tendrán disponibles y la cantidad de días que pasarán de un año a otro.
											</p>
										</div>
									</div>
									<div class="column is-half">
										<div class="tarjeta-container">
											<div class="columns">
												<div class="column">
													<div class="field tarjeta">
														<p class="label-left-descripcion">Días de vacaciones</p>
														<div class="control">
															<input
																class="input input-value"
																type="text"
																value="15 días"
																placeholder="Ingrese nombre"
															/>
														</div>
													</div>
												</div>
												<div class="column">
													<div class="field tarjeta">
														<p class="label-left-descripcion">Tipo</p>
														<div class="control">
															<!-- <input class="input input-value" type="text" value="Días laborables" placeholder="Ingrese nombre"> -->
															<b-select class="form-fields form-select is-large">
																<option
																	v-for="option in data"
																	:value="option"
																	:key="option"
																>
																	{{ option }}
																</option>
															</b-select>
														</div>
													</div>
												</div>
											</div>
											<div class="field tarjeta">
												<p class="label-left-descripcion">Días acumulables</p>
												<div class="control">
													<!-- <input class="input input-value" type="text" value="shalalala" placeholder="Ingrese nombre"> -->
													<b-select class="form-fields form-select is-large">
														<option v-for="option in data" :value="option" :key="option">
															{{ option }}
														</option>
													</b-select>
												</div>
											</div>
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
	public data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
		background: #eff2fc;
		transform: matrix(1, 0, 0, -1, 0, 0);
		border-top: 8px solid;
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
		margin-right: 30%;
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
		color: #8969eb;
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

	.tarjeta-container {
		width: 90%;
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
		background: #f2f5ff;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		box-shadow: #335eea;
	}

	.title-publications {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		color: #8969eb;
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
}
</style>
