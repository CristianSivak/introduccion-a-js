document.querySelector('#ingreso-datos').onclick = function(){
    const nombreUsuario = document.querySelector('#nombre').value;
    return document.querySelector('#saludo').innerText = `Bienvenido, ${nombreUsuario}!`;
    
}
