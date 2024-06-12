const inputBox = document.querySelector(".inputBox");

document.addEventListener("click", function (event) {
    let strInput = inputBox.value;
    let u = 0, e = 0, o = 0, a = 0, i = 0;
    u = strInput.match(/u/gi) || [];
    e = strInput.match(/e/gi) || [];
    o = strInput.match(/o/gi) || [];
    a = strInput.match(/a/gi) || [];
    i = strInput.match(/i/gi) || [];

    let result = u.length + e.length + o.length + a.length + i.length;
    if (event.target.classList.contains("count")) {
        // let length = Object.entries(u).length;
        document.getElementById("result").innerHTML = result;
    }
})