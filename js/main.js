
let nombre = prompt("Ingrese su NOMBRE");
console.log(nombre)

let apellido= prompt("Ingrese su APELLIDO");

console.log(apellido)

alert("bienvenido" +" " + nombre + " " + apellido + ".")


let usuarioNuevo = `${nombre} ${apellido}`;






let carrito = [];

console.log(carrito)

const productos = [   
    {id:1, nombre:"gaseosas", precio: 2000,},
    {id:2, nombre:"vinos", precio: 5000,},
    {id:3, nombre:"Cervezas", precio: 3000,},
    {id:4, nombre: "aguas", precio: 900,},
    {id:5, nombre: "jugos", precio: 1200},
];



function mostrarProductos() {
    let mensajeProductos = ["Productos disponibles:\n"];
    productos.forEach(function(producto) {
        mensajeProductos.push(producto.id + ". " + producto.nombre + " - $" + producto.precio + " " );
    });
    alert(mensajeProductos.join(''));
}



function comprarProducto() {
    let mensajeProductos = ["Productos disponibles:\n"];
    productos.forEach(function(producto) {
        mensajeProductos.push(producto.id + ". " + producto.nombre + " - $" + producto.precio + " ");
    });
    
    let idProducto = prompt(mensajeProductos.join('') + "\nIngresa el ID (con su respectivo número) de la bebida que deseas agregar a tu carrito:");
    let producto = productos.find(function(producto) {
        return producto.id === parseInt(idProducto);
    });
    
    if (producto) {
        carrito.push(producto);
        alert("Producto " + producto.nombre + " agregado al carrito. Actualmente tenes en tu carrito: " + carrito.length + " productos.");
    } else {
        alert("bebida no encontrada.");
    }
}


function mostrarCarrito() {
    if (carrito.length > 0) {
        let mensajeCarrito = ["Carrito de compras:\n"];
        let total = 0;
        carrito.forEach(function(producto) {
            mensajeCarrito.push(producto.id + ". " + producto.nombre + " - $" + producto.precio + "\n");
            total = total + producto.precio;
        });
        mensajeCarrito.push("\nTotal a abonar: $" + total + "\n");
        
        let finalizar = prompt(mensajeCarrito.join('') + "¿Deseas finalizar la compra? (si/no)");
        if (finalizar.toLowerCase() === 'si') {
            alert(usuarioNuevo + " Tu compra fue finalizada. El monto que debe abonar es de: $" + total + ", gracias por su compra!!");
            carrito = []; 
        } else {
            alert("Compra no finalizada. Podes seguir comprando.");
        }
    } else {
        alert("Tu carrito esta vacio.");
    }
}


function iniciarTienda() {
    let opcion = prompt("Bienvenido " + usuarioNuevo + " a DRINK. ¿Qué te gustaría hacer?\n1. Ver bebidas disponibles\n2.comprar\n3.mostrar carrito\n4 salir");

    while(opcion !== "4") {
        switch(opcion) {
            case "1":
                mostrarProductos();
                break;
            
            case "2":
                comprarProducto();
                break;
            case "3":
                mostrarCarrito();
                break;
            
            default:
                alert("Opción invalida. Por favor, intenta otra opcion.");
                break;
        }
        opcion = prompt("Bienvenido " + usuarioNuevo + " a DRINK. ¿Qué te gustaría hacer?\n1. Ver bebidas disponibles\n2.comprar\n3.mostrar carrito\n4 salir");
    }

    alert("DRINK te agradece tu compra. Te esperamos pronto!!");
}

iniciarTienda();
