const productos = ['Buzo Artic Monkeys', 'Buzo Knicks', 'Remera ASAP', 'Remera Bowie', 'Buzo Paraguas', 'Buzo Gorilaz', 'Remera Joy Division', 'Remera Mac Miller']
const carrito = []

// const listadoFrutas = document.getElementById("listadoFrutas")
// const listadoCarrito = document.getElementById("listadoCarrito")



const cargarProductos = ()=>{
    for (fruta of productos) {
    const liProducto = document.createElement("li")
            liProducto.className = "btn"
            liProducto.innerText = fruta
            liProducto.setAttribute("onclick", `agregarAlCarrito('${fruta}')`)
            listadoFrutas.append(liProducto)
    }
} 


cargarProductos()

const agregarAlCarrito = (prod)=>{
    if (prod.trim() > ""){
        const liCarrito = document.createElement("li")
              liCarrito.className = "btn"
              liCarrito.innerText = prod
              listadoCarrito.append(liCarrito)
    }
}