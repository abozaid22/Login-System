
let signName = document.getElementById("signName")
let signEmail = document.getElementById("signEmail")
let signPassword = document.getElementById("signPassword")
let btnSignUp = document.getElementById("btnSignUp")
let Signin_SignUp = document.getElementById("Signin_SignUp")

let motakrr = document.getElementById("motakrr")
let signUpTextNo = document.getElementById("signUpTextNo")
let signUpTextYas = document.getElementById("signUpTextYas")

let LoginEmail = document.getElementById("LoginEmail")
let LoginPassword = document.getElementById("LoginPassword")
let btnLogin = document.getElementById("btnLogin")
let SignUp_Signin = document.getElementById("SignUp_Signin")

let loginMotakrrIn = document.getElementById("loginMotakrrIn")
let loginTextNo = document.getElementById("loginTextNo")

let nav = document.getElementById("nav")
let btnLogout = document.getElementById("btnLogout")
let welcome = document.getElementById("welcome")
let divSign = document.getElementById("divSign")
let divLog = document.getElementById("divLog")
let welcomeName = document.getElementById("welcomeName")

let users;
if (JSON.parse(localStorage.getItem("lest")) != null) {
    users=JSON.parse(localStorage.getItem("lest"))
}else{
    users= []
}

function testValue() {
    if ((signName.value!="" && signEmail.value!="" 
        && signPassword.value!="" )) {
        return true
    }
}

function addUsers() {
    takedSignIn()
    if (takedSignIn() == false && testValue()==true && signNameReg() && signEmailReg() && signPasswordReg()) {
        let user = {
            signName:signName.value,
            signEmail:signEmail.value,
            signPassword:signPassword.value
        }
        users.push(user)
        localStorage.setItem("lest",JSON.stringify(users))
        signUpTextYas.classList.remove("d-none")
        signUpTextNo.classList.add("d-none")
        motakrr.classList.add("d-none")
        
    }else{
        signUpTextNo.classList.add("d-none")
    }
    if (signName.value=="" || signEmail.value=="" || signPassword.value=="") {
        signUpTextNo.classList.remove("d-none")
        signUpTextYas.classList.add("d-none")
        motakrr.classList.add("d-none")
    }
    // clear()
}

function takedSignIn() {
    for (let i = 0 ; i < users.length ; i++) {
        if ( signEmail.value == users[i].signEmail ) {
            motakrr.classList.remove("d-none")
            signUpTextYas.classList.add("d-none")
            return true
        }
    }
    return false 
}

function btnLog() {
    for (let i = 0 ; i < users.length ; i++) {
        if ( LoginEmail.value == users[i].signEmail &&
           LoginPassword.value == users[i].signPassword ) {
            welcomeName.innerHTML = "welcome"+" "+ users[i].signName
            home()
        }
        else{
            if (LoginEmail.value=="" && LoginPassword.value=="" ) {
                loginTextNo.classList.remove("d-none")
                loginMotakrrIn.classList.add("d-none")
            } else {
                for (let i = 0 ; i < users.length ; i++) {
                    if ( LoginEmail.value != users[i].signEmail ) {
                        loginMotakrrIn.classList.remove("d-none")
                        loginTextNo.classList.add("d-none")
                    }
                }
            }
        }
    }
}

function signNameReg() {
    let regexName = /^[A-z]{3,}[0-9]{0,}?[A-z]{0,}?\s?[A-z]{0,}?[0-9]{0,}?[A-z]{0,}?$/;
    if (regexName.test(signName.value)==true) {
        signName.classList.add("is-valid")
        signName.classList.remove("is-invalid")
        return true
    }
    if (regexName.test(signName.value)!=true) {
        signName.classList.remove("is-valid")
        signName.classList.add("is-invalid")
        return false
    }
}
function signEmailReg() {
    let regexEmail = /^[A-z]{3,}[0-9]{0,}?[A-z]{0,}?@[A-z]{0,}\.[A-z]{0,}$/;
    if (regexEmail.test(signEmail.value)==true) {
        signEmail.classList.add("is-valid")
        signEmail.classList.remove("is-invalid")
        return true
    }
    if (regexEmail.test(signEmail.value)!=true) {
        signEmail.classList.remove("is-valid")
        signEmail.classList.add("is-invalid")
        return false
    }
}
function signPasswordReg() {
    let regexPassword = /^[A-z]{0,}?[0-9]{3,}$/;
    if (regexPassword.test(signPassword.value)==true) {
        signPassword.classList.add("is-valid")
        signPassword.classList.remove("is-invalid")
        return true
    }
    if (regexPassword.test(signPassword.value)!=true) {
        signPassword.classList.remove("is-valid")
        signPassword.classList.add("is-invalid")
        return false
    }
}

// function clear() {
//     signName.value="",
//     signEmail.value="",
//     signPassword.value=""
// }

function SigninToSignUp() {
    divSign.classList.add("d-none")
    divLog.classList.remove("d-none")
}
function SignUpToSignin() {
    divSign.classList.remove("d-none")
    divLog.classList.add("d-none")
}

function home() {
    divSign.classList.add("d-none")
    divLog.classList.add("d-none")
    welcome.classList.remove("d-none")
    nav.classList.remove("d-none")
}

function out() {
    nav.classList.add("d-none")
    divLog.classList.remove("d-none")
    welcome.classList.add("d-none")
}
