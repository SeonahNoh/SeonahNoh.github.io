// hide-show
$(function() {
    $(".last-img").hide();

    $("#click-btn").on("click", function() {
        $(this).siblings(".img-contents").children(".hidden").toggle();
        $(this).siblings(".img-contents").children(".last-img").toggle();
        $(this).children("div").children("span").toggleClass("off");
        $(this).children("div").children(Image).toggleClass("rotate");

        var offset = $(this).siblings(".img-contents").offset(); 
        $('html').animate({scrollTop : offset.top}, 400);
    });   
});


// scroll
$(function() {
    var isVisible = false;
    var con = [".casting", ".notice", ".booking", ".seat", ".ticket", ".hall"];
    

    $(window).on('scroll',function() {
        $.each(con, function(i,o) {
            if (checkVisible($(`${con[i]} h3`))&&!isVisible) {
                $(`${con[i]}`).css("animation" , "fadeInTop 1s");
            }
        });

        
    });

    function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(),
            scrolltop = $(window).scrollTop(),
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }

});

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


    // ==== 푸터 링크
    $('#site').on('change', function() {
        if($(this).val() !== '') {
            window.open($(this).val(), '_blank');
        }
    })
    // 푸터 링크 끝 ====
});


