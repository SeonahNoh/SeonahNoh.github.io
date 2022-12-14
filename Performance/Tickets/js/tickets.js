// header slide
$(function() {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        init: false,
        initialSlide: 0,
        speed: 1000,
        parallax: true,
        debugger: false,
        autoplay: { 
            delay: 4000,
            disableOnInteraction: false,
        },
        loop : false, 
        loopAdditionalSlides : 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var control = function() {
        var slide = swiper.slides[swiper.activeIndex];
        var video = slide.children[0];
        video.addEventListener("ended", function () {
            swiper.slideNext(false);
        });
        // video.play();
    };
    swiper.on("init", control);
    swiper.on("slideChange", control);
    swiper.init();




    // flow
    window.addEventListener('DOMContentLoaded', function(){
        let roller = document.querySelector('.roller');
        roller.id = 'roller1';

        let clone = roller.cloneNode(true);
        clone.id = 'roller2';
        document.querySelector('.flow-wrap').appendChild(clone);

        document.querySelector('#roller1').style.left = '0px';
        document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth+'px';

        roller.classList.add('original');
        clone.classList.add('clone');
    });



    // ===== 햄버거 메뉴 펼치고 닫기
    $('.overlay .close-btn').hide();
            
    $('.right-menu ul .right').click(function() {
        $('.overlay').animate({'width': '100%'}, 300);
        $('.overlay .close-btn').show();

    });

    $('.overlay .close-btn').click(function() {
        $('.overlay').animate({'width': 0}, 300);
        $(this).hide();
        $('.overlay-menu > ul > li > a').removeClass('on');
        $('.overlay-menu > ul > li > ul > li').removeClass('on'); 
    });
    // 햄버거 메뉴 펼치고 닫기 끝 =====


    // ==== 햄버거 메뉴 콘텐츠 스타일 적용
    $('.overlay-menu > ul > li').click(function() {
        $('.overlay-menu > ul > li > a').removeClass('on');
        $(this).children('a').addClass('on');
        
        $('.overlay-menu > ul > li > ul > li').removeClass('on'); 
        $(this).children().children().addClass('on');
    });
    // 햄버거 메뉴 콘텐츠 스타일 적용 끝 ====


    // ==== 헤더 메뉴 호버 시 스타일 변화
    $('.logo-menu-box').hover(function() {
        $('.header-logo > .hover-change > img').attr('src', './img/logo_black.png');
        $('.gnb > li > a').css({'color':'black', 'font-weight':'600'});
        $('.right-menu > ul > li > a').css({'color':'black', 'font-weight':'600'});
    }, function() {
        $('.header-logo > .hover-change > img').attr('src', './img/logo_white.png');
        $('.gnb > li > a').css({'color':'white', 'font-weight':'normal'});
        $('.right-menu > ul > li > a').css({'color':'white', 'font-weight':'normal'});
    })
    // 헤더 메뉴 호버 시 스타일 변화 끝 ====


    // ==== 푸터 링크
    $('#site').on('change', function() {
        if($(this).val() !== '') {
            window.open($(this).val(), '_blank');
        }
    })
    // 푸터 링크 끝 ====
});



