function ejercicio1() {
  console.log("--- Ejercicio 1 · Theo Van Celst ---");

  const edad = 20;
  const usuario = "Theo";
  const activo = true;
  const vacio = null;
  const granEntero = 100n;
  let estado;

  console.log("edad:", edad, typeof edad);
  console.log("usuario:", usuario, typeof usuario);
  console.log("activo:", activo, typeof activo);
  console.log("vacio:", vacio, typeof vacio);
  console.log("granEntero:", granEntero, typeof granEntero);
  console.log("estado inicial:", estado, typeof estado);

  estado = "finalizado";
  console.log("estado final:", estado, typeof estado);
}

function ejercicio2() {
  console.log("--- Ejercicio 2 · Theo Van Celst ---");

  const c1 = String(123);
  const c2 = Number("123");
  const c3 = Number("12abc");
  const c4 = Number("");
  const c5 = Number(true);
  const c6 = Boolean(0);
  const c7 = Boolean("texto");
  const c8 = Boolean("");

  console.log('String(123):', c1, typeof c1);
  console.log('Number("123"):', c2, typeof c2);
  console.log('Number("12abc"):', c3, typeof c3);
  console.log('Number(""):', c4, typeof c4);
  console.log('Number(true):', c5, typeof c5);
  console.log('Boolean(0):', c6, typeof c6);
  console.log('Boolean("texto"):', c7, typeof c7);
  console.log('Boolean(""):', c8, typeof c8);
}

function ejercicio3() {
  console.log("--- Ejercicio 3 · Theo Van Celst ---");

  console.log('"10" - 2:', "10" - 2);
  console.log('"10" + 2:', "10" + 2);
  console.log('"4" * 2:', "4" * 2);
  console.log('true + 1:', true + 1);
  console.log('"15" / 3:', "15" / 3);
  console.log('"Item: " + 5:', "Item: " + 5);

  console.log('5 == "5":', 5 == "5");
  console.log('5 === "5":', 5 === "5");
  console.log('0 == false:', 0 == false);
  console.log('0 === false:', 0 === false);
  console.log('null == undefined:', null == undefined);
  console.log('null === undefined:', null === undefined);
}

function ejercicio4() {
  console.log("--- Ejercicio 4 · Theo Van Celst ---");

  const nombre = "Theo Van Celst";
  const ciclo = "DAW";
  const curso = "2º";
  const aficion = "programar";

  let horas = 5;
  horas += 2;

  const msg1 = `Me llamo ${nombre}. Estudio ${curso} de ${ciclo}, me gusta ${aficion} y llevo ${horas} horas de estudio.`;
  alert(msg1);
  console.log("Plantilla:", msg1);

  const msg2 = "Me llamo " + nombre + ". Estudio " + curso + " de " + ciclo + ", me gusta " + aficion + " y llevo " + horas + " horas de estudio.";
  console.log("Concatenado:", msg2);

  console.log("¿Son iguales?:", msg1 === msg2);
}