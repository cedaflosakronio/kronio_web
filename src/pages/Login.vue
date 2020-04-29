<template>
	<div class="login">
		<b-navbar class="is-fixed-top is-paddingless">
			<template slot="brand">
				<a class="navbar-item link" href="https://kronio.io">
					<LogoSVG />
				</a>
			</template>
		</b-navbar>
		<div class="columns body is-paddingless">
			<div class="column is-full is-paddingless">
				<img src="../assets/Artboard_242_1.png" />
			</div>
		</div>
		<div class="columns is-mobile is-vcentered is-paddingless height-login">
			<div class="column artboard is-paddingless">
				<img class="is-pulled-right" src="../assets/inicio_plan1_1.png" />
			</div>
			<div class="column is-three-fifths-desktop is-four-fifths-touch login_main">
				<div class="box is-paddingless height-login">
					<article class="media no-flex">
						<div class="media-content">
							<div class="content">
								<div class="columns is-centered height-login">
									<div class="column height-login border-right padding-top-8 is-vcentered">
										<p class="subtitle is-3 titles-login has-text-primary has-text-centered">
											Iniciar sesión
										</p>
										<div class="columns is-centered">
											<div class="column"></div>
											<div class="column is-8">
												<section class="margin-button">
													<div class="field">
														<p class="control has-icons-left has-icons-right">
															<b-input class="input-style"
																v-model="login_form.username"
																@keyup.enter.native="login()"
																placeholder="Usuario">
															</b-input>
															<span class="icon is-small is-left">
																<i class="fas fa-user"></i>
															</span>
														</p>
													</div>

													<div class="field">
														<p class="control has-icons-left has-icons-right">
															<b-input class="input-style"
																v-model="login_form.password"
																@keyup.enter.native="login()"
																type="password"
																placeholder="Contraseña">
															</b-input>
															<span class="icon is-small is-left">
																<i class="fas fa-lock"></i>
															</span>
														</p>
													</div>
													<div class="field">
														<label class="checkbox is-pulled-right input-style-remember">
															<input type="checkbox">
															Recuérdame
														</label>
													</div>
													<div class="field">
														<b-button @click="login()" type="is-primary" expanded class="btn-login body">Ingresar</b-button>
													</div>
													<div class="field">
														<a class="forgot-pass is-pulled-right" href="/forgotpassmain">¿Olvidó contraseña?</a>
													</div>
												</section>
											</div>
											<div class="column"></div>
										</div>
									</div>
									<div class="column height-login border-left padding-top-8 is-vcentered">
										<p class="subtitle is-3 titles-login has-text-primary has-text-centered">
											Registro
										</p>
										<div class="columns is-centered">
											<div class="column"></div>
											<div class="column is-8">
												<section>
													<p class="title is-5 has-text-centered input-style margin-label-register">¿Nuevo en Kronio?</p>
													<b-field>
														<b-button @click="register()" type="is-primary" expanded class="btn-login">Regístrate</b-button>
													</b-field>
												</section>
											</div>
											<div class="column"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="column is-paddingless">
				<img class="is-pulled-left" src="../assets/inicio_plan2_1.png" />
			</div>
		</div>
		<div class="columns">
			<div class="column is-full is-has-center margin-text-end">
				<p class="title is-4 has-text-primary is-paddingless is-marginless">¡Comienza tu prueba gratis hoy!</p>
				<p class="title is-6 has-text-primary is-paddingless is-marginless">Puedes cancelar en cualquier momento.</p>
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
export default class Login extends PageBase {
	public login_form: LoginForm = new LoginForm({});

	public async created() {
		await super.created();
	}

	public async login() {
		await this.auth.login(this.login_form);
		this.auth_data = this.auth.auth_data;
		if (await this.auth.isLogged()) {
			this.$buefy.toast.open({
				message: `Bienvenido ${this.auth_data.profile ? this.auth_data.profile.str : ''}`,
				type: 'is-success',
			});
			this.$router.push('/app');
		} else {
			this.$buefy.toast.open({
				message: 'Ha ocurrido un error, confirme su usuario y contraseña y vuelva a intentar',
				type: 'is-danger',
				position: 'is-bottom',
			});
		}
	}

	public async register(){
		this.$router.push('/registerAdminperson');
	}
}
</script>

<style lang="scss">
body{
	font-family: Poppins !important;
	font-style: normal !important;
}

.login {
	.input-style{
		color: rgba(122, 121, 121, 0.5);
		margin-top: 7% !important;
		margin-bottom: 7% !important;
	}

	.input-style-remember{
		color: rgba(122, 121, 121, 0.5);
		margin-bottom: 4% !important;
	}

	.border-right{
		border-right: 1px solid rgba(122, 121, 121, 0.3);
	}

	.border-left{
		border-left: 1px solid rgba(122, 121, 121, 0.3);
	}

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

	.body {
		margin-top: 6%;
	}

	.margin-text-end{
		margin-top: 3%;
	}

	.height-login{
		height: calc(60vh - 4rem);
	}

	.titles-login{
		font-weight: normal;
	}

	.navbar-burger {
		display: none;
	}

	.login-main{
		background: #FFFFFF;
		box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.15);
		border-radius: 5px;
	}

	.artboard {
    	margin-bottom: 0px !important;
	}

	.padding-top-8{
		padding-top: 8%;
	}
	.btn-login{
		background: #335EEA;
		border-radius: 3px;
	}

	.margin-label-register{
		margin-top: 10% !important;
		margin-bottom: 30% !important;
	}

	.no-flex{
		display: inline !important;
	}

	.forgot-pass{
		color: #335EEA;
	}
}
</style>
