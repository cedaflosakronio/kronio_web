<template>
	<modal
		name="md-team-documents-upload"
		width="30%"
		height="auto"
		:scrollable="true"
		:adaptive="true"
		:min-width="400"
	>
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
			<p class="title-employee">Subir documentos</p>
			<p class="subtitle-employee">
				Selecciona los documentos que quieres subir al perfil de Diana y su visibilidad.
			</p>

			<div class="columns is-centered"></div>
			<div class="column box-select">
				<div class="tarjeta-select">
					<p class="label-left-descripcion">Fecha de nacimiento</p>
					<b-field>
						<b-select placeholder="seleccione" size="is-small" expanded v-model="valor" @input="cambio">
							<option v-for="dato in tipos" :value="dato.value" :key="dato.id" class="option-expiran">{{
								dato.value
							}}</option>
						</b-select>
					</b-field>
				</div>
			</div>

			<div class="box-column">
				<div class="columns">
					<div class="column is-full">
						<svg width="66" height="72" viewBox="0 0 66 72" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M49.0641 31.1625V17.5359C49.0641 17.1422 48.8812 16.7906 48.6281 16.4953L33.3563 0.464062C33.075 0.16875 32.6672 0 32.2594 0H8.04375C3.57187 0 0 3.64219 0 8.11406V53.9156C0 58.3875 3.57187 61.9734 8.04375 61.9734H27.1687C30.7828 67.9781 37.3641 72 44.8453 72C56.2219 72 65.5031 62.7609 65.5031 51.3703C65.5172 41.4141 58.3734 33.1031 49.0641 31.1625ZM33.7641 5.27344L44.0156 16.0594H37.3641C35.3813 16.0594 33.7641 14.4281 33.7641 12.4453V5.27344ZM8.04375 58.9781C5.23125 58.9781 2.99531 56.7281 2.99531 53.9156V8.11406C2.99531 5.2875 5.23125 2.99531 8.04375 2.99531H30.7688V12.4313C30.7688 16.0734 33.7219 19.0547 37.3781 19.0547H46.0828V30.7688C45.6328 30.7547 45.2672 30.7125 44.8875 30.7125C39.6562 30.7125 34.8328 32.7234 31.2047 35.8734H12.1219C11.2922 35.8734 10.6172 36.5484 10.6172 37.3781C10.6172 38.2078 11.2922 38.8828 12.1219 38.8828H28.3922C27.3234 40.3875 26.4375 41.8781 25.7484 43.5375H12.1219C11.2922 43.5375 10.6172 44.2125 10.6172 45.0422C10.6172 45.8719 11.2922 46.5469 12.1219 46.5469H24.7781C24.3984 48.0516 24.2016 49.7109 24.2016 51.3844C24.2016 54.0844 24.7219 56.7563 25.6781 59.0063H8.04375V58.9781ZM44.8594 69.0187C35.1422 69.0187 27.225 61.1156 27.225 51.3844C27.225 41.6531 35.1141 33.75 44.8594 33.75C54.6047 33.75 62.4937 41.6531 62.4937 51.3844C62.4937 61.1156 54.5766 69.0187 44.8594 69.0187Z"
								fill="#7A7979"
								fill-opacity="0.5"
							/>
							<path
								d="M12.1219 31.3609H27.3234C28.1531 31.3609 28.8281 30.6859 28.8281 29.8562C28.8281 29.0266 28.1531 28.3516 27.3234 28.3516H12.1219C11.2922 28.3516 10.6172 29.0266 10.6172 29.8562C10.6313 30.6859 11.3062 31.3609 12.1219 31.3609Z"
								fill="#7A7979"
								fill-opacity="0.5"
							/>
							<path
								d="M37.14 51.793L43.3135 45.1414V61.5242C43.3135 62.3539 43.9885 63.0289 44.8182 63.0289C45.6479 63.0289 46.3228 62.3539 46.3228 61.5242V45.1414L52.5385 51.793C53.115 52.3977 54.0713 52.4398 54.676 51.8633C55.2807 51.2867 55.3228 50.3445 54.7463 49.7539L45.9713 40.318C45.69 40.0227 45.2963 39.8398 44.8744 39.8398C44.4525 39.8398 44.0588 40.0227 43.7775 40.318L34.9885 49.7539C34.4119 50.3586 34.4541 51.3148 35.0447 51.8633C35.6353 52.4258 36.5635 52.3836 37.14 51.793Z"
								fill="#7A7979"
								fill-opacity="0.5"
							/>
						</svg>
					</div>
				</div>
				<div class="columns">
					<div class="column is-full box-text">
						<p>Arrastra aquí la plantilla con todos tus empleados o selecciona archivo/s</p>
					</div>
				</div>
			</div>
			<div class="column box-select" v-if="valor != ''">
				<div class="tarjeta-select">
					<div class="columns is-mobile">
						<div class="column">
							<svg
								width="17"
								height="19"
								viewBox="0 0 17 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.7336 8.28681V4.75031C12.7336 4.64812 12.6861 4.55688 12.6204 4.48024L8.65693 0.319657C8.58394 0.243014 8.4781 0.199219 8.37226 0.199219H2.08759C0.927007 0.199219 0 1.14447 0 2.30506V14.1919C0 15.3525 0.927007 16.2832 2.08759 16.2832H7.05109C7.98905 17.8415 9.69708 18.8853 11.6387 18.8853C14.5912 18.8853 17 16.4875 17 13.5313C17.0036 10.9474 15.1496 8.79046 12.7336 8.28681ZM8.76277 1.56783L11.4234 4.3671H9.69708C9.18248 4.3671 8.76277 3.94374 8.76277 3.42914V1.56783ZM2.08759 15.5058C1.35766 15.5058 0.777372 14.9218 0.777372 14.1919V2.30506C0.777372 1.57148 1.35766 0.976591 2.08759 0.976591H7.9854V3.4255C7.9854 4.37075 8.75182 5.14447 9.70073 5.14447H11.9599V8.18462C11.8431 8.18097 11.7482 8.17002 11.6496 8.17002C10.292 8.17002 9.04014 8.69192 8.09854 9.50943H3.14598C2.93066 9.50943 2.75547 9.68462 2.75547 9.89995C2.75547 10.1153 2.93066 10.2905 3.14598 10.2905H7.36861C7.09124 10.681 6.86131 11.0678 6.68248 11.4985H3.14598C2.93066 11.4985 2.75547 11.6737 2.75547 11.889C2.75547 12.1043 2.93066 12.2795 3.14598 12.2795H6.43066C6.33212 12.67 6.28102 13.1007 6.28102 13.535C6.28102 14.2357 6.41606 14.9291 6.66423 15.5131H2.08759V15.5058ZM11.6423 18.1116C9.12044 18.1116 7.06569 16.0605 7.06569 13.535C7.06569 11.0094 9.11314 8.95834 11.6423 8.95834C14.1715 8.95834 16.219 11.0094 16.219 13.535C16.219 16.0605 14.1642 18.1116 11.6423 18.1116Z"
									fill="#7A7979"
									fill-opacity="0.5"
								/>
								<path
									d="M3.14832 8.33962H7.09358C7.30891 8.33962 7.48409 8.16443 7.48409 7.9491C7.48409 7.73378 7.30891 7.55859 7.09358 7.55859H3.14832C2.93299 7.55859 2.75781 7.73378 2.75781 7.9491C2.76146 8.16443 2.93664 8.33962 3.14832 8.33962Z"
									fill="#7A7979"
									fill-opacity="0.5"
								/>
								<path
									d="M9.63755 13.6413L11.2397 11.915V16.1668C11.2397 16.3821 11.4149 16.5573 11.6302 16.5573C11.8456 16.5573 12.0208 16.3821 12.0208 16.1668V11.915L13.6339 13.6413C13.7835 13.7982 14.0317 13.8091 14.1886 13.6595C14.3456 13.5099 14.3565 13.2653 14.2069 13.1121L11.9295 10.6632C11.8565 10.5865 11.7543 10.5391 11.6448 10.5391C11.5354 10.5391 11.4332 10.5865 11.3602 10.6632L9.07915 13.1121C8.92952 13.269 8.94047 13.5172 9.09375 13.6595C9.24704 13.8055 9.48791 13.7945 9.63755 13.6413Z"
									fill="#7A7979"
									fill-opacity="0.5"
								/>
							</svg>
						</div>
						<div class="column is-four-fifths">
							<p class="label-left-descripcion">nombre del archivo</p>
						</div>
						<div class="column box-right-icon">
							<svg
								width="17"
								height="19"
								viewBox="0 0 17 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.7336 8.28681V4.75031C12.7336 4.64812 12.6861 4.55688 12.6204 4.48024L8.65693 0.319657C8.58394 0.243014 8.4781 0.199219 8.37226 0.199219H2.08759C0.927007 0.199219 0 1.14447 0 2.30506V14.1919C0 15.3525 0.927007 16.2832 2.08759 16.2832H7.05109C7.98905 17.8415 9.69708 18.8853 11.6387 18.8853C14.5912 18.8853 17 16.4875 17 13.5313C17.0036 10.9474 15.1496 8.79046 12.7336 8.28681ZM8.76277 1.56783L11.4234 4.3671H9.69708C9.18248 4.3671 8.76277 3.94374 8.76277 3.42914V1.56783ZM2.08759 15.5058C1.35766 15.5058 0.777372 14.9218 0.777372 14.1919V2.30506C0.777372 1.57148 1.35766 0.976591 2.08759 0.976591H7.9854V3.4255C7.9854 4.37075 8.75182 5.14447 9.70073 5.14447H11.9599V8.18462C11.8431 8.18097 11.7482 8.17002 11.6496 8.17002C10.292 8.17002 9.04014 8.69192 8.09854 9.50943H3.14598C2.93066 9.50943 2.75547 9.68462 2.75547 9.89995C2.75547 10.1153 2.93066 10.2905 3.14598 10.2905H7.36861C7.09124 10.681 6.86131 11.0678 6.68248 11.4985H3.14598C2.93066 11.4985 2.75547 11.6737 2.75547 11.889C2.75547 12.1043 2.93066 12.2795 3.14598 12.2795H6.43066C6.33212 12.67 6.28102 13.1007 6.28102 13.535C6.28102 14.2357 6.41606 14.9291 6.66423 15.5131H2.08759V15.5058ZM11.6423 18.1116C9.12044 18.1116 7.06569 16.0605 7.06569 13.535C7.06569 11.0094 9.11314 8.95834 11.6423 8.95834C14.1715 8.95834 16.219 11.0094 16.219 13.535C16.219 16.0605 14.1642 18.1116 11.6423 18.1116Z"
									fill="#7A7979"
									fill-opacity="0.5"
								/>
								<path
									d="M3.14832 8.33962H7.09358C7.30891 8.33962 7.48409 8.16443 7.48409 7.9491C7.48409 7.73378 7.30891 7.55859 7.09358 7.55859H3.14832C2.93299 7.55859 2.75781 7.73378 2.75781 7.9491C2.76146 8.16443 2.93664 8.33962 3.14832 8.33962Z"
									fill="#7A7979"
									fill-opacity="0.5"
								/>
								<path
									d="M9.63755 13.6413L11.2397 11.915V16.1668C11.2397 16.3821 11.4149 16.5573 11.6302 16.5573C11.8456 16.5573 12.0208 16.3821 12.0208 16.1668V11.915L13.6339 13.6413C13.7835 13.7982 14.0317 13.8091 14.1886 13.6595C14.3456 13.5099 14.3565 13.2653 14.2069 13.1121L11.9295 10.6632C11.8565 10.5865 11.7543 10.5391 11.6448 10.5391C11.5354 10.5391 11.4332 10.5865 11.3602 10.6632L9.07915 13.1121C8.92952 13.269 8.94047 13.5172 9.09375 13.6595C9.24704 13.8055 9.48791 13.7945 9.63755 13.6413Z"
									fill="#7A7979"
									fill-opacity="0.5"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="columns is-mobile">
					<div class="column">
						<b-checkbox v-model="notificacion" :disabled="disabledNotificacion">
							<p>Enviar notificación a Belen</p>
						</b-checkbox>
					</div>
				</div>
				<div class="columns is-mobile">
					<div class="column"></div>
					<div class="column is-three-fifths">
						<p class="texto-consejo">Enviaremos un email a Belen para informarle sobre este documento</p>
					</div>
					<div class="column"></div>
				</div>
				<div class="columns is-mobile">
					<div class="column">
						<b-checkbox v-model="firma" @input="solicitarFirma">
							<p>Solicitar firma electrónica</p>
						</b-checkbox>
					</div>
				</div>
				<div class="columns is-mobile">
					<div class="column"></div>
					<div class="column is-three-fifths">
						<p class="texto-consejo">
							Selecciona quién tiene que firmar el documento. Todos los firmantes recibirán un email. La
							firma electrónica solo está disponible para documentos PDF.
						</p>
					</div>
					<div class="column"></div>
				</div>
			</div>
			<div class="column">
				<p class="firma-text">Saber más sobre firma electrónica</p>
			</div>
			<div class="column box-select" v-if="firma">
				<div class="dropdown is-up" :class="dropSelected ? 'is-active' : ''">
					<div class="dropdown-trigger">
						<div class="columns box-dropdown-select is-mobile">
							<div class="column is-four-fifths">
								<p class="label-left-descripcion">Firmantes</p>
								<p class="text-input-selected">Belen Zavala</p>
							</div>
							<div class="column icon-drop-select" @click="dropSelect()">
								<i class="fas fa-chevron-down" v-if="dropSelected"></i>
								<i class="fas fa-chevron-up" v-if="!dropSelected"></i>
							</div>
						</div>
					</div>
					<div class="dropdown-menu box-drop-content" id="dropdown-menu7" role="menu">
						<div class="dropdown-content">
							<div class="field dropdown-item-box">
								<p class="control has-icons-left has-icons-right">
									<input class="input" type="text" placeholder="Filtrar por nombre" />
									<span class="icon is-small is-left">
										<i class="fas fa-search"></i>
									</span>
								</p>
							</div>
							<div class="columns dropdown-item-menu-box is-mobile">
								<div class="column">
									<p class="text-drop-selection">Seleccionar</p>
								</div>
								<div class="column">
									<p class="text-drop-selection-all">Todo</p>
								</div>
								<div class="column">
									<p class="text-drop-selection">Ninguno</p>
								</div>
							</div>
							<hr class="hr-top" />
							<div class="columns box-item-dropdown is-mobile" @click="itemSelect">
								<div class="column">
									<i class="fas fa-circle"></i>
								</div>
								<div class="column is-four-fifths">
									<p class="text-input-selected">Belen Zavala Luque</p>
								</div>
								<div class="column">
									<b-checkbox></b-checkbox>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="columns is-centered box-botton">
				<div class="column is-10">
					<button class="button btn-wellcome is-fullwidth" @click="subir" :disabled="disable">
						{{ buttonText }}
					</button>
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
	public disable = true;
	public valor = '';
	public buttonText = 'Subir';
	public notificacion = false;
	public disabledNotificacion = false;
	public firma = false;
	public firmante: '';
	public dropSelected: boolean = false;
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
		this.valor = '';
		this.$modal.hide('md-team-documents-upload');
	}

	public subir() {
		console.log(this.valor);
	}

	public dropSelect() {
		console.log('selected after', this.dropSelected);
		this.dropSelected = !this.dropSelected;
		console.log('selected before', this.dropSelected);
	}

	public itemSelect() {
		this.dropSelected = false;
	}

	cambio() {
		this.buttonText = 'Subir 1 doc';
		this.disable = false;
	}

	public solicitarFirma() {
		if (this.firma) {
			this.disabledNotificacion = true;
			this.notificacion = true;
			this.buttonText = 'Subir 1 doc y pedir firma electrónica';
		} else {
			this.disabledNotificacion = false;
			this.notificacion = false;
			this.buttonText = 'Subir 1 doc';
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
	@media screen and (max-width: 1440px) {
		font-size: 20px;
	}
	@media screen and (max-width: 768px) {
		display: initial;
		width: 80%;
		font-size: 18px;
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
.b-checkbox.checkbox:not(.button) {
	margin-right: 9.5em;
}
.firma-text {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
	margin-right: 4.5rem;
	color: #335eea;
	@media screen and (max-width: 768px) {
		margin-right: 0;
	}
}
//Lista de acciones
.box-column {
	padding: 1%;
	background: #ffffff;
	border-radius: 3px;
	border: 0.6px solid rgba(122, 121, 121, 0.5);
	margin: 5%;
	margin-left: 9%;
	margin-right: 9%;
	padding-top: 5%;
	padding-bottom: 5%;
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
	text-align: center;
}
.box-img {
	padding-top: 5%;
	width: 50%;
}
.texto-consejo {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	text-align: left;
	color: rgba(122, 121, 121, 0.5);
}
.consejo {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	text-align: center;
	margin-bottom: 5%;
	color: #7a7979;
}
.icon-consejo {
	text-align: right;
}
.caja-consejo {
	margin-left: 5%;
}

.tarjeta-select {
	border: 0.6px solid rgba(122, 121, 121, 0.5);
	box-sizing: border-box;
	border-radius: 3px;
	width: 100%;
	padding: 4%;
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
}

.box-drop-content {
	right: -3%;
	left: -3% !important;
}
.text-drop-selection {
	font-size: 14px;
	line-height: 21px;

	color: rgba(122, 121, 121, 0.5);
}
.text-drop-selection-all {
	font-size: 14px;
	line-height: 21px;

	color: #335eea;
}
.hr-top {
	margin-top: 0;
}
.box-item-dropdown {
	padding-left: 10%;
	padding-right: 15%;
}
.input-circle {
	background-color: red;
}
.dropdown-item-box {
	padding-left: 20%;
	padding-right: 20%;
}
.dropdown-item-menu-box {
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 4%;
}
.box-dropdown-select {
	border: 0.6px solid rgba(122, 121, 121, 0.5);
	box-sizing: border-box;
	border-radius: 3px;
	width: 464px;
	margin-bottom: 2%;
	padding: 4%;
	@media screen and (max-width: 1440px) {
		width: 376px;
	}
	@media screen and (max-width: 768px) {
		width: 322px;
	}
}
.icon-drop-select {
	margin-top: auto;
	margin-bottom: auto;
	color: rgba(122, 121, 121, 0.5);
}
.text-input-selected {
	font-size: 12px;
	line-height: 18px;
	text-align: left;
	color: #7a7979;
}
.b-checkbox.checkbox[data-v-3eae1702]:not(.button) {
	@media screen and (max-width: 768px) {
		margin-right: 20%;
	}
}
.box-right-icon {
	@media screen and (max-width: 768px) {
		padding-right: 20%;
	}
}
</style>
