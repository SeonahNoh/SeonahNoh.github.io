// 이미지 넘기기
var num = 1;

function imgNext() {
    num++;
    if (num > 3) num = 1;
    document.getElementById("photo").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
}

function imgPrev() {
    num--;
    if (num < 1) num = 3;
    document.getElementById("photo").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
}

// ======================== 제이쿼리 =========================== //
$(function () {

  // ========= 탭기능 ========= //
    $('.sub-tab li').click(function (e) {
        e.preventDefault();
        let idx = $(this).index();

        $('section > div').removeClass('active');
        $('section > div').eq(idx).addClass('active');

        $('.sub-tab li a').removeClass('sub-tab-clicked');
        $('.sub-tab li a').eq(idx).addClass('sub-tab-clicked');
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

  // ==== 푸터 링크
    $('#site').on('change', function() {
        if($(this).val() !== '') {
            window.open($(this).val(), '_blank');
        }
    })
  // 푸터 링크 끝 ====
});