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

/*++++++++++++++++++++++++++++++++++++++++++++
MENU HAMBURGUESA
++++++++++++++++++++++++++++++++++++++++++++*/

const botonMenu = document.querySelector(".menu-hamburguesa");
const menuNavegacion = document.querySelector("nav ul");
const encabezado = document.querySelector("nav");

botonMenu.addEventListener("click", () => {
    const abierto = menuNavegacion.classList.toggle("activo");
    botonMenu.setAttribute("aria-expanded", abierto);
});

menuNavegacion.querySelectorAll("a").forEach(enlace => {

    enlace.addEventListener("click", (e) => {

        e.preventDefault();

        const destino = document.querySelector(
            enlace.getAttribute("href")
        );

        menuNavegacion.classList.remove("activo");
        botonMenu.setAttribute("aria-expanded", "false");

        if (destino) {

            const alturaMenu = encabezado.offsetHeight;

            const posicion = destino.getBoundingClientRect().top
                + window.scrollY
                - alturaMenu;

            window.scrollTo({
                top: posicion,
                behavior: "smooth"
            });

        }

    });

});

/* ==========================================
   VENTANA EMERGENTE DE CONTACTO
========================================== */

const modalContacto = document.getElementById("modalContacto");
const cerrarModal = document.getElementById("cerrarModal");
const whatsappCotizacion = document.getElementById("whatsappCotizacion");

const botonesContacto = document.querySelectorAll(
    ".abrir-contacto, .btn-cotizar"
);

/* Abrir ventana */

botonesContacto.forEach(boton => {

    boton.addEventListener("click", (e) => {

        e.preventDefault();

        let mensaje = "Hola NGgrúas, necesito cotizar un servicio de grúa.";

        /* Identificar la comuna seleccionada */

        const tarjeta = boton.closest(".cobertura-card");

        if (tarjeta) {

            const comuna = tarjeta.querySelector("h3")
                .textContent.replace("Grúas en ", "").trim();

            mensaje = `Hola NGgrúas, necesito cotizar un servicio de grúa en ${comuna}.`;

        }

        /* Generar enlace de WhatsApp */

        whatsappCotizacion.href =
            "https://wa.me/56971592125?text=" +
            encodeURIComponent(mensaje);

        /* Mostrar ventana */

        modalContacto.classList.add("activo");

        document.body.style.overflow = "hidden";

    });

});

/* Función para cerrar ventana */

function cerrarVentanaContacto() {

    modalContacto.classList.remove("activo");

    document.body.style.overflow = "";

}

/* Cerrar con la X */

cerrarModal.addEventListener("click", cerrarVentanaContacto);

/* Cerrar al presionar fuera de la ventana */

modalContacto.addEventListener("click", (e) => {

    if (e.target === modalContacto) {

        cerrarVentanaContacto();

    }

});

/* Cerrar con la tecla Escape */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        cerrarVentanaContacto();

    }

});