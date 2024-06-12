const popUp = document.querySelector(".popUp");
const noteContainer = document.querySelector(".noteContainer");
const fullContent = document.querySelector(".fullContent");

// document.querySelector(".view").addEventListener("click", function () {
//     popUp.classList.toggle("active");
// })
// document.querySelector(".close").addEventListener("click", function () {
//     popUp.classList.toggle("active");
// })

let count = 1;

document.querySelector(".add").addEventListener("click", function () {
    const inputBox = document.querySelector(".inputBox");

    let note = document.createElement("div");
    note.setAttribute("class", "note");
    noteContainer.appendChild(note);

    let header = document.createElement("h2");
    header.innerHTML = "Note " + count;
    count++;
    note.appendChild(header);


    let paragraph = document.createElement("p");
    paragraph.innerHTML = inputBox.textContent;
    paragraph.setAttribute("class", "content");
    note.appendChild(paragraph);


    let viewBtn = document.createElement("button");
    viewBtn.setAttribute("class", "edit");
    viewBtn.innerHTML = "Edit";
    note.appendChild(viewBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "deleteBtn");
    note.appendChild(deleteBtn);
    inputBox.textContent = "";

    saveData()

})




let paragraph;
//declare 'paragraph' first;

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit")) {
        paragraph = event.target.previousElementSibling;
        // here paragraph will equal to event.target.previousSibling or means that equal to element with 'p' tag name and  class content  

        if (paragraph && paragraph.classList.contains("content")) {
            // the condition is to check if it is undefined or null or not

            fullContent.textContent = paragraph.textContent;
            fullContent.contentEditable = "true";
            currentParagraph = fullContent.textContent
            popUp.classList.add("active");
        }
        saveData()
    }
    else if (event.target.classList.contains("save")) {
        paragraph.textContent = fullContent.textContent;
        // here as the result of declaring the paragraph as the current paragraph with class content so it will be assigned the new property as being edited;
        popUp.classList.remove("active");
        saveData()
    }

    else if (event.target.classList.contains("deleteBtn")) {
        event.target.closest("div").remove();
        count--;
        saveData()
    }

})

function saveData() {
    localStorage.setItem("data", noteContainer.innerHTML);
}

function showData() {
    noteContainer.innerHTML = localStorage.getItem("data");
}

showData()