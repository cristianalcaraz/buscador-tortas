//buscador de tortas

//arregloq ue va a contener los productos creados
let variedades = [];

//agrego variedades  creados por la clase gusto al arreglo
variedades.push(new gustos("Selva Negra", 1000));
variedades.push(new gustos("Lemon pai", 750));
variedades.push(new gustos("Frutales", 720));
variedades.push(new gustos("Budines", 100));

//pedimos el nombre de la torta  a consultar
let nombre = prompt("Ingrese el nombre de la torta  consultar");

while (nombre != "ESC") {
    //declaramos la variable que contendrá variedades en caso de encontrarlo
    let variedades;

    //recorremos el arreglo verificando si alguno de los gustos cumple con el nombre
    for (const item of gustos) {
        if (item.nombre === nombre) {
            gustos = item;
        }
    }

    if (gustos) {
        let mensaje = `
      Nombre: ${gustos.nombre}
      Precio: $${gustos.precio}
    `;

        alert(mensaje);
    } else {
        alert("No se encuentra disponible");
    }

    nombre = prompt("Ingrese el nombre de la torta   consultar");
}


//metodos de busqueda filter

const productos = [
    { id: 1, nombre: "tarta", precio: 1000 },
    { id: 2, nombre: "Lemon pei", precio: 750 },
    { id: 3, nombre: "Budin", precio: 1200 },
    { id: 4, nombre: "Pan Dulce", precio: 375 },
];


const filtrados = productos.filter((item) => item.precio > 500);
console.log(filtrados);

let precio = parseInt(prompt("Ingrese el precio minimo"));

const filtrados = productos.filter((item) => item.precio > precio);

filtrados.forEach((item) => {
    let mensaje = `
     Id: ${item.id}
     Nombre: ${item.nombre}
     Precio: $${item.precio}
   `;
}
alert(mensaje);
