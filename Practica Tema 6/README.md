# Tarea 6 · Objetos y arrays

**Autor:** Theo Van Celst · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

Esta carpeta contiene la página interactiva de la tarea. Abre `index.html` en el navegador o abre la carpeta en Visual Studio Code y pulsa **Go Live**. Los seis ejercicios están en tarjetas; los resultados aparecen en la propia página y también se registran en la consola (F12).

## Ejercicios

1. **Ficha:** objeto literal con nombre, apellidos, edad y curso; `presentarse()` usa `this`. Los botones muestran los datos, aumentan la edad y eliminan `curso` con `delete`. Después de eliminarlo, `curso` pasa a ser `undefined`; la ficha lo indica como «(no indicado)».
2. **Colores:** `push()` añade al final, `pop()` quita el último y `shift()` quita el primero. Se actualiza la lista y su contador. La lista empieza con rojo, verde y azul.
3. **Productos:** catálogo de seis objetos. `sort()` compara precios con `a.precio - b.precio`, `filter()` selecciona los que cuestan más de 50 € y `find()` busca por una parte del nombre sin distinguir mayúsculas. Se ordena `[...productos]` porque `sort()` modifica el array sobre el que se ejecuta; así se conserva el catálogo original.
4. **Notas:** el objeto valida que cada entrada sea un número entre 0 y 10, calcula la media con `reduce()` y muestra las aprobadas en verde y las suspensas en rojo. Empieza con cinco notas para que se vea la media desde el inicio.
5. **Transformaciones:** `map()` obtiene los dobles, `filter()` selecciona los pares y `reduce()` suma. La cadena filtra los pares, duplica esos valores y suma los dobles: **120**.
6. **Ciudades:** `slice(2, 5)` devuelve Málaga, Córdoba y Jaén sin modificar el array. `splice(2, 2)` extrae Málaga y Córdoba y sí cambia el array, que queda con seis ciudades. La búsqueda exacta muestra el resultado de `includes()` y la posición de `indexOf()` (o `-1` si no aparece).

## Capturas

Guarda capturas propias de la página en `capturas/` con estos nombres y sustituye las imágenes de ejemplo incluidas en la plantilla. Para que sean evidencias válidas, hazlas al ejecutar tu página y muestra los resultados indicados:

- `a-pagina.png`: página recién cargada con tu nombre, los colores iniciales, los productos y las ciudades.
- `b-ej1-ej2.png`: ficha después de cumplir años y colores después de añadir y quitar uno.
- `c-ej3-ordenado.png`: catálogo ordenado por precio.
- `d-ej4-notas.png`: al menos cinco notas, con suspensos, aprobados y media.
- `e-ej5-cadena.png`: salida de filter, map y reduce seguidos; la suma final es 120.
- `f-ej6-splice.png`: ciudades tras usar splice y una búsqueda de ciudad.

## Reflexión

`push()`, `pop()`, `shift()`, `sort()` y `splice()` modifican el array original. En el ejercicio 6, `slice(2, 5)` devuelve una selección nueva y deja intactas las ciudades; en cambio, `splice(2, 2)` quita dos elementos de `ciudades`. `map()` y `filter()` producen arrays nuevos, y `reduce()` devuelve un único valor. En el ejercicio 3 ordeno una copia (`[...productos]`) porque `sort()` altera el array y quiero conservar el catálogo en su orden inicial para los demás botones.

## Fuentes

- Material de clase: **Desarrollo web en entorno cliente. Tema 6**, proporcionado para la tarea.
- Enunciado y plantilla: **Tarea_tema_06.pdf**, proporcionado para la tarea.

## Uso de IA

He utilizado ChatGPT como apoyo para completar y revisar la implementación y la explicación de los ejercicios. He contrastado las funciones con el enunciado y el material de clase. Debo revisar el código, probar cada botón y ser capaz de explicar las decisiones en la defensa de la tarea.
