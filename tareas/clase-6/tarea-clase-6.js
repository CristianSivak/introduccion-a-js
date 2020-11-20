/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#button").onclick = function (event) {
  const cantidadFamiliares = Number(
    document.querySelector("#cantidad-familiares").value
  );

  crearIntegrantes(cantidadFamiliares);
  mostrarBotonCalcular();
  event.preventDefault();
};

function crearIntegrantes(cant) {
  if (cant <= 0) {
    console.log("No ingreso ningun familiar");
  } else {
    for (let i = 0; i < cant; i++) {
      crearInputEdad(i);
    }
  }
}

function crearInputEdad(indice) {
  const nodoPagina = document.querySelector("div");
  const $Label = document.createElement("label");
  $Label.textContent = "ingrese Edad Familiar #" + (indice + 1);
  const $Input = document.createElement("input");
  $Input.type = Number;
  $Input.className = "inputEdad";
  nodoPagina.appendChild($Label);
  nodoPagina.appendChild($Input);
}

function mostrarBotonCalcular() {
  document.querySelector("#buttonCalcular").className = "visible";
}

document.querySelector("#buttonCalcular").onclick = function (e) {
  obtenerEdadesIntegrantes();
};

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll(".inputEdad");
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  mayorEdad(edades);
  menorEdad(edades);
  promedioEdad(edades);
  return console.log(edades);
}

function mayorEdad(numero) {
  let mayorEdad = numero[0];
  for (let i = 0; i < numero.length; i++) {
    if (mayorEdad < numero[i]) {
      mayorEdad = numero[i];
    }
  }
  return console.log(mayorEdad);
}

function menorEdad(numero) {
  let menorEdad = numero[0];
  for (let i = 0; i < numero.length; i++) {
    if (menorEdad > numero[i]) {
      menorEdad = numero[i];
    }
  }
  return console.log(menorEdad);
}

function promedioEdad(numero) {
  let promedioEdad = 0;
  for (let i = 0; i < numero.length; i++) {
    promedioEdad += numero[i];
  }
  return console.log(promedioEdad / numero.length);
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
