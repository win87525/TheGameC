function toggleSignin() {
    // 取得Loginpage和Signinpage的元素
    var loginPage = document.querySelector(".loginpage");
    var signinPage = document.querySelector(".signinpage");
  
    // 切換它們的顯示與隱藏
    if (loginPage.style.display === "none") {
      loginPage.style.display = "block";
      signinPage.style.display = "none";
      // 更改btnt和btnd的背景色
      document.querySelector(".btnt").style.backgroundColor = "#fff";
      document.querySelector(".btnd").style.backgroundColor = "transparent";
  
      // 添加CSS動畫
      loginPage.style.animation = "slideInLeft 0.5s ease-in-out forwards";
      signinPage.style.animation = "slideOutLeft 0.5s ease-in-out forwards";
    } else {
      loginPage.style.display = "none";
      signinPage.style.display = "block";
      // 更改btnt和btnd的背景色
      document.querySelector(".btnt").style.backgroundColor = "transparent";
      document.querySelector(".btnd").style.backgroundColor = "#fff";
  
      // 添加CSS動畫
      signinPage.style.animation = "slideInLeft 0.5s ease-in-out forwards";
      loginPage.style.animation = "slideOutLeft 0.5s ease-in-out forwards";
    }
  }
  
  // 監聽btnt和btnd的click事件
  document.querySelector(".btnt").addEventListener("click", toggleSignin);
  document.querySelector(".btnd").addEventListener("click", toggleSignin);
  