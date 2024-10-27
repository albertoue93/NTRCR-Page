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

// Selecciona el botón de búsqueda en el menú y el modal de búsqueda
const searchIcon = document.querySelector('.search-icon');
const mobileSearch = document.querySelector('.mobile-search');
const closeButton = document.querySelector('.search-cross-btn');

// Función para abrir el modal
function openSearchModal() {
    mobileSearch.classList.add('slide');
}

// Función para cerrar el modal
function closeSearchModal() {
    mobileSearch.classList.remove('slide');
}

// Agrega el evento de clic al botón de búsqueda para abrir el modal
searchIcon.addEventListener('click', openSearchModal);

// Agrega el evento de clic al botón de cerrar para cerrar el modal
closeButton.addEventListener('click', closeSearchModal);
