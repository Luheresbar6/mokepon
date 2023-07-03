// *ocultar seccions de seleccionar ataque
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
sectionSeleccionarAtaque.style.display = "none"
// *oculatar seccion donde esta el boton de reiniciar
let sectionReiniciar = document.getElementById("reiniciar")
sectionReiniciar.style.display = "none"


//*seleccionar mascota jugador

let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

function seleccionarMascotaJugador() {
   //* hacer reaparecer la seccion de seleccionar ataque
   let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
   sectionSeleccionarAtaque.style.display = "block"
   // *ocultar seccion de seleccionar mascota
   let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
   sectionSeleccionarMascota.style.display = "none"

let spanMascotaJugador = document.getElementById("mascota-jugador")

   if (document.getElementById("hipodoge").checked) {
      spanMascotaJugador.innerHTML = "Hipodoge"
   } else if (document.getElementById("capipepo").checked) {
      spanMascotaJugador.innerHTML = "Capipepo"
   } else if (document.getElementById("ratihuella").checked) {
      spanMascotaJugador.innerHTML = "Ratihuella"
   } else {
      alert("No seleccionaste una mascota. Por favor selecciona una mascota")
      location.reload()
   }
      let botonMascotaJugador = document.getElementById("boton-mascota")
      botonMascotaJugador.disabled = true

   seleccionarMascotaEnemigo()

} 

//* busqueda de un numero aleatorio para la seleccion de la mascota del enemigo y la seleccion del ataque del enemigo

function aleatorio(min, max) {
   return Math.floor(Math.random()*(max-min+1)+min)      
}

//* seleccion de mascota del enmigo usando el numero aleatorio anterior

function seleccionarMascotaEnemigo() {

   let mascotaAleatoria = aleatorio(1, 3)
   let spanMascotaEmemigo = document.getElementById("mascota-enemigo")
   let spanVidasEnemigo = document.getElementById("vidas-enemigo")

   if (mascotaAleatoria == 1) {
      spanMascotaEmemigo.innerHTML = "Hipodoge"
   } else if (mascotaAleatoria == 2) {
      spanMascotaEmemigo.innerHTML = "Capipepo"
   } else if (mascotaAleatoria == 3) {
      spanMascotaEmemigo.innerHTML = "Ratihuella"
   } 
}

//* Seleccion del Ataque jugador
let ataqueJugador

let botonFuego = document.getElementById("boton-fuego")
botonFuego.addEventListener("click", ataqueFuego)

let botonAgua = document.getElementById("boton-agua")
botonAgua.addEventListener("click", ataqueAgua)

let botonTierra = document.getElementById("boton-tierra")
botonTierra.addEventListener("click", ataqueTierra)

function ataqueFuego() {
   ataqueJugador = "FUEGO"
   ataqueAleatorioEnemigo()
}

function ataqueAgua() {
   ataqueJugador = "AGUA"
   ataqueAleatorioEnemigo()
}

function ataqueTierra() {
   ataqueJugador = "TIERRA"
   ataqueAleatorioEnemigo()
}


//* Seleccion del ataque enemigo

let eleccionAtaqueEnemigo

function ataqueAleatorioEnemigo() {
   let ataqueAleatorio = aleatorio(1, 3)
   if (ataqueAleatorio == 1) {
      eleccionAtaqueEnemigo = "FUEGO"
   } else if (ataqueAleatorio == 2) {
      eleccionAtaqueEnemigo = "AGUA"
   }  else if (ataqueAleatorio == 3) {
      eleccionAtaqueEnemigo = "TIERRA"
   }
   evaluarResultado()
}

//* Evaluacion de el resultado del ataque
let vidasJugador = 3
let vidasEnemigo = 3
let spanVidasJugador = document.getElementById("vidas-jugador")
let spanViadasEnemigo = document.getElementById("vidas-enemigo")

function evaluarResultado() {

if (ataqueJugador == eleccionAtaqueEnemigo) {
   crearMensaje("EMPATE 😌")
} else if (ataqueJugador == "FUEGO" && eleccionAtaqueEnemigo == "TIERRA" || ataqueJugador == "AGUA" && eleccionAtaqueEnemigo == "FUEGO" || ataqueJugador == "TIERRA" && eleccionAtaqueEnemigo == "AGUA") {
   crearMensaje("GANASTE 🎉")
   vidasEnemigo--
   spanViadasEnemigo.innerHTML = vidasEnemigo
} else {
   crearMensaje("PERDISTE ☹️")
   vidasJugador--
   spanVidasJugador.innerHTML = vidasJugador
}    
   revisarVidas()

}
//*  revisar numero de vidas
function revisarVidas () {
    if (vidasEnemigo == 0) {
      crearMensajeFinal("FELICITACIONES, GANASTE 😁")
   } else if (vidasJugador == 0) {
      crearMensajeFinal("LO LAMENTO, PERDISTE ☹️")
    }
}
// *CREAR MENSAJE DE RESULTADO DE LOS COMBATES PARCIALES
function crearMensaje (resultadoCombate) {
   let sectionMensajes = document.getElementById("mensajes")
   let parrafo = document.createElement("p")
   parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador+ ", la mascota del enemigo atacó con " + eleccionAtaqueEnemigo +" - " + resultadoCombate
   sectionMensajes.appendChild(parrafo)
}
// *CREAR MENSAJE DE RESULTADO DL COMBATE FINAL y BLOQUEAR BOTONES
function crearMensajeFinal (resultadoFinal) {
   let sectionMensajes = document.getElementById("mensajes")
   let parrafo = document.createElement("p")
   parrafo.innerHTML = resultadoFinal
   sectionMensajes.appendChild(parrafo)

   let botonFuego = document.getElementById("boton-fuego")
   botonFuego.disabled = true
   let botonAgua = document.getElementById("boton-agua")
   botonAgua.disabled = true
   let botonTierra = document.getElementById("boton-tierra")
   botonTierra.disabled = true
    
   //* mostar boton de reiniciar
   let sectionReiniciar = document.getElementById("reiniciar")
   sectionReiniciar.style.display = "block"
}

// *bloquear botones de seleccion de botones de ataques 

// *BOTON REINICIAR JUEGO
let botonReiniciarJuego = document.getElementById("boton-reiniciar")
botonReiniciarJuego.addEventListener("click", reiniciarJuego)

function reiniciarJuego () {
    location.reload()
}

// edicion prueba de git version 2 



