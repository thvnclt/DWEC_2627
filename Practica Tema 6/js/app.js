/* Tarea 6 · DWEC · Theo Van Celst
   Objetos y arrays. Funciones declaradas, sin funciones flecha. */

console.log("app.js cargado");

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}

// Ejercicio 1 · Ficha de estudiante
const estudiante = {
  nombre: "Theo",
  apellidos: "Van Celst",
  edad: 24,
  curso: "2.º DAW",
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + (this.curso || "un curso no indicado") + ".";
  }
};

function verFicha() {
  const salida1 = document.querySelector("#salida1");
  salida1.textContent = "";
  const ul = document.createElement("ul");
  ul.classList.add("list-group", "mb-2");
  ["nombre", "apellidos", "edad", "curso"].forEach(function (propiedad) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = propiedad + ": " + (estudiante[propiedad] === undefined ? "(no indicado)" : estudiante[propiedad]);
    ul.append(li);
  });
  salida1.append(ul);
  const frase = document.createElement("p");
  frase.classList.add("mb-0", "fst-italic");
  frase.textContent = estudiante.presentarse();
  salida1.append(frase);
  console.log("Ejercicio 1: ficha", estudiante);
}

function cumplirAnios() {
  estudiante.edad += 1;
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
  console.log("Ejercicio 1: se eliminó la propiedad curso");
}

// Ejercicio 2 · Colores
const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";
  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });
  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();
  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }
  colores.push(color);
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    return;
  }
  const eliminado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: pop → salió", eliminado, comoTexto(colores));
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    return;
  }
  const eliminado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: shift → salió", eliminado, comoTexto(colores));
}

mostrarColores();

// Ejercicio 3 · Catálogo de productos
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";
  lista.forEach(function (producto) {
    const fila = document.createElement("tr");
    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;
    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;
    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";
    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Catálogo completo: " + productos.length + " productos.";
}

function ordenarPorPrecio() {
  const ordenados = [...productos];
  ordenados.sort(function (a, b) { return a.precio - b.precio; });
  pintarProductos(ordenados);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro.";
  console.log("Ejercicio 3: orden por precio", ordenados);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) { return producto.precio > 50; });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Productos de más de 50 €: " + caros.length + ".";
  console.log("Ejercicio 3: filter > 50 €", caros);
}

function buscarProducto() {
  const consulta = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");
  if (consulta === "") {
    mensaje.textContent = "Escribe un nombre para buscar.";
    pintarProductos([]);
    return;
  }
  const encontrado = productos.find(function (producto) { return producto.nombre.toLowerCase().includes(consulta); });
  if (encontrado === undefined) {
    mensaje.textContent = "No se encontró ningún producto que contenga «" + consulta + "».";
    pintarProductos([]);
  } else {
    mensaje.textContent = "Producto encontrado:";
    pintarProductos([encontrado]);
  }
}

mostrarProductos();

// Ejercicio 4 · Notas
const alumno = {
  nombre: "Theo Van Celst",
  notas: [7.5, 4, 9, 5, 3.25],
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) return false;
    this.notas.push(nota);
    return true;
  },
  media: function () {
    if (this.notas.length === 0) return 0;
    const suma = this.notas.reduce(function (acumulado, nota) { return acumulado + nota; }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1", nota >= 5 ? "text-bg-success" : "text-bg-danger");
    badge.textContent = nota;
    contenedor.append(badge);
  });
  document.querySelector("#media").textContent = alumno.notas.length === 0
    ? "Todavía no hay notas."
    : "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  if (casilla.value.trim() === "") {
    error.textContent = "Escribe una nota entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }
  const nota = Number(casilla.value);
  if (!alumno.anadirNota(nota)) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }
  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
  console.log("Ejercicio 4: notas", comoTexto(alumno.notas));
}

function borrarNotas() {
  alumno.notas.length = 0;
  document.querySelector("#error4").classList.add("d-none");
  mostrarNotas();
}

mostrarNotas();

// Ejercicio 5 · map, filter y reduce
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (numero) { return numero * 2; });
  document.querySelector("#salida5").textContent = "map (dobles): " + comoTexto(dobles) + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: map", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero) { return numero % 2 === 0; });
  document.querySelector("#salida5").textContent = "filter (pares): " + comoTexto(pares) + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: filter", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (acumulado, numero) { return acumulado + numero; }, 0);
  document.querySelector("#salida5").textContent = "reduce (suma): " + suma + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: reduce", suma);
}

function verCadena() {
  const pares = numeros.filter(function (numero) { return numero % 2 === 0; });
  const dobles = pares.map(function (numero) { return numero * 2; });
  const suma = dobles.reduce(function (acumulado, numero) { return acumulado + numero; }, 0);
  document.querySelector("#salida5").textContent = "1. filter → " + comoTexto(pares) + "\n2. map → " + comoTexto(dobles) + "\n3. reduce → " + suma;
  console.log("Ejercicio 5: filter → map → reduce", pares, dobles, suma);
}

// Ejercicio 6 · Ciudades
const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";
  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-light", "border", "text-dark", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    contenedor.append(badge);
  });
}

function verSlice() {
  const seleccion = ciudades.slice(2, 5);
  document.querySelector("#salida6").textContent = "slice(2, 5) devuelve " + comoTexto(seleccion) + ". El array original conserva " + ciudades.length + " ciudades.";
  console.log("Ejercicio 6: slice", seleccion, ciudades);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");
  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de 3 ciudades; pulsa Restaurar antes de usar splice.";
    return;
  }
  const eliminadas = ciudades.splice(2, 2);
  salida.textContent = "splice(2, 2) devuelve " + comoTexto(eliminadas) + ". Ahora quedan " + ciudades.length + " ciudades; el array original sí ha cambiado.";
  mostrarCiudades();
  console.log("Ejercicio 6: splice eliminó", eliminadas, ciudades);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  document.querySelector("#salida6").textContent = "Lista restaurada: " + ciudades.length + " ciudades.";
}

function buscarCiudad() {
  const consulta = document.querySelector("#buscarCiudad").value.trim();
  const salida = document.querySelector("#salida6");
  if (consulta === "") {
    salida.textContent = "Escribe el nombre exacto de una ciudad.";
    return;
  }
  const existe = ciudades.includes(consulta);
  const posicion = ciudades.indexOf(consulta);
  salida.textContent = "includes(«" + consulta + "»): " + existe + "; indexOf(«" + consulta + "»): " + posicion + (posicion === -1 ? " (no aparece en la lista)." : " (posición desde 0). ");
  console.log("Ejercicio 6: búsqueda", consulta, existe, posicion);
}

mostrarCiudades();
