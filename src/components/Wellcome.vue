<template>
	<modal name="wellcome-admin" classes="modal-bg">
		<div class="example-modal-content">
			<img class="img-modal-wellcome" src="../assets/modal_new.png" alt="" />
			<p class="modal-title">
				¡BIENVENIDO A TU NUEVO HOGAR!
			</p>
			<p class="modal-subtitle">
				Esperamos que Kronio sea la solución para tu empresa
			</p>
			<button class="button modal-text-wellcome">Ir a inicio</button>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class WellcomeAdmin extends Vue {}
</script>

<style lang="scss" scoped>
.bg-modal {
	background: rgba(227, 231, 233, 0.7) !important;
}

.modal-bg {
	background-color: #8969eb !important;
}

.modal-title {
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	text-align: center;
	color: #ffffff;
}

.modal-subtitle {
	font-weight: normal;
	font-size: 22px;
	line-height: 36px;
	text-align: center;
	color: #ffffff;
	margin: 2% 20% 2% 20%;
}

.modal-text-wellcome {
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	color: #8969eb;
	margin-top: 2%;
}

.img-modal-wellcome {
	padding-top: 4%;
}
</style>
