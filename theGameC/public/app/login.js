$(document).ready(function () {
  $(".btnsign").click(function () {
    $("#loginpage").fadeOut(0);
    $("#signbox").fadeIn(800);
    $(".btnbg").css("top", "95px");
    $(".btnsign").css("color", "#1C3D5C");
    $(".btnlogin").css("color", "white");
  });
  $(".btnlogin").click(function () {
    $("#loginpage").fadeIn(800);
    $("#signbox").fadeOut(0);
    $(".btnbg").css("top", "3px");
    $(".btnlogin").css("color", "#1C3D5C");
    $(".btnsign").css("color", "white");
  });

  $("#eyeclose").click(function () {
    $("#eyeopen").css("display", "block");
    $("#eyeclose").css("display", "none");
    $("#password1").attr("type", "text");
  });
  $("#eyeopen").click(function () {
    $("#eyeopen").css("display", "none");
    $("#eyeclose").css("display", "block");
    $("#password1").attr("type", "password");
  });
  $("#eyeclose2").click(function () {
    $("#eyeopen2").css("display", "block");
    $("#eyeclose2").css("display", "none");
    $("#password2").attr("type", "text");
  });
  $("#eyeopen2").click(function () {
    $("#eyeopen2").css("display", "none");
    $("#eyeclose2").css("display", "block");
    $("#password2").attr("type", "password");
  });
  $("#eyeclose3").click(function () {
    $("#eyeopen3").css("display", "block");
    $("#eyeclose3").css("display", "none");
    $("#password3").attr("type", "text");
  });
  $("#eyeopen3").click(function () {
    $("#eyeopen3").css("display", "none");
    $("#eyeclose3").css("display", "block");
    $("#password3").attr("type", "password");
  });


   // 忘記密碼
   $(".popup-btn").click(function () {
    var href = $(this).attr("href")
    $(href).fadeIn(250);
    $(href).children$("popup-box").removeClass("transform-out").addClass("transform-in");
    e.preventDefault();
  });

  $(".popup-close").click(function () {
    closeWindow();
  });
  // $(".popup-wrap").click(function(){
  //   closeWindow();
  // })
  function closeWindow() {
    $(".popup-wrap").fadeOut(200);
    $(".popup-box").removeClass("transform-in").addClass("transform-out");
    event.preventDefault();
  }
});