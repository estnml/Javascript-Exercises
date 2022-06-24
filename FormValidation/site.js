let inputField1 = document.querySelector("#input1");
let inputField2 = document.querySelector("#input2");


function check() {
    if (inputField1.value.length === 8) {
        inputField2.focus();
    }

}