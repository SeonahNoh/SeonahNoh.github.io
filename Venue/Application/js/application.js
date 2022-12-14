$(function() {
     // ==== 스크롤 페이드인 이벤트
        AOS.init({
        duration: 700,
        once: true
    });
    // 스크롤 페이드인 이벤트 끝 ====


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


    
    // ==== 슬라이드
    let ww = window.innerWidth;

    let swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        
    });

    responsiveSwiper();

    function responsiveSwiper() {
        if(ww < 600) {
            swiper.destroy();
            swiper = new Swiper('.swiper', {
                slidesPerView: 2,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
                
            });
        } else if(ww >= 600 && ww < 1024) {
            swiper.destroy();
            swiper = new Swiper('.swiper', {
                slidesPerView: 3,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
                
            });
        } else if(ww >= 1024 && ww < 1400) {
            swiper.destroy();
            swiper = new Swiper('.swiper', {
                slidesPerView: 4,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
                
            });
        } else if(ww >= 1400) {
            swiper.destroy();
            swiper = new Swiper('.swiper', {
                slidesPerView: 5,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
                
            });
        }
    }

    window.addEventListener('resize', function() {
        ww = window.innerWidth;
        responsiveSwiper();
    });
    // 슬라이드 끝 ====


    // ==== 푸터 링크
    $('#site').on('change', function() {
        if($(this).val() !== '') {
            window.open($(this).val(), '_blank');
        }
    })
    // 푸터 링크 끝 ====
})

