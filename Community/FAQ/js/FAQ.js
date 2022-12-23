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
    $('.overlay-menu > ul > li').click(function(e) {
        $('.overlay-menu > ul > li > a').removeClass('on');
        $(this).children('a').addClass('on');
        
        $('.overlay-menu > ul > li > ul > li').removeClass('on'); 
        $(this).children().children().addClass('on');
    });
    // 햄버거 메뉴 콘텐츠 스타일 적용 끝 ====


    // ===== 탭 메뉴 기능
    $('.tab-menu li').click(function(e) {
        e.preventDefault();
        let idx = $(this).index();          
        $('.tab-menu li a').removeClass('underline');
        $('.tab-menu li a').eq(idx).addClass('underline');
        $('section').removeClass('show');
        $('section').eq(idx).addClass('show');
        $('.btn-open').next('.accord-content').siblings('.accord-content').slideUp(300);
        $('.btn-open').toggleClass('on').siblings().removeClass('on');

    })
    // 탭 메뉴 기능 끝 =====


    // ===== 아코디언 메뉴 펼치기/접기
    $('.btn-open').click(function(e) {
        e.preventDefault();
        $(this).next('.accord-content').stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next('.accord-content').siblings('.accord-content').slideUp(300);
    });
    // 아코디언 메뉴 펼치기/접기 끝 =====
    

    // ==== 푸터 링크
    $('#site').on('change', function() {
        if($(this).val() !== '') {
            window.open($(this).val(), '_blank');
        }
    })
    // 푸터 링크 끝 ====

})