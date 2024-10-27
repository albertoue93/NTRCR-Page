/*
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
*/
// Selecciona los elementos del modal
const searchIcon = document.querySelector('.search-icon');
const mobileSearch = document.querySelector('.mobile-search');
const closeButton = document.querySelector('#closeButton');
const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');

// Función para abrir el modal
function openSearchModal() {
    mobileSearch.classList.add('slide');
}

// Función para cerrar el modal
function closeSearchModal() {
    mobileSearch.classList.remove('slide');
}

// Función para realizar la búsqueda
function executeSearch() {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        // Ejecutar búsqueda
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;

        // Eliminar el foco visual del botón
        searchButton.blur();
    }
}


// Eventos de clic
searchIcon.addEventListener('click', openSearchModal);    // Abre el modal al hacer clic en el ícono de búsqueda del menú
closeButton.addEventListener('click', closeSearchModal);   // Cierra el modal al hacer clic en la 'x'
searchButton.addEventListener('click', executeSearch);     // Ejecuta la búsqueda al hacer clic en el ícono de búsqueda

// Evento para ejecutar la búsqueda al presionar "Enter"
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {  // Verifica si la tecla presionada es "Enter"
        executeSearch();          // Ejecuta la búsqueda
    }
});