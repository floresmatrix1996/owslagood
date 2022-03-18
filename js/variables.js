const productos = ['Buzo Artic Monkeys', 'Buzo Knicks', 'Remera ASAP', 'Remera Bowie', 'Buzo Paraguas', 'Buzo Gorilaz', 'Remera Joy Division', 'Remera Mac Miller']
const carrito = []

const cargarProductos = ()=>{
    for (ropa of productos) {
    const liProducto = document.createElement("li")
            liProducto.className = "btn"
            liProducto.innerText = ropa
            liProducto.setAttribute("onclick", `agregarAlCarrito('${ropa}')`)
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


let buttonText = document.getElementById('carritoBtn')
buttonText.addEventListener("click",clicked)

function clicked(){
    alert('Tu compra se realizo con exito !!')
}