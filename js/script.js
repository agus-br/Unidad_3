document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    var btnSubmit = document.getElementById("btnAcept");
    var btnReset = document.getElementById("btnReset");

    btnSubmit.addEventListener("click", function (event) {
        form.classList.add("validado");

        var nameInput = document.getElementById("txtName");
        var userInput = document.getElementById("txtUser");
        var passInput = document.getElementById("txtPass");
        var confirmPassInput = document.getElementById("txtConfirmPass");
        var phoneNumberInput = document.getElementById("txtPhoneNumber");
        
        
        if (validateField(nameInput) || validateField(userInput) || validateField(passInput)) {
            if (validateField(confirmPassInput)) {
                validatePasswords(passInput, confirmPassInput);
            }
            if (validatePhoneNumber(phoneNumberInput)) return;
            return;
        } else {
            event.preventDefault(); // Evita el envío del formulario si hay errores de validación
        }
    });

    function validateField(input) {
        input.setCustomValidity("");
        return input.checkValidity();
    }

    function validatePasswords(input1, input2) {
        input2.setCustomValidity("");
        if (input1.value !== input2.value) {
            // Si las contraseñas no coinciden, tenemos un error
            input2.setCustomValidity('Las contraseñas no coinciden');
            return false;
        } else {
            return true;
        }
    }

    function validatePhoneNumber(input) {
        input.setCustomValidity("");
        var phoneNumberPattern = /^\d+$/;
        if (input.value === "") {
            return true;
        } else if (input.value.match(phoneNumberPattern)) {
            if (input.value.length == 10) {
                return true;
            } else {
                input.setCustomValidity("Deben ser 10 dígitos");
                return false;
            }
        } else {
            input.setCustomValidity("El campo del teléfono solo admite números");
            return false;
        }
    }

    btnReset.addEventListener("click", function() {
        resetFields();
    });

    function resetFields() {
        form.classList.remove("validado");
    }

});
