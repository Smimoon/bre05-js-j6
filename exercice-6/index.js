window.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let button = document.querySelector("button");
    let checkbox = document.getElementById("conditions");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    username.addEventListener("change", (event) => {
        if (username.value !== "" && email.value !== "" && password.value !== "" && checkbox.value === "on") {
            button.disabled = !checkbox.checked;
        }
        else if (username.value.trim === "" || email.value.trim === "" || password.value.trim === "" || checkbox.value === "off") {
            button.disabled = true;    
        }
    });
    email.addEventListener("change", (event) => {
        if (username.value !== "" && email.value !== "" && password.value !== "" && checkbox.value === "on") {
            button.disabled = !checkbox.checked;
        }
        else if (username.value.trim === "" || email.value.trim === "" || password.value.trim === "" || checkbox.value === "off") {
            button.disabled = true;    
        }
    });
    password.addEventListener("change", (event) => {
        if (username.value !== "" && email.value !== "" && password.value !== "" && checkbox.value === "on") {
            button.disabled = !checkbox.checked;
        }
        else if (username.value.trim === "" || email.value.trim === "" || password.value.trim === "" || checkbox.value === "off") {
            button.disabled = true;    
        }
    });
    checkbox.addEventListener("change", (event) => {
        if (username.value !== "" && email.value !== "" && password.value !== "" && checkbox.value === "on") {
            button.disabled = !checkbox.checked;
        }
        else if (username.value.trim === "" || email.value.trim === "" || password.value.trim === "" || checkbox.value === "off") {
            button.disabled = true;    
        }
    });
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        console.log(event.target.elements.username.value);
        console.log(event.target.elements.email.value);
        console.log(event.target.elements.password.value);
    })


})
