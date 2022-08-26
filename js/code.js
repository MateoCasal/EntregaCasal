let carrito = JSON.parse(localStorage.getItem("carrito"));

class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

// Guardamos El catalogo y los elementos en el carrito // 

const productos = [];

const elementosCarrito = [];

const contenedorProductos = document.getElementById('contenedor-productos').getElementsByClassName('row');

const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.querySelector("#items");

const preciototal = document.querySelector("#Preciototal");

// Ejecutamos las Funciones //

cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();


// Funcion para cargar Productos //

function cargarProductos() {
    productos.push(new Producto(1, 'Pan rallado', 350, './images/panRallado.jpeg'));
    productos.push(new Producto(2, 'Rebosador', 500, './images/Rebosador.jpeg'));
    productos.push(new Producto(3, 'Bolson pan rallado', 4000, './images/Bolson.jpeg'));
    productos.push(new Producto(4, 'Bolson rebosador', 6000, './images/Bolson.jpeg'));
}
// Carga el carrito // 
function cargarCarrito() {

};

// Funcion para mostrar el carrito armado // 
function dibujarCarrito() {
    let sumaCarrito = 0;
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito = document.createElement("tr");
            renglonesCarrito.innerHTML = `
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                    <td>$ ${elemento.producto.precio}</td>
                    <td>$ ${elemento.producto.precio*elemento.cantidad}</td>
                    <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button></td>
                </tr>
            `;
            contenedorCarritoCompras.append(renglonesCarrito);

            sumaCarrito += elemento.cantidad * elemento.producto.precio; // sumamos el precio de los productos en el carrito // 

            // agregamos eventos al carrito // 

            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`); // evento para modificar la cantidad del carrito //  

            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

            let borrarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`); // evento para borrar elementos del carrito //

            borrarProducto.addEventListener("click", (e) => {
                removerProductoCarrito(elemento);
                dibujarCarrito();
            });

        }
    );

    // Muestra renglon final del carrito con el precio total de la compra //

    if (elementosCarrito.length == 0) {
        preciototal.innerHTML = `
            <th scope="row" colspan="5">Precio total $</th>
        `;
    } else {
        preciototal.innerHTML = `
            <th scope="row" colspan="5">Precio total $${sumaCarrito}</th>
        `;
    }



}


if (carrito) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito);
} else {
    carrito = [];
}




// Funcion para remover los productos del carrito // 

function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;

    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
}


// Funcion para poder crear y personalizar las cards // 

function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-outline-danger";
    botonAgregar.innerText = "Comprar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} </p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    //Contenedor Card
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);


    // evento para agregar el elemento al carrito // 

    botonAgregar.onclick = () => {

  
        let repetido = elementosCarrito.find((elemento) => elemento.producto.id == producto.id); // si el producto se repite se modifica la cantidad //

        if(repetido) {
            repetido.cantidad+=1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
        }

        dibujarCarrito();
        localStorage.setItem("carrito", JSON.stringify(carrito));



    }

    return contenedorCarta;

}

function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    );

}