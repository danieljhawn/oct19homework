var char = "abcdefghijklmnopqrstuvxwyz".split("")
var num = "0123456789".split("")
var sym = "!@#$%^&*-_".split("")
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

var passwordLength = 0;
var numAdd = false;
var charAdd = false;
var symAdd = false;
var addCap = false;
var password = [];
var userChoices = [];

function clearPass() {
    password.length = 0;
}

function promptUser() {
    passwordLength = prompt("Enter Password Lenth");

    if ((passwordLength >= 8) && (passwordLength <= 128)) {} else {
        alert("Your password needs to be between 8 and 128 characters")
        return
    }
    addCap = confirm("Add Capital Letters?")
    charAdd = confirm("Add Lower Case Letters?");
    numAdd = confirm("Add Numbers?");
    symAdd = confirm("Add Special Characters?");
    if (numAdd || symAdd || charAdd || addCap) { generate() } else { alert("Your password must contain at least one type of character") }
}

function generate() {
    // char [Math.floor(Math.random() *char.length)]
    // num [Math.floor(Math.random() *num.length)]
    password = []
    if (numAdd) {
        password.push(num[Math.floor(Math.random() * num.length)])
        userChoices = userChoices.concat(num)
    }
    if (symAdd) {
        password.push(sym[Math.floor(Math.random() * sym.length)])
        userChoices = userChoices.concat(sym)
    }
    if (charAdd) {
        password.push(char[Math.floor(Math.random() * char.length)])
        userChoices = userChoices.concat(char)
    }
    if (addCap) {
        password.push(upper[Math.floor(Math.random() * upper.length)])
        userChoices = userChoices.concat(upper)
    }
    while (password.length < passwordLength) {
        password.push(userChoices[Math.floor(Math.random() * userChoices.length)])
    }

    document.querySelector("textArea").innerHTML = password.join("")
}

function copyTxt() {
    var copyText = document.getElementById("textArea");
    copyText.select("textArea");
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Password copied to clipboard.")
}