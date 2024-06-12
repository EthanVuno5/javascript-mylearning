const nameIn = document.querySelector(".name");
const dateIn = document.querySelector(".date");
const amountIn = document.querySelector(".amount");

const dataContainer = document.querySelector(".dataContainer");


document.querySelector(".add").addEventListener("click", function () {
    const expense = {
        name: nameIn.value,
        date: dateIn.value,
        amount: amountIn.value,
    }

    if (isNaN(expense.amount)) {
        alert("Please the amount must be a number");
        amountIn.value = "";
        return false;
    }

    if (nameIn.value === "" || dateIn.value === "" || amountIn.value === "") {
        alert("please full fill the blank");
        return false;
    }

    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdDate = document.createElement("td");
    let tdAmount = document.createElement("td");
    let btnCont = document.createElement("td");
    let deleteBtn = document.createElement("button")

    btnCont.appendChild(deleteBtn);

    deleteBtn.innerHTML = "delete";
    deleteBtn.setAttribute("class", "delete")

    tdName.innerHTML = expense.name;
    tdDate.innerHTML = expense.date;
    tdAmount.innerHTML = expense.amount + " $";

    tr.appendChild(tdName);
    tr.appendChild(tdDate);
    tr.appendChild(tdAmount);
    tr.appendChild(btnCont);
    dataContainer.appendChild(tr);

    saveData()
})


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        const row = event.target.closest("tr");
        if (row) {
            row.remove();
            saveData();
        }
    }
});

function saveData() {
    localStorage.setItem("data", dataContainer.innerHTML);
}

function showData() {
    dataContainer.innerHTML = localStorage.getItem("data");
}


showData();