<template>
	<div class="enterprise">
		<div class="columns is-centered">
			<div class="columns is-2 img-user-enterprise">
				<img src="../assets/configAdmin/user_enterprise.png" alt="" />
			</div>
		</div>
		<div class="columns is-centered label-enterprise">
			<div class="columns is-2">
				<p class="info-general">Información General</p>
			</div>
		</div>
		<div class="columns is-centered">
			<div class="column is-4">
				<div class="box">
					<article class="media">
						<div class="media-content">
							<div class="content">
								<div class="field border-form">
									<label class="label label-form">Nombre de la empresa</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Id de la empresa</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Tamaño del equipo</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Dirección empresarial</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Pais</label>
									<b-select class="select-prefix" v-model="prefix" placeholder="Prefijo">
										<option v-for="option in data" :value="option" :key="option">
											{{ option }}
										</option>
									</b-select>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="column is-1"></div>
			<div class="column is-4">
				<div class="box">
					<article class="media">
						<div class="media-content">
							<div class="content">
								<div class="field border-form">
									<label class="label label-form">Ciudad</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Tipo de empresa</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Contribuyente especial</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Actividad económica</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
								<div class="field border-form">
									<label class="label label-form">Correo empresarial</label>
									<div class="control">
										<input class="input no-border-form" v-model="email" placeholder="" />
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
		<br />
		<br />
		<hr />
		<br />
		<br />
		<div class="columns is-centered">
			<div class="columns is-2 img-user-enterprise">
				<img src="../assets/modal_holidays.png" alt="" />
			</div>
		</div>
		<div class="columns is-centered label-enterprise">
			<div class="columns is-2">
				<p class="info-general">Personaliza tu espacio</p>
			</div>
		</div>
		<div class="columns is-centered">
			<div class="column is-4">
				<p class="logo-enterprise">Logo de la empresa</p>
				<p class="info-logo-enterprise">
					Sube tu logo de empresa (máx. 1MB). Te recomendamos que utilices una imagen en formato PNG en blanco
					y fondo transparente y de 260x80px.
				</p>
				<button class="button btn-upload is-large">Subir imagen</button>
				<button class="button btn-delete is-danger is-outlined is-large">Borrar</button>
			</div>
			<div class="column is-1"></div>
			<div class="column is-4">
				<img src="../assets/configAdmin/theme_kronio.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ConfigEnterprise extends Vue {
	public data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
</script>

<style lang="scss" scoped>
.select {
	width: 100% !important;
	height: 2.5em !important;

	select {
		width: 100% !important;
		padding-left: 12% !important;
		padding-right: 3% !important;
		padding-bottom: 0% !important;
		padding-top: 0% !important;
		height: 2.5em !important;
	}
}

.enterprise {
	.img-user-enterprise {
		margin-top: 2%;
	}

	.label-enterprise {
		margin-top: 3%;
	}

	.info-general {
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
		text-align: center;
		color: #7a7979;
		margin-top: 10%;
		margin-bottom: 40%;
	}

	.border-form {
		border: 1px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		margin-top: 5%;
		margin-bottom: 2%;
		padding-top: 2%;
		padding-bottom: 2%;
	}

	.no-border-form {
		border: 0px !important;
		box-shadow: none !important;
		font-size: 15px;
	}

	.label-form {
		padding-left: 3%;
		font-weight: 500;
		font-size: 18px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5) !important;
	}

	.logo-enterprise {
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
		color: #7a7979;
		margin-top: 10%;
	}

	.info-logo-enterprise {
		font-weight: normal;
		font-size: 16px;
		line-height: 21px;
		color: rgba(122, 121, 121, 0.5);
		padding-right: 35% !important;
		margin-top: 5%;
		margin-bottom: 10%;
	}

	.btn-upload {
		background: #335eea;
		border-radius: 4px;
		color: #ffffff;
	}

	.btn-delete {
		margin-left: 5%;
		padding-left: 12% !important;
		padding-right: 12% !important;
	}
}
</style>
