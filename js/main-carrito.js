const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
    let salida = "";

    if (totalCarrito() > 0) {    
        salida = `<table class="table">
        <body>
        <tr>
        <td colspan="5" class="text-end"><a href="#" class="btn btn-outline-danger" onClick="vaciarCarrito()">Vaciar Carrito </a></td>
        </tr>`;

        for (let producto of productos_carrito) {
            salida += `<tr>
            <td><img src="./img/${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.cantidad} X ${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>
            <td class="align-middle text-end"><a href="#" title="Eliminar Producto" onClick="eliminarProducto(${producto.id});"><img src="./img/vaciar-carrito.svg" alt="Eliminar Producto" width="16" /></a></td>`;
        }

        salida += `<tr>
        <td colspan="3"><b>Suma Total</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </body>
        </table>`;
    } else {
        salida = Swal.fire({
            icon: 'error',
            title: 'Carrito vacio',
            text: 'No se encontaron productos en el carrito',
            footer: '<a href="./index.html">Regresa a la Tienda</a>'
    });
    }

    document.getElementById("productos_seleccionados").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();