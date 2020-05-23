<template>
	<div class="cal">
		<NavBar :menu_start="menu_start" :menu_end="menu_end">
			<template slot="navbar-brand">
				<LogoSVG />
			</template>
			<template slot="navbar-end">
				<a class="navbar-item" @click="exit()">
					Salir
					<i class="fas fa-sign-out-alt icon-pl"></i>
				</a>
			</template>
		</NavBar>
		<div class="body" v-if="!show">
			<div class="columns is-centered">
				<div class="column is-10 content-general">
					<div class="card box-height">
						<header class="tabs-header">
							<div class="columns">
								<div class="column">
									<span @click="volver()" class="close-btn">
										<i class="fas fa-arrow-circle-left"></i>
									</span>
								</div>
								<div class="column is-four-fifths">
									<p class="title-publications">Calendario</p>
								</div>
								<div class="column">
									<b-dropdown aria-role="list" class="button-options">
										<span class="button-options" slot="trigger">
											<b-icon icon="plus"></b-icon>
										</span>

										<b-dropdown-item aria-role="listitem" @click="politicas()"
											>Política de vacaciones</b-dropdown-item
										>
										<b-dropdown-item aria-role="listitem" @click="festivos()"
											>Días festivos</b-dropdown-item
										>
										<b-dropdown-item aria-role="listitem" @click="ausencias()"
											>Tipos de ausencia</b-dropdown-item
										>
									</b-dropdown>
								</div>
							</div>
						</header>

						<div class="card-content contenido">
							<div class="content">
								<vc-calendar
									id="calendario"
									title-position="center"
									is-expanded
									locale="es"
									@dayclick="lol"
									:attributes="attrs"
									:theme-styles="themeStyles"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<transition name="fade">
			<Politicas v-if="show && politica" @politica="changePolitica" />
			<Ausencias v-if="show && ausencia" @ausencia="changeAusencia" />
			<Festivos v-if="show && festivo" @festivo="changeFestivo" />
		</transition>
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import Politicas from './calendar-politica-privacidad.vue';
import Festivos from './calendar-dias-festivos.vue';
import Ausencias from './calendar-ausencia.vue';
import { INavBarTitle } from '@/utils/types.utils';
@Component({
	components: { NavBar, LogoSVG, Politicas, Ausencias, Festivos },
})
export default class MainCalendar extends PageBase {
	variable = '';
	show = false;
	festivo = false;
	ausencia = false;
	politica = false;
	private menu_start: INavBarTitle[] = [];
	public screens: {
		tablet: '576px';
		laptop: '992px';
		desktop: '1200px';
	};
	public themeStyles = {
		wrapper: {
			background: 'linear-gradient(to bottom right, #ff5050, #ff66b3)',
			color: '#fafafa',
		},
	};
	attrs = [
		{
			bar({ isHovered }) {
				return {
					backgroundColor: 'black',
					opacity: (isHovered && 0.5) || 1,
				};
			},
			dates: new Date(),
		},
	];

	fechaMinima: Date = new Date(2018, 0, 1);
	public dates = {
		start: new Date(2018, 0, 1),
		end: new Date(2019, 0, 1),
	};
	lol(day) {
		console.log(day);
	}
	private menu_end: INavBarTitle[] = [
		{
			icon: 'bell',
			is_only_desktop: true,
			children: [
				{
					title: 'Sin notificaciones',
					text_centered: true,
				},
			],
		},
		{
			icon: 'user',
			is_only_desktop: true,
			children: [
				{
					title: 'Su perfil',
					icon: 'user-cog',
					description: 'Puede consultar y modificar la iformación de su perfil',
				},
				{
					title: 'Configuraciones',
					icon: 'cog',
					description: 'Puede configurar un poco y dejar KiteBlue mucho más comodo para usted',
				},
			],
		},
	];
	public async created() {
		await super.created();
	}
	public async exit() {
		this.$router.push('/app');
	}

	public async destroyed() {
		const el = document.body;
		el.classList.remove('cal');
	}

	public politicas() {
		this.show = !this.show;
		this.politica = true;
	}
	public festivos() {
		this.show = !this.show;
		this.festivo = true;
	}
	public ausencias() {
		this.show = !this.show;
		this.ausencia = true;
	}

	public changePolitica(value: boolean): void {
		this.politica = value;
		this.show = false;
	}
	public changeAusencia(value: boolean): void {
		this.ausencia = value;
		this.show = false;
	}
	public changeFestivo(value: boolean): void {
		this.festivo = value;
		this.show = false;
	}
	public volver() {
		//this.$emit('hiddenCalendar',false);
		this.show = false;
		this.$destroy();
		this.$router.back();
	}
	clicado() {
		return this.fechaMinima;
	}
}
</script>

<style lang="scss">
.cal {
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

	//Mejoras para el calendario
	.vc-day-box-center-center[data-v-47ef1cd6] {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 12vh;
		transform-origin: 50% 50%;
		border: 0.5px solid rgba(122, 121, 121, 0.3);
	}

	.vc-text-gray-500 {
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 22px !important;
		line-height: 33px;
		text-align: center;
		color: #8969eb;
	}

	.vc-title[data-v-d137fa42],
	.vc-weekday[data-v-d137fa42] {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
		color: #8969eb;
		text-transform: capitalize;
	}

	.vc-arrows-container {
		width: 100%;
		position: absolute;
		top: 0;
		display: flex;
		justify-content: space-around;
		padding: var(--arrows-padding);
		pointer-events: none;
	}

	.vc-header[data-v-d137fa42] {
		flex-shrink: 0;
		display: flex;
		align-items: stretch;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding: var(--header-padding);
		background: #f2f5ff;
	}

	.vc-svg-icon[data-v-63f7b5ec] {
		display: inline-block;
		stroke: currentColor;
		stroke-width: 0;
		color: #a46cec;
	}

	.vc-weeks[data-v-d137fa42] {
		flex-shrink: 1;
		flex-grow: 1;
		padding: 0;
	}

	//Otras variables
	.body {
		margin-top: 4rem;
		height: calc(90vh - 4rem);
	}

	.box-height {
		height: calc(90vh - 3rem);
	}
	//Header
	.tabs-header {
		background: #f2f5ff;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		box-shadow: #335eea;
	}

	.close-btn {
		font-size: 46px;
		color: #8969eb;
		cursor: pointer;
		text-align: left;
	}

	.title-publications {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		color: #8969eb;
		margin-left: auto;
		padding-top: 1%;
		text-align: center;
	}

	.button-options {
		background-color: transparent;
		margin: auto;
		padding-top: 14%;
		font-size: 30px;
		color: #8969eb;
	}

	.dropdown-content {
		background-color: white;
		border-radius: 4px;
		box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
		background: #ffffff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		transform: rotate(-360);
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 21px;
		color: rgba(122, 121, 121, 0.5);
		transform: translateX(-72%);
	}

	//Caja superior
	.content-general {
		border-top-left-radius: 80px;
		border-top-right-radius: 80px;
		padding-top: 2%;
	}

	//Contenido
	.contenido {
		padding: 0;
		margin: 0;
	}

	/* .content ul {
		list-style: disc outside;
		margin-left: 0em;
		margin-top: 1em;
	}

	.label-calendar {
		font-weight: 500;
		font-size: 20px;
		line-height: 30px;
		text-align: center;

		color: #8969eb;
	}

	.close-btn {
		font-size: 46px;
		color: #8969eb;
		cursor: pointer;
		margin-left: 5%;
	} */
}
</style>
