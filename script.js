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
var usernames = ["janne", "anwar", "fest"]
var passwords = ["test", "fest", "fest"]

var i = window.localStorage.getItem("logged in")

function submitfunction() {
    var pos = (usernames.indexOf(username.value))
    if (usernames.includes(username.value) && password.value == passwords.at(pos)) {
        localStorage.setItem("logged in", "true")
        formspan.style.display = "none"
        logout.style.display = "inline"
        logintext.innerHTML = username.value
    } else {
        logintext.innerHTML = "incorrect login"

    }
    localStorage.setItem("username", username.value)
    localStorage.setItem("usernames", usernames)
    localStorage.setItem("passwords", passwords)
}


if (i === "true") {
    formspan.style.display = "none"
    logout.style.display = "inline"
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
    passwords.push(Newpassword.value)
    usernames.push(Newname.value)
    var storpasswords = [localStorage.getItem("usernames")]
    var storusernames = [localStorage.getItem("passwords")]
    storpasswords.push(Newpassword.value)
    storusernames.push(Newpassword.value)
    logintext.innerHTML = "You have registered, " + Newname.value
    registerPage.style.transform = "translateY(1000%)"
    openreg = true;
}

function logoutfunction() {
    submit.style.display = "inline"
    logout.style.display = "none"
    localStorage.setItem("logged in", "false")
    logintext.innerHTML = "logged out"
    formspan.style.display = "inline"

}

logout.addEventListener('click', logoutfunction)
Newregister.addEventListener('click', newregisterfunction)
submit.addEventListener('click', submitfunction)
register.addEventListener('click', registerfunction)
