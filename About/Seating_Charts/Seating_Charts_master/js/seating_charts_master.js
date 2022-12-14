$(function() {
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
    
    $('.sub-tab-menu ul > li').click(function(e) {
        e.preventDefault();
        let idx = $(this).index();
        console.log(idx);     

        // 스탠딩, 그라운드 on, off
        $('.master-hall > div').removeClass('show');
        $('.master-hall > div').eq(idx).addClass('show');

        // 서브탭 메뉴 현재 클릭된 메뉴
        $('.sub-tab-menu li a').removeClass('sub-tab-clicked');
        $('.sub-tab-menu li a').eq(idx).addClass('sub-tab-clicked');
    });

    // 마스터 스탠딩 층 별 on, off
    $(".seat-img-tab ul > li").click(function(e) {
        let idx1 = $(this).index();

        $(".F_wrap > div").removeClass('img_tab_on');
        $(".F_wrap > div").eq(idx1).addClass('img_tab_on');

        $(".seat-img-tab ul > li > img").removeClass('color');
        $(".seat-img-tab ul > li > img").eq(idx1).addClass('color');

        $(".seat-img-tab ul > li").removeClass('black_txt');
        $(".seat-img-tab ul > li").eq(idx1).addClass('black_txt');
    });

    // 마스터 그라운드 층 별 on, off
    $(".seat-img-tab2 ul > li").click(function(e) {
        let idx2 = $(this).index();

        $(".F_wrap2 > div").removeClass('img_tab_on2');
        $(".F_wrap2 > div").eq(idx2).addClass('img_tab_on2');

        $(".seat-img-tab2 ul > li > img").removeClass('color2');
        $(".seat-img-tab2 ul > li > img").eq(idx2).addClass('color2');

        $(".seat-img-tab2 ul > li").removeClass('black_txt2');
        $(".seat-img-tab2 ul > li").eq(idx2).addClass('black_txt2');
    });
});