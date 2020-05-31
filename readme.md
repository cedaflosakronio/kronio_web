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