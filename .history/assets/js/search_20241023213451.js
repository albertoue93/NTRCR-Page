// Lista de resultados simulada (puedes adaptarlo a tus necesidades)
const searchData = [
    {
        title: "Cultural and Handicraft Tour.",
        url: "cultural/cultural-tour-2.html",
        category: "Cultural Tour",
        description: "Cradle of Chorotega crafts with more than 1500 years of tradition where you can obtain a unique and inexplicable experience that goes from generation to generation."
    },
    {
        title: "Guanacaste Coffee Tour.",
        url: "cultural/cultural-tour-1.html",
        category: "Cultural Tour",
        description: "This coffee processor is characterized by being the only coffee producers in one of the five blue zones of the world. Discover in this site one of the secrets of longevity in the blue zone."
    },
    {
        title: "Guanacaste Rum & Brewery Experience Tour.",
        url: "cultural/cultural-tour-4.html",
        category: "Cultural Tour",
        description: "This is a tour where a little of our culture in the province of Guanacaste and the history of our ancestors is highlighted (“Sabaneros”, typical food, instruments such as the Marimba and ancient utensils)"
    },
    {
        title: "Maleku's Cultural Tour.",
        url: "cultural/cultural-tour-3.html",
        category: "Cultural Tour",
        description: "This is a brief description of the first search result."
    },
    {
        title: "Result Title 2",
        url: "result-page-2.html",
        description: "A brief description of the second search result."
    },
    {
        title: "Result Title 3",
        url: "result-page-3.html",
        description: "This is a summary of the third search result."
    },
    {
        title: "Result Title 1",
        url: "result-page-1.html",
        description: "This is a brief description of the first search result."
    },
    {
        title: "Result Title 2",
        url: "result-page-2.html",
        description: "A brief description of the second search result."
    },
    {
        title: "Result Title 3",
        url: "result-page-3.html",
        description: "This is a summary of the third search result."
    },
    {
        title: "Result Title 1",
        url: "result-page-1.html",
        description: "This is a brief description of the first search result."
    },
    {
        title: "Result Title 2",
        url: "result-page-2.html",
        description: "A brief description of the second search result."
    },
    {
        title: "Result Title 3",
        url: "result-page-3.html",
        description: "This is a summary of the third search result."
    },
    {
        title: "Result Title 1",
        url: "result-page-1.html",
        description: "This is a brief description of the first search result."
    },
    {
        title: "Result Title 2",
        url: "result-page-2.html",
        description: "A brief description of the second search result."
    },
    {
        title: "Result Title 3",
        url: "result-page-3.html",
        description: "This is a summary of the third search result."
    },
    {
        title: "Result Title 1",
        url: "result-page-1.html",
        description: "This is a brief description of the first search result."
    },
    {
        title: "Result Title 2",
        url: "result-page-2.html",
        description: "A brief description of the second search result."
    },
    {
        title: "Result Title 3",
        url: "result-page-3.html",
        description: "This is a summary of the third search result."
    },
];

// Función para mostrar los resultados de la búsqueda
function displayResults(query) {
    const resultsContainer = document.getElementById('results-container');
    const searchTermElement = document.getElementById('search-term');
    
    // Mostrar el término de búsqueda
    searchTermElement.textContent = query;

    // Limpiar los resultados anteriores
    resultsContainer.innerHTML = '';

    // Filtrar resultados que coincidan con el término de búsqueda
    const results = searchData.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
    );

    // Si no hay resultados
    if (results.length === 0) {
        resultsContainer.innerHTML = `<p>No results found for "${query}".</p>`;
        return;
    }

    // Mostrar cada resultado
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('search-result');

        resultElement.innerHTML = `
            <a href="${result.url}" class="result-title">${result.title}</a>
            <p class="result-category">${result.category}</p>
            <p class="result-description">${result.description}</p>
        `;

        resultsContainer.appendChild(resultElement);
    });
}

// Obtener el término de búsqueda desde la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Ejecutar búsqueda cuando se carga la página
window.onload = function() {
    const query = getQueryParam('query');
    if (query) {
        displayResults(query);
    }
};