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
            <div class="column is-3  margin-top-form">
                <div class="box margin-top-form">
					<article class="media icon-padding">
						<div class="media-content">
							<div class="content">
								<div class="columns">
									<div class="column is-full">
										<p class="subtitle is-3 title-register has-text-primary has-text-centered">
											Ingrese el código
										</p>
									</div>
								</div>
								<div class="columns is-mobile is-centered">
									<div class="column is-8">
										<p class="has-text-centered text-info">
											Verifique el código que enviamos a tu número celular
										</p>
									</div>
								</div>
								<div class="columns is-centered">
									<div class="column is-full">
										<section class="margin-button">
											<div class="field_code">

													<b-input
														v-model="code_form.code1"
														maxlength="1"
														@keyup.enter.native="continuar()"
														placeholder=".">
													</b-input>
													<b-input
														v-model="code_form.code2"
														maxlength="1"
														@keyup.enter.native="continuar()"
														placeholder=".">
													</b-input>
													<b-input
														v-model="code_form.code3"
														maxlength="1"
														@keyup.enter.native="continuar()"
														placeholder=".">
													</b-input>
													<b-input
														v-model="code_form.code4"
														maxlength="1"
														@keyup.enter.native="continuar()"
														placeholder=".">
													</b-input>
													<b-input
														v-model="code_form.code5"
														maxlength="1"
														@keyup.enter.native="continuar()"
														placeholder=".">
													</b-input>
													<b-input
														v-model="code_form.code6"
														maxlength="1"
														@keyup.enter.native="continuar()"
														placeholder=".">
													</b-input>
											</div>
											<div class="field has-text-centered">
												<b-button @click="continuar()" type="is-primary" expanded class="btn-register body">Continuar</b-button>
											</div>
											<div class="field">
												<a class="repeat-code is-pulled-right" href="#">Volver a enviar código</a>
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
import { ForgotPassCodeForm } from '@/store/types';

@Component({
	components: { LogoSVG },
})
export default class ForgotPassCode extends PageBase {
	public code_form: ForgotPassCodeForm = new ForgotPassCodeForm({});

	public async created() {
		await super.created();
	}
	
	public async continuar(){
		this.$router.push('/forgotpassnew');
	}

}
</script>

<style lang="scss">
body{
	font-family: Poppins !important;
	font-style: normal !important;
}

.control {
	display: inline-block;
	width: 14% !important;
	margin-left: 1% !important;
	margin-right: 1% !important;
}

.control .help.counter{
	display: none !important;
}

.input{
	width: 100% !important;
	border-top: 0px !important;
	border-left: 0px !important;
	border-right: 0px !important;
	border-bottom: solid 2px #000000 !important;
	box-shadow: none !important;
	color: #7A7979 !important;
	font-size: 25px !important;
	font-weight: bold !important;
}
.login{
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

	.field_code{
		margin-left: 5% !important;
	}

	.text-info{
		color: rgba(122, 121, 121, 0.5);
	}

    .color-login{
        color: #ffffff !important;
    }

	.margin-top-register{
		margin-top: 2%;
	}

	.margin-top-form{
		margin-top: 6%;
		height: calc(55vh - 4rem);
	}

	.repeat-code{
		color: #335EEA;
		margin-right: 10% !important;
	}

	.title-register{
		padding-top: 8%;
	}

	.btn-register{
		padding-top: 5% !important;
		padding-bottom: 10% !important;
		width: 80%;
		display: block;
		margin-top: 12%;
		margin-left: 10% !important;
		// margin-right: 5% !important;
		background: #335EEA;
		border-radius: 3px;
	}

	.form-fields{
		margin-top: 5%;
		margin-left: 10% !important;
		margin-right: 10% !important;
	}

	.input{
		padding-bottom: 8% !important;
		padding-top: 8% !important;
	}

	.icon-padding{
		padding-top: 5% !important;
	}
}
</style>
