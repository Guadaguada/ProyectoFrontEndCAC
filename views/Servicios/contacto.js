
    const formulario = document.getElementById("formulario");
      const nombre = document.getElementById("nombre");
      const telefono = document.getElementById("telefono");
      const email = document.getElementById("email");
      const tarjeta = document.getElementById("tarjeta");
      const monto = document.getElementById("monto");
      const errorNombre = document.getElementById("error-nombre");
      const errorTelefono = document.getElementById("error-telefono");
      const errorEmail = document.getElementById("error-email");
      const errorTarjeta = document.getElementById("error-tarjeta");
      const errorMonto = document.getElementById("error-monto");

      formulario.addEventListener("submit", (event) => {
        let error = false;

        if (nombre.value.trim() === "") {
          errorNombre.textContent = "Por favor ingrese su nombre";
          error = true;
        } else {
          errorNombre.textContent = "";
        }

        if (telefono.value.trim() === "") {
          errorTelefono.textContent = "Por favor ingrese su teléfono";
          error = true;
        } else {
          errorTelefono.textContent = "";
        }

        if (email.value.trim() === "") {
          errorEmail.textContent = "Por favor ingrese su correo electrónico";
          error = true;
        } else if (!validarEmail(email.value.trim())) {
          errorEmail.textContent = "Por favor ingrese un correo electrónico válido";
          error = true;
        } else {
          errorEmail.textContent = "";
        }

        if (tarjeta.value.trim() === "") {
          errorTarjeta.textContent = "Por favor ingrese su número de tarjeta de crédito";
          error = true;
        } else if (!validarTarjeta(tarjeta.value.trim())) {
          errorTarjeta.textContent = "Por favor ingrese un número de tarjeta de crédito válido";
          error = true;
        } else {
          errorTarjeta.textContent = "";
        }

        if (monto.value.trim() === "") {
          errorMonto.textContent = "Por favor ingrese el monto";
          error = true;
        } else if (isNaN(parseFloat(monto.value.trim()))) {
          errorMonto.textContent = "Por favor ingrese un monto válido";
          error = true;
          } else {
          errorMonto.textContent = "";
          }
          if (error) {
            event.preventDefault();
          }
        });
      
        function validarEmail(email) {
          const regex = /\S+@\S+\.\S+/;
          return regex.test(email);
        }
      
        function validarTarjeta(tarjeta) {
          // Valida que el número de tarjeta tenga entre 13 y 16 dígitos
          const regex = /^[0-9]{13,16}$/;
          if (!regex.test(tarjeta)) {
            return false;
          }
      
          // Algoritmo de Luhn
          let suma = 0;
          let esPar = true;
          for (let i = tarjeta.length - 1; i >= 0; i--) {
            let digito = parseInt(tarjeta.charAt(i), 10);
            if (esPar) {
              digito *= 2;
              if (digito > 9) {
                digito -= 9;
              }
            }
            suma += digito;
            esPar = !esPar;
          }
          return (suma % 10) === 0;
        }
         
      
