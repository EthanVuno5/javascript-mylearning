const list = document.getElementById("list");
const inputBox = document.getElementById("addItems")

function ClickToSubmit() {
    if (inputBox.value === '') {
        alert("Filling the box, please !");
        return false;
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
        span.setAttribute("id", "remove");
    }
    inputBox.value = '';
    saveData();
}

list.addEventListener("click", function (x) {
    if (x.target.tagName === "LI") {
        x.target.classList.toggle("item");
        saveData();
    }
    else if (x.target.tagName === "SPAN") {
        x.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();



