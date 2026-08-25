const botonComenzar = document.getElementById("botonComenzar");

const inicio = document.querySelector(".inicio");

const historia = document.getElementById("historia");
const musicaHistoria = document.getElementById("musicaHistoria");
const musicaHistoriaDos = document.getElementById("musicaHistoriaDos");
const musicaCarta = document.getElementById("musicaCarta");
const botonMusica = document.getElementById("botonMusica");

let musicaActual = null;
let musicaActiva = true;


function cambiarMusica(nuevaMusica) {

    if (musicaActual && musicaActual !== nuevaMusica) {
        musicaActual.pause();
        musicaActual.currentTime = 0;
    }

    musicaActual = nuevaMusica;
    musicaActual.volume = 1;

    if (musicaActiva) {
        musicaActual.play();
    }

    botonMusica.textContent = musicaActiva ? "🔊" : "🔇";
}

botonComenzar.addEventListener("click", function () {

    inicio.style.display = "none";

    historia.style.display = "flex";

    cambiarMusica(musicaHistoria);

});
const botonContinuar = document.getElementById("continuarHistoria");

const recuerdos = document.getElementById("recuerdos");

botonContinuar.addEventListener("click", function () {

    historia.style.display = "none";

    recuerdos.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const fotosRecuerdo = document.querySelectorAll(".foto-recuerdo");

const botonAnterior = document.getElementById("anteriorFoto");

const botonSiguiente = document.getElementById("siguienteFoto");

const contadorFoto = document.getElementById("contadorFoto");


let fotoActual = 0;


function mostrarFoto(indice) {

    fotosRecuerdo.forEach(function (foto) {
        foto.classList.remove("activa");
    });

    fotosRecuerdo[indice].classList.add("activa");

    contadorFoto.textContent =
        (indice + 1) + " / " + fotosRecuerdo.length;

}


botonSiguiente.addEventListener("click", function () {

    fotoActual++;

    if (fotoActual >= fotosRecuerdo.length) {
        fotoActual = 0;
    }

    mostrarFoto(fotoActual);

});


botonAnterior.addEventListener("click", function () {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotosRecuerdo.length - 1;
    }

    mostrarFoto(fotoActual);

});
const botonIrJuego = document.getElementById("irJuego");

const juego = document.getElementById("juego");

const comenzarJuego = document.getElementById("comenzarJuego");

const zonaJuego = document.getElementById("zonaJuego");

const corazonJuego = document.getElementById("corazonJuego");

const contadorCorazones = document.getElementById("contadorCorazones");

const esperandoJuego = document.getElementById("esperandoJuego");

const mensajeGanador = document.getElementById("mensajeGanador");


let corazonesAtrapados = 0;


botonIrJuego.addEventListener("click", function () {

    recuerdos.style.display = "none";

    juego.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


comenzarJuego.addEventListener("click", function () {

    corazonesAtrapados = 0;

    contadorCorazones.textContent = corazonesAtrapados;

    comenzarJuego.style.display = "none";

    esperandoJuego.style.display = "none";

    mensajeGanador.style.display = "none";

    corazonJuego.style.display = "block";

    moverCorazon();

});


function moverCorazon() {

    const anchoDisponible =
        zonaJuego.clientWidth - corazonJuego.offsetWidth;

    const altoDisponible =
        zonaJuego.clientHeight - corazonJuego.offsetHeight;

    const posicionX =
        Math.random() * anchoDisponible;

    const posicionY =
        Math.random() * altoDisponible;

    corazonJuego.style.left = posicionX + "px";

    corazonJuego.style.top = posicionY + "px";

}


corazonJuego.addEventListener("click", function () {

    corazonesAtrapados++;

    contadorCorazones.textContent = corazonesAtrapados;

    if (corazonesAtrapados >= 20) {

        corazonJuego.style.display = "none";

        zonaJuego.style.display = "none";

        mensajeGanador.style.display = "block";

    } else {

        moverCorazon();

    }

});
const continuarFamilia =
    document.getElementById("continuarFamilia");

const familiaTransicion =
    document.getElementById("familiaTransicion");


const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const paso3 = document.getElementById("paso3");
const paso4 = document.getElementById("paso4");
const paso5 = document.getElementById("paso5");


const pasarMaiki =
    document.getElementById("pasarMaiki");

const pasarNinas =
    document.getElementById("pasarNinas");

const descubrirFamilia =
    document.getElementById("descubrirFamilia");

const verFamiliaActual =
    document.getElementById("verFamiliaActual");


function cambiarPaso(actual, siguiente) {

    actual.classList.remove("activo");
    actual.style.display = "none";

    siguiente.classList.add("activo");
    siguiente.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


continuarFamilia.addEventListener("click", function () {

    juego.style.display = "none";
    familiaTransicion.style.display = "block";

    paso1.style.display = "block";
    paso1.classList.add("activo");

    paso2.style.display = "none";
    paso3.style.display = "none";
    paso4.style.display = "none";
    paso5.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


pasarMaiki.addEventListener("click", function () {

    cambiarPaso(paso1, paso2);

});


pasarNinas.addEventListener("click", function () {

    cambiarPaso(paso2, paso3);

});


descubrirFamilia.addEventListener("click", function () {

    cambiarPaso(paso3, paso4);
    cambiarMusica(musicaHistoriaDos);

});



verFamiliaActual.addEventListener("click", function () {

    cambiarPaso(paso4, paso5);

});
const continuarActualidad =
    document.getElementById("continuarActualidad");

const actualidad =
    document.getElementById("actualidad");

const verVideo =
    document.getElementById("verVideo");

const videoEspecial =
    document.getElementById("videoEspecial");

const irCarta =
    document.getElementById("irCarta");


continuarActualidad.addEventListener("click", function () {

    familiaTransicion.style.display = "none";

    actualidad.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


verVideo.addEventListener("click", function () {

    actualidad.style.display = "none";

    videoEspecial.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const cierre =
    document.getElementById("cierre");

const cierrePaso1 =
    document.getElementById("cierrePaso1");

const cierrePaso2 =
    document.getElementById("cierrePaso2");

const cierreCarta =
    document.getElementById("cierreCarta");

const cierreFinal =
    document.getElementById("cierreFinal");

const seguirCierre =
    document.getElementById("seguirCierre");

const abrirCarta =
    document.getElementById("abrirCarta");

const ultimoBoton =
    document.getElementById("ultimoBoton");


irCarta.addEventListener("click", function () {

    videoEspecial.style.display = "none";

    cierre.style.display = "block";

    cierrePaso1.classList.add("activo");

    cambiarMusica(musicaCarta);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


seguirCierre.addEventListener("click", function () {

    cambiarCierre(cierrePaso1, cierrePaso2);

});


abrirCarta.addEventListener("click", function () {

    cambiarCierre(cierrePaso2, cierreCarta);

});


ultimoBoton.addEventListener("click", function () {

    cambiarCierre(cierreCarta, cierreFinal);

    crearLluviaCorazones();

});


function cambiarCierre(actual, siguiente) {

    actual.classList.remove("activo");

    siguiente.classList.add("activo");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function crearLluviaCorazones() {

    let cantidad = 0;

    const intervalo = setInterval(function () {

        const corazon = document.createElement("div");

        corazon.classList.add("corazon-confeti");

        const corazones = ["❤️", "💕", "💗", "💖", "🤍"];

        corazon.textContent =
            corazones[Math.floor(Math.random() * corazones.length)];

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(corazon);

        setTimeout(function () {
            corazon.remove();
        }, 6500);

        cantidad++;

        if (cantidad >= 45) {
            clearInterval(intervalo);
        }

    }, 120);

}
const promesaFinal =
    document.getElementById("promesaFinal");

const promesaPantalla =
    document.getElementById("promesaPantalla");

const siempreFinal =
    document.getElementById("siempreFinal");

const cierreDefinitivo =
    document.getElementById("cierreDefinitivo");


promesaFinal.addEventListener("click", function () {

    cambiarCierre(cierreFinal, promesaPantalla);

});


siempreFinal.addEventListener("click", function () {

    cambiarCierre(promesaPantalla, cierreDefinitivo);

    crearLluviaCorazones();

});
botonMusica.addEventListener("click", function () {

    if (!musicaActual) {
        return;
    }

    if (musicaActual.paused) {

        musicaActual.play();
        botonMusica.textContent = "🔊";

    } else {

        musicaActual.pause();
        botonMusica.textContent = "🔇";

    }

});