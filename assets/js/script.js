var validlog = "Art2822"

function checkPassword() {
    let logattempt = document.getElementById("login-box").innerText;
        console.log(logattempt)
        console.log(validlog)  
    
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
