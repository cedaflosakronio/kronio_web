<template>
	<div class="home">
		<div class="btn-main-absolute">
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/start.png" alt="" />
				</span>
				<span class="label-main-btn">Inicio</span>
			</button>
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/history.png" alt="" />
				</span>
				<span class="label-main-btn">Historial</span>
			</button>
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/team.png" alt="" />
				</span>
				<span class="label-main-btn">Equipo</span>
			</button>
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/task.png" alt="" />
				</span>
				<span class="label-main-btn">Tareas</span>
			</button>
		</div>
		<div class="columns is-centered">
			<p class="text-hello">¡Hola, Patricia Guillermo! Esto es lo nuevo en KRONIO</p>
			<div class="column is-3">
				<div class="card" id="employees">
					<header class="card-header background-header">
						<b-dropdown v-model="selectedOptions" multiple aria-role="list" class="filter-employees">
							<button class="button is-primary" type="button" slot="trigger">
								<img src="../../assets/filter.png" alt="" />
								<b-icon icon="menu-down"></b-icon>
							</button>

							<b-dropdown-item value="option1" aria-role="listitem">
								<b-checkbox><span>Todos</span></b-checkbox>
							</b-dropdown-item>

							<b-dropdown-item value="option2" aria-role="listitem">
								<b-checkbox><span>Presentes</span></b-checkbox>
							</b-dropdown-item>

							<b-dropdown-item value="option3" aria-role="listitem">
								<b-checkbox><span>Ausentes</span></b-checkbox>
							</b-dropdown-item>
						</b-dropdown>
						<p class="card-header-title-inline">
							Empleados
						</p>
					</header>
					<div class="card-content remove-padding-aside">
						<div class="content">
							<!-- <img src="../../assets/employeesEmpty.png" alt="" class="imgEmployeesEmpty">
						<p class="text-info-Empty">¡Invita a tu equipo de trabajo para poder empezar!</p> -->
							<div class="row-employee">
								<div class="columns">
									<div class="column is-3 inline-tablet">
										<img
											class="is-pulled-right"
											src="../../assets/employees/employee1.png"
											alt=""
										/>
										<div class="status-active"></div>
									</div>
									<div class="column is-8 inline-tablet">
										<p class="is-pulled-left employee-name">María Belen Zavala Luque</p>
									</div>
								</div>
							</div>
							<div class="row-employee">
								<div class="columns">
									<div class="column is-3 inline-tablet">
										<img
											class="is-pulled-right"
											src="../../assets/employees/employee2.png"
											alt=""
										/>
										<div class="status-active"></div>
									</div>
									<div class="column is-8 inline-tablet">
										<p class="is-pulled-left employee-name">
											María Cristina Espinoza Molestina
										</p>
									</div>
								</div>
							</div>
							<div class="row-employee">
								<div class="columns">
									<div class="column is-3 inline-tablet">
										<img
											class="is-pulled-right"
											src="../../assets/employees/employee6.png"
											alt=""
										/>
										<div class="status-suspended"></div>
									</div>
									<div class="column is-8 inline-tablet">
										<p class="is-pulled-left employee-name">Renato Daniel Ruiz Díaz</p>
									</div>
								</div>
							</div>
							<div class="row-employee">
								<div class="columns">
									<div class="column is-3 inline-tablet">
										<img
											class="is-pulled-right"
											src="../../assets/employees/employee4.png"
											alt=""
										/>
										<div class="status-active"></div>
									</div>
									<div class="column is-8 inline-tablet">
										<p class="is-pulled-left employee-name">Freddy David Vera Quito</p>
									</div>
								</div>
							</div>
							<div class="row-employee">
								<div class="columns">
									<div class="column is-3 inline-tablet">
										<img
											class="is-pulled-right"
											src="../../assets/employees/employee5.png"
											alt=""
										/>
										<div class="status-suspended"></div>
									</div>
									<div class="column is-8 inline-tablet">
										<p class="is-pulled-left employee-name">María José Alvarado Villacreces</p>
									</div>
								</div>
							</div>
							<div class="row-employee">
								<div class="columns">
									<div class="column is-3 inline-tablet">
										<img
											class="is-pulled-right"
											src="../../assets/employees/employee6.png"
											alt=""
										/>
										<div class="status-active"></div>
									</div>
									<div class="column is-8 inline-tablet">
										<p class="is-pulled-left employee-name">Sol Gina Torres Fernandez</p>
									</div>
								</div>
							</div>
							<div class="row-employee">
								<div class="columns">
									<div class="column is-3 inline-tablet">
										<img
											class="is-pulled-right"
											src="../../assets/employees/employee6.png"
											alt=""
										/>
										<div class="status-active"></div>
									</div>
									<div class="column is-8 inline-tablet">
										<p class="is-pulled-left employee-name">Joshua Israel Linch Yang</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer class="card-footer">
						<a @click="$modal.show('add-employee')" class="card-footer-item">
							Agregar Empleados
							<span class="icon">
								<i class="fas fa-angle-right" aria-hidden="true"></i>
							</span>
						</a>
					</footer>
				</div>
			</div>
			<div class="column is-3">
				<div class="card" id="notifications">
					<header class="card-header background-header">
						<p class="card-header-title">
							Notificaciones
						</p>
					</header>
					<div class="card-content remove-padding-aside">
						<div class="content">
							<!-- <img src="../../assets/notificationsEmpty.png" alt="" class="imgEmployeesEmpty">
						<p class="text-info-Empty">No tienes aprobaciones, ni notificaciones pendientes.</p> -->
							<div class="row-employee">
								<p class="title-notification">HOY</p>
								<div class="columns is-centered" @click="$modal.show('md-holidays')">
									<div class="column is-3">
										<p>23 mar</p>
									</div>
									<div class="column is-6">
										<p class="notification-label">Vacaciones de Danna</p>
									</div>
									<div class="column is-3">
										<img src="../../assets/umbrella.png" alt="" />
									</div>
								</div>
								<div class="columns is-centered" @click="$modal.show('md-holidays')">
									<div class="column is-3">
										<p>23 mar</p>
									</div>
									<div class="column is-6">
										<p class="notification-label">Vacaciones de Danna</p>
									</div>
									<div class="column is-3">
										<img src="../../assets/umbrella.png" alt="" />
									</div>
								</div>
								<div class="columns is-centered" @click="$modal.show('md-holidays')">
									<div class="column is-3">
										<p>23 mar</p>
									</div>
									<div class="column is-6">
										<p class="notification-label">Vacaciones de Danna</p>
									</div>
									<div class="column is-3">
										<img src="../../assets/umbrella.png" alt="" />
									</div>
								</div>
								<div class="columns is-centered" @click="$modal.show('md-postponed-holidays')">
									<div class="column is-3">
										<p>23 mar</p>
									</div>
									<div class="column is-6">
										<p class="notification-label">Vacaciones postergadas de Danna</p>
									</div>
									<div class="column is-3">
										<img src="../../assets/umbrella.png" alt="" />
									</div>
								</div>
							</div>
							<div class="row-employee">
								<p class="title-notification">ESTA SEMANA</p>
								<div class="columns is-centered">
									<div class="column is-3">
										<p>23 mar</p>
									</div>
									<div class="column is-6">
										<p class="notification-label">Cumpleaños de Xavier</p>
									</div>
									<div class="column is-3">
										<img src="../../assets/pastel.png" alt="" />
									</div>
								</div>
							</div>
							<div class="row-employee">
								<p class="title-notification">ESTA MES</p>
								<div class="columns is-centered">
									<div class="column is-3">
										<p>23 mar</p>
									</div>
									<div class="column is-6">
										<p class="notification-label">Vencimiento periodo de prueba Joselin</p>
									</div>
									<div class="column is-3">
										<img src="../../assets/alert.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="column is-3">
				<div class="card" id="calendar">
					<header class="card-header background-header">
						<p class="card-header-title">
							Calendario
						</p>
						<button @click="mainCalendar()" class="btn-more-calendar">...</button>
					</header>
					<div class="card-content calendar-context">
						<div class="content">
							<vc-calendar id="calendario" is-expanded locale="es" />
						</div>
					</div>
				</div>
				<div class="card" id="post">
					<header class="card-header background-header">
						<p class="card-header-title">
							Publicaciones
						</p>
					</header>
					<div class="card-content remove-padding-aside">
						<div class="content">
							<!-- <img src="../../assets/postEmpty.png" alt="" class="imgPostEmpty">
						<p class="text-info-Empty">No tienes publicaciones creadas.</p> -->
							<div class="row-post">
								<p class="title-post">COMUNICADO</p>
								<div class="columns is-centered">
									<div class="column is-12">
										<div class="item-post"></div>
										<p class="post-label">
											Título del comunicado Descripción de la información del comunicado
										</p>
									</div>
								</div>
							</div>
							<div class="row-post">
								<p class="title-post">EVENTO</p>
								<div class="columns is-centered">
									<div class="column is-12">
										<div class="item-post"></div>
										<p class="post-label">
											Título del comunicado Descripción de la información del comunicado
										</p>
										<div class="columns is-centered">
											<div class="column is-half">
												<p class="">25/03/2020</p>
											</div>
											<div class="column is-half">
												<p class="">00:00</p>
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
		<WellcomeAdmin />
		<MdNewEmployee />
		<MdHolidays />
		<MdPostponedHolidays />

		<button class="button" @click="$modal.show('wellcome-admin')">
			Modal de Bienvenida
		</button>

		<button class="btn-float-kronio" @click="showOptions()">
			<img class="imgBtnKronio" src="../../assets/iconK.png" alt="" />
		</button>
		<div v-if="!isHidden" class="more-option-kronio">
			<button class="btn-float-Pencil" title="Crear una publicación">
				<img class="imgBtnPencil" src="../../assets/tool_btn/pencil.png" alt="" />
			</button>
			<button class="btn-float-User" title="Añadir empleado">
				<img class="imgBtnUser" src="../../assets/tool_btn/user.png" alt="" />
			</button>
			<button class="btn-float-Ask" title="Ayuda">
				<img class="imgBtnAsk" src="../../assets/tool_btn/ask.png" alt="" />
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ErrorSection from '@/components/ErrorSection.vue';
import MdNewEmployee from '@/components/md-new-employee.vue';
import WellcomeAdmin from '@/components/Wellcome.vue';
import MdHolidays from '@/components/md-holidays.vue';
import MdPostponedHolidays from '@/components/md-postponed-holidays.vue';

@Component({
	components: { ErrorSection, WellcomeAdmin, MdNewEmployee, MdHolidays, MdPostponedHolidays },
})
export default class LogoSVG extends Vue {
	public isHidden: boolean = true;
	public showOptions() {
		if (!this.isHidden) {
			this.isHidden = true;
		} else {
			this.isHidden = false;
		}
	}

	public async mainCalendar() {
		this.$destroy();
		this.$router.push('/main-calendar');
	}
}
</script>

<style lang="scss" scoped>
.home {
	.background-header {
		background: #8969eb;
		border-top-left-radius: 12px !important;
		border-top-right-radius: 12px !important;
		padding-top: 4%;
	}

	.calendar-context {
		padding: 0px !important;
	}

	.card-header-title {
		display: block !important;
		color: #ffffff !important;
		font-size: 18px;
	}

	.card-header-title-inline {
		display: inline !important;
		color: #ffffff !important;
		padding-top: 1%;
		padding-bottom: 2%;
		font-weight: bold;
		padding-left: 10%;
		font-size: 18px;

		@media screen and (max-width: 1440px) {
			padding-left: 0px;
		}

		@media screen and (max-width: 1024px) {
			padding-left: 0px;
		}
	}

	.card {
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1) !important;
		border-radius: 15px !important;
		margin-top: 10% !important;
		margin-bottom: 5% !important;

		@media screen and (max-width: 1024px) {
			display: inline-block;
		}

		@media screen and (max-width: 768px) {
			margin-top: 5% !important;
		}
	}

	.text-hello {
		left: 0;
		margin-left: 13%;
		margin-top: 2%;
		position: absolute;
		color: #335eea;

		@media screen and (max-width: 1440px) {
			margin-top: 1%;
		}
	}

	#employees {
		height: calc(77.5vh - 3rem);
		@media screen and (max-width: 1440px) {
			height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 1440px) {
			height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 768px) {
			width: 70%;
			height: calc(79vh - 3rem);
		}
	}
	#notifications {
		height: calc(77.5vh - 3rem);
		@media screen and (max-width: 1440px) {
			height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 1440px) {
			height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 768px) {
			width: 70%;
			height: calc(135vh - 3rem);
		}
	}

	#post .card-content {
		height: calc(43vh - 3rem);
	}

	#post {
		margin-top: 11%;
		height: calc(40vh - 3rem);

		@media screen and (max-width: 768px) {
			margin-top: 5%;
			width: 70%;
			height: calc(42vh - 3rem);
		}
	}

	#calendar {
		height: calc(37.2vh - 3rem);
		border: 1px !important;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		margin-bottom: 5%;

		@media screen and (max-width: 768px) {
			width: 70%;
			height: calc(47.2vh - 3rem);
		}
	}

	.vc-border {
		border: 0px !important;
	}

	.vc-weeks {
		padding: 0px !important;
	}

	.vc-text-gray-800 {
		color: #8969eb !important;
	}

	.vc-grid-container .vc-weeks > .vc-grid-cell {
		border: 0.5px solid rgba(122, 121, 121, 0.3) !important;
	}

	.vc-relative {
		height: calc(32vh - 3rem);
		border: 0px !important;
	}

	.card-content {
		@media screen and (max-width: 1024px) {
			padding: 0px;
		}
	}

	#employees .card-content {
		height: calc(65vh - 3rem);
	}

	.text-info-Empty {
		color: rgba(122, 121, 121, 0.5);
		padding-left: 30%;
		padding-right: 30%;
		margin-top: 3%;
	}

	.imgEmployeesEmpty {
		margin-top: 40%;
		margin-bottom: 3%;
	}

	.imgPostEmpty {
		margin-top: 5%;
		margin-bottom: 3%;
	}

	.btn-float-kronio {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: 4%;
		margin-bottom: 2%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 20px 30px 20px 30px;
		text-align: center;
		cursor: pointer;
	}

	.imgBtnKronio {
		padding-left: 5px;
	}

	.btn-float-User {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc(7.5vw - 3rem);
		margin-bottom: 12%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 20px 20px 20px 20px;
		text-align: center;
		cursor: pointer;

		@media screen and (max-width: 1440px) {
			right: 15px;
			margin-bottom: 16%;
		}

		@media screen and (max-width: 1024px) {
			right: 35px;
			margin-bottom: 18%;
			padding: 12px 13px 12px 13px;
		}
	}

	.imgBtnUser {
		padding-left: 1px;
		width: 80%;
	}

	.btn-float-Pencil {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc(7.5vw - 3rem);
		margin-bottom: 16%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 18px 23px 18px 23px;
		text-align: center;
		cursor: pointer;

		@media screen and (max-width: 1440px) {
			right: 15px;
			margin-bottom: 22%;
		}

		@media screen and (max-width: 1024px) {
			right: 32px;
			margin-bottom: 24%;
			padding: 12px 15px 12px 15px;
		}
	}

	.imgBtnPencil {
		padding-left: 1px;
	}

	.btn-float-Ask {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc(7.4vw - 3rem);
		margin-bottom: 8%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 20px 30px 20px 30px;
		text-align: center;
		cursor: pointer;

		@media screen and (max-width: 1440px) {
			margin-bottom: 10%;
			right: 13px;
		}

		@media screen and (max-width: 1024px) {
			margin-bottom: 12%;
			right: 36px;
			padding: 12px 20px 12px 20px;
		}
	}

	.imgBtnAsk {
		padding-left: 2px;
	}

	.btn-main-absolute {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 5%;
		margin-left: 0% !important;
		width: 3%;
		text-align: left;

		@media screen and (max-width: 1440px) {
			width: 5%;
			margin-top: 6%;
		}

		@media screen and (max-width: 1024px) {
			margin-top: 8%;
		}

		@media screen and (max-width: 768px) {
			margin-top: 20%;
			width: 14%;
		}
	}

	.btn-main-absolute:hover {
		width: 9% !important;

		.label-main-btn {
			display: inline;
		}

		.btn-absolute {
			text-align: left !important;
			padding-left: 12% !important;
			justify-content: start !important;
			margin-top: 2%;
			margin-bottom: 2%;
			background: #f2f5ff;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}
	}

	.btn-absolute {
		text-align: center !important;
		padding-left: 40% !important;
		justify-content: start !important;
		margin-top: 2%;
		margin-bottom: 2%;
		background: #f2f5ff;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	.label-main-btn {
		display: none;
	}

	.btn-more-calendar {
		background: transparent !important;
		border-radius: 50%;
		padding-top: 0px !important;
		padding-bottom: 2% !important;
		color: #ffffff !important;
		border: 1px solid !important;
		margin-top: 0% !important;
		margin-bottom: 2% !important;
		margin-right: 5% !important;
		cursor: pointer;
		padding-left: 3%;
		padding-right: 3%;
		font-size: 18px;

		@media screen and (max-width: 1440px) {
			padding-top: 0px !important;
			padding-bottom: 3% !important;
			margin-top: 1% !important;
			margin-bottom: 3% !important;
			margin-right: 5% !important;
			padding-left: 3%;
			padding-right: 3%;
		}

		@media screen and (max-width: 1024px) {
			padding-left: 4%;
			padding-right: 4%;
		}

		@media screen and (max-width: 768px) {
			padding-left: 3%;
			padding-right: 3%;
		}
	}

	.row-employee {
		padding-top: 3%;
		padding-bottom: 5%;
		border-bottom: 0.3px solid rgba(122, 121, 121, 0.5);
	}

	.row-post {
		padding-top: 1%;
		padding-bottom: 1%;
		border-bottom: 0.3px solid rgba(122, 121, 121, 0.5);
	}

	.remove-padding-aside {
		padding-left: 0px !important;
		padding-right: 0px !important;
	}

	.employee-name {
		font-size: 15px;
		@media screen {
			margin-left: 0px;
		}
	}

	.status-active {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-top: 4%;
		margin-bottom: 2%;
		margin-left: 20%;
		background: #57d72a;

		@media screen and (max-width: 1440px) {
			margin-top: 5%;
			margin-left: 18%;
		}

		@media screen and (max-width: 1024px) {
			margin-top: 7%;
			margin-left: 16%;
		}

		@media screen and (max-width: 768px) {
			margin-top: 3%;
			margin-left: 4%;
		}

		@media screen and (max-width: 600px) {
			margin-top: 5%;
			margin-left: 8%;
		}
	}

	.status-suspended {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-top: 4%;
		margin-bottom: 2%;
		margin-bottom: 10%;
		margin-left: 20%;
		background: #ffdd2c;

		@media screen and (max-width: 1440px) {
			margin-top: 5%;
			margin-left: 18%;
		}

		@media screen and (max-width: 1024px) {
			margin-top: 7%;
			margin-left: 16%;
		}

		@media screen and (max-width: 768px) {
			margin-top: 3%;
			margin-left: 4%;
		}

		@media screen and (max-width: 600px) {
			margin-top: 5%;
			margin-left: 8%;
		}
	}

	.filter-employees {
		margin-left: 10%;
		padding-top: 0%;
		margin-right: 4%;
		padding-bottom: 3%;
	}

	.title-notification {
		color: #a46cec;
	}

	.title-post,
	post-label {
		color: #7a7979;
	}

	.post-label {
		padding-top: 1%;
		padding-left: 5%;
		padding-right: 5%;
		@media screen and (max-width: 1024px) {
			font-size: 12px;
			margin-left: 2%;
		}
	}

	.notification-label {
		font-weight: normal;
		font-size: 17px;
		line-height: 19px;
		color: #7a7979;
	}

	.item-post {
		position: absolute;
		width: 10px;
		height: 10px;
		border: 1px solid #8969eb;
		border-radius: 50%;
		background: transparent;
		margin-left: 10%;
		margin-top: 2%;

		@media screen and (max-width: 1440px) {
			margin-left: 2%;
		}

		@media screen and (max-width: 1024px) {
			margin-left: 2%;
		}
	}

	.modal-bg {
		background-color: #8969eb !important;
	}

	.dropdown-menu {
		display: none;
		left: -66px;
		min-width: 12rem;
		padding-top: 0px;
		position: absolute;
		top: 103%;
		z-index: 20;
	}

	.dropdown-menu:after {
		content: '';
		position: absolute;
		top: 5px;
		left: 54%;
		width: 0;
		height: 0;
		border: 18px solid transparent;
		border-bottom-color: #ffffff;
		border-top: 0;
		margin-left: -27px;
		margin-top: -24px;
	}

	.is-pulled-right {
		@media screen and (max-width: 768px) {
			float: left !important;
			margin-left: 13%;
		}
	}

	.inline-tablet {
		@media screen and (max-width: 768px) {
			display: inline-block !important;
		}
	}
}
</style>
