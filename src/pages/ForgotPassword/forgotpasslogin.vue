<template>
	<div class="login">
		<b-navbar class="is-fixed-top is-paddingless">
			<template slot="brand">
				<a class="navbar-item link" href="https://kronio.io">
					<LogoSVG />
				</a>
			</template>
		</b-navbar>
		<div class="columns is-mobile is-centered margin-top-register">
			<div class="column is-5">
				<div class="box margin-top-form">
					<article class="media icon-padding">
						<div class="media-content">
							<div class="content">
								<div class="columns">
									<div class="column is-full">
										<p class="subtitle is-3 title-register has-text-primary has-text-centered">
											Iniciar sesión
										</p>
									</div>
								</div>
								<div class="columns is-centered">
									<div class="column is-full">
										<section class="margin-button">
											<div class="field">
												<p class="control has-icons-left has-icons-right form-fields">
													<b-input
														v-model="login_form.username"
														@keyup.enter.native="continuar()"
														placeholder="Email/Usuario"
													>
													</b-input>
													<span class="icon is-small is-left icon-padding">
														<i class="fas fa-user"></i>
													</span>
												</p>
											</div>
											<div class="field">
												<p class="control has-icons-left has-icons-right form-fields">
													<b-input
														v-model="login_form.password"
														@keyup.enter.native="continuar()"
														placeholder="Confirmar contraseña"
														type="password"
													>
													</b-input>
													<span class="icon is-small is-left icon-padding">
														<i class="fas fa-lock"></i>
													</span>
												</p>
											</div>
											<div class="field has-text-centered">
												<b-button
													@click="continuar()"
													type="is-primary"
													expanded
													class="btn-register body"
													>Entrar</b-button
												>
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import LogoSVG from '@/components/LogoSVG.vue';
import { LoginForm } from '@/store/types';

@Component({
	components: { LogoSVG },
})
export default class ForgotPassLogin extends PageBase {
	public login_form: LoginForm = new LoginForm({});

	public async created() {
		await super.created();
	}

	public async continuar() {
		this.$router.push('/forgotpasscode');
	}
}
</script>

<style lang="scss">
body {
	font-family: Poppins !important;
	font-style: normal !important;
}
.login {
	.navbar {
		background: #8969eb;
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);

		.navbar-brand {
			margin-left: 8%;
		}

		@media screen and (max-width: 1023px) {
			.navbar-brand {
				margin-left: 3%;
			}
		}

		.logo-svg {
			width: 130px;
			height: auto !important;
		}

		@media screen and (max-width: 1023px) {
			.logo-svg {
				width: 100px;
			}
		}

		.link {
			margin-right: 5% !important;
		}

		@media screen and (max-width: 1023px) {
			.link {
				margin-left: 0;
			}
		}
	}

	.color-login {
		color: #ffffff !important;
	}

	.margin-top-register {
		margin-top: 2%;
	}

	.margin-top-form {
		margin-top: 6%;
		height: calc(55vh - 4rem);
		width: 70%;

		@media screen and (max-width: 1440px) {
			width: 70%;
			margin-top: 15%;
			height: calc(35vh - 4rem);
		}

		@media screen and (max-width: 1024px) {
			width: 75%;
			margin-top: 12%;
			height: calc(50vh - 4rem);
		}

		@media screen and (max-width: 768px) {
			width: 90%;
			margin-top: 15%;
			height: calc(50vh - 4rem);
		}

		@media screen and (max-width: 600px) {
			width: 100%;
			margin-top: 20%;
			height: calc(50vh - 4rem);
		}
	}

	@media screen and (max-width: 600px) {
		.columns.is-mobile > .column.is-5 {
			flex: none;
			width: 87.66667% !important;
		}
	}

	.title-register {
		padding-top: 8%;
	}

	.btn-register {
		padding-top: 5% !important;
		padding-bottom: 10% !important;
		width: 80%;
		display: block;
		margin-top: 12%;
		margin-left: 10% !important;
		// margin-right: 5% !important;
		background: #335eea;
		border-radius: 3px;
	}

	.form-fields {
		margin-top: 5%;
		margin-left: 10% !important;
		margin-right: 10% !important;
	}

	.input {
		padding-bottom: 8% !important;
		padding-top: 8% !important;
	}

	.icon-padding {
		padding-top: 5% !important;
	}
}
</style>
