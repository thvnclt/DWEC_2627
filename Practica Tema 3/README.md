# Tema 03: Variables, tipos y conversiones

**Estudiante:** Theo Van Celst  
**Asignatura:** Desarrollo Web en Entorno Cliente (DWEC)  

## Descripción
Resolución de los ejercicios del Tema 03 sobre declaración de variables (`const`, `let`), tipos primitivos, conversiones explícitas e implícitas, y uso de plantillas de cadena.

## Capturas de pantalla
1. ![Página completa](capturas/pagina_entera.png)  
   Vista de la interfaz maquetada con Bootstrap.
2. ![Ejercicio 1](capturas/ejercicio1.png)  
   Prueba de tipos de datos en la consola.
3. ![Ejercicio 2](capturas/ejercicio2.png)  
   Resultados de conversiones explícitas.
4. ![Ejercicio 3](capturas/ejercicio3.png)  
   Coerción de tipos e igualdad estricta.
5. ![Ejercicio 4](capturas/ejercicio4.png)  
   Plantilla de cadena y error de reasignación en `const`.

## Reflexión
Las funciones de conversión explícita son simples de usar, aunque resultados como `Number("")` evaluado a `0` resultan curiosos. En cuanto a la coerción, el operador `+` prioriza las cadenas, mientras que los demás operadores fuersan la conversión a número. Por ello, emplear `===` ayuda a evitar fallos involuntarios.

## Referencias
- [MDN - JavaScript Data Structures](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)