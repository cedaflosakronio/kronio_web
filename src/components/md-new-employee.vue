<template>
	<modal name="add-employee" width="30%" height="auto" :scrollable="true" :adaptive="true" :min-width="350">
		<div class="example-modal-content">
			<img class="img-modal" src="../assets/add_employee.png" alt="" />
			<span @click="hide()" class="close-btn"><i class="fas fa-times"></i></span>
			<p class="title-employee">
				Crear empleado
			</p>
			<p class="subtitle-employee">
				Rellena la información personal del empleado para poder crearlo
			</p>

			<div class="columns is-centered">
				<div class="column is-9 border-form">
					<div class="field">
						<label class="label is-pulled-left label-form">Correo Electrónico</label>
						<div class="control">
							<input
								class="input no-border-form"
								v-model="email"
								placeholder="Ingrese correo electrónico"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="columns is-centered">
				<div class="column is-4 border-form">
					<div class="field">
						<label class="label is-pulled-left label-form">Nombres</label>
						<div class="control">
							<input class="input no-border-form" v-model="name" placeholder="Ingrese nombres" />
						</div>
					</div>
				</div>
				<div class="column is-1"></div>
				<div class="column is-4 border-form">
					<div class="field">
						<label class="label is-pulled-left label-form">Apellidos</label>
						<div class="control">
							<input class="input no-border-form" v-model="lastname" placeholder="Ingrese apellidos" />
						</div>
					</div>
				</div>
			</div>

			<div class="columns is-centered">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth">Enviar invitación</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MdNewEmployee extends Vue {
	public hide() {
		this.$modal.hide('add-employee');
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
	font-weight: normal;
	font-size: 20px;
	line-height: 22px;
	text-align: center;
	color: rgba(122, 121, 121, 0.5);
	margin: 5% 8% 5% 8%;
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

.close-btn {
	position: absolute;
	top: 0;
	right: 0;
	margin-top: 5%;
	margin-right: 10%;
	font-size: 30px;
	cursor: pointer;
}

.vm--modal {
	@media screen and (max-width: 600px) {
		top: 86px !important;
		left: 27px !important;
		width: 376.5px !important;
		height: 643.2px !important;
	}
}
</style>
