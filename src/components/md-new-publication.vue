<template>
	<modal name="md-new-publication" width="25%" height="45%">
		<div class="example-modal-content">
			<img class="img-modal" src="../assets/documents.png" alt="" />
			<p class="title-employee">
				Publicar comunicado
			</p>
			<p class="subtitle-employee">
				Al publicar el comunicado aparecerá visible en el calendario y panel de control de cada empleado.
			</p>
			<div class="columns is-centered margin-fields">
				<div class="column is-8">
					<b-field class="texto" label="Enviar notificación por email"> </b-field>
				</div>
				<div class="column is-3">
					<b-switch></b-switch>
				</div>
			</div>
			<div class="columns is-centered margin-fields">
				<div class="column is-8">
					<b-field class="texto" label="Permitir comentarios y reacciones"> </b-field>
				</div>
				<div class="column is-3">
					<b-switch></b-switch>
				</div>
			</div>

			<div class="columns is-centered">
				<div class="column is-8">
					<button class="button btn-wellcome is-fullwidth">Publicar comunicado</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MdNewPublication extends Vue {}
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
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: rgba(122, 121, 121, 0.5);
	margin: 5% 8% 5% 8%;
}

.img-modal {
	padding-top: 5%;
}

.btn-wellcome {
	background: #335eea;
	border-radius: 4px;
	color: #ffffff;
	font-size: 25px;
}

.texto {
	font-weight: normal !important;
	font-size: 15px !important;
	line-height: 22px !important;
	color: #7a7979 !important;
}

.texto > .label {
	font-weight: normal !important;
	font-size: 15px !important;
	line-height: 22px !important;
	color: #7a7979 !important;
}

.margin-fields {
	margin-top: 3%;
	margin-bottom: 3%;
}
</style>
