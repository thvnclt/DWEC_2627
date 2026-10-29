# Tarea 5 · Manipular el DOM

Theo Van Celst · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

**Plantilla de la tarea 5.**

Para probar esta práctica, abre la carpeta Tema5 en VS Code, pulsa Go live para iniciar el servidor local y abre index.html en el navegador con la consola de desarrollo abierta (F12) para verificar los logs y el comportamiento de los eventos.

## Capturas

### a) La página recién cargada

<img src="capturas/captura a.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

En la barra de navegación superior aparece mi nombre completo, y en el cuerpo de la página se visualizan los tres párrafos de partida definidos en la plantilla HTML original.

### b) Ejercicios 1 y 2

<img src="capturas/captura b.png" alt="Los párrafos después de aplicar los cambios y añadir dos párrafos" width="600">

Se han modificado las propriedas de los párrafos existentes utilizando selectores del DOM como getElementById y querySelector, cambiando sus clases y textos.

### c) Ejercicio 3: resaltado al pasar el ratón

<img src="capturas/captura c.png" alt="Párrafo resaltado al pasar el ráton" width="600">

Al pulsar el botón "Activar resaltado", se recorre mediante un bucle los párrafos de `#contenido` asociándoles eventos `mouseenter` y `mouseleave` que añaden y quitan la clase de Bootstrap `bg-body-secondary`. Al pasar el ratón por encima de cualquiera de los párrafos activos, se aplica dicho fondo visualmente.

### d) Ejercicio 4: `<b>hola</b>` con innerHTML

<img src="capturas/captura d.png" alt="El primer párrafo tras usar innerHTML" width="600">

Al utilizar la propiedad textContent, el navegador interpreta la cadena literal y muestra el texto <b>hola</b> en pantalla tal cual. Al cambiar a innerHTML, el analizador del navegador interpreta el marcado HTML, haciendo que la palabra «hola» aparezca renderizada en negrita real.

### e) Ejercicio 5: la lista de tareas

<img src="capturas/captura e.png" alt="La lista con tres tareas y una marcada" width="600">

Se muestra la aplicación de lista de tareas con tres elementos introducidos, donde uno de ellos aparece marcado como completado. Al pulsar el botón de borrar completadas, el DOM actualiza de forma dinámica los elementos hijos eliminando los marcados.

### f) Ejercicio 6: los datos de la ventana en el móvil

<img src="capturas/captua f.png" alt="Los datos de la ventana en el modo móvil" width="300">

En el modo de simulación móvil (Responsive Design Mode), el script detecta las dimensiones reducidas de la ventana (window.innerWidth) y muestra el punto de corte (breakpoint) correspondiente a dispositivos móviles, a diferencia del ancho completo detectado en el escritorio.

## Reflexión

La diferencia clave es que `textContent` trata el contenido estrictamente como texto plano, mientras que `innerHTML` lo interpreta como código HTML. Por razones de seguridad, **nunca se debe usar `innerHTML` con datos introducidos por el usuario**. Como vimos con `<b>hola</b>`, este último procesa y ejecuta las etiquetas. Si un usuario malintencionado inyectara código o scripts, podría provocar una vulnerabilidad de tipo **XSS (Cross-Site Scripting)**. Por tanto, para manipular texto de origen externo de forma segura, siempre se debe emplear `textContent`.

## Fuentes

- [Título de la página](http://127.0.0.1:5500/Practica%20Tema%205/index.html)

## Uso de IA

Se ha empleado inteligencia artificial como herramienta de apoyo técnico para estructurar la documentación del README, verificar la sintaxis de JavaScript y redactar la reflexión sobre seguridad. Todo el código y la implementación final han sido probados, depurados y adaptados manualmente.
