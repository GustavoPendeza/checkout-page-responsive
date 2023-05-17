const form = document.getElementById("formAction");

function handleAlert(event) {
    const phone = document.getElementById("phone").value;
    const postal_code = document.getElementById("postal_code").value;

    if (phone.toString().length != 11) {
        alert(
            "Validation failed. \nYour phone number must have 11 numbers, please try again."
        );

        event.preventDefault();
    } else if(postal_code.toString().length != 8) {
        alert(
            "Validation failed. \nYour postal code must have 8 numbers, please try again."
        );

        event.preventDefault();
    } else {
        alert("Validation succeeded");
    }
}

form.addEventListener("submit", handleAlert);
