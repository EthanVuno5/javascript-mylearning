
let x;
let y;
let i = 0;
let score = 0;
let item = 9;
let level;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("click", async function (event) {

    if (event.target.classList.contains("hide")) {
        y = event.target.getAttribute("data-value");
        event.target.classList.add("active");
        i++;
        console.log(i);
        score++;
        console.log(score);
        if (x == y) {
            console.log("yes");
            i = 0;
            console.log(score);
        }
        else if (i == 2 && x != y) {
            console.log("no");
            setTimeout(function () {
                document.querySelectorAll(".active").forEach(function (element) {
                    element.classList.remove("active");
                });
            }, 150);
            i = 0;
            score = 0
            console.log(score);
        }
        x = event.target.getAttribute("data-value");
        let highestPoint = document.getElementById("score").getAttribute("data-value");
        if (score == item) {
            // let z = document.getElementById("score") Number(z.getAttribute("data-value")) ;
            highestPoint = level + 1;
            document.getElementById("score").innerHTML = highestPoint;
            await delay(300);
            alert("YOU WON !")
            saveData()

        }
        saveData()

    }

})

level = 0;

const bodyContainer = document.querySelector(".bodyContainer");

const greeting = ["image-source/428-4283887_clip-art-cats-and-dogs-animated-cat-and.png", "image-source/lion-7744604_1280.webp", "image-source/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yODAteC5qcGc.webp", "image-source/pngtree-monkey-cartoon-animal-png-image_13520013.png", "image-source/fox.webp", "image-source/bear.jpeg", "image-source/Sheldon-the-squirrel.jpg", "image-source/6.png"];

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("next")) {
        level += 1;
        if (level == 6) {
            level -= 1;
            alert("thats all");
            return false;
        }
        item += 3;
        document.querySelector(".container").remove();
        document.getElementById("level").innerHTML = level + 1;
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        bodyContainer.appendChild(container);
        for (let t = 0; t < item; t++) {


            let randomNum = Math.floor((Math.random() * (3 + level)))

            let card = document.createElement("div");
            container.appendChild(card);

            card.setAttribute("class", "card");

            let image = document.createElement("img");
            image.setAttribute("class", "image");
            image.setAttribute("src", greeting[randomNum]);
            card.appendChild(image);

            let hidding = document.createElement("div");
            hidding.setAttribute("class", "hide");
            hidding.setAttribute("data-value", randomNum);
            card.appendChild(hidding);


        }
    }
    else if (event.target.classList.contains("shuffle")) {
        document.querySelectorAll(".hide").forEach(function (element) {
            element.classList.toggle("active", false);
        })

        document.querySelector(".container").remove();
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        bodyContainer.appendChild(container);
        for (let t = 0; t < item; t++) {


            let randomNum = Math.floor((Math.random() * (3 + level)))

            let card = document.createElement("div");
            container.appendChild(card);

            card.setAttribute("class", "card");

            let image = document.createElement("img");
            image.setAttribute("class", "image");
            image.setAttribute("src", greeting[randomNum]);
            card.appendChild(image);

            let hidding = document.createElement("div");
            hidding.setAttribute("class", "hide");
            hidding.setAttribute("data-value", randomNum);
            card.appendChild(hidding);


        }
    }

})
const scoreBox = document.querySelector(".score");

function saveData() {
    localStorage.setItem("data", scoreBox.innerHTML);
}

function showData() {
    scoreBox.innerHTML = localStorage.getItem("data");
}

showData();