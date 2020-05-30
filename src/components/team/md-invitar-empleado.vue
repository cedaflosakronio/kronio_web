<template>
	<modal name="md-invitar-empleado" width="30%" height="auto" :scrollable="true" :adaptive="true" :min-width="350">
		<div class="example-modal-content">
			<img class="img-modal" src="../../assets/modal_holidays.png" alt />
			<span @click="hide()" class="close-btn">
				<i class="fas fa-times"></i>
			</span>
			<p class="title-employee">Invitar empleados</p>
			<p class="subtitle-employee">
				Estas son algunas de las cosas que tus empleados podrán hacer cuando los invites:
			</p>
			<div class="columns is-centered"></div>
			<div class="columns box-column">
				<div class="column">
					<img class="box-img" src="../../assets/modal_holidays.png" alt />
				</div>
				<div class="column is-four-fifths box-text">
					<p class>Rellenar sus datos personales</p>
				</div>
			</div>
			<div class="columns box-column">
				<div class="column">
					<img class="box-img" src="../../assets/modal_holidays.png" alt />
				</div>
				<div class="column is-four-fifths box-text">
					<p class>Solicitar vacaciones y ausencias</p>
				</div>
			</div>
			<div class="columns box-column">
				<div class="column">
					<img class="box-img" src="../../assets/modal_holidays.png" alt />
				</div>
				<div class="column is-four-fifths box-text">
					<p class>Reflejar su jornada laboral</p>
				</div>
			</div>
			<div class="columns box-column">
				<div class="column">
					<img class="box-img" src="../../assets/modal_holidays.png" alt />
				</div>
				<div class="column is-four-fifths box-text">
					<p class>Ver y gestionar documentos</p>
				</div>
			</div>
			<div class="columns box-column">
				<div class="column">
					<img class="box-img" src="../../assets/modal_holidays.png" alt />
				</div>
				<div class="column is-four-fifths box-text">
					<p class>Enterarse de comunicados</p>
				</div>
			</div>
			<div class="columns is-centered">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth">Invitar empleado</button>
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
		this.$modal.hide('md-invitar-empleado');
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
	margin-bottom: 5%;
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
//Lista de acciones
.box-column {
	padding: 1%;
	background: #f2f5ff;
	border-radius: 4px;
	margin: 5%;
	margin-left: 9%;
	margin-right: 9%;
}
.box-text {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
	color: #7a7979;
	margin-top: auto;
	margin-bottom: auto;
	text-align: left;
}
.box-img {
	padding-top: 5%;
	width: 50%;
}
</style>
