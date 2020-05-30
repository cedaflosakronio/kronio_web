<template>
	<modal name="md-add-holiday" width="25%" height="auto" :scrollable="true" :adaptive="true" :min-width="350">
		<div class="example-modal-content">
			<img class="img-modal" src="../assets/modal_holidays.png" alt />
			<span @click="hide()" class="close-btn">
				<i class="fas fa-times"></i>
			</span>
			<p class="title-employee">Añade festivos</p>
			<p class="subtitle-employee">Añadir un festivo personalizado a esta oficina</p>
			<div class="columns is-centered">
				<div class="column is-full">
					<div class="field tarjeta">
						<p class="label-left-descripcion">Nombre</p>
						<div class="control">
							<input class="input input-value" type="text" value="shalala" placeholder="Ingrese nombre" />
						</div>
					</div>
				</div>
			</div>
			<div class="columns">
				<div class="column is-full">
					<button class="button btn-dia" :class="{ 'btn-active': !mDay }" @click="changeDay('mDia')">
						Medio día
					</button>
					<button class="button btn-dia" :class="{ 'btn-active': !day }" @click="changeDay('dia')">
						Un día
					</button>
				</div>
			</div>
			<div class="columns is-centered">
				<div class="column" :class="{ 'container-medio-dia-fecha': mDay }">
					<div class="field tarjeta" :class="{ 'tarjeta-medio-dia-fecha': mDay }">
						<p class="label-left-descripcion">Fecha</p>
						<b-datepicker
							class="form-fields fecha"
							placeholder="Escoja fecha"
							icon="calendar-today"
							editable
						></b-datepicker>
					</div>
				</div>
				<div class="column" v-if="mDay" :class="{ 'container-medio-dia-jornada': mDay }">
					<div class="field">
						<b-radio v-model="radio" size="is-small" native-value="primera"
							>Primera mitad de jornada</b-radio
						>
					</div>
					<div class="field">
						<b-radio v-model="radio" size="is-small" native-value="segunda"
							>Segunda mitad de jornada</b-radio
						>
					</div>
				</div>
			</div>

			<div class="columns is-centered">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth" @click="importarDatos()">Añadir</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MdHolidays extends Vue {
	public mDay: boolean = true;
	public day: boolean = false;
	public radio: string = 'primera';

	public hide() {
		this.$modal.hide('md-add-holiday');
	}
	changeDay(type: string) {
		if (type === 'dia') {
			this.day = true;
			this.mDay = false;
		} else {
			this.day = false;
			this.mDay = true;
		}
	}
}
</script>

<style lang="scss" scoped>
.example-modal-content {
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
		margin-top: 5%;
		margin-bottom: 10%;
	}
	.btn-dia {
		background: #335eea;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		width: 40%;
		height: 67px;
		text-align: center;

		color: #ffffff;
	}
	.tarjeta {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		padding: 5%;
		margin-left: 10%;
		margin-right: 10%;
		//width: 100%;
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
	.label-form {
		padding-left: 3%;
		font-weight: 500;
		font-size: 18px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5) !important;
		text-align: left;
	}
	.border-form {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		margin-top: 5%;
		margin-bottom: 2%;
	}
	.fa-times:before {
		content: '\f00d';
		color: #7a7979;
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
		/* identical to box height */

		color: #7a7979;
	}
	.has-icons-left > .input {
		color: #335eea;
		padding-left: 0 !important;
	}
	.btn-active {
		background-color: #ffffff;
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: rgba(122, 121, 121, 0.5);
	}
	.container-medio-dia-fecha {
		width: 50%;
		text-align: left;
		margin-left: 5%;
	}
	.container-medio-dia-jornada {
		width: 50%;
		text-align: left;
		margin-right: 10%;
	}
	.tarjeta-medio-dia-fecha {
		width: 90%;
	}
}
</style>
