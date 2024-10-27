// Selecciona los elementos necesarios
const searchIcon = document.querySelector('.search-icon');
const mobileSearch = document.querySelector('.mobile-search');
const closeButton = document.querySelector('.search-cross-btn');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

// Función para abrir el modal
function openSearchModal() {
    mobileSearch.classList.add('slide');
    searchInput.focus(); // Coloca el foco en el campo de búsqueda
}

// Función para cerrar el modal
function closeSearchModal() {
    mobileSearch.classList.remove('slide');
    searchInput.value = ''; // Limpia el campo de búsqueda al cerrar el modal
}

// Redirige a la página de resultados de búsqueda
function redirectToSearchResults() {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    }
}

// Abre el modal al hacer clic en el ícono de búsqueda
searchIcon.addEventListener('click', openSearchModal);

// Cierra el modal al hacer clic en el botón de cierre
closeButton.addEventListener('click', closeSearchModal);

// Redirige a los resultados de búsqueda al hacer clic en el botón de búsqueda
searchButton.addEventListener('click', redirectToSearchResults);

// Redirige a los resultados de búsqueda al presionar "Enter"
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        redirectToSearchResults();
    }
});
