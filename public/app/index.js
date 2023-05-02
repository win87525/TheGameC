$(document).ready(function () {
    // 啟動aos的
    AOS.init();

    // 熱門商品抽頁效果
    $('#picimg1').click(function () {
        $('#text2').fadeOut(0);
        $('#text3').fadeOut(0);
        $('#text4').fadeOut(0);
        $('#text5').fadeOut(0);
        $('#text1').fadeIn(800);
        $(this).css("left", "60%");
        setTimeout(() => {
            $(this).css({
                "left": "0%",
                "zIndex": "12"
            }); 
            $("#picimg2").css({
                "left": "11%",
                "zIndex": "9"
            });
            $("#picimg3").css({
                "left": "22%",
                "zIndex": "8"
            });
            $("#picimg4").css({
                "left": "32%",
                "zIndex": "7"
            });
            $("#picimg5").css({
                "left": "42%",
                "zIndex": "6"
            });
            
        }, 400);
    });
    $('#picimg2').click(function () {
        $('#text1').fadeOut(0);
        $('#text3').fadeOut(0);
        $('#text4').fadeOut(0);
        $('#text5').fadeOut(0);
        $('#text2').fadeIn(1200);
        $(this).css("left", "60%");
        setTimeout(() => {
            $(this).css({
                "left": "11%",
                "zIndex": "12"
            }); 
            $("#picimg1").css({
                "left": "0%",
                "zIndex": "10"
            });
            $("#picimg3").css({
                "left": "22%",
                "zIndex": "8"
            });
            $("#picimg4").css({
                "left": "32%",
                "zIndex": "7"
            });
            $("#picimg5").css({
                "left": "42%",
                "zIndex": "6"
            });
            
        }, 400);
    });
    $('#picimg3').click(function () {
        $('#text1').fadeOut(0);
        $('#text2').fadeOut(0);
        $('#text4').fadeOut(0);
        $('#text5').fadeOut(0);
        $('#text3').fadeIn(1200);
        $(this).css("left", "60%");
        setTimeout(() => {
            $(this).css({
                "left": "22%",
                "zIndex": "12"
            }); 
            $("#picimg1").css({
                "left": "0%",
                "zIndex": "10"
            });
            $("#picimg2").css({
                "left": "11%",
                "zIndex": "9"
            });
            $("#picimg4").css({
                "left": "32%",
                "zIndex": "7"
            });
            $("#picimg5").css({
                "left": "42%",
                "zIndex": "6"
            });
            
        }, 400);
    });
    $('#picimg4').click(function () {
        $('#text1').fadeOut(0);
        $('#text2').fadeOut(0);
        $('#text3').fadeOut(0);
        $('#text5').fadeOut(0);
        $('#text4').fadeIn(800);
        $(this).css("left", "70%");
        setTimeout(() => {
            $(this).css({
                "left": "32%",
                "zIndex": "12"
            }); 
            $("#picimg1").css({
                "left": "0%",
                "zIndex": "10"
            });
            $("#picimg3").css({
                "left": "22%",
                "zIndex": "8"
            });
            $("#picimg2").css({
                "left": "11%",
                "zIndex": "9"
            });
            $("#picimg5").css({
                "left": "42%",
                "zIndex": "6"
            });
            
        }, 400);
    });
    $('#picimg5').click(function () {
        $('#text1').fadeOut(0);
        $('#text2').fadeOut(0);
        $('#text3').fadeOut(0);
        $('#text4').fadeOut(0);
        $('#text5').fadeIn(800);
        $(this).css("left", "70%");
        setTimeout(() => {
            $(this).css({
                "left": "42%",
                "zIndex": "12"
            }); 
            $("#picimg1").css({
                "left": "0%",
                "zIndex": "10"
            });
            $("#picimg3").css({
                "left": "22%",
                "zIndex": "8"
            });
            $("#picimg4").css({
                "left": "32%",
                "zIndex": "7"
            });
            $("#picimg2").css({
                "left": "11%",
                "zIndex": "9"
            });
            
        }, 400);
    });




    //新聞列的bar按鈕
    $('#newsbut').click(function () {
        $('#newsButs').addClass("butfocus");
        $('#renewButs').removeClass("butfocus");
        $('#discountButs').removeClass("butfocus");
        $('#productButs').removeClass("butfocus");

        $("#renewAll").fadeOut(300);
        $("#discountAll").fadeOut(300);
        $("#productAll").fadeOut(300);
        $('#newsAll').fadeIn(800);
    });
    $('#renewbut').click(function () {
        $("#newsAll").fadeOut(300);
        $("#productAll").fadeOut(300);
        $("#discountAll").fadeOut(300);
        $('#renewAll').fadeIn(800);

        $('#renewButs').addClass("butfocus");
        $('#newsButs').removeClass("butfocus");
        $('#discountButs').removeClass("butfocus");
        $('#productButs').removeClass("butfocus");
    });
    $('#discountbut').click(function () {
        $("#newsAll").fadeOut(300);
        $("#productAll").fadeOut(300);
        $("#renewAll").fadeOut(300);
        $('#discountAll').fadeIn(800);

        $('#discountButs').addClass("butfocus");
        $('#newsButs').removeClass("butfocus");
        $('#renewButs').removeClass("butfocus");
        $('#productButs').removeClass("butfocus");
    });

    $('#productbut').click(function () {
        $("#newsAll").fadeOut(300);
        $("#discountAll").fadeOut(300);
        $("#renewAll").fadeOut(300);
        $('#productAll').fadeIn(800);

        $('#productButs').addClass("butfocus");
        $('#newsButs').removeClass("butfocus");
        $('#renewButs').removeClass("butfocus");
        $('#discountButs').removeClass("butfocus");
    });

});

