<template>
	<div class="app">
		<div class="body">
			<div class="columns is-centered">
				<div class="column is-full">
					<div class="card box-height">
						<div class="card-content">Ausencia</div>
					</div>
				</div>
			</div>
		</div>
		<MdNewPublication />
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
import MdNewPublication from '@/components/md-new-publication.vue';

@Component({
	components: { NavBar, LogoSVG, MdNewPublication },
})
export default class NewPublications extends PageBase {
	private selectExpiran: boolean = false;
	private save: boolean = false;
	public showNewOptions: boolean = false;
	private menu_start: INavBarTitle[] = [];
	public data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	private dia = 1;
	private tipos = [
		{
			id: 0,
			value: 'Días laborables',
		},
		{
			id: 1,
			value: 'Días calendarios',
		},
	];
	private diasAcumulables = [
		{
			id: 0,
			value: 'Sí',
		},
		{
			id: 1,
			value: 'No',
		},
	];
	private expiracion = [
		{
			id: 0,
			value: 'Final de enero',
		},
		{
			id: 1,
			value: 'Final de febrero',
		},
		{
			id: 2,
			value: 'Final de marzo',
		},
		{
			id: 3,
			value: 'Final de abril',
		},
		{
			id: 4,
			value: 'Final de mayo',
		},
		{
			id: 5,
			value: 'Final de junio',
		},
		{
			id: 6,
			value: 'Final de julio',
		},
		{
			id: 7,
			value: 'Final de agosto',
		},
		{
			id: 8,
			value: 'Final de septiembre',
		},
		{
			id: 9,
			value: 'Final de octubre',
		},
		{
			id: 10,
			value: 'Final de noviembre',
		},
		{
			id: 11,
			value: 'Final de diciembre',
		},
	];
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
	private mostrarExpiracion: boolean = false;
	diaAcumulableSeleccion() {
		this.mostrarExpiracion = this.diasAcumulables[this.dia].id == 0;
		this.save = this.diasAcumulables[this.dia].id == 0;
	}
	public showExpiran() {
		this.selectExpiran = !this.selectExpiran;
	}
	public async created() {
		await super.created();
	}

	public message(): string {
		// this.name will be typed
		return 'Hello, ' + this.$props;
	}

	alerta() {
		this.$buefy.snackbar.open({
			message:
				'<div class="columns"><div class="column is-three-quarters"><p class="mensaje">Datos guardados.</p></div><div class="column"><button :click="deshacer()" type="is-text" style="background-color: transparent; border: 0;color: #7D9CFF;font-family: Poppins;font-style: normal;font-weight: normal;font-size: 12px;line-height: 18px;">Deshacer</button></div></div>',
			type: 'is-white',
			position: 'is-bottom-left',
			actionText: 'X',
			queue: false,
			onAction: () => {
				//console.log('Accion cerrrar');
			},
			indefinite: true,
		});
	}

	public deshacer() {
		//console.log('Deshacer');
	}

	public async show() {
		if (this.showNewOptions) {
			this.showNewOptions = false;
		} else {
			this.showNewOptions = true;
		}
	}
}
</script>

<style lang="scss" scoped>
.app {
	.box-height {
		width: calc(100vw - 4rem);
		height: 97%;
		border-radius: 8px;
		//box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;
	}

	.body {
		margin-top: 0;
		height: calc(120vh - 4rem);
	}
}
</style>
