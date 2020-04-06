<template>
	<div>
		<p class="title has-text-primary has-text-centered">
			Kronio siempre esta mejorando
		</p>
		<p class="subtitle has-text-grey has-text-centered is-6">
			Por el momento, esta sección no esta disponible, estamos trabajando en ello
		</p>
		<div class="columns is-centered">
			<div class="column"></div>
			<div class="column is-8">
				<img class="imagen-error" src="../assets/working.png" />
			</div>
			<div class="column"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LogoSVG extends Vue {}
</script>

<style lang="scss" scoped>
.imagen-error {
	max-height: calc(40vh);
}
</style>
