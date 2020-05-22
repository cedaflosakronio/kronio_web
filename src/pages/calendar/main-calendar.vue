<template>
	<div class="app">
		<NavBar :menu_start="menu_start" :menu_end="menu_end">
			<template slot="navbar-brand">
				<LogoSVG />
			</template>
			<template slot="navbar-end">
				<a class="navbar-item" @click="logout()">
					Salir
					<i class="fas fa-sign-out-alt icon-pl"></i>
				</a>
			</template>
		</NavBar>
		<div class="body">
			<div class="columns is-centered">
				<div class="column is-10">
					<div class="card box-height">
						<header class="card-header tabs-header">
							<span @click="exit()" class="close-btn">
								<i class="far fa-times-circle"></i>
							</span>
							<p class="label-calendar">Calendario</p>
						</header>
						<div class="card-content">
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
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
@Component({
	components: { NavBar, LogoSVG },
})
export default class MainCalendar extends PageBase {
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
	clicado() {
		console.log('click');
		return this.fechaMinima;
	}
}
</script>

<style lang="scss">
.app {
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

	//Otras variables
	.body {
		margin-top: 4rem;
		height: calc(90vh - 4rem);
	}

	.box-height {
		height: 95vh; //calc(80vh - 3rem);
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
