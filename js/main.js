//buscador de tortas

//arregloq ue va a contener los productos creados
/*
let variedades = [];

class gustos {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
      this.vendido = false;
    }
  
    vender() {
      this.vendido = true;
    }
  }
  
//agrego variedades  creados por la clase gusto al arreglo
variedades.push(new gustos("Selva Negra", 1000));
variedades.push(new gustos("Lemon pie", 750));
variedades.push(new gustos("Frutales", 720));
variedades.push(new gustos("Budines", 100));
variedades.push(new gustos("Torta helada", 2000));

//pedimos el nombre de la torta  a consultar
let nombre = prompt("Ingrese el nombre de la torta  consultar. Escriba ESC para salir");

while (nombre != "ESC" && nombre !== null) {
    //declaramos la variable que contendrá variedades en caso de encontrarlo
    let gusto;

    //recorremos el arreglo verificando si alguno de los gustos cumple con el nombre
    for (const item of variedades) {
        if (item.nombre.toLowerCase() === nombre.toLowerCase()) {
            gusto = item;
        }
    }

    if (gusto) {
        let mensaje = `
      Nombre: ${gusto.nombre}
      Precio: $${gusto.precio}
    `;
        alert(mensaje);
    } else {
        alert("No se encuentra disponible");
    }

    nombre = prompt("Ingrese el nombre de la torta consultar.  Escriba ESC para salir");
}


//metodos de busqueda filter

const productos = [
    { id: 1, nombre: "tarta", precio: 1000 },
    { id: 2, nombre: "Lemon pie", precio: 750 },
    { id: 3, nombre: "Budin", precio: 1200 },
    { id: 4, nombre: "Pan Dulce", precio: 375 },
];

let filtrados = productos.filter((item) => item.precio > 500);
console.log(filtrados);

//let precio = parseInt(prompt("Ingrese el precio minimo para buscar ofertas"));

filtrados = productos.filter((item) => item.precio < precio);

filtrados.forEach((item) => {
    let mensaje = `
     Id: ${item.id}
     Nombre: ${item.nombre}
     Precio: $${item.precio}
   `;
   alert(mensaje);
});
*/

 import { comprarTortas } from "./carrito.js"

const divTortas = document.getElementById("tortas")
let tortasDisponibles = JSON.parse(localStorage.getItem("tortas"))

document.addEventListener("DOMContentLoaded", () => {
    generarCardsTortas(tortasDisponibles)
})

export const generarCardsTortas = (tortas) => {
    divTortas.innerHTML = "";
  
    tortas.forEach((tortas) => {

    const { id, precio, nombre, gusto, imagen } = tortas
     
      let card = document.createElement("div");
      card.className = "tortas";

      card.innerHTML = `
      <div class="card mb-3 custom-card">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./imagenes/${imagen}" class="img-fluid rounded-start" alt="${nombre}" width="300">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" id="${id}">${nombre}</h5>
              <p class="card-text">Gusto: ${gusto}</p>
              <p class="card-text"><small class="text-muted">Precio: <b>$${precio}</b></small></p>
              <button id="btn${id}" class="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    `;

      divTortas.appendChild(card);

      const btnComprar = document.getElementById(`btn${id}`)
      btnComprar.addEventListener("click", () => comprarTortas(id))
  
    });
  };
