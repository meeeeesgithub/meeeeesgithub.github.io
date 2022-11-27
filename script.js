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
var usernames = ["janne", "anwar", "amanda"]
var passwords = ["test", "fest", "fest"]

if (localStorage.getItem("usernames") === null) {
    localStorage.setItem("usernames", usernames)
    localStorage.setItem("passwords", passwords)
}

var i = window.localStorage.getItem("logged in")

function submitfunction() {
    var localusers = localStorage.getItem("usernames")
    var localpasswords = localStorage.getItem("passwords")
    var localsplitusers = localusers.split(',')
    var localsplitpassword = localpasswords.split(',')
    var pos = (localsplitusers.indexOf(username.value))
    if (localsplitusers.includes(username.value) && password.value == localsplitpassword.at(pos)) {
        localStorage.setItem("logged in", "true")
        formspan.style.display = "none"
        logout.style.display = "inline"
        logintext.innerHTML = username.value
    } else {
        logintext.innerHTML = "incorrect login"

    }
    localStorage.setItem("username", username.value)
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
    var storpasswords = [localStorage.getItem("passwords")]
    var storusernames = [localStorage.getItem("usernames")]
    storpasswords.push(Newpassword.value)
    storusernames.push(Newname.value)
    localStorage.setItem("usernames", storusernames)
    localStorage.setItem("passwords", storpasswords)
    console.log(storpasswords, storusernames)
    console.log("hi")
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
