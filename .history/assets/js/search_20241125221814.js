// Lista de resultados simulada (puedes adaptarlo a tus necesidades)
const searchData = [
    {
        title: "Cancelation Policy",
        url: "cancelation-policy.html",
        category: "Cancelation Policy",
        description: "Cancelation Policy."
    },
    {
        title: "Cultural and Handicraft Tour",
        url: "cultural/cultural-tour-2.html",
        category: "Cultural Tour",
        description: "Cradle of Chorotega crafts with more than 1500 years of tradition where you can obtain a unique and inexplicable experience that goes from generation to generation."
    },
    {
        title: "Guanacaste Coffee Tour",
        url: "cultural/cultural-tour-1.html",
        category: "Cultural Tour",
        description: "This coffee processor is characterized by being the only coffee producers in one of the five blue zones of the world. Discover in this site one of the secrets of longevity in the blue zone."
    },
    {
        title: "Guanacaste Rum & Brewery Experience Tour",
        url: "cultural/cultural-tour-4.html",
        category: "Cultural Tour",
        description: "This is a tour where a little of our culture in the province of Guanacaste and the history of our ancestors is highlighted (“Sabaneros”, typical food, instruments such as the Marimba and ancient utensils)"
    },
    {
        title: "Maleku's Cultural Tour",
        url: "cultural/cultural-tour-3.html",
        category: "Cultural Tour",
        description: "Original Malekus tribe, one of the most prominent ethnic groups in our country. For his painting works in his masquerades, his dance and his culture."
    },
    {
        title: "Arenal Rafting",
        url: "fortuna/arenal-rafting.html",
        category: "Fortuna Tour",
        description: "This is the safest and most exciting adventure to enjoy with the whole family."
    },
    {
        title: "Arenal Volcano Tours",
        url: "fortuna/arenal-volcano.html",
        category: "Fortuna Tour",
        description: "Experience the breathtaking wonders of Costa Rica with our Arenal Volcano Tour package. Embark on an unforgettable journey to witness the awe-inspiring beauty of the Arenal Volcano, one of the most iconic landmarks in Costa Rica."
    },
    {
        title: "Fortuna Arenal Adventures",
        url: "fortuna/fortuna-arenal-adventures.html",
        category: "Fortuna Tour",
        description: "Discover and experience the breathtaking wonders of Costa Rica with a combination of adrenaline and adventure."
    },
    {
        title: "Bijagua Rainforest Tours",
        url: "land/rainforest-bijagua.html",
        category: "Bijagua Rainforest Tours.",
        description: "It is a jungle in this part of the Province of Alajuela near the border between the province of Guanacaste and because it is a biological corridor it is home to many tropical species such as mammals, amphibians, reptiles and birds."
    },
    {
        title: "Bird Watching Tour",
        url: "land/bird-watching-tour.html",
        category: "Bird Watching Tour.",
        description: "This tour is completely private in search of sightings of different species of birds, depending on the place where our clients are for their comfort or according to the sighting expectations they desire."
    },
    {
        title: "Monteverde Cloud Forest",
        url: "land/monteverde-cloud.html",
        category: "Monteverde Cloud Forest.",
        description: "Discover a mountainous city in the northwest, famous for its biodiverse forests."
    },
    {
        title: "Flamingo Catamarán Adventure",
        url: "water/flamingo-catamaran-adventure.html",
        category: "Water Tour",
        description: "Enjoy this wonderful adventures in this Catamarán tours in Flamingo, Guanacaste."
    },
    {
        title: "Golfo De Nicoya Boat Tour",
        url: "water/water-tour-3.html",
        category: "Water Tour",
        description: "With this small historical tour we will review the Nicoya Guanacaste park and we will see the church of San Blas de Nicoya."
    },
    {
        title: "Hacienda El Viejo Boat Tours",
        url: "water/water-tour-4.html",
        category: "Water Tour",
        description: "This magnificent 5,000-acre Private Wildlife Refuge and Sugar Farm along the Tempisque River."
    },
    {
        title: "Jet Ski",
        url: "water/water-tour-5.html",
        category: "Water Tour",
        description: "You can enjoy a tour of the ocean, on jet skis through the sectors of Peninsula de Papagayo."
    },
    {
        title: "La Leona Waterfall Tour",
        url: "water/water-tour-12.html",
        category: "Water Tour",
        description: "You can enjoy a tour in this beautiful waterfall, you will see some beautiful turquoise pools and a spectacular waterfall."
    },
    {
        title: "Marlin del Rey Catamarán Tour (Coco Beach)",
        url: "water/marlin-del-rey-coco.html",
        category: "Water Tour",
        description: "Enjoy this wonderful adventures in this Catamarán tours in Coco Beach, Guanacaste."
    },
    {
        title: "Marlin del Rey Catamarán Tour (Tamarindo Beach)",
        url: "water/marlin-del-rey-tamarindo.html",
        category: "Water Tour",
        description: "Enjoy this wonderful adventures in this Catamarán tours in Tamarindo Beach, Guanacaste."
    },
    {
        title: "Palo Verde Boat Tours (Dalila's)",
        url: "water/water-tour-6.html",
        category: "Water Tour",
        description: "At this site we will enjoy bird watching such as: pink spatula heron, tiger heron, and other animals."
    },
    {
        title: "Rancho Los Coyotes Boat Tours",
        url: "water/water-tour-7.html",
        category: "Water Tour",
        description: "This option we can take a boat tour of 1:30 minutes, to enjoy an exotic sighting of resident and migratory birds. As well as observe howler monkeys, white-faced monkeys, crocodiles and much more."
    },
    {
        title: "Sarapiquí Boat Tours",
        url: "water/water-tour-8.html",
        category: "Water Tour",
        description: "If you are one of those who love to travel, get to know different places in a short time and adventure, this may be your opportunity."
    },
    {
        title: "Sarapiquí Rafting Tours",
        url: "water/sarapiqui-rafting.html",
        category: "Water Tour",
        description: "This tours offers exhilarating rafting adventures through the stunning Sarapiquí River in Costa Rica. With experienced guides and top-notch equipment, they provide thrilling experiences for adventurers of all levels, surrounded by breathtaking rainforest scenery."
    },
    {
        title: "Sport Fishing",
        url: "water/water-tour-9.html",
        category: "Water Tour",
        description: "We offer our clients a good service where you can enjoy a spectacular adventure in the ocean, and that magic of the sport of fishing in the Golfo Papagayo."
    },
    {
        title: "Tenorio Floating",
        url: "water/water-tour-10.html",
        category: "Water Tour",
        description: "In this option you will be able to enjoy the tranquility of the lower section of the Tenorio River in this tranquil floating safari for nature lovers."
    },
    {
        title: "White Water Rafting Tenorio Adventure",
        url: "water/water-tour-11.html",
        category: "Water Tour",
        description: "You can practice with your guide and then enjoy your adrenaline-filled trip for 2:30 minutes along the Tenorio river canyon."
    },
    {
        title: "Adventures Dinopark",
        url: "land/land-tour-1.html",
        category: "Guanacaste Land Tour",
        description: "Leave the dry savannah behind as spectacular scenery unfolds in the lush rainforest and of course the volcano and blue rivers."
    },
    {
        title: "Adventures And Waterfalls",
        url: "land/adventures-and-waterfalls.html",
        category: "Guanacaste Land Tour",
        description: "Exceptionally located in the dry tropical forest, next to the Rincón de La Vieja National Park. A site of much adventure below you can see the options we have for you."
    },
    {
        title: "A.T.V Tours",
        url: "land/a-t-v-tour.html",
        category: "Guanacaste Land Tour",
        description: "Experience the thrill of off-road adventure with our ATV tours!"
    },
    {
        title: "Barra Honda National Park",
        url: "land/barra-honda.html",
        category: "Guanacaste Land Tour",
        description: "It is the only park in Costa Rica that has a complex of underground caverns, and with Karstic morphology (stalagmites and stalactites are usually formed)."
    },
    {
        title: "El Porvenir Tour",
        url: "land/el-porvenir-tour.html",
        category: "Guanacaste Land Tour",
        description: "This tour is focused on wildlife sightings (sloths, toucans, spider monkeys, howler and capuchins, crocodiles in the river, birds and more) on a private estate, here you can enjoy its trails and part of a farm. It has cabins to stay and restaurant service in the jungle."
    },
    {
        title: "Full Day Eco Adventure Park",
        url: "land/eco-adventure-park.html",
        category: "Guanacaste Land Tour",
        description: "An experience full of nature, culture, adventure, wellness and sustainability in one day, in the same place."
    },
    {
        title: "Honeymoon Travel Guanacaste",
        url: "land/honeymoon-travel.html",
        category: "Guanacaste Land Tour",
        description: "A spectacular place of wellness in the dry tropical forest, with a great view of the Pacific Ocean."
    },
    {
        title: "Miravalles Volcano Pass Day",
        url: "land/las-hornillas-miravalles.html",
        category: "Guanacaste Land Tour",
        description: "It is a site with a spectacular view of the Miravalles Volcano, with volcanic activity on its slopes. Its perfect combination between nature and hike in secondary craters."
    },
    {
        title: "Miravalles Volcano Naturalist Tour",
        url: "land/miravalles-naturalist-tour.html",
        category: "Guanacaste Land Tour",
        description: "Here we will take a beautiful tour of the slopes of the volcano. We will pass through the main town and your guide will give a brief explanation and historical overview of the most important and productive activities of Miravalles."
    },
    {
        title: "Mega Combo Cañon De La Vieja",
        url: "land/cañom-de-la-vieja.html",
        category: "Guanacaste Land Tour",
        description: "Discover the ultimate adventure with this thrilling blend of Costa Rica's finest activities in Guanacaste's breathtaking landscape!"
    },
    {
        title: "Night Walk Tour",
        url: "land/night-walk-tour.html",
        category: "Guanacaste Land Tour",
        description: "This is a night tour, where you can have possible sightings of different species of an order of amphibians such as the commonly called anurans (frogs and toads), salamanders, insects, reptiles, perhaps birds and nocturnal mammals."
    },
    {
        title: "Pass Full Day Adventure And Hot Springs",
        url: "land/adventures-and-hot-spring.html",
        category: "Guanacaste Land Tour",
        description: "One of the most beatiful destinations in Costa Rica, as it has many attractions and places to discover."
    },
    {
        title: "Santa Rosa National Park",
        url: "land/santa-rosa-mational-park.html",
        category: "Guanacaste Land Tour",
        description: "In this site, declared a World Heritage Site, the only patch of dry tropical forest in Mesoamerica is preserved. In addition, the area is fully connected to humid, cloudy and rainy forests, which makes it possible for it to have an important biological richness."
    },
    {
        title: "Zip Line Adrenaline",
        url: "land/zip-line-adrenaline.html",
        category: "Guanacaste Land Tour",
        description: "Experience the thrill of Zip Line Adventure: Soar through the skies and feel the adrenaline rush!"
    },
];

// Función para normalizar texto eliminando acentos
function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para resaltar coincidencias en el texto
function highlightMatch(text, query) {
    const normalizedText = normalizeText(text.toLowerCase());
    const normalizedQuery = normalizeText(query.toLowerCase());

    if (!normalizedText.includes(normalizedQuery)) return text;

    // Expresión regular para encontrar el término de búsqueda y resaltarlo
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Función para mostrar los resultados de la búsqueda
function displayResults(query) {
    const resultsContainer = document.getElementById('results-container');
    const searchTermElement = document.getElementById('search-term');
    const resultsCountElement = document.getElementById('results-count'); // Elemento para el número de resultados
    
    // Normalizar el término de búsqueda
    const normalizedQuery = normalizeText(query.toLowerCase());

    // Mostrar el término de búsqueda
    searchTermElement.textContent = query;

    // Limpiar los resultados anteriores
    resultsContainer.innerHTML = '';

    // Filtrar resultados que coincidan con el término de búsqueda normalizado
    const results = searchData.filter(result => 
        normalizeText(result.title.toLowerCase()).includes(normalizedQuery) ||
        normalizeText(result.description.toLowerCase()).includes(normalizedQuery)
    );

    // Mostrar el número de resultados
    resultsCountElement.textContent = `${results.length} Results Found`;

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
            <a href="${result.url}" class="result-title">${highlightMatch(result.title, query)}</a>
            <p class="result-category">${result.category}</p>
            <p class="result-description">${highlightMatch(result.description, query)}</p>
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


