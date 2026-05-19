let carrito = [];

function compras() {
    const LIST = document.getElementById("list");
    
    if (carrito.length === 0) {
        LIST.innerHTML = "La lista de compras esta vacia";
        return;
    }

    let html = "<ul>";
    carrito.forEach((item, index) => {
        html += `<li>${index+1}. ${item}</li>`;
    });
    html += "</ul>";
  
    LIST.innerHTML = html;
}

function agregar() {
    const input = document.getElementById("producto-input");
    const valor = input.value.trim();

    if (valor !== "") {
        carrito.push(valor);
        input.value = "";
        compras(); 
    }
}

function eliminarPorPosicion() {
    const inputPos = document.getElementById("pos-input");
    const pos = parseInt(inputPos.value);

    if (!isNaN(pos) && pos >= 0 && pos < carrito.length) {
        carrito = carrito.slice(0, pos).concat(carrito.slice(pos + 1));
        inputPos.value = "";
        compras(); 
    }
}

function vaciarCarrito() {
    carrito = [];
    compras(); 
}

compras();

