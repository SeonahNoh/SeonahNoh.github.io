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


    // ==== section1 슬라이드 버튼 
    $('.slide-btn-next').click(function(e) {
        e.preventDefault();
        $('.slide-wrap').animate({scrollLeft: '+=999'}, 500);
        $('.slide-btn-next > img').attr('src', $('.slide-btn-next > img').attr('src').replace('_black.png', '_icon.png'));
        $('.slide-btn-prev > img').attr('src', $('.slide-btn-prev > img').attr('src').replace('_icon.png', '_black.png'));
    });

    $('.slide-btn-prev').click(function(e) {
        e.preventDefault();
        $('.slide-wrap').animate({scrollLeft: '-=999'}, 500);
        $('.slide-btn-next > img').attr('src', $('.slide-btn-next > img').attr('src').replace('_icon.png', '_black.png'));
        $('.slide-btn-prev > img').attr('src', $('.slide-btn-prev > img').attr('src').replace('_black.png', '_icon.png'));
    });
    // section1 슬라이드 버튼 끝 ====


    // ==== 푸터 링크
    $('#site').on('change', function() {
        if($(this).val() !== '') {
            window.open($(this).val(), '_blank');
        }
    })
    // 푸터 링크 끝 ====
    
})