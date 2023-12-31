
JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded", () => {
    dibujarCarrito()
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
const listaCarrito = document.getElementById("items")
const footCarrito = document.getElementById("totales")
const btnCarrito = document.getElementById("btnCarrito")

const carritoTable = document.getElementById("carrito")

btnCarrito.addEventListener("click", () => {
    if (carritoTable.style.display === "block") {
        carritoTable.style.display = "none"
    } else {
        carritoTable.style.display = "block"
        dibujarCarrito()
    }

})

// Declaracion
class tortasCarritoClass {
    constructor(id, nombre, precio, imagen, cantidad) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.cantidad = cantidad;
    }
}

export const comprarTortas = (idTortas) => {

    const tortas = tortasDisponibles.find((tortas) => tortas.id === idTortas)

    const { nombre, precio, imagen, id } = tortas

    const tortasCarrito = carrito.find((tortas) => tortas.id === idTortas)

    if (tortasCarrito === undefined) {
        carrito.push(new tortasCarritoClass(id, nombre, precio, imagen, 1))
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    } else {
        const indexTortasCarrito = carrito.findIndex((tortas) => tortas.id === idTortas)

        carrito[indexTortasCarrito].cantidad++
        carrito[indexTortasCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"))

    Swal.fire({
        icon: 'success',
        title: `Usted agrego al carrito ${nombre}!`,
    })

    dibujarCarrito()

}

const dibujarCarrito = () => {

    listaCarrito.innerHTML = ''
    if (carrito.length > 0) {
        carrito.forEach(tortas => {
            const { imagen, nombre, cantidad, precio, id } = tortas
            let body = document.createElement("tr")

            body.className = "producto__carrito"

            body.innerHTML = `
                <th><img id="fotoProductoCarrito" src="./imagenes/${imagen}" class="card-img-top" style="width:40%; height: 30%"</th>
                <td>${nombre}</td>
                <td>${cantidad}</td>
                <td>${precio / cantidad}</td>
                <td>${precio}</td>
                <td>
                <button id="+${id}" class="btn btn-success">+</button>
                <button id="-${id}" class="btn btn-danger">-</button>
                </td>
                `

            listaCarrito.append(body)

            const btnAgregar = document.getElementById(`+${id}`)
            const btnRestar = document.getElementById(`-${id}`)

            btnAgregar.addEventListener("click", () => aumentarCantidad(id))
            btnRestar.addEventListener("click", () => restarCantidad(id))

        });
    }

    dibujarFooter()
}

function finalizarCompra() {
    
    footCarrito.innerHTML = "<h3>No hay producto en carrito</h3>"
    listaCarrito.innerHTML = ""
    sessionStorage.setItem("carrito", JSON.stringify([]))
    Swal.fire({
        icon: 'success',
        title: `Muchas gracias por su compra!`,
    }).then(function() {
        location.reload()
    });
    
}

// footer carrito
const dibujarFooter = () => {

    if (carrito.length > 0) {
        footCarrito.innerHTML = ""

        let footer = document.createElement("tr")

        footer.innerHTML = `
        <th><b>Totales:</b></th>
        <td></td>
        <td>${generarTotales().cantidadTotal}</td>
        <td></td>
        <td>${generarTotales().costoTotal}</td>

        <button id="btn-finalizar-compra" class="btn btn-primary">Finalizar Compra</button>
        `

        footCarrito.append(footer)
        document.getElementById("btn-finalizar-compra").addEventListener("click", () => finalizarCompra())
    } else {
        footCarrito.innerHTML = "<h4>No hay producto en carrito</h3>"
    }

}

//funcion
const generarTotales = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total, { cantidad }) => total + cantidad, 0)

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }
}

const aumentarCantidad = (id) => {
    const indexTortasCarrito = carrito.findIndex((tortas) => tortas.id === id)
    const precio = carrito[indexTortasCarrito].precio / carrito[indexTortasCarrito].cantidad

    carrito[indexTortasCarrito].cantidad++
    carrito[indexTortasCarrito].precio = precio * carrito[indexTortasCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarCarrito()

}

const restarCantidad = (id) => {
    const indexTortasCarrito = carrito.findIndex((tortas) => tortas.id === id)
    const precio = carrito[indexTortasCarrito].precio / carrito[indexTortasCarrito].cantidad

    carrito[indexTortasCarrito].cantidad--
    carrito[indexTortasCarrito].precio = precio * carrito[indexTortasCarrito].cantidad

    if (carrito[indexTortasCarrito].cantidad === 0) {
        carrito.splice(indexTortasCarrito, 1)
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarCarrito()

}