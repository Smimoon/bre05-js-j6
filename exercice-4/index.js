window.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let input = document.querySelectorAll("input");
        
        if(event.target.elements.password.value === event.target.elements.confirm_password.value) {
            for(let text of input) {
                text.classList = "valid";
            }
        }
        else {
            for (let text of input) {
                text.classList = "invalid";
            }
        }
    });

})
