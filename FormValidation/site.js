const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");




function showError(input, errorMessage) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";

    const small = formControl.querySelector("small");
    small.innerText = input.id + " " + errorMessage;
}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, "is required");
        }

        else {
            showSuccess(input);
        }
    });
}



function checkLength(input, minLength, maxLength) {
    if (input.value.length < minLength || input.value.length > maxLength) {
        showError(input, `must between [${minLength},${maxLength}]`);
    }
}


function isEmail(input) {
    const isEmail = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(input);
    return isEmail;
}


function validatePasswords(pass, confirmPass) {




    if (!pass.value === confirmPass.value) {
        showError(confirmPass, "Passwords do not match!");
    }
    else {
        showSuccess(pass);
        showSuccess(confirmPass);
    }
}





form.addEventListener("input", function (event) {
    event.preventDefault();
    console.log(password.value);
    checkRequired([username, email, password, confirmPassword]);
    isEmail(email);
    checkLength(username, 8, 16);
    checkLength(password, 8, 16);
    validatePasswords(password, confirmPassword);

});