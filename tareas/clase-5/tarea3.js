document.querySelector("#ingreso-datos").onclick = function () {
  let horasVideos = Number(document.querySelector("#horas").value);
  let minutosVideos = Number(document.querySelector("#minutos").value);
  let segundosVideos = Number(document.querySelector("#segundos").value);

  sumarTiempoVideos(horasVideos, minutosVideos, segundosVideos);
  return false;
};

const horasArr = [];
const minutosArr = [];
const segundosArr = [];
function sumarTiempoVideos(horas, minutos, segundos) {
  const acumuladorHoras = horasArr.push(horas);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let horasTotal = horasArr.reduce(reducer);
  const acumuladorMinutos = minutosArr.push(minutos);
  let minutosTotal = minutosArr.reduce(reducer);
  const acumuladorSegundos = segundosArr.push(segundos);
  let segundosTotal = segundosArr.reduce(reducer);
  const $textoDuracion = document.querySelector("#duracion-videos");
  $textoDuracion.textContent = `La duracion de los videos es ${horasTotal} horas, ${minutosTotal}, minutos y ${segundosTotal} segundos.`;
}
