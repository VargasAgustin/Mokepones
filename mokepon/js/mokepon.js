//sections
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const sectionMensajes = document.getElementById('resultado')
//botones
const botonMascotaJugador = document.getElementById('boton-mascota')
//botones de ataques
const botonesAtaques= document.getElementById('ataques')
//boton de reinicio
const botonReiniciar = document.getElementById('boton-reiniciar')

//parrafos donde salen las vidas y mascotas del enemigo
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

//ataques y contenedor de las tarjetas mokepones
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
//ocultacion del boton reiniciar
sectionReiniciar.style.display = 'none'
//variables a usar en las funciones
let mokepones = []
let arrayBoton =[]
let botonTierra = document.getElementById('boton-tierra')
let botonFuego = document.getElementById('boton-fuego')
let botonAgua = document.getElementById('boton-agua')
//ataques del jugador y enemigo
let ataqueJugador
let ataqueEnemigo
//mascota seleccionada por el jugardor
let mascotaJugador
//mascota aleatoria del enemigo
let mascotaAleatoria
//inputs de las pets
let arrayPet=[]
//botones de cada 
let inputHipodoge
let inputCapipepo
let inputRatigueya 
let vidasJugador 
let vidasEnemigo 

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 3)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 3)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 3)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
       let opcionDeMokepones = `
        <input type="radio" name="mascota" class="pet-input" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    })
      arrayPet= document.querySelectorAll('.pet-input')
      dynamicPet()
     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')  
     
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
//adds eventListener for all pets available
function dynamicPet (){
    arrayPet.forEach()
}

function seleccionarMascotaJugador() {
    //hides this section's display
    sectionSeleccionarMascota.style.display = 'none'
    //activates this section's display
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = `${inputHipodoge.id}`;
        mascotaJugador = mokepones.find((moke) => moke.nombre == inputHipodoge.id)
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = `${inputCapipepo.id}`
        mascotaJugador = mokepones.find((moke) => moke.nombre == inputCapipepo.id)
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = `${inputRatigueya.id}`
        mascotaJugador = mokepones.find((moke) => moke.nombre == inputRatigueya.id)
    } else {
        alert('Selecciona una mascota')
    }
    
    seleccionarMascotaEnemigo();
    
}
//seleccionamos la mascota del jugador y lo almacenamos en una variable para reutilizar
function seleccionarMascotaEnemigo() {
    mascotaAleatoria = aleatorio(0,mokepones.length-1);
    spanMascotaEnemigo.innerHTML= mokepones[mascotaAleatoria].nombre;
    ataques();
}
//ataques dinamicos
function ataques(){
    mascotaJugador.ataques.forEach((at)=>{
        let varAtaque=  `<button id="${at.id}" class="boton-de-ataque b-ataque">${at.nombre}</button>` ;
        botonesAtaques.innerHTML +=  varAtaque;
    })

    arrayBoton= document.querySelectorAll('.b-ataque');
    eventoDinamico()
}
//agregamos los escucha de eventos a los botones
function eventoDinamico(){
    arrayBoton.forEach((button)=>{
        button.addEventListener('click',(e)=> {ataqueAleatorioEnemigo(e.target.textContent)})
    })
}

function ataqueAleatorioEnemigo(atjuga) {
    ataqueJugador=atjuga
    let ataques = mokepones[mascotaAleatoria].ataques
    let ataqueAleatorio = aleatorio(0,ataques.length-1)
    ataqueEnemigo = ataques[ataqueAleatorio].nombre;
    
    combate()
}

function combate() {
    
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == '🔥' && ataqueEnemigo == '🌱') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == '💧' && ataqueEnemigo == '🔥') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == '🌱' && ataqueEnemigo == '💧') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
