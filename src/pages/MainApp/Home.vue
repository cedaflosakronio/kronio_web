<template>
	<div class="home">
		<div class="btn-main-absolute">
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/start.png" alt="">
				</span>
				<span class="label-main-btn">Inicio</span>
			</button>
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/history.png" alt="">
				</span>
				<span class="label-main-btn">Historial</span>
			</button>
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/team.png" alt="">
				</span>
				<span class="label-main-btn">Equipo</span>
			</button>
			<button class="button is-fullwidth btn-absolute">
				<span class="icon">
					<img src="../../assets/main_btn/task.png" alt="">
				</span>
				<span class="label-main-btn">Tareas</span>
			</button>
		</div>
		<div class="columns is-mobile is-multiline is-centered">
			<p class="text-hello">¡Hola, Patricia Guillermo! Esto es lo nuevo en KRONIO</p>
			<div class="column is-3">
				<div class="card" id="employees">
					<header class="card-header background-header">
						<p class="card-header-title">
						Empleados
						</p>
					</header>
					<div class="card-content">
						<div class="content">
							<img src="../../assets/employeesEmpty.png" alt="" class="imgEmployeesEmpty">
							<p class="text-info-Empty">¡Invita a tu equipo de trabajo para poder empezar!</p>
						</div>
					</div>
					<footer class="card-footer">
						<a href="#" class="card-footer-item">
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
					<div class="card-content">
						<div class="content">
							<img src="../../assets/notificationsEmpty.png" alt="" class="imgEmployeesEmpty">
							<p class="text-info-Empty">No tienes aprobaciones, ni notificaciones pendientes.</p>
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
						<button class="btn-more-calendar">...</button>
					</header>
					<div class="card-content calendar-context">
						<div class="content">
							<vc-calendar id="calendario" is-expanded locale="es"/>
						</div>
					</div>
				</div>
				<div class="card" id="post">
					<header class="card-header background-header">
						<p class="card-header-title">
						Publicaciones
						</p>
					</header>
					<div class="card-content">
						<div class="content">
							<img src="../../assets/postEmpty.png" alt="" class="imgPostEmpty">
							<p class="text-info-Empty">No tienes publicaciones creadas.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<button class="btn-float-kronio" @click="showOptions()"><img class="imgBtnKronio" src="../../assets/iconK.png" alt=""></button>
		<div v-if="!isHidden" class="more-option-kronio">
			<button class="btn-float-Pencil" title="Crear una publicación"><img class="imgBtnPencil" src="../../assets/tool_btn/pencil.png" alt=""></button>
			<button class="btn-float-User" title="Añadir empleado"><img class="imgBtnUser" src="../../assets/tool_btn/user.png" alt=""></button>
			<button class="btn-float-Ask" title="Ayuda"><img class="imgBtnAsk" src="../../assets/tool_btn/ask.png" alt=""></button>
		</div>
		<div class="modal">
			<div class="modal-background"></div>
			<div class="modal-content">
				<p class="image is-4by3">
				<img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
				</p>
			</div>
			<button class="modal-close is-large" aria-label="close"></button>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ErrorSection from '@/components/ErrorSection.vue';

@Component({
	components: { ErrorSection },
})
export default class LogoSVG extends Vue {
	public isHidden:boolean = true;

	public showOptions(){
		if(this.isHidden){
			this.isHidden = false;
		}
		else{
			this.isHidden = true;
		}
	}
}
</script>

<style lang="scss">
	.background-header{
		background: #8969EB;
		border-top-left-radius: 12px !important;
    	border-top-right-radius: 12px !important;
	}

	.calendar-context {
    	padding: 0px !important; 
	}

	.card-header-title{
		display: block !important;
		color: #ffffff !important;
		
	}
	.card{
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1) !important;
		border-radius: 15px !important;
		margin-top: 10% !important;
		margin-bottom: 5% !important;
	}

	.text-hello{
		left: 0;
		margin-left: 13%;
		margin-top: 2%;
		position: absolute;
		color: #335EEA;
	}

	#employees, #notifications {
		height: calc(77.5vh - 3rem);
	}

	#post .card-content {
		height: calc(43vh - 3rem);
	}

	#post  {
		margin-top: 5% !important;
		height: calc(43vh - 3rem);
	}

	#calendar {
		height: calc(37.2vh - 3rem);
		border: 0px !important;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.vc-border{
		border: 0px !important;
	}

	.vc-weeks{
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

	#calendar  .card-content {
		height: calc(42vh - 3rem);
	}

	#employees .card-content{
		height: calc(67vh - 3rem);
	}

	.text-info-Empty{
		color: rgba(122, 121, 121, 0.5);
		padding-left: 30%;
		padding-right: 30%;
		margin-top: 3%;
	}

	.imgEmployeesEmpty{
		margin-top: 40%;
		margin-bottom: 3%;
	}

	.imgPostEmpty{
		margin-top: 5%;
		margin-bottom: 3%;
	}

	.btn-float-kronio{
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


	.imgBtnKronio{
		padding-left: 5px;
	}

	
	
	.btn-float-User{
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
	}

	.imgBtnUser{
		padding-left: 1px;
		width: 80%;
	}

	.btn-float-Pencil{
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
	}

	.imgBtnPencil{
		padding-left: 1px;
	}

	.btn-float-Ask{
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc(7.2vw - 3rem);
		margin-bottom: 8%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 20px 30px 20px 30px;
		text-align: center;
		cursor: pointer;
	}

	.imgBtnAsk{
		padding-left: 21x;
	}

	.btn-main-absolute{
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 5%;
		margin-left: 0% !important;
		width: 3%;
		text-align: left;
	}

	.btn-main-absolute:hover{
		width: 9% !important;

		.label-main-btn{
			display: inline;
		}

		.btn-absolute{
			text-align: left !important;
			padding-left: 12% !important;
			justify-content: start !important;
			margin-top: 2%;
			margin-bottom: 2%;
			background: #F2F5FF;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}
	}

	.btn-absolute{
		text-align: center !important;
		padding-left: 40% !important;
		justify-content: start !important;
		margin-top: 2%;
		margin-bottom: 2%;
		background: #F2F5FF;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	.label-main-btn{
		display: none;
	}

	.btn-more-calendar{
		background: transparent !important;
		border-radius: 50%;
		padding-top: 0px !important;
		padding-bottom: 1% !important;
		color: #ffffff !important;
		border: 1px solid !important;
		margin-top: 2% !important;
		margin-bottom: 2% !important;
		margin-right: 5% !important;
		cursor: pointer;
	}
</style>
