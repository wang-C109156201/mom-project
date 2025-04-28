var username = document.getElementById("username");
var password = document.getElementById("psw");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var length = document.getElementById("length");
var number = document.getElementById("number");
var loginButton = document.getElementById("submit");

// onfocus and onblur

// password.onfocus = function() {
//     document.getElementById("rule").style.display = "block";
// }
// password.onblur = function() {
//     document.getElementById("rule").style.display = "none";
// }

// 确保登录按钮最初为禁用状态
loginButton.disabled = true;
// 當使用者輸入時(onkeyup)，透過if else 來確認是否 match

password.onkeyup = function () {
    // 如果密码为 "class1024"，且其他验证条件也通过
    if (password.value === "2025042801" && username.value === "2025042801") {
        // console.log("pass1206");
        // 启用登录按钮
        loginButton.disabled = false;
    } else {
        // 如果密码不匹配或其他验证条件失败，禁用登录按钮
        loginButton.disabled = true;
        //return false;
    }
    // 確認是否小寫
    // var lowerLetter = /[a-z]/g;
    // if (password.value.match(lowerLetter)) {
    //     lowercase.classList.remove("invalid");
    //     lowercase.classList.add("valid");
    // } else {
    //     lowercase.classList.add("invalid");
    //     lowercase.classList.remove("valid");
    // }
    // // 確認是否大寫
    // var upperLetter = /[A-Z]/g;
    // if (password.value.match(upperLetter)) {
    //     uppercase.classList.remove("invalid");
    //     uppercase.classList.add("valid");
    // } else {
    //     uppercase.classList.add("invalid");
    //     uppercase.classList.remove("valid");
    // }
    // // 確認是否有數字
    // var num = /[0-9]/g;
    // if (password.value.match(num)) {
    //     number.classList.remove("invalid");
    //     number.classList.add("valid");
    // } else {
    //     number.classList.add("invalid");
    //     number.classList.remove("valid");
    // }
    // // 確認是否有大於8字母/數字

    // if (password.value.length >= 8) {
    //     length.classList.remove("invalid");
    //     length.classList.add("valid");
    // } else {
    //     length.classList.add("invalid");
    //     length.classList.remove("valid");
    // }




}
loginButton.onclick = function () {
    // 在此处执行页面跳转，例如：
    window.location.href = "./html/momhealth.html";
    alert("成功登入!")
}
