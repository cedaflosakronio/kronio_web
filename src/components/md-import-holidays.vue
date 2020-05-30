<template>
	<modal name="md-import-holiday" width="25%" height="auto" :scrollable="true" :adaptive="true" :min-width="350">
		<div class="example-modal-content">
			<img class="img-modal" src="../assets/modal_holidays.png" alt />
			<span @click="hide()" class="close-btn">
				<i class="fas fa-times"></i>
			</span>
			<p class="title-employee">Importar festivos</p>
			<p class="subtitle-employee">Importa tus festivos locales de nuestra base de datos</p>
			<div class="columns is-centered">
				<div class="column is-4 border-form">
					<div class="field">
						<b-field label="País">
							<b-select placeholder>
								<option v-for="option in paises" :value="option.value" :key="option.id">{{
									option.value
								}}</option>
							</b-select>
						</b-field>
					</div>
				</div>
				<div class="column is-1"></div>
				<div class="column is-4 border-form">
					<div class="field">
						<b-field label="Año">
							<b-select placeholder>
								<option v-for="option in anios" :value="option.value" :key="option.id">{{
									option.value
								}}</option>
							</b-select>
						</b-field>
					</div>
				</div>
			</div>
			<div :class="scrollable ? 'scroll' : ''">
				<div class="columns is-centered" v-for="option in imports" :key="option.id">
					<div class="column is-one-fifth checkbox">
						<b-checkbox v-model="option.select"></b-checkbox>
					</div>
					<div class="column">
						<p class="festivos-import">{{ option.value }}</p>
					</div>
				</div>
			</div>

			<div class="columns is-centered">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth" @click="importarDatos()">Importar</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MdHolidays extends Vue {
	public checkbox: false;
	private heightModalBase: number = 60;
	private scrollable: boolean = false;
	public heigth: number = this.heightModalBase;
	public anios = [
		{
			id: 0,
			value: 2012,
		},
		{
			id: 1,
			value: 2013,
		},
		{
			id: 2,
			value: 2020,
		},
	];

	public paises = [
		{
			id: 0,
			value: 'Ecuador',
		},
		{
			id: 1,
			value: 'Argentina',
		},
		{
			id: 2,
			value: 'Chile',
		},
	];

	public imports = [];

	public importarDatos() {
		this.imports = [
			{
				id: 0,
				value: 'Día de Año Nuevo—1 de ene. de 2020',
				select: false,
			},
			{
				id: 1,
				value: 'Día de Año Nuevo—1 de ene. de 2020',
				select: false,
			},
			{
				id: 3,
				value: 'Día de Año Nuevo—1 de ene. de 2020',
				select: false,
			},
			{
				id: 4,
				value: 'Día de Año Nuevo—1 de ene. de 2020',
				select: false,
			},
			{
				id: 5,
				value: 'Día de Año Nuevo—1 de ene. de 2020',
				select: false,
			},
		];
		this.heigth = 50;
		this.scrollable = true;
	}

	public hide() {
		this.$modal.hide('md-import-holiday');
	}
}
</script>

<style lang="scss" scoped>
.title-employee {
	font-weight: 500;
	font-size: 25px;
	line-height: 30px;
	text-align: center;
	color: #7a7979;
}

.checkbox {
	margin-left: 10%;
}

.festivos-import {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
	text-align: left;
	color: rgba(122, 121, 121, 0.5);
}

.control {
	box-sizing: border-box;
	clear: both;
	font-size: 1rem;
	position: relative;
	text-align: center;
}

.subtitle-employee {
	/* font-weight: normal;
	font-size: 20px;
	line-height: 22px;
	text-align: center;
	color: rgba(122, 121, 121, 0.5);
	margin: 5% 8% 5% 8%; */
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
	text-align: center;

	color: rgba(122, 121, 121, 0.5);
}

.img-modal {
	padding-top: 5%;
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

.no-border-form {
	border: 0px !important;
	box-shadow: none !important;
	font-size: 15px;
}

.btn-wellcome {
	background: #335eea;
	border-radius: 4px;
	color: #ffffff;
	font-size: 25px;
	margin-top: 5%;
	margin-bottom: 10%;
}

.btn-cancel {
	font-size: 25px;
	color: #335eea;
}

.close-btn {
	position: absolute;
	top: 0;
	right: 0;
	margin-top: 5%;
	margin-right: 10%;
	font-size: 30px;
	cursor: pointer;
}
.fa-times:before {
	content: '\f00d';
	color: #7a7979;
}
.label:not(:last-child) {
	margin-bottom: 0.5em;
	font-family: Poppins !important;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
	color: rgba(122, 121, 121, 0.5);
}
.scroll {
	overflow-y: scroll;
	overflow-x: hidden;
}
.altura-normal {
	height: 40%;
}
.altura-cambiada {
	height: 60%;
}
</style>
