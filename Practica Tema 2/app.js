function despedida(){
  alert("Adios");
  console.log("[Adios]");
}

// Función 1: Saludo al usuario
function saludarUsuario() {
  const nombreAlumno = "Theo Van Celst";
  alert("¡Hola! Saludos desde la aplicación web desarrollada por " + nombreAlumno);
  console.log("[INFO] El usuario ha pulsado el botón de saludo.");
}

// Función 2: Simulación de fallo en background
function simularErrorServidor() {
  // No muestra nada al usuario en la interfaz
  console.error("[ERROR CRÍTICO] Fallo en la simulación de conexión con la API bancaria (Status 500).");
}

// Función 3: Inspección de cadena UserAgent
function detectarNavegador() {
  const userAgentInfo = navigator.userAgent;
  alert("Información del navegador detectado:\n\n" + userAgentInfo);
  console.warn("[WARN] Cadena UserAgent extraída correctamente desde el objeto navigator:", userAgentInfo);
}