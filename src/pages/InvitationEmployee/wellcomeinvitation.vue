<template>
	<div class="login">
		<div class="columns is-vcentered is-mobile is-centered margin-top-logo">
			<div class="column is-half">
				<a class="" href="https://kronio.io">
					<img class="" src="../../assets/logo_color.png" />
				</a>
			</div>
		</div>
		<div class="columns">
			<div class="column is-4"></div>
			<div class="column is-4 is-mobile is-vcentered margin-top-form">
				<div class="box margin-top-form">
					<article class="media padding-top-media">
						<div class="media-content">
							<div class="content">
								<div class="columns">
									<div class="column is-full">
										<p class="color-p-name has-text-left">
											Hola Génesis
										</p>
										<p class="color-p-body has-text-justified">
											Hola (nombre del empleado) han empezado a usar Kronio para gestionar tus
											marcaciones, ausencias, nóminas, vacaciones y todo lo relacionado con la
											gestión de personas. (nombre del dueño/manager o quien creó) necesita que
											actives tu cuenta en Kronio cuanto antes. Será muy rápido.
										</p>
									</div>
								</div>
								<div class="columns is-centered">
									<div class="column is-full">
										<section class="margin-button">
											<div class="has-text-centered">
												<b-button
													@click="continuar()"
													type="is-primary"
													expanded
													class="btn-register body"
													>Activar cuenta</b-button
												>
											</div>
										</section>
									</div>
								</div>
								<div class="columns">
									<div class="column">
										<p class="color-p-note has-text-justified">
											A partir de ahora, si quieres tramitar una baja, consultar tu nómina o
											acceder a tus datos personales podrás hacerlo entrando a Kronio. Kronio es
											100% seguro, tu privacidad está garantizada
										</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="column is-4"></div>
		</div>
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import LogoSVG from '@/components/LogoSVG.vue';

@Component({
	components: { LogoSVG },
})
export default class WellcomeInvitation extends PageBase {
	public async created() {
		await super.created();
	}

	public async continuar() {
		this.$router.push('/registerEmployeePerson');
	}
}
</script>

<style lang="scss">
body {
	font-family: Poppins !important;
	font-style: normal !important;
}

.margin-top-logo {
	margin-top: 10%;
}
.login {
	.padding-top-media {
		padding: 10% 8% 8% 5%;
	}

	.color-login {
		color: #ffffff !important;
	}

	.margin-top-form {
		margin-top: 0%;
		height: calc(60vh - 4rem);
	}

	.btn-register {
		width: 40%;
		display: block;
		//margin-right: 25% !important;
		margin-left: 30% !important;
		background: #335eea;
		border-radius: 3px;
		font-size: 20px;
	}

	.color-p-name {
		line-height: 30px;
		color: #7a7979;
		font-weight: bold;
	}

	.color-p-body {
		line-height: 21px;
		color: #7a7979;
	}

	.color-p-note {
		line-height: 19px;
		color: rgba(122, 121, 121, 0.5);
	}

	.margin-button {
		margin-top: 5%;
		margin-bottom: 5%;
	}
}
</style>
