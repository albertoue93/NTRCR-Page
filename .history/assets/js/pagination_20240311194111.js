var currentPage = 1;
var totalPages = 2; // Total de páginas, puedes cambiar este valor según sea necesario
var lastPage = localStorage.getItem('lastPage');

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
