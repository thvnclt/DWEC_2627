/*
  Tarea 5 · DWEC · Theo Van Celst
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  console.log("Ejecutando aplicarCambios()");

  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  // TODO: el segundo párrafo, con querySelector y su clase (.segundo): resáltalo con la clase "bg-warning-subtle".
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  // TODO: el tercero, con querySelectorAll("#contenido p") y su posición en la lista: ponlo en rojo con "text-danger".
  const parrafos = document.querySelectorAll("#contenido p");
  if (parrafos.length >= 3) {
    parrafos[2].classList.add("text-danger");
  }
  // TODO: un console.log() que diga que se han aplicado los cambios.
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  console.log("Ejecutando anadirParrafo()");
  const contenido = document.getElementById("contenido");
  const totalParrafos = contenido.querySelectorAll("p").length;

  const nuevoP = document.createElement("p");
  nuevoP.textContent = `Párrafo nuevo ${totalParrafos + 1}`;
  contenido.append(nuevoP);

  document.getElementById("aviso2").classList.add("d-none");
}

function eliminarUltimo() {
  console.log("Ejecutando eliminarUltimo()");
  const contenido = document.getElementById("contenido");
  const ultimoP = contenido.lastElementChild;

  if (ultimoP){
    ultimoP.remove();
  }

  if (!contenido.lastElementChild){
    document.getElementById("aviso2").classList.remove("d-none");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  console.log("Ejecutando activarResaltado()");
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // Definimos las funciones de entrada y salida del ratón para este párrafo
    const entrarRaton = function () {
      parrafo.classList.add("bg-body-secondary");
    };

    const salirRaton = function () {
      parrafo.classList.remove("bg-body-secondary");
    };

    // Añadimos los eventos de forma limpia
    parrafo.addEventListener("mouseenter", entrarRaton);
    parrafo.addEventListener("mouseleave", salirRaton);
  }

  console.log(`Resaltado activado en ${parrafos.length} párrafos.`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  console.log("Ejecutando cambiarTexto()");
  const input = document.getElementById("nuevoTexto");
  const error4 = document.getElementById("error4");
  const texto = input.value.trim();

  if (texto == ""){
    error4.classList.remove("d-none");
  } else {
    error4.classList.add("d-none");
    const primero = document.getElementById("primero");
    primero.textContent = texto;
    input.value = "";
  }
}

function cambiarConHtml() {
  console.log("Ejecutando cambiarConHtml");
  const input = document.getElementById("nuevoTexto");
  const error4 = document.getElementById("error4");
  const texto = input.value.trim();

  if (texto == ""){
    error4.classList.remove("d-none");
  } else {
    error4.classList.add("d-none");
    const primero = document.getElementById("primero");
    primero.innerHTML = texto;
    input.value = "";
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function actualizarContadorTareas(){
    const total = document.querySelectorAll("#listaTareas li").length;
    document.getElementById("totalTareas").textContent = total;
}

function anadirTarea() {
  console.log("Ejecutando anadirTarea()");
  const input = document.getElementById("tareaInput");
  const error5 = document.getElementById("error5");
  const texto = input.value.trim();

  if (texto === "") {
    error5.textContent = "El campo de tarea no puede estar vacío.";
    error5.classList.remove("d-none");
    return;
  }

  error5.classList.add("d-none");

  const lista = document.getElementById("listaTareas");
  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center gap-2";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";

  const span = document.createElement("span");
  span.textContent = texto;

  li.append(checkbox, span);
  lista.append(li);

  input.value = "";
  actualizarContadorTareas();
}

function borrarCompletadas() {
  console.log("Ejecutando borrarCompletadas()");
  const error5 = document.getElementById("error5");
  const marcadas = document.querySelectorAll("#listaTareas input:checked");

  if (marcadas.length === 0) {
    error5.textContent = "No hay ninguna tarea marcada para borrar.";
    error5.classList.remove("d-none");
    return;
  }

  error5.classList.add("d-none");

  for (const checkbox of marcadas) {
    checkbox.parentElement.remove();
  }

  actualizarContadorTareas();
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  console.log("Ejecutando verDatosVentana()");

  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let punto = "";
  if (ancho < 576) {
    punto = "xs (menos de 576 px)";
  } else if (ancho < 768) {
    punto = "sm (desde 576 px)";
  } else if (ancho < 992) {
    punto = "md (desde 768 px)";
  } else if (ancho < 1200) {
    punto = "lg (desde 992 px)";
  } else if (ancho < 1400) {
    punto = "xl (desde 1200 px)";
  } else {
    punto = "xxl (desde 1400 px)";
  }
  document.querySelector("#datoPunto").textContent = punto;

  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;

  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;
}
