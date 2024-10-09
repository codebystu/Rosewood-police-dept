var validlog = "Art2822"

function checkPassword() {
    let logattempt = document.getElementById("login-box").value;
        console.log(logattempt)
        console.log(validlog) 
        if (logattempt === validlog) {
            document.getElementById("login-screen");
        closeLogin()
    } else {
        document.getElementById("login-box").value ="";
        document.getElementById("login-box").focus();
    }
}

let logbut = document.getElementById("pass-sub");
    logbut.addEventListener('click', checkPassword);

function closeLogin() {
    document.getElementById("login-screen").style.display ="none";
}

// function whiteScreen() {
//     document.getElementById("login-screen").style.backgroundColor = "white";
// }

// whiteScreen()
