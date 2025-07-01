// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze (impide agregar, eliminar, modificar) .seal (solo permite modificar existentes)

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);