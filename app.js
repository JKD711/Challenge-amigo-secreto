// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//ALmacenar nombres de los amigos ingresados
let amigos = [];

// Ingresar un nombre en el campo de texto y añadirlo a la lista de amigos
function agregarAmigo() {
    let ingresarNombre = document.getElementById('amigo');
    let nombreDeAmigo = ingresarNombre.value;
    //let amigo = nombre.value;
    //console.log(nombre);
    if (!nombreDeAmigo) {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    //Actualizar el array de amigos
    amigos.push(nombreDeAmigo);
    ingresarNombre.value = '';
    ingresarNombre.focus();
    mostrarAmigos();
    //console.log(amigos);
}

function mostrarAmigos() {
    //Obtener el elemento de la lista:
    let listaDeAmigos = document.getElementById('listaAmigos');
    //Limpiar la lista existente, para asegurarse de que no haya duplicados al actualizar
    listaDeAmigos.innerHTML = "";

    // Recorrer el arreglo amigos y crear elementos de lista (<li>) para cada nombre.
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        listaDeAmigos.appendChild(itemLista);
    }
}


function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    //Generar un índice aleatorio y Obtener el nombre sorteado
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    //Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    
    //Limpiar lista
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";
}
