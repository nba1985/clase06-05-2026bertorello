"use strict";
let nombre = "Curso de Programación";
let descripcion = "Aprende a programar desde cero con este curso completo.";
let precio = 8900;
let disponible = true;
let titulocurso = document.querySelector("#tituloCurso");
let descripcioncurso = document.querySelector("#descripcionCurso");
let preciocurso = document.querySelector("#precioCurso");
let estadocurso = document.querySelector("#estadoCurso");
if (titulocurso) {
    titulocurso.innerHTML = curso;
}
if (descripcioncurso) {
    descripcioncurso.innerHTML = descripcion;
}
if (preciocurso) {
    preciocurso.innerHTML = "Precio: $" + precio;
}
if (estadocurso) {
    if (disponible) {
        estadocurso.innerHTML = "Cupos disponibles";
    }
    else {
        estadocurso.innerHTML = "Curso completo";
    }
}
alert("¡Bienvenido!");
console.log("Hola");
let boton = document.querySelector("#boton");
if (boton) {
    boton.onclick = function () {
        document.body.style.backgroundColor = "lightblue";
    };
}
