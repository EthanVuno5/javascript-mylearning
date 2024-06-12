const paragraph = document.querySelector(".content");
const hiddenContent = paragraph.textContent.slice(0, 100) + "(more...)";
const showContent = paragraph.textContent;

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("hide")) {
        paragraph.innerHTML = hiddenContent;
    }
    else if (event.target.classList.contains("show")) {
        paragraph.innerHTML = showContent;
    }
})