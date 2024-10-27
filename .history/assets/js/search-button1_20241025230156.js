// Selecciona el botón de búsqueda en el menú y el modal de búsqueda
const searchIcon = document.querySelector('.search-icon');
const mobileSearch = document.querySelector('.mobile-search');
const closeButton = document.querySelector('#closeButton'); // Actualizado
const searchButton = document.querySelector('#searchButton'); // Nuevo
const searchInput = document.querySelector('#searchInput'); // Nuevo

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

// Redirigir a la página de resultados de búsqueda
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    }
});
