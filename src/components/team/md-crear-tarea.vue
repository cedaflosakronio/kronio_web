<template>
	<modal name="md-crear-tarea" width="30%" height="auto" :scrollable="true" :adaptive="true" :min-width="350">
		<div class="example-modal-content">
			<svg
				width="100"
				height="100"
				viewBox="0 0 60 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="img-modal"
			>
				<path
					d="M34.7419 39.3326C33.2748 38.309 31.7069 37.4748 30.0672 36.8375C32.2485 34.8547 33.6955 32.0771 33.9472 28.9676C37.255 25.7441 41.591 23.9769 46.2391 23.9769C49.8678 23.9769 53.3519 25.0697 56.3154 27.1368C57.3775 27.8775 58.8377 27.6175 59.5784 26.5554C60.3186 25.4937 60.0586 24.0328 58.997 23.2925C57.5299 22.2688 55.9616 21.4351 54.3219 20.7974C56.7288 18.6094 58.2422 15.4546 58.2422 11.9532C58.2422 5.36198 52.8808 0 46.2904 0C39.7004 0 34.3391 5.36198 34.3391 11.9532C34.3391 15.4404 35.8401 18.5838 38.2305 20.7708C37.9032 20.8967 37.5778 21.0299 37.2555 21.1719C35.7888 21.8174 34.41 22.6112 33.1278 23.5434C31.3595 19.1497 27.0542 16.0402 22.0357 16.0402C15.4457 16.0402 10.0839 21.4021 10.0839 27.9929C10.0839 31.4705 11.5767 34.6052 13.9543 36.7913C7.59736 39.1733 2.44293 44.2895 0.344535 50.8143C-0.351268 52.978 0.0172332 55.2726 1.35574 57.1098C2.69424 58.9466 4.76517 60 7.03752 60H27.4259C28.72 60 29.7692 58.9507 29.7692 57.656C29.7692 56.3617 28.72 55.3124 27.4259 55.3124H7.03752C6.27991 55.3124 5.58961 54.9612 5.14328 54.3487C4.69696 53.7361 4.57428 52.9711 4.80591 52.2496C7.1222 45.0472 14.1864 40.0171 21.9845 40.0171C25.6127 40.0171 29.0972 41.1099 32.0608 43.177C33.1223 43.9177 34.5831 43.6572 35.3237 42.5955C36.0639 41.5338 35.8039 40.0729 34.7419 39.3326ZM46.2904 4.68761C50.2963 4.68761 53.5551 7.94683 53.5551 11.9532C53.5551 15.9591 50.2963 19.2188 46.2904 19.2188C42.285 19.2188 39.0257 15.9591 39.0257 11.9532C39.0257 7.94683 42.285 4.68761 46.2904 4.68761ZM22.0357 20.7273C26.0416 20.7273 29.3005 23.987 29.3005 27.9929C29.3005 31.9993 26.0416 35.2585 22.0357 35.2585C18.0298 35.2585 14.771 31.9993 14.771 27.9929C14.771 23.987 18.0298 20.7273 22.0357 20.7273ZM60 48.8672C60 50.1615 58.9508 51.2108 57.6562 51.2108H51.2118V57.656C51.2118 58.9507 50.1626 60 48.8685 60C47.574 60 46.5248 58.9507 46.5248 57.656V51.2108H40.0804C38.7863 51.2108 37.7371 50.1615 37.7371 48.8672C37.7371 47.5725 38.7863 46.5232 40.0804 46.5232H46.5248V40.078C46.5248 38.7837 47.574 37.7344 48.8685 37.7344C50.1626 37.7344 51.2118 38.7837 51.2118 40.078V46.5232H57.6562C58.9508 46.5232 60 47.5725 60 48.8672Z"
					fill="#7A7979"
				/>
			</svg>

			<span @click="hide()" class="close-btn">
				<i class="fas fa-times"></i>
			</span>
			<p class="title-employee">Crear tarea</p>
			<p class="subtitle-employee">Crea la tarea que necesitas para tu equipo de trabajo.</p>

			<div class="columns is-centered"></div>

			<div class="column box-select">
				<input class="input input-text" type="text" placeholder="Nombre de la tarea" />
			</div>

			<div class="column box-select">
				<b-input maxlength="200" type="textarea" placeholder="Descripción"></b-input>
			</div>

			<div class="column box-select">
				<div class="tarjeta-select">
					<p class="label-left-descripcion">Asignar a</p>
					<b-field>
						<b-select placeholder="seleccione" size="is-small" expanded v-model="valor" @input="cambio">
							<option v-for="dato in tipos" :value="dato.value" :key="dato.id" class="option-expiran">{{
								dato.value
							}}</option>
						</b-select>
					</b-field>
				</div>
			</div>

			<div class="column box-select">
				<div class="tarjeta-select">
					<p class="label-left-descripcion">Vencimiento</p>
					<b-field>
						<b-select placeholder="seleccione" size="is-small" expanded v-model="valor" @input="cambio">
							<option v-for="dato in tipos" :value="dato.value" :key="dato.id" class="option-expiran">{{
								dato.value
							}}</option>
						</b-select>
					</b-field>
				</div>
			</div>

			<div class="columns is-centered box-botton">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth">Confirmar</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	props: { type: Boolean },
})
export default class MdHolidays extends Vue {
	private medioDia = true;
	private unDia = false;
	private variosDia = false;

	private radio = '';

	public tipos = [
		{
			id: 1,
			value: 'Contratos',
		},
		{
			id: 2,
			value: 'Ids',
		},
		{
			id: 3,
			value: 'Nóminas',
		},
		{
			id: 4,
			value: 'Ausencias por enfermedad',
		},
	];

	public hide() {
		this.$modal.hide('md-crear-tarea');
	}

	public daySelected(value: string) {
		switch (value) {
			case 'M':
				this.medioDia = true;
				this.unDia = false;
				this.variosDia = false;
				break;
			case 'U':
				this.medioDia = false;
				this.unDia = true;
				this.variosDia = false;
				break;
			case 'V':
				this.medioDia = false;
				this.unDia = false;
				this.variosDia = true;
				break;

			default:
				break;
		}
	}
}
</script>

<style lang="scss" scoped>
.box-botton {
	margin-bottom: 3%;
}
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
	@media screen and (max-width: 768px) {
		display: initial;
		width: 80%;
	}
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

.tarjeta-select {
	border: 0.6px solid rgba(122, 121, 121, 0.5);
	box-sizing: border-box;
	border-radius: 3px;
	width: 100%;
	padding: 4%;
	margin-bottom: 5%;
}

.label-left-descripcion {
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	color: rgba(122, 121, 121, 0.5);
	text-align: left;
}
.box-select {
	padding-left: 9%;
	padding-right: 9%;
	padding-top: 0;
	padding-bottom: 0;
}
.input-text {
	min-height: 5em;
	height: 7em;
	margin-bottom: 5%;
	text-align: left;
	padding-bottom: 6%;
}
</style>
