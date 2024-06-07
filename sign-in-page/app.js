

function submit() {
    const input = document.querySelectorAll("input");
    if (input.value === "") {
        alert("Full fill the form !")
    };
    const client = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        userName: document.getElementById("user-name").value,
        passWord: document.getElementById("password").value,
        email: document.getElementById("email").value,
    }
    console.log(client)
}
