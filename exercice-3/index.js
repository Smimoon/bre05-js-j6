window.addEventListener("DOMContentLoaded", () =>  {
    let text = document.querySelector("input");
    let message = document.querySelector("textarea");
    let select = document.querySelector("select");
    
    text.addEventListener("change", (event) => {
        console.log(event.target.value);
    })
    message.addEventListener("change", (event) => {
        console.log(event.target.value);
    })
    select.addEventListener("change", (event) => {
        console.log(event.target.value);
    })
    
})