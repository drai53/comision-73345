// js/filtro.js
function filtrarProductos() {
    const input = document.getElementById("busqueda").value.toLowerCase();
    const productos = document.querySelectorAll(".producto");

    productos.forEach(p => {
        const texto = p.textContent.toLowerCase();
        p.style.display = texto.includes(input) ? "block" : "none";
    });
}
