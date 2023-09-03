//buscador de tortas

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
