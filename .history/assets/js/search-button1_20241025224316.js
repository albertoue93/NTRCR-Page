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


(function($) {
    "use strict";
    jQuery(window).on('load', function() {
        $(".preloader").delay(1600).fadeOut("slow");
    });
    $('.hamburger').on('click', function(event) {
        $(this).toggleClass('h-active');
        $('.main-nav').toggleClass('slidenav');
    });
    $('.header-home .main-nav ul li  a').on('click', function(event) {
        $('.hamburger').removeClass('h-active');
        $('.main-nav').removeClass('slidenav');
    });
    $(".main-nav .fl").on('click', function(event) {
        var $fl = $(this);
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
        if ($fl.hasClass('flaticon-plus')) {
            $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
        } else {
            $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
        }
        $fl.next(".sub-menu").slideToggle();
    });
    $('.search-icon').on("click", function() {
        $('.mobile-search').addClass('slide');
    });
    $('.search-cross-btn').on("click", function() {
        $('.mobile-search').removeClass('slide');
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: ["slideShow", "thumbs", "fullScreen", "close"],
        loop: false,
        protect: true
    });
    $('[data-fancybox="footer"]').fancybox({
        buttons: ["slideShow", "thumbs", "fullScreen", "close"],
        loop: false,
        protect: true
    });
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-style-one, .header-style-two, .header-style-three, .header-style-four');
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    $("#deatination_drop").select2({
        closeOnSelect: true,
        width: 'resolve'
    });
    $(".defult-select-drowpown").select2({
        closeOnSelect: true,
    });
    jQuery('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d'
    });
    jQuery('#datepicker2').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d'
    });
    var mainSearchWrap = document.querySelectorAll('.main-searchbar-wrapper');
    var searchbarToggleIcon = document.querySelectorAll('.search-toggle i');
    var categoryWrap = document.querySelectorAll('.category-sidebar-wrapper');
    var categoryToggleIcon = document.querySelectorAll('.category-toggle i');
    var accountDropIcon = document.querySelectorAll('.user-dropdown i')
    var accountDropList = document.querySelectorAll('.user-drop-list')
    searchbarToggleIcon.forEach((element)=>{
        element.addEventListener('click', ()=>{
            mainSearchWrap.forEach((e)=>{
                e.classList.toggle('search-active')
            }
            )
        }
        )
    }
    )
    categoryToggleIcon.forEach((element)=>{
        element.addEventListener('click', ()=>{
            categoryWrap.forEach((e)=>{
                e.classList.toggle('category-active')
            }
            )
        }
        )
    }
    )
    accountDropIcon.forEach((element)=>{
        element.addEventListener('click', ()=>{
            accountDropList.forEach((e)=>{
                e.classList.toggle('account-drop-active')
            }
            )
        }
        )
    }
    )
    window.onclick = function(event) {
        mainSearchWrap.forEach((el)=>{
            if (event.target === el) {
                el.classList.remove('search-active')
            }
        }
        )
        categoryWrap.forEach((el)=>{
            if (event.target === el) {
                el.classList.remove('category-active')
            }
        }
        )
        if (!event.target.matches('.user-dropdown i')) {
            accountDropList.forEach((element)=>{
                if (element.classList.contains('account-drop-active')) {
                    element.classList.remove('account-drop-active')
                }
            }
            )
        }
    }
    var heroSlider = new Swiper('.hero-slider-one',{
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        centeredSlides: true,
        roundLengths: true,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 7000
        },
        navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
        },
        pagination: {
            el: '.hero-pagination',
            type: 'custom',
            clickable: true,
            renderCustom: function(swiper, current, total) {
                function numberAppend(d) {
                    return (d < 10) ? '0' + d.toString() : d.toString();
                }
                return numberAppend(current);
            }
        },
    });
    var heroSliderTwo = new Swiper('.hero-slider-two',{
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        autoplay: {
            delay: 7000
        },
        pagination: {
            el: ".hero-two-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            }
        }
    });
    var heroSliderTwo = new Swiper('.hero-slider-three',{
        slidesPerView: 1,
        speed: 1500,
        parallax: true,
        loop: true,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        effect: 'fade',
        navigation: {
            nextEl: '.hero-next3',
            prevEl: '.hero-prev3',
        },
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: ".hero-two-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            }
        }
    });
    var heroSliderTwo = new Swiper('.hero-slider-four',{
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        effect: 'fade',
        navigation: {
            nextEl: '.hero-next3',
            prevEl: '.hero-prev3',
        },
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: ".hero-two-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            }
        }
    });
    var destinationSliderOne = new Swiper('.destination-slider-one',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        centeredSlides: true,
        autoplay: {
            delay: 15000
        },
        navigation: {
            nextEl: '.testi-next',
            prevEl: '.testi-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            },
        }
    });
    var destinationSliderTwo = new Swiper('.destination-slider-two',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 15000
        },
        pagination: {
            el: ".testi-pagination",
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
        }
    });
    var socialSlider = new Swiper('.social-activity-slider',{
        slidesPerView: 2,
        speed: 1000,
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 15000
        },
        pagination: {
            el: ".testi-pagination",
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            },
        }
    });
    var testimonialSliderOne = new Swiper('.testimonial-slider-one',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 15000
        },
        navigation: {
            nextEl: '.testi-next',
            prevEl: '.testi-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var testimonialSliderOne = new Swiper('.testimonial-slider-two',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 15000
        },
        navigation: {
            nextEl: '.testi-next',
            prevEl: '.testi-prev',
        },
    });
    var testimonialSliderOne = new Swiper('.testimonial-slider-three',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 15000
        },
        navigation: {
            nextEl: '.testi-next4',
            prevEl: '.testi-prev4',
        },
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var testimonialSliderOne = new Swiper('.upcoming-tour',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 15000
        },
        navigation: {
            nextEl: '.testi-next4',
            prevEl: '.testi-prev4',
        },
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 3
            },
        }
    });
    var gallarySlider = new Swiper('.gallary-slider',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        autoplay: {
            delay: 9000
        },
        navigation: {
            nextEl: '.gallary-next1',
            prevEl: '.gallary-prev1',
        },
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var gallarySlider2 = new Swiper('.gallary-slider2',{
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        autoplay: {
            delay: 12000
        },
        navigation: {
            nextEl: '.gallary-next2',
            prevEl: '.gallary-prev2',
        },
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    $('.fadeffect').chainFade({
        startAt: 0,
        interval: 300,
        speed: 700,
        fx: 'fade',
        distance: 50,
        direction: 'forward',
        toThe: 'top',
        fixedHeight: false,
        messages: false,
        queue: true,
        ease: 'swing',
        after: function() {}
    });
}(jQuery));
