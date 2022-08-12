// Creamos un array con objetos //

const Productos = [{
    nombre: "Pan rallado",
    peso: "1kg",
    precio: 350
},
{
    nombre: "Rebosador",
    peso: "5kg",
    precio: 1500
},
{
    nombre: "Bolson pan rallado",
    peso: "20kg",
    precio: 5000
},
{
    nombre: "Bolson rebosador",
    peso: "25kg",
    precio: 6000
}
]

// carrito de compras // 

let carrito = [];

// el usuario elige si desea o no comprar un producto // 

let elegir = prompt("Hola desa comprar algun producto? (si/no)");

while (elegir != "si" && elegir != "no") {
alert("por favor elegir si o no")
elegir = prompt("Hola desa comprar algun producto? (si/no)");
}

// si el usuario elige si se muestra los productos mapeados por alert // 

if (elegir == "si") {
alert(" Estos productos tiene para elegir")
let todosLosProductos = Productos.map((producto) => producto.nombre + " " + producto.peso + " " + "$" + producto.precio);
alert(todosLosProductos.join("-"))


// si el usuario elige no se lo despide // 

} else if (elegir == "no") {
alert("Gracias por elegirnos");
}
// Al elegir si se define los productos que quiere llevar el usuario // 

while (elegir != "no") {
let producto = prompt("ingrese el nombre del producto a elegir");
let precio = 0;

if (producto == "Pan rallado" || producto == "Rebosador" || producto == "Bolson pan rallado" || producto == "Bolson rebosador") {
    switch (producto) {
        case "Pan rallado":
            precio = 350;
            break;

        case "Rebosador":
            precio = 1500;
            break;

        case "Bolson pan rallado":
            precio = 5000;
            break;

        case "Bolson rebosador ":
            precio = 6000;
            break;

        default:
            break;
    }
    // se pregunta las unidades de los producto que elige //

    let unidad = parseInt(prompt("cuantas unidades quiere llevar?(solo numeros)"))
    // se guarda la informacion en el carrito //

    carrito.push({
        producto,
        unidad,
        precio
    });
    console.log(carrito);
} else {
    alert("no disponemos de ese producto")
}
elegir = prompt(" quiere seguir comprando?(si/no)")
while (elegir != "si" && elegir != "no") {
    alert("por favor elegir si o no")
    elegir = prompt("quiere seguir comprando? (si/no)");
}

while (elegir == "no") {
    alert("Gracias por la compra! Hasta pronto!")
    break;

}
}
// se suman las unidades del carrito y da su precio total // 

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidad, 0)

alert(`El total a pagar por su compra es: ${total}`)

// funcion para calcular en cuotas // 

function calcular3cuotas(num1) {
let cuotas = num1 / 3;
alert("El precio en 3 cuotas es de $" + cuotas);
}

function calcular6cuotas(num1) {
let cuotas = num1 / 6;
alert("El precio en 6 cuotas es de $" + cuotas);
}

function calcular12cuotas(num1) {
let cuotas = num1 / 12;
alert("El precio en 12 cuotas es de $" + cuotas);
}
// se le pregunta al usuario si quiere abonar el total en cuotas // 

let cuota = prompt("Desea abonar el total en cuotas sin interes? (si/no)")
while (cuota != "si" && cuota != "no") {
alert("por favor elegir si o no")
cuota = prompt("Desea abonar el total en cuotas sin interes? (si/no)");
}

if (cuota == "si") {
let eleccion = prompt("eliga cuantas cuotas quiere 3/6/12")
if (eleccion == "3") {
    calcular3cuotas(total);
}
if (eleccion == "6") {
    calcular6cuotas(total);
}
if (eleccion == "12") {
    calcular12cuotas(total);
}

} else if (cuota == "no") {
alert("Gracias por elegirnos");
}