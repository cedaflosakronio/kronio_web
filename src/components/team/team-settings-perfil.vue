<template>
	<div class="app">
		<div class="body">
			<div class="columns is-centered">
				<div class="column is-full">
					<div class="card box-height">
						<div class="card-content">
							<div class="column">
								<svg
									width="65"
									height="65"
									viewBox="0 0 65 65"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M32.5 63.1042C24.375 63.1042 17.0625 60.125 11.6458 54.9792C15.7083 47.9375 23.5625 43.0625 32.5 43.0625C37.9167 43.0625 43.0625 44.9583 47.125 47.9375C49.0208 46.0417 51.4583 44.9583 54.1667 44.9583C56.875 44.9583 59.3125 46.0417 60.9375 47.6667C63.6458 43.3333 65 38.1875 65 32.5C65 14.625 50.375 0 32.5 0C14.625 0 0 14.625 0 32.5C0 50.375 14.625 65 32.5 65C37.6458 65 42.5208 63.6458 46.8542 61.75C46.5833 61.2083 46.0417 60.9375 45.7708 60.3958C41.7083 62.0208 37.375 63.1042 32.5 63.1042ZM33.3125 18.6875C39.2708 18.6875 43.875 23.5625 43.875 29.25C43.875 34.9375 39 39.8125 33.3125 39.8125C27.3542 39.8125 22.75 34.9375 22.75 29.25C22.75 23.5625 27.3542 18.6875 33.3125 18.6875Z"
										fill="#7A7979"
										fill-opacity="0.5"
									/>
									<path
										d="M57.4154 53.3555C57.1445 53.3555 57.1445 53.6263 57.1445 53.6263C57.1445 53.8971 57.4154 53.8971 57.4154 53.8971C57.6862 53.8971 57.6862 53.6263 57.6862 53.6263C57.6862 53.6263 57.6862 53.3555 57.4154 53.3555Z"
										fill="#7A7979"
										fill-opacity="0.5"
									/>
									<path
										d="M54.168 53.082C52.8138 53.082 51.7305 54.1654 51.7305 55.5195C51.7305 56.8737 52.8138 57.957 54.168 57.957C55.5221 57.957 56.6055 56.8737 56.6055 55.5195C56.6055 54.1654 55.5221 53.082 54.168 53.082ZM54.168 57.4154C53.0846 57.4154 52.2721 56.6029 52.2721 55.5195C52.2721 54.4362 53.0846 53.6237 54.168 53.6237C55.2513 53.6237 56.0638 54.4362 56.0638 55.5195C56.0638 56.6029 55.2513 57.4154 54.168 57.4154Z"
										fill="#7A7979"
										fill-opacity="0.5"
									/>
									<path
										d="M54.1654 46.8555C49.5612 46.8555 45.7695 50.6471 45.7695 55.2513C45.7695 59.8555 49.5612 63.6471 54.1654 63.6471C58.7695 63.6471 62.5612 59.8555 62.5612 55.2513C62.5612 50.3763 58.7695 46.8555 54.1654 46.8555ZM59.582 58.2305C59.582 58.6915 59.2306 59.0465 58.7696 59.0445C58.5875 59.0437 58.3981 59.043 58.2279 59.043H50.3737C49.832 59.043 49.5612 58.7721 49.5612 58.2305V53.0846C49.5612 52.543 49.832 52.2721 50.3737 52.2721H51.457C51.7279 52.2721 51.7279 52.2721 51.9987 52.0013L52.8112 51.1888C53.082 50.918 53.3529 50.918 53.6237 50.918H55.2487C55.5195 50.918 55.7904 50.918 56.0612 51.1888L56.8737 52.0013C56.8737 52.0013 57.1445 52.2721 57.4154 52.2721H58.7695C59.3112 52.2721 59.582 52.543 59.582 53.0846V58.2305Z"
										fill="#7A7979"
										fill-opacity="0.5"
									/>
								</svg>
							</div>
							<div class="column">
								<p class="info-general">Información general</p>
							</div>
							<div class="columns">
								<div class="column is-half box-general">
									<div class="columns box-inputs">
										<div class="column is-full">
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Nombres</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Apellidos</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Fecha de nacimiento</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Genero Legal</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Nacionalidad</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="column is-half box-general">
									<div class="columns box-inputs">
										<div class="column is-full">
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Teléfono</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Documento de identidad</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Dirección</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">País</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Ciudad</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<hr />
							<br />
							<div class="column">
								<svg
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M58.9998 49.0005H20.4139L6.70698 35.2936C6.32323 34.8963 5.69023 34.8853 5.29298 35.2691C4.89573 35.6528 4.88473 36.2858 5.26848 36.6831C5.27648 36.6914 5.28473 36.6996 5.29298 36.7076L10.109 41.5235L4.49999 49.0005H0.999997C0.447749 49.0005 0 49.4483 0 50.0005C0 50.5528 0.447749 51.0005 0.999997 51.0005H6.13198L1.168 58.4455C0.861497 58.905 0.985497 59.526 1.445 59.8325C1.90449 60.139 2.52549 60.015 2.83199 59.5555L8.53497 51.0005H20.9999V59.0005C20.9999 59.5527 21.4477 60.0005 21.9999 60.0005C22.5522 60.0005 22.9999 59.5527 22.9999 59.0005V51.0005H50.4648L56.1648 59.5555C56.4713 60.015 57.0923 60.139 57.5518 59.8325C58.0113 59.526 58.1353 58.905 57.8288 58.4455L52.8678 51.0005H58.9998C59.5521 51.0005 59.9998 50.5528 59.9998 50.0005C59.9998 49.4483 59.5521 49.0005 58.9998 49.0005ZM6.99998 49.0005L11.537 42.9515L17.5859 49.0005H6.99998Z"
										fill="#7A7979"
									/>
									<path
										d="M56.001 41.9999H24.4151L23.0011 40.5859V20.3999C23.5972 20.7859 24.291 20.9941 25.0011 20.9999C25.802 20.9954 26.5806 20.7358 27.2241 20.2589C27.689 19.9269 28.3132 19.9269 28.7781 20.2589C30.0948 21.2486 31.9073 21.2486 33.2241 20.2589C33.689 19.9269 34.3132 19.9269 34.7781 20.2589C36.1881 21.3143 38.1452 21.2349 39.4651 20.0689C39.8081 19.7826 40.0008 19.3547 39.9881 18.908C39.6341 10.067 31.7721 3 22.0011 3C11.2542 3 4.32417 10.066 4.01217 18.9059C4.00105 19.3536 4.19417 19.7819 4.53717 20.0699C5.2218 20.6632 6.09542 20.9928 7.00116 20.9999C7.80204 20.9954 8.58066 20.7358 9.22416 20.2589C9.68903 19.9269 10.3133 19.9269 10.7782 20.2589C12.0949 21.2486 13.9074 21.2486 15.2241 20.2589C15.689 19.9269 16.3133 19.9269 16.7781 20.2589C18.0139 21.1954 19.7056 21.2519 21.0011 20.3999V38.5899L13.7081 31.2969C13.3176 30.9065 12.6846 30.9065 12.2941 31.2969L9.29416 34.2969C8.90378 34.6874 8.90378 35.3204 9.29416 35.7109L21.2941 47.7109C21.4822 47.897 21.7365 48.0009 22.0011 47.9999H56.001C56.5533 47.9999 57.001 47.5521 57.001 46.9999V42.9999C57.001 42.4476 56.5533 41.9999 56.001 41.9999ZM20.0471 18.642C19.7454 18.8696 19.379 18.9949 19.0011 18.9999C18.6233 18.9946 18.257 18.8692 17.9551 18.642C16.7885 17.8001 15.2138 17.8001 14.0471 18.642C13.4318 19.1201 12.5705 19.1201 11.9551 18.642C10.7885 17.8001 9.21378 17.8001 8.04716 18.642C7.74541 18.8696 7.37904 18.9949 7.00116 18.9999C6.65179 18.9961 6.31154 18.8877 6.02417 18.6889C6.45617 10.614 12.9841 4.99999 22.0011 4.99999C30.5431 4.99999 37.5011 10.99 37.9751 18.6919C37.6881 18.8889 37.3491 18.9961 37.0011 18.9999C36.6232 18.9946 36.2569 18.8692 35.9551 18.642C34.7885 17.8 33.2137 17.8 32.0471 18.642C31.4317 19.1201 30.5705 19.1201 29.9551 18.642C28.7885 17.8 27.2137 17.8 26.0471 18.642C25.4317 19.1201 24.5705 19.1201 23.9551 18.642C22.7885 17.8 21.2137 17.8 20.0471 18.642ZM55.001 45.9999H22.4151L11.4152 34.9999L13.0011 33.4139L21.2931 41.7059L23.2931 43.7059C23.4807 43.894 23.7355 43.9999 24.0011 43.9999H55.001V45.9999Z"
										fill="#7A7979"
									/>
									<path
										d="M51.0013 4.44531C48.4862 4.44806 46.4481 6.48618 46.4453 9.0013C46.4453 11.5175 48.4851 13.5573 51.0013 13.5573C53.5175 13.5573 55.5573 11.5175 55.5573 9.0013C55.5573 6.48506 53.5175 4.44531 51.0013 4.44531ZM51.0013 11.5573C49.5897 11.5573 48.4453 10.4129 48.4453 9.0013C48.4469 7.5903 49.5903 6.44693 51.0013 6.44531C52.4129 6.44531 53.5573 7.58968 53.5573 9.0013C53.5573 10.4129 52.4129 11.5573 51.0013 11.5573Z"
										fill="#7A7979"
									/>
									<path
										d="M44.777 8H43C42.4477 8 42 8.44775 42 9C42 9.55225 42.4477 9.99999 43 9.99999H44.777C45.3292 9.99999 45.777 9.55225 45.777 9C45.777 8.44775 45.3292 8 44.777 8Z"
										fill="#7A7979"
									/>
									<path
										d="M47.3081 3.89413L46.0502 2.63614C45.6529 2.25251 45.0198 2.26351 44.6362 2.66076C44.2619 3.04826 44.2619 3.66263 44.6362 4.05013L45.8942 5.30813C46.2914 5.69188 46.9244 5.68088 47.3081 5.28363C47.6824 4.896 47.6824 4.28163 47.3081 3.89413Z"
										fill="#7A7979"
									/>
									<path
										d="M51 0C50.4477 0 50 0.447749 50 0.999997V2.77699C50 3.32924 50.4477 3.77699 51 3.77699C51.5522 3.77699 52 3.32924 52 2.77699V0.999997C52 0.447749 51.5522 0 51 0Z"
										fill="#7A7979"
									/>
									<path
										d="M57.364 2.63653C56.9735 2.24616 56.3405 2.24616 55.95 2.63653L54.692 3.89453C54.2947 4.27828 54.2837 4.91127 54.6675 5.30852C55.0512 5.70577 55.6842 5.71677 56.0815 5.33302C56.0899 5.32502 56.098 5.31677 56.106 5.30852L57.364 4.05053C57.7544 3.66003 57.7544 3.02703 57.364 2.63653Z"
										fill="#7A7979"
									/>
									<path
										d="M58.9996 8H57.2227C56.6704 8 56.2227 8.44775 56.2227 9C56.2227 9.55225 56.6704 9.99999 57.2227 9.99999H58.9996C59.5519 9.99999 59.9996 9.55225 59.9996 9C59.9996 8.44775 59.5519 8 58.9996 8Z"
										fill="#7A7979"
									/>
									<path
										d="M57.3632 13.9492L56.1052 12.6912C55.7147 12.3008 55.0817 12.3008 54.6912 12.6912C54.3008 13.0817 54.3008 13.7147 54.6912 14.1052L55.9492 15.3632C56.3465 15.747 56.9795 15.736 57.3632 15.3387C57.7375 14.9511 57.7375 14.3367 57.3632 13.9492Z"
										fill="#7A7979"
									/>
									<path
										d="M51 14.2227C50.4477 14.2227 50 14.6704 50 15.2227V16.9996C50 17.5519 50.4477 17.9996 51 17.9996C51.5522 17.9996 52 17.5519 52 16.9996V15.2227C52 14.6704 51.5522 14.2227 51 14.2227Z"
										fill="#7A7979"
									/>
									<path
										d="M47.2848 12.6908C46.8973 12.3166 46.2829 12.3166 45.8953 12.6908L44.6373 13.9488C44.2401 14.3326 44.2291 14.9656 44.6128 15.3628C44.9966 15.7601 45.6296 15.7711 46.0268 15.3873C46.0352 15.3793 46.0433 15.3711 46.0513 15.3628L47.3093 14.1048C47.6929 13.7076 47.682 13.0745 47.2848 12.6908Z"
										fill="#7A7979"
									/>
								</svg>
							</div>
							<div class="column">
								<p class="info-general">Información sobre el puesto</p>
							</div>
							<div class="columns">
								<div class="column is-half box-general">
									<div class="columns box-inputs">
										<div class="column is-full">
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Reporta a</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Correo</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Oficina</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Tipo de retribución</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="column is-half box-general">
									<div class="columns box-inputs">
										<div class="column is-full">
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Cantidad</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Cargo que desempeña</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Fecha de inicio</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
											<div class="column">
												<div class="tarjeta-select">
													<p class="label-left-descripcion">Fecha fin</p>
													<b-field>
														<b-select placeholder="seleccione" size="is-small" expanded>
															<option
																v-for="dato in tipos"
																:value="dato.value"
																:key="dato.id"
																class="option-expiran"
																>{{ dato.value }}</option
															>
														</b-select>
													</b-field>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<hr />
							<br />
							<div class="column">
								<svg
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M58.9998 49.0005H20.4139L6.70698 35.2936C6.32323 34.8963 5.69023 34.8853 5.29298 35.2691C4.89573 35.6528 4.88473 36.2858 5.26848 36.6831C5.27648 36.6914 5.28473 36.6996 5.29298 36.7076L10.109 41.5235L4.49999 49.0005H0.999997C0.447749 49.0005 0 49.4483 0 50.0005C0 50.5528 0.447749 51.0005 0.999997 51.0005H6.13198L1.168 58.4455C0.861497 58.905 0.985497 59.526 1.445 59.8325C1.90449 60.139 2.52549 60.015 2.83199 59.5555L8.53497 51.0005H20.9999V59.0005C20.9999 59.5527 21.4477 60.0005 21.9999 60.0005C22.5522 60.0005 22.9999 59.5527 22.9999 59.0005V51.0005H50.4648L56.1648 59.5555C56.4713 60.015 57.0923 60.139 57.5518 59.8325C58.0113 59.526 58.1353 58.905 57.8288 58.4455L52.8678 51.0005H58.9998C59.5521 51.0005 59.9998 50.5528 59.9998 50.0005C59.9998 49.4483 59.5521 49.0005 58.9998 49.0005ZM6.99998 49.0005L11.537 42.9515L17.5859 49.0005H6.99998Z"
										fill="#7A7979"
									/>
									<path
										d="M56.001 41.9999H24.4151L23.0011 40.5859V20.3999C23.5972 20.7859 24.291 20.9941 25.0011 20.9999C25.802 20.9954 26.5806 20.7358 27.2241 20.2589C27.689 19.9269 28.3132 19.9269 28.7781 20.2589C30.0948 21.2486 31.9073 21.2486 33.2241 20.2589C33.689 19.9269 34.3132 19.9269 34.7781 20.2589C36.1881 21.3143 38.1452 21.2349 39.4651 20.0689C39.8081 19.7826 40.0008 19.3547 39.9881 18.908C39.6341 10.067 31.7721 3 22.0011 3C11.2542 3 4.32417 10.066 4.01217 18.9059C4.00105 19.3536 4.19417 19.7819 4.53717 20.0699C5.2218 20.6632 6.09542 20.9928 7.00116 20.9999C7.80204 20.9954 8.58066 20.7358 9.22416 20.2589C9.68903 19.9269 10.3133 19.9269 10.7782 20.2589C12.0949 21.2486 13.9074 21.2486 15.2241 20.2589C15.689 19.9269 16.3133 19.9269 16.7781 20.2589C18.0139 21.1954 19.7056 21.2519 21.0011 20.3999V38.5899L13.7081 31.2969C13.3176 30.9065 12.6846 30.9065 12.2941 31.2969L9.29416 34.2969C8.90378 34.6874 8.90378 35.3204 9.29416 35.7109L21.2941 47.7109C21.4822 47.897 21.7365 48.0009 22.0011 47.9999H56.001C56.5533 47.9999 57.001 47.5521 57.001 46.9999V42.9999C57.001 42.4476 56.5533 41.9999 56.001 41.9999ZM20.0471 18.642C19.7454 18.8696 19.379 18.9949 19.0011 18.9999C18.6233 18.9946 18.257 18.8692 17.9551 18.642C16.7885 17.8001 15.2138 17.8001 14.0471 18.642C13.4318 19.1201 12.5705 19.1201 11.9551 18.642C10.7885 17.8001 9.21378 17.8001 8.04716 18.642C7.74541 18.8696 7.37904 18.9949 7.00116 18.9999C6.65179 18.9961 6.31154 18.8877 6.02417 18.6889C6.45617 10.614 12.9841 4.99999 22.0011 4.99999C30.5431 4.99999 37.5011 10.99 37.9751 18.6919C37.6881 18.8889 37.3491 18.9961 37.0011 18.9999C36.6232 18.9946 36.2569 18.8692 35.9551 18.642C34.7885 17.8 33.2137 17.8 32.0471 18.642C31.4317 19.1201 30.5705 19.1201 29.9551 18.642C28.7885 17.8 27.2137 17.8 26.0471 18.642C25.4317 19.1201 24.5705 19.1201 23.9551 18.642C22.7885 17.8 21.2137 17.8 20.0471 18.642ZM55.001 45.9999H22.4151L11.4152 34.9999L13.0011 33.4139L21.2931 41.7059L23.2931 43.7059C23.4807 43.894 23.7355 43.9999 24.0011 43.9999H55.001V45.9999Z"
										fill="#7A7979"
									/>
									<path
										d="M51.0013 4.44531C48.4862 4.44806 46.4481 6.48618 46.4453 9.0013C46.4453 11.5175 48.4851 13.5573 51.0013 13.5573C53.5175 13.5573 55.5573 11.5175 55.5573 9.0013C55.5573 6.48506 53.5175 4.44531 51.0013 4.44531ZM51.0013 11.5573C49.5897 11.5573 48.4453 10.4129 48.4453 9.0013C48.4469 7.5903 49.5903 6.44693 51.0013 6.44531C52.4129 6.44531 53.5573 7.58968 53.5573 9.0013C53.5573 10.4129 52.4129 11.5573 51.0013 11.5573Z"
										fill="#7A7979"
									/>
									<path
										d="M44.777 8H43C42.4477 8 42 8.44775 42 9C42 9.55225 42.4477 9.99999 43 9.99999H44.777C45.3292 9.99999 45.777 9.55225 45.777 9C45.777 8.44775 45.3292 8 44.777 8Z"
										fill="#7A7979"
									/>
									<path
										d="M47.3081 3.89413L46.0502 2.63614C45.6529 2.25251 45.0198 2.26351 44.6362 2.66076C44.2619 3.04826 44.2619 3.66263 44.6362 4.05013L45.8942 5.30813C46.2914 5.69188 46.9244 5.68088 47.3081 5.28363C47.6824 4.896 47.6824 4.28163 47.3081 3.89413Z"
										fill="#7A7979"
									/>
									<path
										d="M51 0C50.4477 0 50 0.447749 50 0.999997V2.77699C50 3.32924 50.4477 3.77699 51 3.77699C51.5522 3.77699 52 3.32924 52 2.77699V0.999997C52 0.447749 51.5522 0 51 0Z"
										fill="#7A7979"
									/>
									<path
										d="M57.364 2.63653C56.9735 2.24616 56.3405 2.24616 55.95 2.63653L54.692 3.89453C54.2947 4.27828 54.2837 4.91127 54.6675 5.30852C55.0512 5.70577 55.6842 5.71677 56.0815 5.33302C56.0899 5.32502 56.098 5.31677 56.106 5.30852L57.364 4.05053C57.7544 3.66003 57.7544 3.02703 57.364 2.63653Z"
										fill="#7A7979"
									/>
									<path
										d="M58.9996 8H57.2227C56.6704 8 56.2227 8.44775 56.2227 9C56.2227 9.55225 56.6704 9.99999 57.2227 9.99999H58.9996C59.5519 9.99999 59.9996 9.55225 59.9996 9C59.9996 8.44775 59.5519 8 58.9996 8Z"
										fill="#7A7979"
									/>
									<path
										d="M57.3632 13.9492L56.1052 12.6912C55.7147 12.3008 55.0817 12.3008 54.6912 12.6912C54.3008 13.0817 54.3008 13.7147 54.6912 14.1052L55.9492 15.3632C56.3465 15.747 56.9795 15.736 57.3632 15.3387C57.7375 14.9511 57.7375 14.3367 57.3632 13.9492Z"
										fill="#7A7979"
									/>
									<path
										d="M51 14.2227C50.4477 14.2227 50 14.6704 50 15.2227V16.9996C50 17.5519 50.4477 17.9996 51 17.9996C51.5522 17.9996 52 17.5519 52 16.9996V15.2227C52 14.6704 51.5522 14.2227 51 14.2227Z"
										fill="#7A7979"
									/>
									<path
										d="M47.2848 12.6908C46.8973 12.3166 46.2829 12.3166 45.8953 12.6908L44.6373 13.9488C44.2401 14.3326 44.2291 14.9656 44.6128 15.3628C44.9966 15.7601 45.6296 15.7711 46.0268 15.3873C46.0352 15.3793 46.0433 15.3711 46.0513 15.3628L47.3093 14.1048C47.6929 13.7076 47.682 13.0745 47.2848 12.6908Z"
										fill="#7A7979"
									/>
								</svg>
							</div>
							<div class="column">
								<p class="info-general">Horario laboral</p>
							</div>
							<div class="columns">
								<div class="column is-half box-general">
									<div class="columns box-inputs">
										<div class="column is-full">
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Horario</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Nombre del turno</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="columns box-doble">
												<div class="column">
													<div class="tarjeta-select">
														<p class="label-left-descripcion">Fecha de nacimiento</p>
														<b-field>
															<b-select placeholder="seleccione" size="is-small" expanded>
																<option
																	v-for="dato in tipos"
																	:value="dato.value"
																	:key="dato.id"
																	class="option-expiran"
																	>{{ dato.value }}</option
																>
															</b-select>
														</b-field>
													</div>
												</div>
												<div class="column">
													<div class="field tarjeta">
														<p class="label-left-descripcion">Tolerancia</p>
														<div class="control">
															<input
																class="input input-value"
																type="text"
																value
																placeholder="Ingrese nombre"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="column is-half box-general">
									<div class="columns box-inputs">
										<div class="column is-full">
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Horas</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field tarjeta">
													<p class="label-left-descripcion">Unidad</p>
													<div class="control">
														<input
															class="input input-value"
															type="text"
															value
															placeholder="Ingrese nombre"
														/>
													</div>
												</div>
											</div>
											<div class="columns box-dia">
												<div
													class="column dia"
													@click="dayClick('L')"
													v-bind:class="[lunes ? 'dia-seleccionado' : '']"
												>
													L
												</div>
												<div
													class="column dia"
													@click="dayClick('MA')"
													v-bind:class="[martes ? 'dia-seleccionado' : '']"
												>
													M
												</div>
												<div
													class="column dia"
													@click="dayClick('MI')"
													v-bind:class="[miercoles ? 'dia-seleccionado' : '']"
												>
													M
												</div>
												<div
													class="column dia"
													@click="dayClick('J')"
													v-bind:class="[jueves ? 'dia-seleccionado' : '']"
												>
													J
												</div>
												<div
													class="column dia"
													@click="dayClick('V')"
													v-bind:class="[viernes ? 'dia-seleccionado' : '']"
												>
													V
												</div>
												<div
													class="column dia"
													@click="dayClick('S')"
													v-bind:class="[sabado ? 'dia-seleccionado' : '']"
												>
													S
												</div>
												<div
													class="column dia"
													@click="dayClick('D')"
													v-bind:class="[domingo ? 'dia-seleccionado' : '']"
												>
													D
												</div>
											</div>
											<div class="column">
												<p class="label-center-descripcion">
													Belen trabaja {{ diasSemana }} días a la semana
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
		<MdNewPublication />
	</div>
</template>

<script lang="ts">
import PageBase from '@/utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import LogoSVG from '@/components/LogoSVG.vue';
import { INavBarTitle } from '@/utils/types.utils';
import MdNewPublication from '@/components/md-new-publication.vue';

@Component({
	components: { NavBar, LogoSVG, MdNewPublication },
})
export default class NewPublications extends PageBase {
	lunes = false;
	martes = false;
	miercoles = false;
	jueves = false;
	viernes = false;
	sabado = false;
	domingo = false;
	diasSemana = '--';

	private selectExpiran: boolean = false;
	private save: boolean = false;
	public showNewOptions: boolean = false;
	private menu_start: INavBarTitle[] = [];
	public data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	private dia = 1;
	private tipos = [
		{
			id: 0,
			value: 'Días laborables',
		},
		{
			id: 1,
			value: 'Días calendarios',
		},
	];
	private diasAcumulables = [
		{
			id: 0,
			value: 'Sí',
		},
		{
			id: 1,
			value: 'No',
		},
	];
	private expiracion = [
		{
			id: 0,
			value: 'Final de enero',
		},
		{
			id: 1,
			value: 'Final de febrero',
		},
		{
			id: 2,
			value: 'Final de marzo',
		},
		{
			id: 3,
			value: 'Final de abril',
		},
		{
			id: 4,
			value: 'Final de mayo',
		},
		{
			id: 5,
			value: 'Final de junio',
		},
		{
			id: 6,
			value: 'Final de julio',
		},
		{
			id: 7,
			value: 'Final de agosto',
		},
		{
			id: 8,
			value: 'Final de septiembre',
		},
		{
			id: 9,
			value: 'Final de octubre',
		},
		{
			id: 10,
			value: 'Final de noviembre',
		},
		{
			id: 11,
			value: 'Final de diciembre',
		},
	];
	private menu_end: INavBarTitle[] = [
		{
			icon: 'bell',
			is_only_desktop: true,
			children: [
				{
					title: 'Sin notificaciones',
					text_centered: true,
				},
			],
		},
		{
			icon: 'user',
			is_only_desktop: true,
			children: [
				{
					title: 'Su perfil',
					icon: 'user-cog',
					description: 'Puede consultar y modificar la iformación de su perfil',
				},
				{
					title: 'Configuraciones',
					icon: 'cog',
					description: 'Puede configurar un poco y dejar KiteBlue mucho más comodo para usted',
				},
			],
		},
	];
	private mostrarExpiracion: boolean = false;
	calcularDiasSeleccionados() {
		const suma =
			(this.lunes ? 1 : 0) +
			(this.martes ? 1 : 0) +
			(this.miercoles ? 1 : 0) +
			(this.jueves ? 1 : 0) +
			(this.viernes ? 1 : 0) +
			(this.sabado ? 1 : 0) +
			(this.domingo ? 1 : 0);
		this.diasSemana = suma == 0 ? '--' : suma.toString();
	}
	dayClick(dia: string) {
		switch (dia) {
			case 'L':
				this.lunes = !this.lunes;
				this.calcularDiasSeleccionados();
				break;
			case 'MA':
				this.martes = !this.martes;
				this.calcularDiasSeleccionados();
				break;
			case 'MI':
				this.miercoles = !this.miercoles;
				this.calcularDiasSeleccionados();
				break;
			case 'J':
				this.jueves = !this.jueves;
				this.calcularDiasSeleccionados();
				break;
			case 'V':
				this.viernes = !this.viernes;
				this.calcularDiasSeleccionados();
				break;
			case 'S':
				this.sabado = !this.sabado;
				this.calcularDiasSeleccionados();
				break;
			case 'D':
				this.domingo = !this.domingo;
				this.calcularDiasSeleccionados();
				break;
			default:
				break;
		}
	}
	diaAcumulableSeleccion() {
		this.mostrarExpiracion = this.diasAcumulables[this.dia].id == 0;
		this.save = this.diasAcumulables[this.dia].id == 0;
	}
	public showExpiran() {
		this.selectExpiran = !this.selectExpiran;
	}
	public async created() {
		await super.created();
	}

	public message(): string {
		// this.name will be typed
		return 'Hello, ' + this.$props;
	}

	alerta() {
		this.$buefy.snackbar.open({
			message:
				'<div class="columns"><div class="column is-three-quarters"><p class="mensaje">Datos guardados.</p></div><div class="column"><button :click="deshacer()" type="is-text" style="background-color: transparent; border: 0;color: #7D9CFF;font-family: Poppins;font-style: normal;font-weight: normal;font-size: 12px;line-height: 18px;">Deshacer</button></div></div>',
			type: 'is-white',
			position: 'is-bottom-left',
			actionText: 'X',
			queue: false,
			onAction: () => {
				//console.log('Accion cerrrar');
			},
			indefinite: true,
		});
	}

	public deshacer() {
		//console.log('Deshacer');
	}

	public async show() {
		if (this.showNewOptions) {
			this.showNewOptions = false;
		} else {
			this.showNewOptions = true;
		}
	}
}
</script>

<style lang="scss" scoped>
.app {
	.box-height {
		width: calc(100vw - 4rem);
		height: auto;
		border-radius: 8px;
		//box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;
	}

	.body {
		margin-top: 0;
		height: calc(120vh - 4rem);
	}

	.info-general {
		font-size: 16px;
		line-height: 24px;
		text-align: center;

		color: #7a7979;
	}

	.box-general {
		padding-right: 10%;
		padding-left: 10%;
		margin-top: 5%;
	}

	.box-inputs {
		background: #ffffff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 5%;
	}

	.box-doble {
		margin: 0;
	}

	.tarjeta {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		padding: 5%;
	}

	.tarjeta-select {
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		width: 100%;
		padding-left: 6%;
		padding-top: 5%;
		padding-bottom: 5%;
	}

	.tarjeta-container {
		width: 65%;
		height: 100%;
		background: #ffffff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 50px;
		margin-right: 25%;
		margin-top: auto;
		margin-bottom: auto;
		border: 0.6px solid rgba(122, 121, 121, 0.5);
		box-sizing: border-box;
		border-radius: 3px;
		align-items: center;
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

	.option-expiran {
		background: #e5e5e5;
		border-radius: 4px;
	}
	.box-dia {
		background: #f6f6f6;
		border: 0.6px solid #f6f6f6;
		box-sizing: border-box;
		border-radius: 3px;
		margin: 2%;
	}
	.dia {
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		color: #7a7979;
	}
	.dia-seleccionado {
		background-color: #8969eb;
		color: #ffffff;
	}
	.label-center-descripcion {
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: rgba(122, 121, 121, 0.5);
		text-align: center;
	}
}
.input,
.taginput .taginput-container.is-focusable,
.textarea,
.select select {
	background-color: white;
	border-color: transparent !important;
	border-radius: 4px !important;
	color: #363636;
}
</style>
