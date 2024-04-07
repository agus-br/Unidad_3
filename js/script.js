document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    var btnSubmit = document.getElementById("btnAcept");
    var btnReset = document.getElementById("btnReset");

    btnReset.addEventListener("click", function() {
        resetFields();
    });

    function resetFields() {
        var inputs = form.querySelectorAll("input");

        inputs.forEach(function(input) {
            input.classList.remove("invalid");
            input.classList.remove("valid");
            input.setCustomValidity(''); // Reinicia cualquier mensaje de validación personalizado
        });
    }

    btnSubmit.addEventListener("click", function (event) {
        var nameInput = document.getElementById("txtName");

        var userInput = document.getElementById("txtUser");

        var passInput = document.getElementById("txtPass");
        
        var confirmPassInput = document.getElementById("txtConfirmPass");
        
        var phoneNumberInput = document.getElementById("txtPhoneNumber");

        var nameValid = validateField(nameInput);
        var userValid = validateField(userInput);
        var passValid = validateField(passInput);
        var confirmPassValid = validateField(confirmPassInput);
        var phoneNumberValid = validatePhoneNumber(phoneNumberInput); // Llama a la función validatePhoneNumber
        var passwordsMatch = true;
        if (passValid) {
            passwordsMatch = validatePasswords(passInput, confirmPassInput);
        }

        if (!nameValid || !userValid || !passValid || !confirmPassValid || !phoneNumberValid || !passwordsMatch) {
            event.preventDefault(); // Evita el envío del formulario si hay errores de validación
        }
    });

    function validateField(input) {
        if (input.checkValidity()) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            return true;
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            return false;
        }
    }

    function validatePasswords(input1, input2) {
        if (input1.value !== input2.value) {
            // Si las contraseñas no coinciden, tenemos un error
            input2.classList.remove('valid');
            input2.classList.add('invalid');
            input2.setCustomValidity('Las contraseñas no coinciden');
            return false;
        } else {
            input2.classList.remove('invalid');
            input2.classList.add('valid');
            input2.setCustomValidity('');
            return true;
        }
    }

    function validatePhoneNumber(input) {
        var phoneNumberPattern = /^[0-9]{10}$/;
        if (input.value.match(phoneNumberPattern) || input.value === "") {
            input.classList.remove('invalid');
            input.classList.add('valid');
            input.setCustomValidity('');
            return true;
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            input.setCustomValidity("El teléfono debe tener 10 dígitos");
            return false;
        }
    }
});
