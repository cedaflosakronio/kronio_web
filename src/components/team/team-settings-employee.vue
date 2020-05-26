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
									<p class="title-publications is-fullwidth">Belen Zavala</p>
								</div>
								<div class="column">
									<span class="close-btn" @click="options()">
										<i class="fas fa-ellipsis-h"></i>
									</span>
								</div>
							</div>
						</header>
						<div class="card-content">
							<b-tabs position="is-centered" class="block tab-general">
								<b-tab-item>
									<template slot="header">
										<p class="text-tab">Perfil</p>
									</template>
								</b-tab-item>
								<b-tab-item>
									<template slot="header">
										<p class="text-tab">Documentos</p>
									</template>
								</b-tab-item>
								<b-tab-item>
									<template slot="header">
										<p class="text-tab">Ausencias</p>
									</template>
								</b-tab-item>
								<b-tab-item>
									<template slot="header">
										<p class="text-tab">Tareas</p>
									</template>
								</b-tab-item>
							</b-tabs>
							<!-- <div class="content">
                <div class="columns">
                  <div class="column is-half container-text">
                    <p class="titulo">Información básica</p>
                    <p class="subtitulo">Nombre y descripción de esta política de vacaciones.</p>
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
                      <div class="column is-full btn-container" v-if="save">
                        <b-button expanded class="btn-guardar" @click="alerta">Guardar</b-button>
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
                      <p class="titulo">Días de vacaciones</p>
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
                          <div class="tarjeta-select">
                            <p class="label-left-descripcion">Tipo</p>
                            <b-field>
                              <b-select placeholder="seleccione" size="is-small" expanded>
                                <option
                                  v-for="dato in tipos"
                                  :value="dato.value"
                                  :key="dato.id"
                                  class="option-expiran"
                                >{{ dato.value }}</option>
                              </b-select>
                            </b-field>
                          </div>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column">
                          <div class="tarjeta-select">
                            <p class="label-left-descripcion">Días acumulables</p>
                            <b-field>
                              <b-select
                                placeholder="seleccione"
                                size="is-small"
                                expanded
                                v-model="dia"
                                @change.native="diaAcumulableSeleccion()"
                              >
                                <option
                                  v-for="dato in diasAcumulables"
                                  :value="dato.id"
                                  :key="dato.id"
                                  class="option-expiran-dia"
                                >{{ dato.value }}</option>
                              </b-select>
                            </b-field>
                          </div>
                        </div>
                        <div class="column" v-if="mostrarExpiracion">
                          <div class="tarjeta-select">
                            <p class="label-left-descripcion">Expiran a</p>
                            <b-field>
                              <b-select
                                placeholder="seleccione"
                                size="is-small"
                                @click.native="expiran"
                                id="expiracion"
                                @blur="expiranA"
                                expanded
                              >
                                <option
                                  v-for="dato in expiracion"
                                  :value="dato.value"
                                  :key="dato.id"
                                  class="option-expiran"
                                >{{ dato.value }}</option>
                              </b-select>
                            </b-field>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>-->
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
		const el = document.getElementById('body-id').remove();
		this.$emit('settings', true);
		//this.$router.push('/app');
	}

	public options() {
		console.log('object');
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
.tab-general {
	margin: 0;
	padding: 0;
	background-color: #8969eb;
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
}
</style>
