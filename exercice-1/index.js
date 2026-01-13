window.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        console.log(event.target.elements.text.value);
        console.log(event.target.elements.password.value);
    })
})