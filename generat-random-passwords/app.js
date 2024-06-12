const allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[]{}|;:',<.> /?"
const length = 20;
const inputBox = document.getElementById("password");
const listContainer = document.getElementById("listContainer");
function genenrate() {
    let passWord = "";
    while (passWord.length < length) {
        passWord += allChar[Math.floor(Math.random() * (allChar.length - 1))];
    }
    document.getElementById("password").value = passWord;
}

function save() {
    if (inputBox.value === "") {
        document.getElementById("alert").style.display = "block";
        return false;
    }
    else {
        document.getElementById("alert").style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        let button = document.createElement("button");
    }
    inputBox.value = "";
    dataSave();
}

document.addEventListener("click", function (x) {
    if (x.target.tagName === "SPAN") {
        x.target.parentElement.remove();
        dataSave()
    }
}, false);

function dataSave() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function dataShow() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function copyPass() {
    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}


dataShow()