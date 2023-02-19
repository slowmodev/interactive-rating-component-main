let buttons = document.querySelectorAll(".numbers button");
let container2 = document.querySelector(".container-2");
let container = document.querySelector(".container");
let span = document.querySelector("span");
let submit = document.querySelector(".submit button");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", e => {
        const rating = e.target.textContent;
        span.textContent = rating;
    });
});
submit.addEventListener("click", () => {
    container2.classList.remove("hide");
    container.classList.add("hide");
});
