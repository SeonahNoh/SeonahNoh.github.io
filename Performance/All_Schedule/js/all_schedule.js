// years
$(function() {
    $(".year a").removeAttr("href");
    $(".2021").hide();
    $(".2020").hide();
    $(".2021_title").hide();
    $(".2020_title").hide();

    // 2022
    $("#prev_arrow22").click(function() {
        $(".2021_title").show();
        $(".2022_title").hide();
        $(".2021").show();
        $(".2022").hide();
    });

    $("#next_arrow22").click(function() {
        $(".2020_title").show();
        $(".2022_title").hide();
        $(".2020").show();
        $(".2022").hide();
    });

    // 2021
    $("#prev_arrow21").click(function() {
        $(".2020_title").show();
        $(".2021_title").hide();
        $(".2020").show();
        $(".2021").hide();
    });

    $("#next_arrow21").click(function() {
        $(".2022_title").show();
        $(".2021_title").hide();
        $(".2022").show();
        $(".2021").hide();
    });

    // 2020
    $("#prev_arrow20").click(function() {
        $(".2022_title").show();
        $(".2020_title").hide();
        $(".2022").show();
        $(".2020").hide();
    });

    $("#next_arrow20").click(function() {
        $(".2021_title").show();
        $(".2020_title").hide();
        $(".2021").show();
        $(".2020").hide();
    });
});



$(function() {
    $(document).ready(function(){
        var width_size = window.outerWidth;
        $(".search_r").hide();

        // category
        $("input").click(function() {
            $("input[type=checkbox]:checked").each(function(){
                var category = $(this).val();

                if(category == "all") {
                    $("#all_list").find("li").fadeIn("fast");
                } else { 
                    $("#all_list div li").hide();
                    $("#all_list div li[class*="+category+"]").fadeIn("slow");   
                }
                var n = $('.box li:visible').length;
                $(".search_r strong").text(n);
                $(".search_r").show();

                //
                if(width_size >= 600) {
                    $(".box ul").css("justify-content","left");
                }

                if(width_size >= 1400) {
                    $(".box ul li").css("margin-right","14px");
                } else if(width_size >= 1024 && width_size < 1400) {
                    $(".box ul li").css("margin-right","9px");
                } else if(width_size >= 800) {
                    $(".box ul li").css("margin-right","10px");
                } else if(width_size >= 600 && width_size < 800){
                    $(".box ul li").css("margin-right","7px");
                }
            });
        });

        // search
        $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
    
            $("#all_list div li").filter(function() {
                $(this).toggle($(this).find("strong").text().toLowerCase().indexOf(value) > -1);
            });

            var n = $('.box li:visible').length;
            $(".search_r strong").text(n);
            $(".search_r").show();
        });
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