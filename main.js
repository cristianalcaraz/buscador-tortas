//buscador de tortas

//arregloq ue va a contener los productos creados
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

let precio = parseInt(prompt("Ingrese el precio minimo para buscar ofertas"));

filtrados = productos.filter((item) => item.precio < precio);

filtrados.forEach((item) => {
    let mensaje = `
     Id: ${item.id}
     Nombre: ${item.nombre}
     Precio: $${item.precio}
   `;
   alert(mensaje);
});