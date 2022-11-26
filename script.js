const username = document.querySelector('[type="Username"]')
const password = document.querySelector('[type="Password"]')
const submit = document.querySelector('[type="submit"]')
const clear = document.querySelector('[type="clear"]')
const logout = document.querySelector('[type="logout"]')
const logintext = document.querySelector('.info')
const formspan = document.querySelector('.loginform')

const register = document.querySelector('[type="register"]')
const registerPage = document.querySelector('.register');
const Newregister = document.querySelector('[type="Newregister"]')

const Newname = document.querySelector('[type="Newname"]');
const Newpassword = document.querySelector('#newpassword');
var users = ["Janne", "test", "anwar", "fest", "amanda", "fest"]

var i = window.localStorage.getItem("logged in")

function submitfunction() {
    if (users.includes(username.value && password.value)) {
        localStorage.setItem("logged in", "true")
        logintext.innerHTML = username.value
        logout.style.display = "inline"
        submit.style.display = "none"
    } else {
        logintext.innerHTML = "incorrect login"
    }
    localStorage.setItem("username", username.value)
    localStorage.setItem("users", users)
}
// function clearfunction() {
//     localStorage.clear()
// }
if (i === "true") {
    formspan.style.display = "none"
    logintext.innerHTML = localStorage.getItem("username")
}

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
    f.push(Newname.value, Newpassword.value)
    logintext.innerHTML = "You have registered, " + Newname.value
    registerPage.style.transform = "translateY(1000%)"
    openreg = true;
}

function logoutfunction() {
    submit.style.display = "inline"
    logout.style.display = "none"
    localStorage.setItem("logged in", "false")
    logintext.innerHTML = "logged out"
}

logout.addEventListener('click', logoutfunction)
Newregister.addEventListener('click', newregisterfunction)
submit.addEventListener('click', submitfunction)
register.addEventListener('click', registerfunction)
