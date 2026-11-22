const imagenes = document.querySelectorAll(".imagenes-carrusel img");
const btnAnterior = document.querySelector(".anterior");
const btnSiguiente = document.querySelector(".siguiente");

let indice = 0;

function mostrarImagen(posicion) {
    imagenes[indice].classList.remove("imagen-activa");

    indice = posicion;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    if (indice >= imagenes.length) {
        indice = 0;
    }

    imagenes[indice].classList.add("imagen-activa");
}

btnSiguiente.addEventListener("click", function () {
    mostrarImagen(indice + 1);
});

btnAnterior.addEventListener("click", function () {
    mostrarImagen(indice - 1);
});

setInterval(function() {
    mostrarImagen(indice + 1);
}, 5000);

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
animacion preguntas 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const preguntas = document.querySelectorAll(".pre-preguntas");

preguntas.forEach((pregunta) => {

    pregunta.addEventListener("click", () => {

        const respuesta = pregunta.nextElementSibling;

        if(respuesta.style.maxHeight){
            respuesta.style.maxHeight = null;
            pregunta.querySelector("span").textContent = "+";
        }else{
            respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            pregunta.querySelector("span").textContent = "-";
        }

    });

});
s