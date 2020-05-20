<template>
	<modal name="md-import-holiday" width="25%" height="45%">
		<div class="example-modal-content">
			<img class="img-modal" src="../assets/modal_holidays.png" alt="" />
			<span @click="hide()" class="close-btn"><i class="fas fa-times"></i></span>
			<p class="title-employee">
				Importar festivos
			</p>
			<p class="subtitle-employee">
				Importa tus festivos locales de nuestra base de datos
			</p>
			<div class="columns is-centered">
				<!-- <div class="column is-4 border-form">
					<div class="field">
						<label class="label label-form">Fecha de inicio</label>
						<b-datepicker
							class="form-fields"
							v-model="birthday"
							placeholder="Fecha de inicio"
							icon="calendar-today"
							editable
						>
						</b-datepicker>
					</div>
				</div>
				<div class="column is-1"></div>
				<div class="column is-4 border-form">
					<div class="field">
						<label class="label label-form">Fecha de fin</label>
						<b-datepicker
							class="form-fields"
							v-model="birthday"
							placeholder="Fecha de fin"
							popover-direction="left"
							icon="calendar-today"
							editable
						>
						</b-datepicker>
					</div>
				</div> -->
			</div>

			<div class="columns is-centered">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth">Importar</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MdHolidays extends Vue {
	public hide() {
		this.$modal.hide('md-holidays');
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
</style>
