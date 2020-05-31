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
								<div class="column" v-if="perfil" style="margin-top:auto; margin-bottom-auto;">
									<b-dropdown aria-role="list" class="button-options">
										<span class="button-options" slot="trigger">
											<i class="fas fa-ellipsis-h"></i>
										</span>

										<b-dropdown-item aria-role="listitem">
											<p class="item-title">Eliminar acceso</p>
											<p class="item-text">
												El empleado no tendrá acceso a Kronio hasta que lo invites de nuevo.
											</p>
										</b-dropdown-item>
										<b-dropdown-item aria-role="listitem">
											<p class="item-title">Nombrar administrador</p>
											<p class="item-text">
												Tendrá visibilidad en la cuenta de la empresa y podrá ver datos de otros
												empleados.
											</p>
										</b-dropdown-item>
										<b-dropdown-item aria-role="listitem">
											<p class="item-title">Finalizar Belen</p>
											<p class="item-text">
												Archiva este empleado cuando deje de trabajar en tu empresa.
											</p>
										</b-dropdown-item>
									</b-dropdown>
								</div>
								<div class="column" v-if="documentos" style="margin-top:auto; margin-bottom-auto;">
									<span class="button-options" slot="trigger" @click="uploadDocuments()">
										<b-icon icon="plus"></b-icon>
									</span>
								</div>
								<div class="column" v-if="ausencia" style="margin-top:auto; margin-bottom-auto;">
									<span class="button-options" slot="trigger" @click="uploadAusencias()">
										<b-icon icon="plus"></b-icon>
									</span>
								</div>
								<div class="column" v-if="tareas" style="margin-top:auto; margin-bottom-auto;">
									<b-dropdown aria-role="list" class="button-options">
										<span class="button-options" slot="trigger">
											<i class="fas fa-ellipsis-h"></i>
										</span>

										<b-dropdown-item aria-role="listitem">
											<p class="item-title">Importa una plantilla de tareas</p>
											<p class="item-text">Importa plantilla de tareas para este empleado</p>
										</b-dropdown-item>
										<b-dropdown-item aria-role="listitem" @click="createTask()">
											<p class="item-title">Crea una tarea</p>
											<p class="item-text">Crea una tarea para este empleado</p>
										</b-dropdown-item>
									</b-dropdown>
								</div>
							</div>
						</header>
						<div class="card-content">
							<div class="tabs is-fullwidth">
								<ul>
									<li @click="showTab(1)" v-bind:class="[perfil ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Perfil</span>
										</a>
									</li>
									<li @click="showTab(2)" v-bind:class="[documentos ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Documentos</span>
										</a>
									</li>
									<li @click="showTab(3)" v-bind:class="[ausencia ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Ausencia</span>
										</a>
									</li>
									<li @click="showTab(4)" v-bind:class="[tareas ? 'is-active' : '']">
										<a>
											<span class="tabs-label">Tareas</span>
										</a>
									</li>
								</ul>
							</div>
							<div class="content">
								<div v-if="perfil">
									<SettingPerfil />
								</div>
								<div v-if="documentos">
									<SettingDocumentos />
								</div>
								<div v-if="ausencia">
									<SettingAusencia />
								</div>
								<div v-if="tareas">
									<SettingTareas />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<MdNewPublication />
		<MDDocumentUpload />
		<Ausencia />
		<CrearTarea />
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
import MdNewPublication from '@/components/md-new-publication.vue';
import SettingAusencia from '@/components/team/team-settings-ausencia.vue';
import SettingPerfil from '@/components/team/team-settings-perfil.vue';
import SettingDocumentos from '@/components/team/team-settings-documentos.vue';
import SettingTareas from '@/components/team/team-settings-tareas.vue';
import MDDocumentUpload from '@/components/team/md-team-documents-upload.vue';
import Ausencia from '@/components/team/md-team-documents-ausencia.vue';
import CrearTarea from '@/components/team/md-crear-tarea.vue';

@Component({
	components: {
		NavBar,
		LogoSVG,
		MdNewPublication,
		SettingAusencia,
		SettingPerfil,
		SettingDocumentos,
		SettingTareas,
		MDDocumentUpload,
		Ausencia,
		CrearTarea,
	},
})
export default class NewPublications extends PageBase {
	public perfil: boolean = true;
	public documentos: boolean = false;
	public ausencia: boolean = false;
	public tareas: boolean = false;

	private selectExpiran: boolean = false;
	private save: boolean = false;
	public showNewOptions: boolean = false;
	private menu_start: INavBarTitle[] = [];
	public data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	private dia = 1;

	//Manejo dropdown
	private dropSelected: boolean = false;
	public dropSelect() {
		this.dropSelected = true;
	}

	public itemSelect() {
		this.dropSelected = false;
	}

	public usuarios = [
		{
			empleado: 'Belen Zavala Luque',
			id: '0922609822',
			cv: true,
			contrato: true,
			finiquito: false,
		},
		{
			empleado: 'Belen Zavala Luque',
			id: '0922609823',
			cv: false,
			contrato: true,
			finiquito: false,
		},
		{
			empleado: 'Belen Zavala Luque',
			id: '0922609824',
			cv: true,
			contrato: true,
			finiquito: false,
		},
	];
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
	public async showTab(item: number) {
		switch (item) {
			case 1:
				this.perfil = true;
				this.documentos = false;
				this.ausencia = false;
				this.tareas = false;
				break;
			case 2:
				this.perfil = false;
				this.documentos = true;
				this.ausencia = false;
				this.tareas = false;
				break;
			case 3:
				this.perfil = false;
				this.documentos = false;
				this.ausencia = true;
				this.tareas = false;
				break;
			case 4:
				this.perfil = false;
				this.documentos = false;
				this.ausencia = false;
				this.tareas = true;
				break;

			default:
				this.perfil = true;
				this.documentos = false;
				this.ausencia = false;
				this.tareas = false;
				break;
		}
	}
	public expiran() {
		this.selectExpiran = !this.selectExpiran;
		/* const el = document.getElementById('app');
		console.log('lol', el.remove); */
	}
	public expiranA() {
		//this.selectExpiran = false;
		//console.log('chambio', this.selectExpiran);
	}
	public async created() {
		await super.created();
	}

	public message(): string {
		// this.name will be typed
		return 'Hello, ' + this.$props;
	}

	public async exit() {
		document.getElementById('body-id').remove();
		this.$emit('settings', true);
		//this.$router.push('/app');
	}

	public options() {
		//console.log('object');
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

	public uploadDocuments() {
		this.$modal.show('md-team-documents-upload');
	}
	public uploadAusencias() {
		this.$modal.show('md-team-documents-ausencia');
	}
	public createTask() {
		this.$modal.show('md-crear-tarea');
	}
}
</script>

<style lang="scss" scoped>
.tab-general {
	margin: 0;
	padding: 0;
	background-color: #8969eb;
}
.app .tabs {
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	padding-left: 30%;
	padding-right: 30%;
	background-color: #8969eb;
	color: #ffffff;
}
.app {
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
}
</style>
