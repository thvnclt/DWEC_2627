console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

function sumar() {
  const num1 = leerNumero("numero1");
  const num2 = leerNumero("numero2");

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    mostrar("Error: Faltan números o hay un valor inválido.", "danger");
    console.error("Error: Faltan números en la suma.");
    return;
  }

  const resultado = num1 + num2;
  mostrar(`${num1} + ${num2} = ${resultado}`);
  console.log(`${num1} + ${num2} = ${resultado}`);
}

function restar() {
  const num1 = leerNumero("numero1");
  const num2 = leerNumero("numero2");

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    mostrar("Error: Faltan números o hay un valor inválido.", "danger");
    console.error("Error: Faltan números en la resta.");
    return;
  }

  const resultado = num1 - num2;
  mostrar(`${num1} - ${num2} = ${resultado}`);
  console.log(`${num1} - ${num2} = ${resultado}`);
}

function multiplicar() {
  const num1 = leerNumero("numero1");
  const num2 = leerNumero("numero2");

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    mostrar("Error: Faltan números o hay un valor inválido.", "danger");
    console.error("Error: Faltan números en la multiplicación.");
    return;
  }

  const resultado = num1 * num2;
  mostrar(`${num1} * ${num2} = ${resultado}`);
  console.log(`${num1} * ${num2} = ${resultado}`);
}

function dividir() {
  const num1 = leerNumero("numero1");
  const num2 = leerNumero("numero2");

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    mostrar("Error: Faltan números o hay un valor inválido.", "danger");
    console.error("Error: Faltan números en la división.");
    return;
  }

  if (num2 === 0) {
    mostrar("Error: No se puede dividir entre 0.", "danger");
    console.error("Error: División por cero.");
    return;
  }

  const resultado = num1 / num2;
  mostrar(`${num1} / ${num2} = ${resultado}`);
  console.log(`${num1} / ${num2} = ${resultado}`);
}

function potencia() {
  const num1 = leerNumero("numero1");
  const num2 = leerNumero("numero2");

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    mostrar("Error: Faltan números o hay un valor inválido.", "danger");
    console.error("Error: Faltan números en la potencia.");
    return;
  }

  const resultado = num1 ** num2;
  mostrar(`${num1} ** ${num2} = ${resultado}`);
  console.log(`${num1} ** ${num2} = ${resultado}`);
}

function modulo() {
  const num1 = leerNumero("numero1");
  const num2 = leerNumero("numero2");

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    mostrar("Error: Faltan números o hay un valor inválido.", "danger");
    console.error("Error: Faltan números en el módulo.");
    return;
  }

  if (num2 === 0) {
    mostrar("Error: No se puede calcular el módulo con 0.", "danger");
    console.error("Error: Módulo por cero.");
    return;
  }

  const resultado = num1 % num2;
  mostrar(`${num1} % ${num2} = ${resultado}`);
  console.log(`${num1} % ${num2} = ${resultado}`);
}

// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const num1 = leerNumero("numero1");
  const num2 = leerNumero("numero2");

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    mostrar("Error: Faltan números o hay un valor inválido.", "danger");
    console.error("Error: Faltan números en la comparación.");
    return;
  }

  let mensaje = "";
  if (num1 > num2) {
    mensaje = `El número 1 (${num1}) es mayor que el número 2 (${num2})`;
  } else if (num1 < num2) {
    mensaje = `El número 2 (${num2}) es mayor que el número 1 (${num1})`;
  } else {
    mensaje = `El número 1 (${num1}) y el número 2 (${num2}) son iguales`;
  }

  mostrar(mensaje);
  console.log(mensaje);
}

function esParOImpar() {
  const num1 = leerNumero("numero1");

  if (Number.isNaN(num1)) {
    mostrar("Error: Falta el número 1 o hay un valor inválido.", "danger");
    console.error("Error: Falta el número 1 para par o impar.");
    return;
  }

  if (!Number.isInteger(num1)) {
    mostrar("Aviso: El número tiene decimales, no es ni par ni impar.", "warning");
    console.warn("Aviso: El número tiene decimales.");
    return;
  }

  const resultado = num1 % 2 === 0 ? "par" : "impar";
  const mensaje = `El número ${num1} es ${resultado}`;
  mostrar(mensaje);
  console.log(mensaje);
}

// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function validarNumeroBucle(num) {
  if (Number.isNaN(num)) {
    mostrar("Error: Falta el número 1 para ejecutar el bucle.", "danger");
    console.error("Error: Falta el número 1 para el bucle.");
    return false;
  }
  if (!Number.isInteger(num)) {
    mostrar("Error: El número debe ser entero para repetir el bucle.", "danger");
    console.error("Error: El número tiene decimales.");
    return false;
  }
  if (num > MAXIMO_REPETICIONES) {
    mostrar(`Error: El número no puede ser mayor que ${MAXIMO_REPETICIONES}.`, "danger");
    console.error(`Error: El número supera el máximo de ${MAXIMO_REPETICIONES}.`);
    return false;
  }
  return true;
}

function bucleForTexto() {
  const num = leerNumero("numero1");
  if (!validarNumeroBucle(num)) return;

  limpiarSalida();
  let contador = 0;

  for (let i = 1; i <= num; i++) {
    anadirLinea(`for repetición ${i} de ${num}`);
    contador++;
  }

  const textoTotal = contador === 1 ? "Total: 1 repetición" : `Total: ${contador} repeticiones`;
  anadirLinea(textoTotal);
  console.log(`bucleForTexto: ${textoTotal}`);
}

function bucleWhileTexto() {
  const num = leerNumero("numero1");
  if (!validarNumeroBucle(num)) return;

  limpiarSalida();
  let contador = 0;
  let i = 1;

  while (i <= num) {
    anadirLinea(`while repetición ${i} de ${num}`);
    contador++;
    i++;
  }

  const textoTotal = contador === 1 ? "Total: 1 repetición" : `Total: ${contador} repeticiones`;
  anadirLinea(textoTotal);
  console.log(`bucleWhileTexto: ${textoTotal}`);
}

function bucleDoWhileTexto() {
  const num = leerNumero("numero1");
  if (!validarNumeroBucle(num)) return;

  limpiarSalida();
  let contador = 0;
  let i = 1;

  do {
    anadirLinea(`do...while repetición ${i} de ${num <= 0 ? 1 : num}`);
    contador++;
    i++;
  } while (i <= num);

  const textoTotal = contador === 1 ? "Total: 1 repetición" : `Total: ${contador} repeticiones`;
  anadirLinea(textoTotal);
  console.log(`bucleDoWhileTexto: ${textoTotal}`);
}

// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function bucleForBadges() {
  const num = leerNumero("numero1");
  if (!validarNumeroBucle(num)) return;

  limpiarSalida();
  let contador = 0;

  for (let i = 1; i <= num; i++) {
    const colorBadge = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
    contador++;
  }

  const textoTotal = contador === 1 ? "Total: 1 repetición" : `Total: ${contador} repeticiones`;
  anadirLinea(textoTotal);
  console.log(`bucleForBadges: ${textoTotal}`);
}

function bucleWhileBadges() {
  const num = leerNumero("numero1");
  if (!validarNumeroBucle(num)) return;

  limpiarSalida();
  let contador = 0;
  let i = 1;

  while (i <= num) {
    const colorBadge = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
    contador++;
    i++;
  }

  const textoTotal = contador === 1 ? "Total: 1 repetición" : `Total: ${contador} repeticiones`;
  anadirLinea(textoTotal);
  console.log(`bucleWhileBadges: ${textoTotal}`);
}

function bucleDoWhileBadges() {
  const num = leerNumero("numero1");
  if (!validarNumeroBucle(num)) return;

  limpiarSalida();
  let contador = 0;
  let i = 1;

  do {
    const colorBadge = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
    contador++;
    i++;
  } while (i <= num);

  const textoTotal = contador === 1 ? "Total: 1 repetición" : `Total: ${contador} repeticiones`;
  anadirLinea(textoTotal);
  console.log(`bucleDoWhileBadges: ${textoTotal}`);
}
