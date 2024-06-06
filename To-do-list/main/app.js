const listContainer = document.getElementById("listContainer");
const inputBox = document.getElementById("inputBox");

function addItem() {
    if (inputBox.value === '') {
        alert("Please, fill the box !");
        return false;
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = 'x';
        li.appendChild(span);
    }

    dataSave()
    inputBox.value = "";
}

document.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        dataSave()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        dataSave()
    }
}, false);

function dataSave() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function dataShow() {
    listContainer.innerHTML = localStorage.getItem("data");
}

dataShow();