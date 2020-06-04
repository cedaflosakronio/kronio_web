<template>
	<div class="home">
		<div :class="!showOptionsEmployee ? 'btn-main-absolute' : 'btn-main-absolute-open'">
			<button
				class="button is-fullwidth btn-absolute"
				@click="goTo(1)"
				v-bind:class="[home ? 'is-active-main' : '']"
			>
				<span class="icon">
					<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.0419081 12.4434C-0.2665 9.12373 1.15132 6.11675 3.50293 4.20634C4.41958 3.46102 5.79029 4.09925 5.79029 5.2772C5.79029 5.70983 5.58468 6.10819 5.25057 6.37804C3.58431 7.73589 2.58199 9.87761 2.82614 12.2421C3.14312 15.3219 5.61038 17.8148 8.68589 18.1575C12.6995 18.6073 16.1091 15.4632 16.1091 11.5396C16.1091 9.45784 15.1453 7.59454 13.6418 6.37376C13.3077 6.1039 13.1064 5.70554 13.1064 5.2772C13.1064 4.1121 14.4557 3.45245 15.3638 4.18064C17.5141 5.91543 18.8933 8.56688 18.8933 11.5396C18.8933 16.9753 14.2758 21.3572 8.75443 20.9589C4.18828 20.6376 0.465969 17.001 0.0419081 12.4434ZM9.44406 0C8.67304 0 8.05194 0.625382 8.05194 1.39212V7.80443C8.05194 8.57545 8.67732 9.19655 9.44406 9.19655C10.2108 9.19655 10.8362 8.57116 10.8362 7.80443V1.39212C10.8362 0.625382 10.2151 0 9.44406 0Z"
							fill="#7A7979"
						/>
					</svg>
				</span>
				<span class="label-main-btn">Inicio</span>
			</button>
			<button
				class="button is-fullwidth btn-absolute"
				v-bind:class="[showOptionsEmployee ? 'is-active-main' : '']"
			>
				<span class="icon">
					<svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M26 17.0641C26 16.9797 26 16.8903 25.9949 16.806C25.9949 16.796 25.9949 16.7861 25.9949 16.7762C25.9022 14.2846 24.7129 12.0659 22.8697 10.562L22.8594 10.5472C21.943 9.79272 20.8618 9.21697 19.6828 8.87946C21.1141 8.04065 22.0768 6.5169 22.0768 4.78468C22.0768 2.13921 19.8578 0 17.1137 0C14.3695 0 12.1505 2.14417 12.1505 4.78468C12.1505 6.5169 13.1081 8.04562 14.5446 8.87946C13.3758 9.22193 12.3101 9.78776 11.404 10.5273C10.7398 9.96644 9.96238 9.5247 9.11802 9.24675C10.122 8.56677 10.7861 7.43512 10.7861 6.15954C10.7861 4.06996 9.03564 2.38242 6.86812 2.38242C4.70059 2.38242 2.9501 4.06996 2.9501 6.15954C2.9501 7.43512 3.60911 8.56677 4.61822 9.24675C1.93584 10.1451 0 12.6119 0 15.5105V15.9423C0 15.9572 0.0154455 15.9671 0.0257426 15.9671H8.32515C8.27881 16.3295 8.24792 16.7017 8.24792 17.074V17.5207C8.24792 19.4465 9.86455 21 11.857 21H22.3806C24.3782 21 25.9897 19.4415 25.9897 17.5207V17.074C26 17.069 26 17.069 26 17.0641ZM13.2214 4.8095C13.2214 2.7497 14.9616 1.07209 17.0982 1.07209C19.2349 1.07209 20.975 2.7497 20.975 4.8095C20.975 6.79981 19.3533 8.4278 17.3248 8.54195C17.2475 8.54195 17.1754 8.54195 17.0982 8.54195C17.021 8.54195 16.9489 8.54195 16.8717 8.54195C14.8432 8.4278 13.2214 6.79981 13.2214 4.8095ZM4.01584 6.16946C4.01584 4.66556 5.28752 3.43961 6.84752 3.43961C8.40752 3.43961 9.67921 4.66556 9.67921 6.16946C9.67921 7.65351 8.43842 8.86457 6.90416 8.89931C6.88356 8.89931 6.86812 8.89931 6.84752 8.89931C6.82693 8.89931 6.81148 8.89931 6.79089 8.89931C5.25663 8.8745 4.01584 7.66344 4.01584 6.16946ZM8.5105 14.9397H1.09149C1.39525 12.1503 3.84079 9.96644 6.80634 9.94659C6.82178 9.94659 6.83208 9.94659 6.84752 9.94659C6.86297 9.94659 6.87327 9.94659 6.88871 9.94659C8.29941 9.95155 9.59168 10.4578 10.5905 11.2768C9.60713 12.2943 8.88119 13.55 8.5105 14.9397ZM24.8879 17.5455C24.8879 18.8856 23.7552 19.9775 22.3651 19.9775H11.8416C10.4515 19.9775 9.31881 18.8856 9.31881 17.5455V17.0988C9.31881 13.0338 12.6859 9.70834 16.8717 9.59419C16.9489 9.59915 17.0261 9.59915 17.1034 9.59915C17.1806 9.59915 17.2578 9.59915 17.3351 9.59419C21.5208 9.71331 24.8879 13.0388 24.8879 17.0988V17.5455Z"
							fill="#7A7979"
						/>
					</svg>
				</span>
				<span class="label-main-btn">Equipo</span>
				<span class="icon label-main-btn-team" @click="optionsEmployee">
					<i class="fas fa-chevron-down" v-if="!showOptionsEmployee"></i>
					<i class="fas fa-chevron-up" v-if="showOptionsEmployee"></i>
				</span>
			</button>
			<div class="content-options-employee" v-if="showOptionsEmployee">
				<div class="columns is-mobile" @click="goTo(3)">
					<div class="column is-7">
						<label class="label label-employee" v-bind:class="[team_employee ? 'is-active' : '']"
							>Empleados</label
						>
					</div>
					<div class="column is-3">
						<svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="5" cy="5" r="4.5" fill="#E9E9E9" stroke="#7A7979" />
							<path
								d="M5 7.95621C5.25859 7.95621 5.46793 7.74687 5.4669 7.48931L5.4669 2.7546C5.4669 2.49601 5.25757 2.28667 5 2.28769C4.74141 2.28769 4.53207 2.49703 4.5331 2.7546L4.5331 7.48931C4.53207 7.74687 4.74141 7.95621 5 7.95621Z"
								fill="#7A7979"
							/>
							<path
								d="M2.16574 5.0282C2.16574 5.28679 2.37508 5.49613 2.63265 5.4951H7.36735C7.62595 5.4951 7.83528 5.28577 7.83426 5.0282C7.83426 4.76961 7.62492 4.56027 7.36735 4.5613L2.63367 4.56027C2.37508 4.56027 2.16574 4.76961 2.16574 5.0282Z"
								fill="#7A7979"
							/>
						</svg>
					</div>
				</div>
				<div class="columns is-mobile" @click="goTo(5)">
					<div class="column">
						<label class="label label-assistance" v-bind:class="[team_assistance ? 'is-active' : '']"
							>Asistencia</label
						>
					</div>
				</div>
			</div>
			<button
				class="button is-fullwidth btn-absolute"
				@click="goTo(2)"
				v-bind:class="[schedule ? 'is-active-main' : '']"
			>
				<span class="icon">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.09636 7.38346C5.09636 7.77115 4.7813 8.08615 4.39354 8.08615C4.00577 8.08615 3.69071 7.77115 3.69071 7.38346C3.69071 6.99577 4.00577 6.68077 4.39354 6.68077C4.7813 6.68077 5.09636 6.99577 5.09636 7.38346ZM11.2141 7.38346C11.2141 6.99577 10.899 6.68077 10.5113 6.68077C10.1235 6.68077 9.80842 6.99577 9.80842 7.38346C9.80842 7.77115 10.1235 8.08615 10.5113 8.08615C10.899 8.08615 11.2141 7.77115 11.2141 7.38346ZM14.2712 7.38346C14.2712 6.99577 13.9561 6.68077 13.5684 6.68077C13.1806 6.68077 12.8656 6.99577 12.8656 7.38346C12.8656 7.77115 13.1806 8.08615 13.5684 8.08615C13.9561 8.08615 14.2712 7.77115 14.2712 7.38346ZM5.09636 10.44C5.09636 10.0523 4.7813 9.73731 4.39354 9.73731C4.00577 9.73731 3.69071 10.0523 3.69071 10.44C3.69071 10.8277 4.00577 11.1427 4.39354 11.1427C4.7813 11.1427 5.09636 10.8312 5.09636 10.44ZM4.39354 12.7973C4.00577 12.7973 3.69071 13.1123 3.69071 13.5C3.69071 13.8877 4.00577 14.2027 4.39354 14.2027C4.7813 14.2027 5.09636 13.8877 5.09636 13.5C5.09636 13.1123 4.7813 12.7973 4.39354 12.7973ZM8.15349 7.38346C8.15349 6.99577 7.83843 6.68077 7.45066 6.68077C7.0629 6.68077 6.74784 6.99577 6.74784 7.38346C6.74784 7.77115 7.0629 8.08615 7.45066 8.08615C7.83843 8.08615 8.15349 7.77115 8.15349 7.38346ZM8.15349 10.44C8.15349 10.0523 7.83843 9.73731 7.45066 9.73731C7.0629 9.73731 6.74784 10.0523 6.74784 10.44C6.74784 10.8277 7.0629 11.1427 7.45066 11.1427C7.83843 11.1427 8.15349 10.8312 8.15349 10.44ZM7.45066 12.7973C7.0629 12.7973 6.74784 13.1123 6.74784 13.5C6.74784 13.8877 7.0629 14.2027 7.45066 14.2027C7.83843 14.2027 8.15349 13.8877 8.15349 13.5C8.15349 13.1123 7.83843 12.7973 7.45066 12.7973ZM18 13.7458C18 16.0927 16.0923 18 13.7449 18C11.3976 18 9.4899 16.0927 9.4899 13.7458C9.4899 11.3988 11.3976 9.49154 13.7449 9.49154C16.0923 9.49154 18 11.3988 18 13.7458ZM16.5943 13.7458C16.5943 12.1742 15.3168 10.8969 13.7449 10.8969C12.1731 10.8969 10.8956 12.1742 10.8956 13.7458C10.8956 15.3173 12.1731 16.5946 13.7449 16.5946C15.3168 16.5946 16.5943 15.3173 16.5943 13.7458ZM14.7663 13.0431H14.4512V12.3058C14.4512 11.9181 14.1362 11.6031 13.7484 11.6031C13.3606 11.6031 13.0456 11.9181 13.0456 12.3058V13.7458C13.0456 14.1335 13.3606 14.4485 13.7484 14.4485H14.7698C15.1575 14.4485 15.4726 14.1335 15.4726 13.7458C15.4726 13.3581 15.1541 13.0431 14.7663 13.0431ZM15.1852 1.40538H14.2712V0.702692C14.2712 0.315 13.9561 0 13.5684 0C13.1806 0 12.8656 0.315 12.8656 0.702692V1.40538H9.66647V0.702692C9.66647 0.315 9.35141 0 8.96365 0C8.57588 0 8.26082 0.315 8.26082 0.702692V1.40538H5.09636V0.702692C5.09636 0.315 4.7813 0 4.39354 0C4.00577 0 3.69071 0.315 3.69071 0.702692V1.40538H2.81131C1.26024 1.40538 0 2.66538 0 4.21615V15.1858C0 16.7365 1.26024 17.9965 2.81131 17.9965H8.19157C8.57934 17.9965 8.8944 17.6815 8.8944 17.2938C8.8944 16.9062 8.57934 16.5912 8.19157 16.5912H2.81131C2.03578 16.5912 1.40565 15.9612 1.40565 15.1858V4.21962C1.40565 3.44423 2.03578 2.81423 2.81131 2.81423H3.69071V3.51692C3.69071 3.90462 4.00577 4.21962 4.39354 4.21962C4.7813 4.21962 5.09636 3.90462 5.09636 3.51692V2.81077H8.26082V3.51346C8.26082 3.90115 8.57588 4.21615 8.96365 4.21615C9.35141 4.21615 9.66647 3.90115 9.66647 3.51346V2.81077H12.8656V3.51346C12.8656 3.90115 13.1806 4.21615 13.5684 4.21615C13.9561 4.21615 14.2712 3.90115 14.2712 3.51346V2.81077H15.1852C15.9608 2.81077 16.5909 3.44077 16.5909 4.21615V8.22462C16.5909 8.61231 16.9059 8.92731 17.2937 8.92731C17.6815 8.92731 17.9965 8.61231 17.9965 8.22462V4.21962C18 2.66885 16.7398 1.40538 15.1852 1.40538Z"
							fill="#7A7979"
						/>
					</svg>
				</span>
				<span class="label-main-btn">Horarios</span>
			</button>
			<button class="button is-fullwidth btn-absolute" @click="goTo(4)">
				<span class="icon">
					<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.85914 10.9465H7.68452C7.9496 10.9465 8.16084 10.7334 8.16084 10.4752C8.16084 10.2129 7.9496 10.0039 7.68452 10.0039H2.85914C2.59819 10.0039 2.38281 10.2129 2.38281 10.4752C2.38281 10.7375 2.59819 10.9465 2.85914 10.9465Z"
							fill="#7A7979"
						/>
						<path
							d="M11.5407 16.6875H2.85914C2.59819 16.6875 2.38281 16.9006 2.38281 17.1588C2.38281 17.4211 2.59819 17.6301 2.85914 17.6301H11.5407C11.8058 17.6301 12.017 17.4211 12.017 17.1588C12.017 16.8965 11.8058 16.6875 11.5407 16.6875Z"
							fill="#7A7979"
						/>
						<path
							d="M15.8264 0H7.93184C6.61884 0 5.55022 1.05328 5.55022 2.35656V2.39754H2.38162C1.06448 2.39754 0 3.45492 0 4.7541V18.6434C0 19.9467 1.06448 21 2.38162 21H12.0738C13.3868 21 14.4554 19.9467 14.4554 18.6434V17.6598H15.8306C17.1436 17.6598 18.2122 16.6066 18.2122 15.3033V2.36066C18.2122 1.05738 17.1436 0 15.8264 0ZM13.5069 18.6434C13.5028 19.4262 12.8608 20.0533 12.0738 20.0574H2.38162C1.59465 20.0533 0.956792 19.4221 0.95265 18.6434V4.7541C0.956792 3.97541 1.59465 3.34426 2.38162 3.34016H8.68154V5.7582C8.68154 7.06148 9.74602 8.11475 11.0632 8.11475H13.5069V18.6434ZM9.63419 5.7582V4.0041L12.8401 7.17213H11.0632C10.2762 7.17213 9.63833 6.54098 9.63419 5.7582ZM17.2595 15.3033C17.2554 16.082 16.6175 16.7131 15.8306 16.7172H14.4554V7.63525C14.4554 7.5082 14.4057 7.38934 14.3187 7.29918L9.50993 2.54508L9.50579 2.54098C9.41466 2.45082 9.29041 2.39754 9.16201 2.40164H6.50287V2.36066C6.50701 1.58197 7.14487 0.95082 7.93184 0.946721H15.8223C16.6175 0.946721 17.2595 1.58197 17.2595 2.36885V15.3033Z"
							fill="#7A7979"
						/>
						<path
							d="M2.38281 13.819C2.38281 14.0813 2.59819 14.2903 2.85914 14.2903H11.5407C11.8058 14.2903 12.017 14.0813 12.017 13.819C12.017 13.5567 11.8058 13.3477 11.5407 13.3477H2.85914C2.59819 13.3477 2.38281 13.5567 2.38281 13.819Z"
							fill="#7A7979"
						/>
					</svg>
				</span>
				<span class="label-main-btn">Tareas</span>
			</button>
		</div>
		<div v-if="home">
			<div class="columns is-centered">
				<p class="text-hello">¡Hola, Patricia Guillermo! Esto es lo nuevo en KRONIO</p>
				<div class="column is-3">
					<div class="card" id="employees">
						<header class="card-header background-header">
							<b-dropdown v-model="selectedOptions" multiple aria-role="list" class="filter-employees">
								<button class="button is-primary" type="button" slot="trigger">
									<img src="../../assets/filter.png" alt />
									<b-icon icon="menu-down"></b-icon>
								</button>

								<b-dropdown-item value="option1" aria-role="listitem">
									<b-checkbox>
										<span>Todos</span>
									</b-checkbox>
								</b-dropdown-item>

								<b-dropdown-item value="option2" aria-role="listitem">
									<b-checkbox>
										<span>Presentes</span>
									</b-checkbox>
								</b-dropdown-item>

								<b-dropdown-item value="option3" aria-role="listitem">
									<b-checkbox>
										<span>Ausentes</span>
									</b-checkbox>
								</b-dropdown-item>
							</b-dropdown>
							<p class="card-header-title-inline">Empleados</p>
						</header>
						<div class="card-content remove-padding-aside">
							<div class="content">
								<div class="row-employee">
									<div class="columns">
										<div class="column is-3 inline-tablet">
											<img
												class="is-pulled-right"
												src="../../assets/employees/employee1.png"
												alt
											/>
											<div class="status-active"></div>
										</div>
										<div class="column is-8 inline-tablet">
											<p class="is-pulled-left employee-name">María Belen Zavala Luque</p>
										</div>
									</div>
								</div>
								<div class="row-employee">
									<div class="columns">
										<div class="column is-3 inline-tablet">
											<img
												class="is-pulled-right"
												src="../../assets/employees/employee2.png"
												alt
											/>
											<div class="status-active"></div>
										</div>
										<div class="column is-8 inline-tablet">
											<p class="is-pulled-left employee-name">
												María Cristina Espinoza Molestina
											</p>
										</div>
									</div>
								</div>
								<div class="row-employee">
									<div class="columns">
										<div class="column is-3 inline-tablet">
											<img
												class="is-pulled-right"
												src="../../assets/employees/employee6.png"
												alt
											/>
											<div class="status-suspended"></div>
										</div>
										<div class="column is-8 inline-tablet">
											<p class="is-pulled-left employee-name">Renato Daniel Ruiz Díaz</p>
										</div>
									</div>
								</div>
								<div class="row-employee">
									<div class="columns">
										<div class="column is-3 inline-tablet">
											<img
												class="is-pulled-right"
												src="../../assets/employees/employee4.png"
												alt
											/>
											<div class="status-active"></div>
										</div>
										<div class="column is-8 inline-tablet">
											<p class="is-pulled-left employee-name">Freddy David Vera Quito</p>
										</div>
									</div>
								</div>
								<div class="row-employee">
									<div class="columns">
										<div class="column is-3 inline-tablet">
											<img
												class="is-pulled-right"
												src="../../assets/employees/employee5.png"
												alt
											/>
											<div class="status-suspended"></div>
										</div>
										<div class="column is-8 inline-tablet">
											<p class="is-pulled-left employee-name">María José Alvarado Villacreces</p>
										</div>
									</div>
								</div>
								<div class="row-employee">
									<div class="columns">
										<div class="column is-3 inline-tablet">
											<img
												class="is-pulled-right"
												src="../../assets/employees/employee6.png"
												alt
											/>
											<div class="status-active"></div>
										</div>
										<div class="column is-8 inline-tablet">
											<p class="is-pulled-left employee-name">Sol Gina Torres Fernandez</p>
										</div>
									</div>
								</div>
								<div class="row-employee">
									<div class="columns">
										<div class="column is-3 inline-tablet">
											<img
												class="is-pulled-right"
												src="../../assets/employees/employee6.png"
												alt
											/>
											<div class="status-active"></div>
										</div>
										<div class="column is-8 inline-tablet">
											<p class="is-pulled-left employee-name">Joshua Israel Linch Yang</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<footer class="card-footer">
							<a @click="$modal.show('add-employee')" class="card-footer-item">
								Agregar Empleados
								<span class="icon">
									<i class="fas fa-angle-right" aria-hidden="true"></i>
								</span>
							</a>
						</footer>
					</div>
				</div>
				<div class="column is-3">
					<div class="card" id="notifications">
						<header class="card-header background-header">
							<p class="card-header-title">Notificaciones</p>
						</header>
						<div class="card-content remove-padding-aside">
							<div class="content">
								<div class="row-employee">
									<p class="title-notification">HOY</p>
									<div class="columns is-centered" @click="$modal.show('md-holidays')">
										<div class="column is-3">
											<p>23 mar</p>
										</div>
										<div class="column is-6">
											<p class="notification-label">Vacaciones de Danna</p>
										</div>
										<div class="column is-3">
											<img src="../../assets/umbrella.png" alt />
										</div>
									</div>
									<div class="columns is-centered" @click="$modal.show('md-holidays')">
										<div class="column is-3">
											<p>23 mar</p>
										</div>
										<div class="column is-6">
											<p class="notification-label">Vacaciones de Danna</p>
										</div>
										<div class="column is-3">
											<img src="../../assets/umbrella.png" alt />
										</div>
									</div>
									<div class="columns is-centered" @click="$modal.show('md-holidays')">
										<div class="column is-3">
											<p>23 mar</p>
										</div>
										<div class="column is-6">
											<p class="notification-label">Vacaciones de Danna</p>
										</div>
										<div class="column is-3">
											<img src="../../assets/umbrella.png" alt />
										</div>
									</div>
									<div class="columns is-centered" @click="$modal.show('md-postponed-holidays')">
										<div class="column is-3">
											<p>23 mar</p>
										</div>
										<div class="column is-6">
											<p class="notification-label">Vacaciones postergadas de Danna</p>
										</div>
										<div class="column is-3">
											<img src="../../assets/umbrella.png" alt />
										</div>
									</div>
								</div>
								<div class="row-employee">
									<p class="title-notification">ESTA SEMANA</p>
									<div class="columns is-centered">
										<div class="column is-3">
											<p>23 mar</p>
										</div>
										<div class="column is-6">
											<p class="notification-label">Cumpleaños de Xavier</p>
										</div>
										<div class="column is-3">
											<img src="../../assets/pastel.png" alt />
										</div>
									</div>
								</div>
								<div class="row-employee">
									<p class="title-notification">ESTA MES</p>
									<div class="columns is-centered">
										<div class="column is-3">
											<p>23 mar</p>
										</div>
										<div class="column is-6">
											<p class="notification-label">Vencimiento periodo de prueba Joselin</p>
										</div>
										<div class="column is-3">
											<img src="../../assets/alert.png" alt />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-3">
					<div class="columns">
						<div class="column is-full">
							<div class="card" id="calendar">
								<header class="card-header background-header">
									<p class="card-header-title">Calendario</p>
									<button @click="mainCalendar()" class="button is-rounded btn-more-calendar">
										...
									</button>
									<a class="arrow_calendar">
										<svg
											width="12"
											height="12"
											viewBox="0 0 6 6"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M0.808593 0.85547L3.49172 3.00197L0.808594 5.14847L1.69234 5.85547L5.25922 3.00197L1.69234 0.148469L0.808593 0.85547Z"
												fill="white"
											/>
										</svg>
									</a>
								</header>
								<div class="card-content calendar-context">
									<div class="content">
										<vc-calendar
											id="calendario"
											:is-expanded="$screens({ default: true, lg: true })"
											locale="es"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="columns">
						<div class="column-is-full">
							<div class="column is-full">
								<div class="card" id="post">
									<header class="card-header background-header">
										<p class="card-header-title">Publicaciones</p>
									</header>
									<div class="card-content remove-padding-aside">
										<div class="content">
											<div class="row-post">
												<p class="title-post">COMUNICADO</p>
												<div class="columns is-centered">
													<div class="column is-12">
														<div class="item-post"></div>
														<p class="post-label">
															Título del comunicado Descripción de la información del
															comunicado
														</p>
													</div>
												</div>
											</div>
											<div class="row-post">
												<p class="title-post">EVENTO</p>
												<div class="columns is-centered">
													<div class="column is-12">
														<div class="item-post"></div>
														<p class="post-label">
															Título del comunicado Descripción de la información del
															comunicado
														</p>
														<div class="columns is-centered">
															<div class="column is-half">
																<p class>25/03/2020</p>
															</div>
															<div class="column is-half">
																<p class>00:00</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<WellcomeAdmin />
			<MdNewEmployee />
			<MdHolidays />
			<MdPostponedHolidays />

			<button class="button" @click="$modal.show('wellcome-admin')">Modal de Bienvenida</button>
		</div>

		<button class="btn-float-kronio" @click="showOptions()">
			<img class="imgBtnKronio" src="../../assets/iconK.png" alt />
		</button>
		<div v-if="!isHidden" class="more-option-kronio">
			<button class="btn-float-Pencil" title="Crear una publicación" @click="goNewPublication()">
				<img class="imgBtnPencil" src="../../assets/tool_btn/pencil.png" alt />
			</button>
			<button class="btn-float-User" title="Añadir empleado">
				<img class="imgBtnUser" src="../../assets/tool_btn/user.png" alt />
			</button>
			<button class="btn-float-Ask" title="Ayuda">
				<img class="imgBtnAsk" src="../../assets/tool_btn/ask.png" alt />
			</button>
			<div v-if="!isHidden" class="more-option-kronio">
				<button class="btn-float-Pencil" title="Crear una publicación" @click="goNewPublication()">
					<img class="imgBtnPencil" src="../../assets/tool_btn/pencil.png" alt />
				</button>
				<button class="btn-float-User" title="Añadir empleado">
					<img class="imgBtnUser" src="../../assets/tool_btn/user.png" alt />
				</button>
				<button class="btn-float-Ask" title="Ayuda">
					<img class="imgBtnAsk" src="../../assets/tool_btn/ask.png" alt />
				</button>
			</div>
		</div>

		<div v-if="team_employee">
			<TeamMain />
		</div>
		<div v-if="team_assistance">
			<TeamAssistance />
		</div>
		<div v-if="schedule">
			<Schedule />
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ErrorSection from '@/components/ErrorSection.vue';
import MdNewEmployee from '@/components/md-new-employee.vue';
import WellcomeAdmin from '@/components/Wellcome.vue';
import MdHolidays from '@/components/md-holidays.vue';
import MdPostponedHolidays from '@/components/md-postponed-holidays.vue';
import TeamMain from '@/pages/Team/TeamMain.vue';
import TeamAssistance from '@/pages/Team/TeamAssistance.vue';
import Schedule from '@/pages/schedule/Schedule.vue';

@Component({
	components: {
		ErrorSection,
		WellcomeAdmin,
		MdNewEmployee,
		MdHolidays,
		MdPostponedHolidays,
		TeamMain,
		TeamAssistance,
		Schedule,
	},
})
export default class LogoSVG extends Vue {
	public home: boolean = true;
	public team_employee: boolean = false;
	public team_assistance: boolean = false;
	public schedule: boolean = false;
	public showOptionsEmployee: boolean = false;

	public isHidden: boolean = true;
	public showOptions() {
		if (!this.isHidden) {
			this.isHidden = true;
		} else {
			this.isHidden = false;
		}
	}

	public optionsEmployee() {
		this.showOptionsEmployee = true;
	}
	public async mainCalendar() {
		this.$destroy();
		this.$router.push('/main-calendar');
	}

	private goTo(option: number) {
		switch (option) {
			case 1:
				this.home = true;
				this.team_employee = false;
				this.team_assistance = false;
				this.showOptionsEmployee = false;
				this.schedule = false;
				break;
			case 3:
				this.team_employee = true;
				this.team_assistance = false;
				this.home = false;
				this.schedule = false;
				break;
			case 5:
				this.team_assistance = true;
				this.home = false;
				this.team_employee = false;
				this.schedule = false;
				break;
			case 2:
				this.team_assistance = false;
				this.home = false;
				this.team_employee = false;
				this.showOptionsEmployee = false;
				this.schedule = true;
				break;

			default:
				this.home = true;
				this.team_employee = false;
				this.showOptionsEmployee = false;
				this.schedule = false;
				break;
		}
	}
	public async goNewPublication() {
		this.$destroy();
		this.$router.push('/newpublications');
	}
}
</script>

<style lang="scss" scoped>
.home {
	/* background-color: red;
	width: unset;
	height: 100%;
	padding: 0; */
	.background-header {
		background: #8969eb;
		border-top-left-radius: 12px !important;
		border-top-right-radius: 12px !important;
		padding-top: 4%;
	}

	.vc-container {
		@media screen and (min-width: 768px) and (max-width: 1024px) {
			width: 100%;
		}
	}

	.calendar-context {
		padding: 0px !important;
	}

	.card-header-title {
		display: block !important;
		color: #ffffff !important;
		font-size: 18px;
	}

	.card-header-title-inline {
		display: inline !important;
		color: #ffffff !important;
		padding-top: 1%;
		padding-bottom: 2%;
		font-weight: bold;
		padding-left: 10%;
		font-size: 18px;

		@media screen and (max-width: 1440px) {
			padding-left: 0px;
		}

		@media screen and (max-width: 1024px) {
			padding-left: 0px;
		}
	}

	.card {
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1) !important;
		border-radius: 15px !important;
		margin-top: 10% !important;
		margin-bottom: 5% !important;

		@media screen and (max-width: 1024px) {
			display: inline-block;
		}

		@media screen and (max-width: 768px) {
			margin-top: 5% !important;
		}
	}

	.text-hello {
		left: 0;
		margin-left: 13%;
		margin-top: 2%;
		position: absolute;
		color: #335eea;

		@media screen and (max-width: 1440px) {
			margin-top: 1%;
		}
	}

	#employees {
		height: auto; // calc(77.5vh - 3rem);
		@media screen and (max-width: 1440px) {
			//height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 1440px) {
			//height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 901px) {
			//height: calc(79vh - 3rem);
		}

		@media screen and (max-width: 768px) {
			width: 70%;
			height: calc(79vh - 3rem);
		}
	}

	#notifications {
		height: auto; //calc(77.5vh - 3rem);
		@media screen and (max-width: 1440px) {
			//height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 1440px) {
			//height: calc(76.3vh - 3rem);
		}

		@media screen and (max-width: 839px) {
			//height: calc(79vh - 3rem);
		}

		@media screen and (max-width: 768px) {
			width: 70%;
			height: calc(135vh - 3rem);
		}
	}

	#post .card-content {
		height: auto;
		@media screen and (max-width: 1440px) {
			margin-top: -7%;
			font-size: 14px;
			//height: calc(32vh - 3rem);
		}

		@media screen and (max-width: 1024px) {
			margin-top: 3%;
			//height: calc(32vh - 3rem);
		}

		@media screen and (max-width: 768px) {
			font-size: 16px;
		}
	}

	#post {
		margin-top: 11%;
		height: auto;

		@media screen and (max-width: 1440px) {
			margin-top: 5%;
			//height: calc(41vh - 3rem);
		}

		@media screen and (max-width: 768px) {
			margin-top: 5%;
			width: 70%;
			//height: calc(42vh - 3rem);
		}
	}

	#calendar {
		height: calc(37.2vh - 3rem);
		border: 1px !important;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		margin-bottom: 5%;

		@media screen and (max-width: 768px) {
			width: 70%;
			height: calc(47.2vh - 3rem);
		}
	}

	.vc-border {
		border: 0px !important;
	}

	.vc-weeks {
		padding: 0px !important;
	}

	.vc-text-gray-800 {
		color: #8969eb !important;
	}

	.vc-grid-container .vc-weeks > .vc-grid-cell {
		border: 0.5px solid rgba(122, 121, 121, 0.3) !important;
	}

	.vc-relative {
		height: calc(32vh - 3rem);
		border: 0px !important;
	}

	.card-content {
		@media screen and (max-width: 1024px) {
			padding: 0px;
		}
	}

	.content-options-employee {
		background: #e9e9e9;
		border-radius: 4px;
		padding-left: 5%;
		margin-top: 10%;
		margin-bottom: 8%;
	}

	.label-employee {
		font-size: 12px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5);
	}

	.label-assistance {
		font-size: 12px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5);
	}

	.is-active {
		color: #7a7979;
	}

	.is-active-main {
		background: #335eea !important;
		color: #ffffff;
	}

	#employees .card-content {
		height: calc(65vh - 3rem);
	}

	.text-info-Empty {
		color: rgba(122, 121, 121, 0.5);
		padding-left: 30%;
		padding-right: 30%;
		margin-top: 3%;
	}

	.imgEmployeesEmpty {
		margin-top: 40%;
		margin-bottom: 3%;
	}

	.imgPostEmpty {
		margin-top: 5%;
		margin-bottom: 3%;
	}

	.btn-float-kronio {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: 4%;
		margin-bottom: 2%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 20px 30px 20px 30px;
		text-align: center;
		cursor: pointer;

		@media screen and (max-width: 768px) {
			padding: 15px 22px 15px 25px;
			margin-right: 2%;
		}

		@media screen and (max-width: 600px) {
			margin-right: 0%;
		}
	}

	.imgBtnKronio {
		padding-left: 5px;
	}

	.btn-float-Ask {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc(7.4vw - 3rem);
		margin-bottom: 8%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 20px 30px 20px 30px;
		text-align: center;
		cursor: pointer;

		@media screen and (max-width: 1440px) {
			margin-bottom: 10%;
			right: 13px;
		}

		@media screen and (max-width: 1024px) {
			margin-bottom: 12%;
			right: 36px;
			padding: 12px 20px 12px 20px;
		}

		@media screen and (max-width: 768px) {
			margin-bottom: 14%;
			right: 23px;
		}

		@media screen and (max-width: 600px) {
			margin-bottom: 24%;
			right: 29px;
		}
	}

	.imgBtnAsk {
		padding-left: 2px;
	}

	.btn-float-User {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc(7.5vw - 3rem);
		margin-bottom: 12%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 20px 20px 20px 20px;
		text-align: center;
		cursor: pointer;

		@media screen and (max-width: 1440px) {
			right: 15px;
			margin-bottom: 16%;
		}

		@media screen and (max-width: 1024px) {
			right: 35px;
			margin-bottom: 18%;
			padding: 12px 13px 12px 13px;
		}

		@media screen and (max-width: 768px) {
			right: 23px;
			margin-bottom: 22%;
		}

		@media screen and (max-width: 600px) {
			right: 27px;
			margin-bottom: 38%;
		}
	}

	.imgBtnUser {
		padding-left: 1px;
		width: 80%;
	}

	.btn-float-Pencil {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc(7.5vw - 3rem);
		margin-bottom: 16%;
		border-radius: 50%;
		border: 0px;
		background: #ffffff;
		box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
		padding: 18px 23px 18px 23px;
		text-align: center;
		cursor: pointer;

		@media screen and (max-width: 1440px) {
			right: 15px;
			margin-bottom: 22%;
		}

		@media screen and (max-width: 1024px) {
			right: 32px;
			margin-bottom: 24%;
			padding: 12px 15px 12px 15px;
		}

		@media screen and (max-width: 768px) {
			right: 22px;
			margin-bottom: 30%;
		}

		@media screen and (max-width: 600px) {
			right: 24px;
			margin-bottom: 52%;
		}
	}

	.imgBtnPencil {
		padding-left: 1px;
	}

	.btn-main-absolute {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 5%;
		margin-left: 0% !important;
		width: 3%;
		text-align: left;

		@media screen and (max-width: 1440px) {
			width: 5%;
			margin-top: 6%;
		}

		@media screen and (max-width: 1024px) {
			margin-top: 8%;
		}

		@media screen and (max-width: 768px) {
			margin-top: 20%;
			width: 14%;
		}
	}

	.btn-main-absolute:hover {
		width: 9% !important;

		.label-main-btn {
			display: inline;
		}

		.label-main-btn-team {
			display: inline;
		}

		.btn-absolute {
			text-align: left !important;
			padding-left: 12% !important;
			justify-content: start !important;
			margin-top: 2%;
			margin-bottom: 2%;
			background: #f2f5ff;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}
	}

	.btn-absolute {
		text-align: center !important;
		padding-left: 40% !important;
		justify-content: start !important;
		margin-top: 2%;
		margin-bottom: 2%;
		background: #f2f5ff;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	.btn-main-absolute-open {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 5%;
		margin-left: 0% !important;
		width: 9%;
		text-align: left;

		@media screen and (max-width: 1440px) {
			width: 9%;
			margin-top: 6%;
		}

		@media screen and (max-width: 1024px) {
			margin-top: 9%;
			width: 12%;
		}

		@media screen and (max-width: 768px) {
			margin-top: 20%;
			width: 9%;
		}

		.label-main-btn {
			display: inline;
		}

		.label-main-btn-team {
			display: inline;
		}

		.btn-absolute {
			text-align: left !important;
			padding-left: 12% !important;
			justify-content: start !important;
			margin-top: 2%;
			margin-bottom: 2%;
			background: #f2f5ff;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}
	}

	.label-main-btn {
		display: none;
	}

	.label-main-btn-team {
		display: none;
		color: #ffffff;
		margin-left: 40% !important;

		@media screen and (max-width: 1440px) {
			margin-left: 15% !important;
		}
	}

	.btn-more-calendar {
		background: transparent !important;
		color: #ffffff !important;
		border: 1px solid !important;
		padding-left: 14px;
		padding-right: 14px;
		font-size: 18px;
		margin-right: 2%;
		margin-bottom: 4%;
	}

	.row-employee {
		padding-top: 3%;
		padding-bottom: 5%;
		border-bottom: 0.3px solid rgba(122, 121, 121, 0.5);

		@media screen and (max-width: 768px) {
			padding-bottom: 4%;
		}
	}

	.row-post {
		padding-top: 1%;
		padding-bottom: 1%;
		border-bottom: 0.3px solid rgba(122, 121, 121, 0.5);
	}

	.remove-padding-aside {
		padding-left: 0px !important;
		padding-right: 0px !important;
	}

	.employee-name {
		font-size: 15px;
		@media screen and (max-width: 768px) {
			margin-left: 0px;
		}
	}

	.status-active {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-top: 4%;
		margin-bottom: 2%;
		margin-left: 20%;
		background: #57d72a;

		@media screen and (max-width: 1440px) {
			margin-top: 5%;
			margin-left: 18%;
		}

		@media screen and (max-width: 1024px) {
			margin-top: 7%;
			margin-left: 16%;
		}

		@media screen and (max-width: 768px) {
			margin-top: 3%;
			margin-left: 4%;
		}

		@media screen and (max-width: 600px) {
			margin-top: 5%;
			margin-left: 8%;
		}
	}

	.status-suspended {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin-top: 4%;
		margin-bottom: 2%;
		margin-bottom: 10%;
		margin-left: 20%;
		background: #ffdd2c;

		@media screen and (max-width: 1440px) {
			margin-top: 5%;
			margin-left: 18%;
		}

		@media screen and (max-width: 1024px) {
			margin-top: 7%;
			margin-left: 16%;
		}

		@media screen and (max-width: 768px) {
			margin-top: 3%;
			margin-left: 4%;
		}

		@media screen and (max-width: 600px) {
			margin-top: 5%;
			margin-left: 8%;
		}
	}

	.filter-employees {
		margin-left: 10%;
		padding-top: 0%;
		margin-right: 4%;
		padding-bottom: 3%;
		@media screen and (max-width: 1024px) and (min-width: 768px) {
			margin-left: 3%;
			padding-top: 0%;
			margin-right: 0%;
			padding-bottom: 3%;
		}
	}

	.title-notification {
		color: #a46cec;
	}

	.title-post,
	post-label {
		color: #7a7979;
	}

	.post-label {
		padding-top: 1%;
		padding-left: 5%;
		padding-right: 5%;
		@media screen and (max-width: 1024px) {
			font-size: 12px;
			margin-left: 2%;
		}
	}

	.notification-label {
		font-weight: normal;
		font-size: 17px;
		line-height: 19px;
		color: #7a7979;
	}

	.item-post {
		position: absolute;
		width: 10px;
		height: 10px;
		border: 1px solid #8969eb;
		border-radius: 50%;
		background: transparent;
		margin-left: 10%;
		margin-top: 2%;

		@media screen and (max-width: 1440px) {
			margin-left: 2%;
		}

		@media screen and (max-width: 1024px) {
			margin-left: 2%;
		}
	}

	.modal-bg {
		background-color: #8969eb !important;
	}

	.dropdown-menu {
		display: none;
		left: -66px;
		min-width: 12rem;
		padding-top: 0px;
		position: absolute;
		top: 103%;
		z-index: 20;
	}

	.dropdown-menu:after {
		content: '';
		position: absolute;
		top: 5px;
		left: 54%;
		width: 0;
		height: 0;
		border: 18px solid transparent;
		border-bottom-color: #ffffff;
		border-top: 0;
		margin-left: -27px;
		margin-top: -24px;
	}

	.is-pulled-right {
		@media screen and (max-width: 768px) {
			float: left !important;
			margin-left: 13%;
		}
	}

	.inline-tablet {
		@media screen and (max-width: 768px) {
			display: inline-block !important;
		}
	}

	.arrow_calendar {
		margin-right: 2%;
	}
}
</style>
