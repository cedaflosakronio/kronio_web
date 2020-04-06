<template>
	<div class="login">
		<b-navbar class="is-fixed-top is-paddingless">
			<template slot="brand">
				<a class="navbar-item link" href="https://kronio.io">
					<LogoSVG />
				</a>
			</template>
		</b-navbar>
		<div class="columns body is-mobile is-vcentered">
			<div class="column"></div>
			<div class="column is-two-fifths-desktop is-four-fifths-touch">
				<div class="box">
					<article class="media">
						<div class="media-content">
							<div class="content">
								<div class="columns is-centered">
									<div class="column"></div>
									<div class="column is-8">
										<img src="../assets/happy.png" />
									</div>
									<div class="column"></div>
								</div>
								<p class="title has-text-primary has-text-centered">
									Ingresa a Kronio
								</p>
								<div class="columns is-centered">
									<div class="column"></div>
									<div class="column is-8">
										<section>
											<b-field>
												<b-input
													v-model="login_form.username"
													@keyup.enter.native="login()"
													placeholder="Usuario"
												></b-input>
											</b-field>

											<b-field>
												<b-input
													v-model="login_form.password"
													@keyup.enter.native="login()"
													type="password"
													placeholder="Contraseña"
													password-reveal
												>
												</b-input>
											</b-field>
											<b-field>
												<b-button @click="login()" type="is-primary" expanded
													>Ingresar</b-button
												>
											</b-field>
										</section>
									</div>
									<div class="column"></div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="column"></div>
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
}
</script>

<style lang="scss">
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

	.body {
		margin-top: 4rem;
		height: calc(100vh - 4rem);
	}

	.navbar-burger {
		display: none;
	}
}
</style>
