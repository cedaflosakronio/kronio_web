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
							<span @click="exit()" class="close-btn">
								<i class="fas fa-arrow-circle-left"></i>
							</span>
							<p class="title-publications is-fullwidth">Políticas de vaciones de Nombredelaempresa</p>
						</header>
						<div class="card-content">
							<div class="content">
								<div class="columns">
									<div class="column is-half container-text">
										<p class="titulo">Empleados</p>
										<p class="subtitulo">
											Estos son los empleados que trabajan en xxxxxxxxxxxxxx (ec).
										</p>
									</div>
									<div class="column is-half">
										<div class="tarjeta-container">
											<div class="field tarjeta">
												<p class="label-left-titulo">Configuración</p>
												<p class="label-left-descripcion">
													Configura los festivos de esta oficina. Los empleados asignados a la
													oficina los verán en sus calendarios.
												</p>
											</div>
											<div class="columns">
												<div class="column field has-text-centered">
													<b-button
														type="is-primary"
														expanded
														@click="$modal.show('md-import-holiday')"
														class="btn-importar boton"
														>Importar festivos</b-button
													>
												</div>
												<div class="column field has-text-centered">
													<b-button
														type="is-primary"
														expanded
														@click="$modal.show('md-add-holiday')"
														class="btn-anadir boton"
														>Añadir festivos</b-button
													>
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
		<MdImportHoliday />
		<MdAddHoliday />
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
import MdImportHoliday from '@/components/md-import-holidays.vue';
import MdAddHoliday from '@/components/md-add-holiday.vue';

@Component({
	components: { NavBar, LogoSVG, MdImportHoliday, MdAddHoliday },
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

	.boton {
		font-family: Poppins !important;
		font-style: normal !important;
	}

	.btn-importar {
		padding-top: 5% !important;
		padding-bottom: 10% !important;
		width: 80%;
		display: block;
		margin-top: 5%;
		margin-left: 10% !important;
		// margin-right: 5% !important;
		background: #335eea;
		border-radius: 4px;
	}

	.btn-anadir {
		padding-top: 5% !important;
		padding-bottom: 10% !important;
		width: 80%;
		display: block;
		margin-top: 5%;
		margin-left: 10% !important;
		background: #ffffff;
		border: 1px solid #335eea;
		box-sizing: border-box;
		border-radius: 4px;
		color: #335eea;
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
		margin-top: 3%;
		margin-bottom: 10%;
		text-align: left;
		padding-top: 7%;
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
		text-align: left;
	}

	.label-left-titulo {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		color: #7a7979;
		text-align: left;
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
		color: #8969eb;
		cursor: pointer;
		margin-left: 5%;
		margin-right: 5%;
	}

	.tarjeta {
		/* border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		padding: 5%; */
	}

	.tarjeta-container {
		width: 75%;
		background: #ffffff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 50px;
		margin-right: 25%;
		margin-top: 10%;
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
