# Kronio

Plataforma web de manejo de personal a nivel empresarial.

## Instalación

En la raíz del proyecto ejecuta el comando.

```bash
npm install
```

## Ejecución

```bash
npm run serve
```

## Consideraciones
Hacer uso de las extensiones en visual code [prettier](https://prettier.io/) para el control de espaciado y formato dentro del documento.
Una vez instalada la extensión con Ctrl+Shift+p buscar Format Document, para dar formato al documento.
Manejo de responsive: resoluciones -> 1920px 1440px 1024px 768px y 600px

## Posibles errores
Al hacer uso de prettier no formatee correctamente el documento debido a que esta usando espacios en vez de tabs, en vscode nos dirigimos a File -> Preferences -> Settings, en la barra de búsqueda colocamos "tabs" y en el submenu Extensions seleccionamos Prettier veremos 2 opciones marcamos con un checkbox la que dice "Prettier: Use Tabs". Reinicia de ser posible vscode e intenta formatear nuevamente.

## Uso de chartjs
Para hacer uso de los graficos de chartjs, se deben seguir los siguientes pasos:

1: Importar el componente Grafico en nuestro ts.
```bash
import Grafico from '@/components/schedule/Grafico.vue';
```
2: Agregar el componente Grafico en nuestros componentes.
```bash
@Component({
	components: { Grafico },
})
```
3: Agregar el componente Grafico en nuestros html, este posee varias props que ayudaran con mejoras del grafico las principales son la data y charType.
```bash
<PruebaBar :data="chardata" :chartType="'bar'" :options="options" 
:cssClasses="'column is-8'" :height="80"
/>
```
4: Agregar los datos del Grafico, esto se puede obtener de la página oficial de [chatjs](https://www.chartjs.org/).
```bash
private chardata = {
		labels: [
			'1 de mayo',
			'2 de mayo',
			'27 de mayo',
		],
		datasets: [
			{
				backgroundColor: '#CAD6FF',
				data: [8.25, 8.25, 1],
			},
		],
	};
	private options = {
		legend: {
			display: false,
		},
		scales: {
			xAxes: [
				{
					display: false,
					categoryPercentage: 1.0,
				},
			],
			yAxes: [
				{
					display: false,
				},
			],
		},
	};
```