// Creamos un array con objetos //

const Productos = [{
    id: 1,
    nombre: "Pan rallado",
    peso: "1kg",
    precio: 350
},
{
    id:2,
    nombre: "Rebosador",
    peso: "5kg",
    precio: 1500
},
{
    id:3,
    nombre: "Bolson pan rallado",
    peso: "20kg",
    precio: 5000
},
{
    id:4,
    nombre: "Bolson rebosador",
    peso: "25kg",
    precio: 6000
}
]

// carrito de compras // 

let carrito = [];

// agregando cards //

let cartas=document.getElementById("cartas");
for(const producto of Productos){
    let carta=document.createElement("div");
    carta.className="card col-md-3";
    carta.innerHTML=`
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text"> $${producto.precio}</p>
            <p class="card-text">${producto.peso}</p>
            <button id="boton ${producto.id}"class="btn btn-primary">Comprar</a>
        </div>
    `;
    cartas.append(carta);
}


// eventos //

Productos.forEach(producto => {
    //evento para cada boton
    document.getElementById(`boton ${producto.id}`).addEventListener('click',function(){
        agregarAlCarrito(producto);
    });
});
function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
}
