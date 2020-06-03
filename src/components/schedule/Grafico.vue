<template>
	<div :style="styles" :class="cssClasses">
		<canvas :id="chartId" :width="width" :height="height" ref="canvas" />
	</div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import Chart, { ChartData, ChartOptions } from 'chart.js';

@Component({
	props: {
		chartId: String,
		width: Number,
		height: Number,
		cssClasses: String,
		styles: Object,
		plugins: Array,
		chartType: String,
		data: Object,
		options: Object,
	},
})
export default class Grafico extends Vue {
	chartId: string;
	width: number;
	height: number;
	cssClasses: string;
	chartType: string;
	styles: { [key: string]: string };
	plugins: Array<any>;

	data: ChartData;
	options: ChartOptions;

	_chart: Chart | null = null;
	_plugins = this.plugins;

	addPlugin(plugin: any) {
		this._plugins.push(plugin);
	}

	renderChart(data: any, options: any) {
		const canvas: any = this.$refs.canvas;
		this._chart = new Chart(canvas.getContext('2d'), {
			type: this.chartType,
			data: data,
			options: options,
			plugins: this._plugins,
		});
	}

	mounted() {
		this.renderChart(this.data, this.options);
	}

	beforeDestroy() {
		if (this._chart) {
			this._chart.destroy();
		}
	}
}
</script>
