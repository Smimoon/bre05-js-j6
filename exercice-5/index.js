window.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let text = document.getElementById("text");
    let color = document.getElementById("color");
    let div = document.querySelector("div");

    text.addEventListener("change", (event) => {
        div.textContent = text.value;
    });

    color.addEventListener("change", (event) => {
        div.style.backgroundColor = color.value;
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
});
