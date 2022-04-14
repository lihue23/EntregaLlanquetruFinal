class Jugador{
    constructor(nombre, email, edad){
        this.nombre = nombre
        this.email = email
        this.edad = edad
    }
}
let jugadores=[]

if(localStorage.getItem('Jugadores')){
    jugadores = JSON.parse(localStorage.getItem('Jugadores'))
}else{
    localStorage.setItem('Jugadores', JSON.stringify(jugadores))
}

let formUsers = document.getElementById('formUser')
let divUsers = document.getElementById('divUsers')



formUsers.addEventListener('submit', (e)=>{
    e.preventDefault()
    let nombre= document.getElementById('usernameID').value
    let email= document.getElementById('emailID').value
    let edad= document.getElementById('edadID').value

    const jugador = new Jugador(nombre,email,edad)
    jugadores.push(jugador)

    localStorage.setItem('Jugadores', JSON.stringify(jugadores))



    formUsers.reset()



})



botonUsers.addEventListener('click', () =>{
    divUsers.innerHTML=""
    jugadores.forEach((jugadoresEnArray, indice, array)=>{
        divUsers.innerHTML += `
        <div id="jugador ${indice}" class="row">
            <div id="divUsers__hijo" class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">${jugadoresEnArray.email}</div>
                <div class="card-body">
                    <h4 class="card-title">${jugadoresEnArray.nombre}</h4>
                    <button id="botonJugar ${indice}" class="btn btn-warning">Jugar</button>
                    <button id="botonEliminar ${indice}" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
        `
    })
    jugadores.forEach((jugadoresEnArray, indice)=>{
        document.getElementById(`botonEliminar ${indice}`).addEventListener('click',()=>{
            divUsers.removeChild(document.getElementById(`jugador ${indice}`))
                
            let indiceArray = jugadores.findIndex(jugador => jugador.nombre == jugadoresEnArray.nombre)
            jugadores.splice(indiceArray,1)
                
            localStorage.setItem('Jugadores',JSON.stringify(jugadores))
        })
    })
    
    
})



jugadores.forEach((jugadoresEnArray, indice)=>{
    document.getElementById(`botonJugar ${indice}`).addEventListener('click',()=>{
        divUsers.innerHTML=""
        jugadores.forEach((jugadoresEnArray, indice, array)=>{
        divUsers.innerHTML +=`
            <div id="tablero">
            
            </div>
    
    
    
    
    
        `



            })
        

    })

})




