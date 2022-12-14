$(function() {
    let videoSrc = '<source src="./video/MoulinRouge.mp4" type="video/mp4" id="player">';
    let videoTxt = '<p>이 브라우저는 HTML5 비디오를 지원하지 않습니다.</p>';
    
    // modal
    $(document).ready(function() {
        $('#modal').hide();
        $('#price_modal').hide();
        $('.price-wrap').hide();
        var width_size = window.outerWidth;

        // price modal
        if(width_size >= 600){
            $('.price').click(function() {
                $(".all-price a").removeAttr("href");
                $(".titleWrap").hide();
                $('#price_modal').show();
                $('.price-wrap').show();
            });

            $('.price-del-btn').click(function() {
                $('#price_modal').hide();
            });
        } else {

            $('.price').click(function() {
                $('.all-price a').removeAttr("href");
                $('.price_modal_header').hide();
                $(".titleWrap").show();
                $('.detail-wrap').hide();
                $('header').hide();
                $('footer').hide();
                $('.price-wrap').show();
                $('#price_modal').show();
            });

            $('.closeButton').click(function() {
                $('#price_modal').hide();
                $('.detail-wrap').show();
                $('footer').show();
            });
        }

        // video modal
        if(width_size >= 600) {
            $('.posterBoxPlayBtn').click(function(e) {
                e.preventDefault();
                $('#modal').show();
                $('.video-wrap').append('<video autoplay loop muted id="video"></video>');
                $('.video-wrap').children().append(videoSrc, videoTxt);

            });

            $('.del-btn').click(function() {
                $('#modal').hide();
                $('.video-wrap').empty();
                
            });

        } else {
            $('.posterBoxPlayBtn').click(function() {
                $('#modal').css("display","none");
            });

            
        }

        // resize (보기용)
        $(window).on('resize', function() {
            $('#modal').hide();
            $('#price_modal').hide();
            $('.price-wrap').hide();
            var width_size = window.outerWidth;

            if(width_size >= 600){
                $('.price').click(function() {
                    $(".all-price a").removeAttr("href");
                    $(".titleWrap").hide();
                    $('#price_modal').show();
                    $('.price-wrap').show();
                });

                $('.price-del-btn').click(function() {
                    $('#price_modal').hide();
                });
            } else {
                $('.price').click(function() {
                    $('.all-price a').removeAttr("href");
                    $('.price_modal_header').hide();
                    $('.titleWrap').show();
                    $('.detail-wrap').hide();
                    $('footer').hide();
                    $('.price-wrap').show();
                    $('#price_modal').show();
                });

                $('.closeButton').click(function() {
                    $('#price_modal').hide();
                    $('.detail-wrap').show();
                    $('footer').show();
                });
            }

            if(width_size >= 600) {
                $('.posterBoxPlayBtn').click(function(e) {
                    e.preventDefault();
                    $('#modal').show();
                    $('.video-wrap').append('<video autoplay loop muted id="video"></video>');
                    $('.video-wrap').children().append(videoSrc, videoTxt);
                });

                $('.del-btn').click(function() {

                    $('#modal').hide();
                    $('.video-wrap').empty();
                    
                });

            } else {
                $('.posterBoxPlayBtn').click(function() {
                    $('#modal').css("display","none");
                });
            }
        });
    });

});


// hide-show
$(function() {
    $(".cast-hidden").hide();
    $("#toggled-btn").on("click", function() {
        $(".cast-hidden").slideToggle(300, "linear");
        $(".toggled-btn div span").toggleClass("off");
        $(".toggled-btn div img").toggleClass("rotate");
    });


    var num = [01, 02, 03, 04];
    $(".last-img").hide();
    $.each(num, function(i,o) {
        console.log(num[i]);
        $(`#click-btn0${num[i]}`).on("click", function() {
            $(this).siblings(".img-contents").children(Image).toggle();
            $(this).children("div").children("span").toggleClass("off");
            $(this).children("div").children(Image).toggleClass("rotate");

            var offset = $(this).siblings(".img-contents").offset();  
            $('html').animate({scrollTop : offset.top}, 400);
        }); 
    });
    
});

// scroll
$(function() {
    var isVisible = false;
    var con = [".notice", ".sale", ".schedule", ".introduce", ".event"];
    

    $(window).on('scroll',function() {
        if (checkVisible($('.cast-img'))&&!isVisible) {
            $(".casting").css("animation" , "fadeInTop 1s");
        }
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


