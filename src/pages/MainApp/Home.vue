<template>
	<div class="home">
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
							<img src="../../assets/employeesEmpty.png" alt="" class="imgEmployeesEmpty" />
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
							<img src="../../assets/notificationsEmpty.png" alt="" class="imgEmployeesEmpty" />
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
					</header>
					<div class="card-content">
						<div class="content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
							<a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
							<br />
							<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
							<img src="../../assets/postEmpty.png" alt="" class="imgPostEmpty" />
							<p class="text-info-Empty">No tienes publicaciones creadas.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<button class="btn-float-kronio"><img class="imgBtnKronio" src="../../assets/iconK.png" alt="" /></button>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ErrorSection from '@/components/ErrorSection.vue';

@Component({
	components: { ErrorSection },
})
export default class LogoSVG extends Vue {}
</script>

<style lang="scss">
.background-header {
	background: #8969eb;
	border-top-left-radius: 12px !important;
	border-top-right-radius: 12px !important;
}
.card-header-title {
	display: block !important;
	color: #ffffff !important;
}
.card {
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1) !important;
	border-radius: 15px !important;
	margin-top: 10% !important;
	margin-bottom: 5% !important;
}

.text-hello {
	left: 0;
	margin-left: 13%;
	margin-top: 2%;
	position: absolute;
	color: #335eea;
}

#employees,
#notifications {
	height: calc(75vh - 3rem);
}

#calendar,
#post {
	height: calc(37.5vh - 3rem);
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
	margin-right: 5%;
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
</style>
