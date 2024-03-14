var currentPage = 1;
var totalPages = 2; // Total de páginas, puedes cambiar este valor según sea necesario
var lastPageTimestamp = localStorage.getItem('lastPageTimestamp');
var lastPage = localStorage.getItem('lastPage');

// Reinicia el localStorage si ha pasado más de 10 segundos desde la última visita
if (lastPageTimestamp && (Date.now() - parseInt(lastPageTimestamp) > 10 * 1000)) {
    localStorage.clear('lastPage');
    showPage(1); // Vuelve a la página 1 después de reiniciar el almacenamiento local
  }

function showPage(pageNumber) {
    var pages = document.querySelectorAll('.page');

    pages.forEach(function (page, index) {
        if (index + 1 === pageNumber) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });

    // Aplica la clase "active" al enlace de paginación correspondiente a la página actual
    var paginationLinks = document.querySelectorAll('.pagination-list li a');
    paginationLinks.forEach(function (link) {
        link.classList.remove('active');
    });
    paginationLinks[pageNumber].classList.add('active');

    currentPage = pageNumber;
    localStorage.setItem('lastPage', currentPage);
    localStorage.setItem('lastPageTimestamp', Date.now());
}

function prevPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

// Muestra la primera página por defecto
showPage(lastPage ? parseInt(lastPage) : 1);
