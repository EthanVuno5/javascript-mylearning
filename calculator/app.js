const inputBox = document.querySelector(".inputBox");
const keys = document.querySelector(".keys");

document.addEventListener("click", function (event) {
    let result = 0;
    if (event.target.tagName === "BUTTON") {
        let x = event.target.value;
        if (x === "del") {
            let y = inputBox.value.toString();
            inputBox.value = y.slice(0, -1);
        }
        else if (x === "") {
            inputBox.value = x;
        }
        else if (x === "=") {
            inputBox.value = eval(inputBox.value);
        }
        else {
            inputBox.value += x;
        }
    }
}
)
