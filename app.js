// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array para guardar los nombres sorteados

let amigos = [ ]

//funtcions

//funcion para agregar amigo a la lista de amigos
function agregarAmigo(){
    //obtenemos el valor del campo de texto / input 
    let obtenerAmigo = document.getElementById("amigo").value
    
    //validacion de campo vacio, si esta vacio mostrar una alerta 
    if (obtenerAmigo.trim() === "") {
        alert('Por favor, inserte un nombre');
        return
    }
    document.querySelector("#amigo").value = ""
    
    
    //meteremos los nombre(elementos) al array, nombres que escribiremos en el campo de texto
    amigos.push(obtenerAmigo)    

    recorrerListaAmigos()
 
    
    
}

function recorrerListaAmigos() {
    
    //seleccionamos la etiqueta donde se mostraran los nombres
    let listaAmigoMostrar = document.querySelector("#listaAmigos")
    
    //borramos la lista antes de que comienze el bucle de for
    listaAmigoMostrar.innerHTML = ""
    
    //creammos un for para recorrer el array y actualizarlo cada vez que se incorpore un nombre
    for (let i = 0; i < amigos.length; i++) {
        listaAmigoMostrar.innerHTML += `<li>${amigos[i]}</li> ` ;
        
        
    }
}

//creamos la funcion para sortear el amigo secreto 
function sortearAmigo() {

    //creamos una variable la cual usaremos para meter los nombres en la etiqueta que esta en el html
    let resultadoNombreSorteado = document.querySelector("#resultado")

    //metodo para comprabar que el array no esta vacio
    if (amigos.length === 0 || amigos[0] === "") {
        alert("Por favor, ingresa al menos un nombre.");
        return;
    }

    //
    resultadoNombreSorteado.innerHTML = ""

    //creamos la variable para generar un indice aleatorio el cual sera del tamano del arreglo
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    //insertamos el arreglo en la eiqueta de resultado la cual mostrara los nombres sorteados
    resultadoNombreSorteado.innerHTML = amigos[indiceAleatorio]

    console.log(amigos[indiceAleatorio])

    }


