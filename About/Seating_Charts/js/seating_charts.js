$(function () {
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

var num = 1;
function imgNextS() {
    num++;
    if (num > 3) num = 1;
    document.getElementById("photo_s").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
}

function imgPrevS() {
    num--;
    if (num < 1) num = 3;
    document.getElementById("photo_s").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
}

function imgNextM() {
    num++;
    if (num > 4) num = 1;
    document.getElementById("photo_m").setAttribute("src","./img/master/master-hall" + num + ".png");
}

function imgPrevM() {
    num--;
    if (num < 1) num = 4;
    document.getElementById("photo_m").setAttribute("src","./img/master/master-hall" + num + ".png");
}
