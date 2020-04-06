<template>
	<div class="home">
		<ErrorSection />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ErrorSection from '@/components/ErrorSection.vue';

@Component({
	components: { ErrorSection },
})
export default class LogoSVG extends Vue {}
</script>
