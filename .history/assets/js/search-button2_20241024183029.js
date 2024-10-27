// Mostrar el modal cuando se hace clic en el ícono de búsqueda
document.querySelector('.search-icon').addEventListener('click', function () {
    document.getElementById('searchModal').style.display = 'block';
});

// Cerrar el modal
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('searchModal').style.display = 'none';
});

// Redirigir a la página de resultados de búsqueda
document.getElementById('searchButton').addEventListener('click', function () {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    }
});

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('searchModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}; 
//