<template>
	<modal name="md-ausencia-vacaciones" width="25%" height="90%">
		<div class="example-modal-content">
			<img class="img-modal" src="../assets/modal_holidays.png" alt />
			<span @click="hide()" class="close-btn">
				<i class="fas fa-times"></i>
			</span>
			<p class="title-employee">Edita tipo de ausencia</p>
			<p class="subtitle-employee">Detalles sobre el tipo de ausencia.</p>
			<div class="columns items">
				<div class="column" v-for="option in datos" :key="option.id">
					<i
						class="fas fa-circle"
						:style="'color:' + option.color"
						v-if="!option.selected"
						@click="seleccion(option.id)"
					></i>
					<i
						class="fas fa-check-circle"
						:style="'color:' + option.color"
						@click="seleccion(option.id)"
						v-if="option.selected"
					></i>
				</div>
			</div>
			<div class="columns is-centered" v-for="option in dataSeleccionada()" :key="option.id">
				<div class="column"></div>
				<div class="column is-10" v-if="option.type == 'text'">
					<div class="tarjeta">
						<p class="label-left-descripcion">{{ option.label }}</p>
						<div>
							<input
								class="input input-value"
								type="text"
								:v-model="option.value"
								value="shalala"
								placeholder="Ingrese nombre"
							/>
						</div>
					</div>
				</div>

				<div class="column is-10" v-if="option.type == 'select'">
					<div class="tarjeta">
						<p class="label-left-descripcion">{{ option.label }}</p>
						<b-field>
							<b-select placeholder="seleccione" size="is-small" expanded>
								<option v-for="dato in option.value" :value="dato.value" :key="dato.id">
									{{ dato.value }}
								</option>
							</b-select>
						</b-field>
					</div>
					<!-- <div class="columns is-10" v-for="dato in option.value" :key="dato.id">
            <div class="column is-one-fifth checkbox">
              <b-checkbox v-model="dato.select">{{ dato.select }}</b-checkbox>
            </div>
            <div class="column">
              <p class="festivos-import">{{ dato.value }}</p>
            </div>
          </div>-->
				</div>
				<div class="column"></div>
			</div>

			<div class="columns is-centered">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth">Guardar</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MdHolidays extends Vue {
	private datos = [
		{
			id: 0,
			color: '#FF843F',
			tipo: 'Vacaciones',
			selected: true,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Vacaciones',
					type: 'text',
				},
				{
					id: 1,
					label: 'Necesita ser aprobado',
					value: 'Sí, requiere aprobación',
					type: 'text',
				},
				{
					id: 2,
					label: 'Necesita ser aprobado',
					value: [
						{ id: 0, value: 'Sí, requiere aprobación', select: true },
						{ id: 1, value: 'No, requiere aprobación', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'Si, es visible', select: true },
						{ id: 1, value: 'No, no es visible', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado está trabajando ', select: true },
						{ id: 1, value: 'Si, durante la ausencia el empleado no está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 1,
			color: '#FFE818',
			tipo: 'Vacaciones',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Vacaciones',
					type: 'text',
				},
				{
					id: 1,
					label: 'Necesita ser aprobado',
					value: 'Sí, requiere aprobación',
					type: 'text',
				},
				{
					id: 2,
					label: 'Necesita ser aprobado',
					value: [
						{ id: 0, value: 'Sí, requiere aprobación', select: true },
						{ id: 1, value: 'No, requiere aprobación', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'Si, es visible', select: true },
						{ id: 1, value: 'No, no es visible', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado está trabajando ', select: true },
						{ id: 1, value: 'Si, durante la ausencia el empleado no está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 2,
			color: '#4BBC2F',
			tipo: 'Enfermedad',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Enfermedad',
					type: 'text',
				},
				{
					id: 1,
					label: '¿Resta días de vacaciones?',
					value: [
						{ id: 0, value: 'No, no resta día de vacaciones', select: true },
						{ id: 1, value: 'Si, resta día de vacaciones', select: false },
					],
					type: 'select',
				},
				{
					id: 2,
					label: '¿Necesita ser aprobado?',
					value: [
						{ id: 0, value: 'No, aprobará automáticamente', select: true },
						{ id: 1, value: 'Sí, aprobará automáticamente', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿Permite un documento adjunto?',
					value: [
						{ id: 0, value: 'No, no lo permite', select: true },
						{ id: 1, value: 'Sí, lo permite ', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'No, no es visible', select: true },
						{ id: 1, value: 'Sí, no es visible ', select: false },
					],
					type: 'select',
				},
				{
					id: 5,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado no está trabajando', select: true },
						{ id: 1, value: 'Sí, durante la ausencia el empleado está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 3,
			color: '#1DD0C5',
			tipo: 'Enfermedad',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Enfermedad',
					type: 'text',
				},
				{
					id: 1,
					label: '¿Resta días de vacaciones?',
					value: [
						{ id: 0, value: 'No, no resta día de vacaciones', select: true },
						{ id: 1, value: 'Si, resta día de vacaciones', select: false },
					],
					type: 'select',
				},
				{
					id: 2,
					label: '¿Necesita ser aprobado?',
					value: [
						{ id: 0, value: 'No, aprobará automáticamente', select: true },
						{ id: 1, value: 'Sí, aprobará automáticamente', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿Permite un documento adjunto?',
					value: [
						{ id: 0, value: 'No, no lo permite', select: true },
						{ id: 1, value: 'Sí, lo permite ', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'No, no es visible', select: true },
						{ id: 1, value: 'Sí, no es visible ', select: false },
					],
					type: 'select',
				},
				{
					id: 5,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado no está trabajando', select: true },
						{ id: 1, value: 'Sí, durante la ausencia el empleado está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 4,
			color: '#0CE3F1',
			tipo: 'Enfermedad',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Enfermedad',
					type: 'text',
				},
				{
					id: 1,
					label: '¿Resta días de vacaciones?',
					value: [
						{ id: 0, value: 'No, no resta día de vacaciones', select: true },
						{ id: 1, value: 'Si, resta día de vacaciones', select: false },
					],
					type: 'select',
				},
				{
					id: 2,
					label: '¿Necesita ser aprobado?',
					value: [
						{ id: 0, value: 'No, aprobará automáticamente', select: true },
						{ id: 1, value: 'Sí, aprobará automáticamente', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿Permite un documento adjunto?',
					value: [
						{ id: 0, value: 'No, no lo permite', select: true },
						{ id: 1, value: 'Sí, lo permite ', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'No, no es visible', select: true },
						{ id: 1, value: 'Sí, no es visible ', select: false },
					],
					type: 'select',
				},
				{
					id: 5,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado no está trabajando', select: true },
						{ id: 1, value: 'Sí, durante la ausencia el empleado está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 5,
			color: '#40CCF9',
			tipo: 'Enfermedad',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Enfermedad',
					type: 'text',
				},
				{
					id: 1,
					label: '¿Resta días de vacaciones?',
					value: [
						{ id: 0, value: 'No, no resta día de vacaciones', select: true },
						{ id: 1, value: 'Si, resta día de vacaciones', select: false },
					],
					type: 'select',
				},
				{
					id: 2,
					label: '¿Necesita ser aprobado?',
					value: [
						{ id: 0, value: 'No, aprobará automáticamente', select: true },
						{ id: 1, value: 'Sí, aprobará automáticamente', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿Permite un documento adjunto?',
					value: [
						{ id: 0, value: 'No, no lo permite', select: true },
						{ id: 1, value: 'Sí, lo permite ', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'No, no es visible', select: true },
						{ id: 1, value: 'Sí, no es visible ', select: false },
					],
					type: 'select',
				},
				{
					id: 5,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado no está trabajando', select: true },
						{ id: 1, value: 'Sí, durante la ausencia el empleado está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 6,
			color: '#158AF7',
			tipo: 'Enfermedad',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Enfermedad',
					type: 'text',
				},
				{
					id: 1,
					label: '¿Resta días de vacaciones?',
					value: [
						{ id: 0, value: 'No, no resta día de vacaciones', select: true },
						{ id: 1, value: 'Si, resta día de vacaciones', select: false },
					],
					type: 'select',
				},
				{
					id: 2,
					label: '¿Necesita ser aprobado?',
					value: [
						{ id: 0, value: 'No, aprobará automáticamente', select: true },
						{ id: 1, value: 'Sí, aprobará automáticamente', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿Permite un documento adjunto?',
					value: [
						{ id: 0, value: 'No, no lo permite', select: true },
						{ id: 1, value: 'Sí, lo permite ', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'No, no es visible', select: true },
						{ id: 1, value: 'Sí, no es visible ', select: false },
					],
					type: 'select',
				},
				{
					id: 5,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado no está trabajando', select: true },
						{ id: 1, value: 'Sí, durante la ausencia el empleado está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 7,
			color: '#A46CEC',
			tipo: 'Enfermedad',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Enfermedad',
					type: 'text',
				},
				{
					id: 1,
					label: '¿Resta días de vacaciones?',
					value: [
						{ id: 0, value: 'No, no resta día de vacaciones', select: true },
						{ id: 1, value: 'Si, resta día de vacaciones', select: false },
					],
					type: 'select',
				},
				{
					id: 2,
					label: '¿Necesita ser aprobado?',
					value: [
						{ id: 0, value: 'No, aprobará automáticamente', select: true },
						{ id: 1, value: 'Sí, aprobará automáticamente', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿Permite un documento adjunto?',
					value: [
						{ id: 0, value: 'No, no lo permite', select: true },
						{ id: 1, value: 'Sí, lo permite ', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'No, no es visible', select: true },
						{ id: 1, value: 'Sí, no es visible ', select: false },
					],
					type: 'select',
				},
				{
					id: 5,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado no está trabajando', select: true },
						{ id: 1, value: 'Sí, durante la ausencia el empleado está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
		{
			id: 8,
			color: '#FF6ADE',
			tipo: 'Enfermedad',
			selected: false,
			preguntas: [
				{
					id: 0,
					label: 'Nombre del tipo de ausencia',
					value: 'Enfermedad',
					type: 'text',
				},
				{
					id: 1,
					label: '¿Resta días de vacaciones?',
					value: [
						{ id: 0, value: 'No, no resta día de vacaciones', select: true },
						{ id: 1, value: 'Si, resta día de vacaciones', select: false },
					],
					type: 'select',
				},
				{
					id: 2,
					label: '¿Necesita ser aprobado?',
					value: [
						{ id: 0, value: 'No, aprobará automáticamente', select: true },
						{ id: 1, value: 'Sí, aprobará automáticamente', select: false },
					],
					type: 'select',
				},
				{
					id: 3,
					label: '¿Permite un documento adjunto?',
					value: [
						{ id: 0, value: 'No, no lo permite', select: true },
						{ id: 1, value: 'Sí, lo permite ', select: false },
					],
					type: 'select',
				},
				{
					id: 4,
					label: '¿El tipo de la ausencia es visible para el resto de empleados?',
					value: [
						{ id: 0, value: 'No, no es visible', select: true },
						{ id: 1, value: 'Sí, no es visible ', select: false },
					],
					type: 'select',
				},
				{
					id: 5,
					label: '¿Se trata de una ausencia laborable?',
					value: [
						{ id: 0, value: 'No, durante la ausencia el empleado no está trabajando', select: true },
						{ id: 1, value: 'Sí, durante la ausencia el empleado está trabajando ', select: false },
					],
					type: 'select',
				},
			],
		},
	];

	private data = this.datos[0].preguntas;
	private dataSeleccionada() {
		return this.data;
	}

	seleccion(index: number) {
		this.data = this.datos[index].preguntas;
		this.datos.forEach(value => {
			value.selected = value.id == index ? true : false;
		});
	}

	public hide() {
		this.$modal.hide('md-holidays');
	}
}
</script>

<style lang="scss" scoped>
.img-modal {
	padding-top: 5%;
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
.title-employee {
	font-weight: 500;
	font-size: 25px;
	line-height: 30px;
	text-align: center;
	color: #7a7979;
}
.subtitle-employee {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	color: rgba(122, 121, 121, 0.5);
}
.btn-wellcome {
	background: #335eea;
	border-radius: 4px;
	color: #ffffff;
	font-size: 25px;
}
.tarjeta {
	border: 0.6px solid rgba(122, 121, 121, 0.5);
	box-sizing: border-box;
	border-radius: 3px;
	width: 100%;
	padding-left: 6%;
	padding-top: 5%;
	padding-bottom: 5%;
}
.contenedor-tarjeta {
	margin-left: 50%;
	margin-right: 50%;
}
.label-left-descripcion {
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	/* identical to box height */

	color: rgba(122, 121, 121, 0.5);
}
.input-value {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	padding-left: 0;
	margin-left: 0;
	color: #7a7979;
}
.items {
	margin: 1%;
	margin-left: 10%;
	margin-right: 10%;
	font-size: 22px;
}
.select-row {
	margin: 1%;
}
</style>
