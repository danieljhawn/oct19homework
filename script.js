var char = "abcdefghijklmnopqrstuvxwyz".split("")
var num = "0123456789".split("")
var sym = "!@#$%^&*-_".split("")

var passwordLength = 0;
var numAdd = true;
var charAdd = true;
var symAdd = true;
var password = [];
var userChoices = [];


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
        password.push(sym[Math.floor(Math.random() * char.length)])
        userChoices = userChoices.concat(char)
    }

    while (password.length < passwordLength) {
        password.push(userChoices[Math.floor(Math.random() * userChoices.length)])
    }

    document.querySelector("#textArea").innerHTML = password.join("")
}

function promptUser() {
    passwordLength = prompt("Enter Password Lenth");

    if ((passwordLength >= 8) && (passwordLength <= 128)) { }
    else {
        alert("Your password needs to be between 8 and 128 characters")
        return
    }
    charAdd = confirm("Add Letters?");
    numAdd = confirm("Add Numbers?");
    symAdd = confirm("Add a special character?");
    if (numAdd || symAdd || charAdd) { generate() }
    else { alert("Your password must contain a letter special character or number") }
}


