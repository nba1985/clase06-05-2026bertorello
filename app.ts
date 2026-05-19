let nombre: string = "Curso de Programación";
let descripcion: string = "Aprende a programar desde cero con este curso completo.";
let precio: number = 8900;
let disponible: boolean = true;

let titulocurso = document.querySelector("#tituloCurso") as HTMLElement | null;
let descripcioncurso = document.querySelector("#descripcionCurso") as HTMLElement | null;
let preciocurso = document.querySelector("#precioCurso") as HTMLElement | null;
let estadocurso = document.querySelector("#estadoCurso") as HTMLElement | null;

if (titulocurso) {
    titulocurso.innerHTML = nombre;
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
    } else {
        estadocurso.innerHTML = "Curso completo";
    }
}

alert("¡Bienvenido!");
console.log("Hola");

let boton = document.querySelector("#boton") as HTMLButtonElement | null;

if (boton) {
    boton.onclick = function () {
        document.body.style.backgroundColor = "lightblue";
    };
}

export {};