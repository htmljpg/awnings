$(document).ready(function(){
    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('target-absolute')) {
            $(this).toggleClass('active');
            $(target).toggleClass('active');
            $(target).siblings('.overlay').addClass('active');
            if($(this).hasClass('overlay')) {
                $(this).removeClass('active');
            }
        }
        else {
            $(this).toggleClass('active').siblings(target).slideToggle();
        }
        
    });

    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".first-section").offset().top
        }, 1000);
    });

    mySwiper = new Swiper('.swiper-container--materials', {
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '',
        prevEl: '',
    },
        pagination: {
        el: '#discMaterials',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });


    const myCustomSlider = document.querySelectorAll('.swiper-container--built-image');
    const myCustomGalleryThumbs = document.querySelectorAll('.swiper-container--built-thumbnail');
    const myCustomSliderDisc = document.querySelectorAll('.discBuilt');

    for (i = 0; i < myCustomSlider.length; i++) {

        myCustomSlider[i].classList.add('built-image-' + i);
        myCustomGalleryThumbs[i].classList.add('built-thumbnail-' + i);
        myCustomSliderDisc[i].classList.add('discBuilt-' + i);

        var galleryThumbs = new Swiper('.built-thumbnail-' + i , {
            spaceBetween: 0,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        var galleryTop = new Swiper('.built-image-' + i, {
            spaceBetween: 0,
            pagination: {
                el: '.discBuilt-'+i,
                clickable: true,
            },
            navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
            thumbs: {
                swiper: galleryThumbs
            }
        });

    }

    // Tabs
    $('.tab__item').hide();
    
    $('.tabs__nav-item').click( function() {
	
	var tabID = $(this).attr('data-tab');

        $(this).addClass('active').siblings().removeClass('active');

        $('#tab-'+tabID).addClass('active').show().siblings().hide().removeClass('active');
    });


    $('.fancybox').fancybox();

    // mask
    $('input[type="tel"]').mask('+7 (999) 999-99-99');

    $('.js-anchor-link').click(function(e){
        e.preventDefault();
        var target = $($(this).attr('href'));
        if(target.length){
            var scrollTo = target.offset().top;
            $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
        }
    });

    // map show in scroll
    // let beforeScrolling = $('.before-scrolling');
    // let beforeScrollingTop = beforeScrolling.offset().top;
    // $(window).bind('scroll', function(){
    //     let windowTop = $(this).scrollTop();
    //     if(windowTop > beforeScrollingTop) {
    //         $(window).unbind('scroll');
    //     }
    // });

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [47.222078, 39.720358],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/svg/pin.svg',
                // Размеры метки.
                iconImageSize: [112, 150],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });
});