<template>
	<modal name="add-employee" width="30%" height="40%">
		<div class="example-modal-content">
			<img class="img-modal" src="../assets/add_employee.png" alt="" />
			<p class="title-employee">
				Crear empleado
			</p>
			<p class="subtitle-employee">
				Rellena la información personal del empleado para poder crearlo
			</p>

			<div class="columns is-centered">
				<div class="column is-8">
					<b-field label="Correo Electrónico">
						<b-input v-model="name"></b-input>
					</b-field>
				</div>
			</div>
			<div class="columns is-centered">
				<div class="column is-4">
					<b-field label="Nombres">
						<b-input v-model="name"></b-input>
					</b-field>
				</div>
				<div class="column is-4">
					<b-field label="Apellidos">
						<b-input v-model="name"></b-input>
					</b-field>
				</div>
			</div>

			<button class="button modal-text-wellcome">Enviar invitación</button>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MdNewEmployee extends Vue {}
</script>

<style lang="scss" scoped>
.title-employee {
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	color: #7a7979;
}

.subtitle-employee {
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	color: rgba(122, 121, 121, 0.5);
}

.img-modal {
	padding-top: 5%;
}
</style>
