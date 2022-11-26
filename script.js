const username = document.querySelector('[type="Username"]')
const password = document.querySelector('[type="Password"]')
const submit = document.querySelector('[type="submit"]')
const clear = document.querySelector('[type="clear"]')
const logintext = document.querySelector('.loggedin')

const register = document.querySelector('[type="register"]')
const registerPage = document.querySelector('.register');
const Newregister = document.querySelector('[type="Newregister"]')

const Newname = document.querySelector('[type="Newname"]');
const Newpassword = document.querySelector('#newpassword');
var users = ["Janne ", "test"]

var i = window.localStorage.getItem("logged in")

function submitfunction() {
    if (i === "true") {
        logintext.innerHTML = "Welcome " + "" + username.value
        return;
    }
    if (users.includes(username.value && password.value)) {
        localStorage.setItem("logged in", "true")
        logintext.innerHTML = "Welcome " + " " + username.value
    } else {
        logintext.innerHTML = "incorrect login"
    }
    localStorage.setItem("users", users)
}
// function clearfunction() {
//     localStorage.clear()
// }
var openreg = false;

function registerfunction() {
    if (openreg) {
        registerPage.style.transform = "translateY(0)"
        openreg = false;
    } else {
        registerPage.style.transform = "translateY(1000%)"
        openreg = true;
    }
}

function newregisterfunction() {
    users.push(Newname.value, Newpassword.value)
    const f = [localStorage.getItem("users")]
    console.log(f)
    f.push(Newname.value, Newpassword.value)
    console.log(f)
}

Newregister.addEventListener('click', newregisterfunction)
submit.addEventListener('click', submitfunction)
register.addEventListener('click', registerfunction)