const content = document.querySelector(".content");
const extend = document.querySelector(".hidden");

document.querySelector(".more").addEventListener("click", function () {
    extend.classList.toggle("active");
    document.querySelector(".close").style.display = "block";
    document.querySelector(".more").style.display = "none";
})

document.querySelector(".close").addEventListener("click", function () {
    extend.classList.remove("active");
    document.querySelector(".more").style.display = "block";
    document.querySelector(".close").style.display = "none";


})