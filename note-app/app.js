
const listContainer = document.querySelector(".inputField");
const inputBox = document.querySelector(".inputBox");
const container = document.querySelector(".container");
var x = 1;



function addItem() {
    // inputBox.setAttribute("contenteditable", "false");
    let p = document.createElement("p");
    p.setAttribute("class", "inputBox");
    p.contentEditable = "true";
    p.innerHTML = "Note " + x;
    let div = document.createElement("div");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    div.setAttribute("class", "inputField");
    div.appendChild(p);
    deleteBtn.innerHTML = "Delete";
    div.appendChild(deleteBtn);
    container.appendChild(div);
    x += 1;
    saveData()
}




document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

document.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", container.innerHTML);
}

function showData() {
    container.innerHTML = localStorage.getItem("data");
}

showData() 