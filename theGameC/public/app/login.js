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


// 在 AJAX 請求成功後處理返回的數據
xhr.onload = function() {
  if (xhr.status === 200) {
      // 處理正常返回的數據
  } else {
      // 如果返回的數據狀態不是 200 OK，則顯示錯誤訊息
      const error = JSON.parse(xhr.responseText).error;
      const alertContainer = document.querySelector('#alertContainer');
      alertContainer.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
              ${error}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      `;
  }
};


});