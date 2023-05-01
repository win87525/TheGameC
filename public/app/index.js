$(document).ready(function () {
    // 啟動aos的
    AOS.init();
    //新聞列的bar按鈕
    $(document).ready(function () {
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
    });
    $(document).ready(function () {
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
    });
    $(document).ready(function () {
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
    });
    $(document).ready(function () {
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
    

});

