// HOTELERIA

function simulador () {
    alert ("Hola! Bienvenido a Las Cumbres Hotel");
    let numero = parseInt(prompt ("Para cuántas personas sería la habitación a reservar?"));

    while (numero > 4) {
        alert ("Lo lamentamos. No tenemos habitaciones para más de 4 personas. Si quiere, puede reservar más de una habitación");
        let pregunta = prompt ("Desea reservar más de una?");

        if (pregunta.toLowerCase () === "si") {
            alert ("Genial!");
            numero = prompt ("Para cuantas personas sería la habitación a reservar?");
        }else if (pregunta.toLowerCase () === "no") {
            alert ("Gracias. Esperamos en un futuro tu reserva");
            break;
        }else {
            alert ("Respuesta inválida. Inténtelo nuevamente");
            break;
        }
    }

    if (numero < 4) {
        let habitacion = prompt ("Podemos ofrecerte: A. Habitación Standard B. Habitación de Lujo");

        if (habitacion.toLowerCase () === "a") {
            alert ("La Habitacion Estandard tiene un costo de $5.000")

            function cuentaCuotas (precio1, cuotas) {
                if (cuotas === 1 || cuotas === 3 || cuotas === 6) {
                    return precio1 / cuotas;
                }else {
                    alert ("Esa cuota NO es válida");
                }
            }

            let cuotas = parseInt(prompt ("Quiere realizar el pago en 1, 3 o 6 cuotas?"));
            let resultado1 = cuentaCuotas(5000, cuotas);

            if (cuotas === 1 || cuotas === 3 || cuotas === 6) {
                let mensaje = `La habitación tiene un costo de $5.000 por noche. El pago se realizará en ${cuotas} cuotas de ${resultado1}.`;
                alert (mensaje);
            }
        }else if (habitacion.toLowerCase () === "b"){
            alert ("La Habitacion de Lujo tiene un costo de $10.000")

            function cuentaCuotas (precio1, cuotas) {
                if (cuotas === 1 || cuotas === 3 || cuotas === 6) {
                    return precio1 / cuotas;
                }else {
                    alert ("Esa cuota NO es válida. Se realizará en un pago.");
                }
            }

            let cuotas = parseInt(prompt ("Quiere realizar el pago en 1, 3 o 6 cuotas?"));
            let resultado1 = cuentaCuotas(10000, cuotas);

            if (cuotas === 1 || cuotas === 3 || cuotas === 6) {
                let mensaje = `La habitación tiene un costo de $10.000 por noche. El pago se realizará en ${cuotas} cuotas de $${resultado1}.`;
                alert (mensaje);
            }
        }
    }

    if (numero === 1) {
        alert ("A continuación vamos a pedirte los datos del huésped");

        class Huesped {
            constructor (nombre, apellido, edad) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
            }
        }

        const huespedes = [];

        let nombre = prompt ("Ingrese el nombre del huésped");
        let apellido = prompt ("Ingrese el apellido del huésped");
        let edad = prompt ("Ingrese la edad del huésped");

        let obj = new Huesped (nombre, apellido, edad);

        huespedes.push (obj);

        let operacionExitosa = `La habitación fue reservada con éxito para ${nombre} ${apellido}. Que la disfrutes!`;
        alert (operacionExitosa);
    }

    if (numero === 2) {
        alert ("A continuación vamos a pedirte los datos de los 2 huéspedes");

        class Huesped {
            constructor (nombre, apellido, edad) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
            }
        }

        const huespedes = [];

        for (let i = 0; i < 2; i++) {
            let nombre = prompt ("Ingrese el nombre del huésped");
            let apellido = prompt ("Ingrese el apellido del huésped");
            let edad = prompt ("Ingrese la edad del huésped");

            let objeto = new Huesped (nombre, apellido, edad);

            huespedes.push (objeto);
        }

        let operacionExitosa = `La habitación fue reservada con éxito para 2 personas. Que la disfruten!`;
        alert (operacionExitosa);
    }

    if (numero === 3) {
        alert ("A continuación vamos a pedirte los datos de los 3 huéspedes");

        class Huesped {
            constructor (nombre, apellido, edad) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
            }
        }

        const huespedes = [];

        for (let i = 0; i < 3; i++) {
            let nombre = prompt ("Ingrese el nombre del huésped");
            let apellido = prompt ("Ingrese el apellido del huésped");
            let edad = prompt ("Ingrese la edad del huésped");

            let objeto = new Huesped (nombre, apellido, edad);

            huespedes.push (objeto);
        }

        let operacionExitosa = `La habitación fue reservada con éxito para 3 personas. Que la disfruten!`;
        alert (operacionExitosa);
    }

    if (numero === 4) {
        alert ("A continuación vamos a pedirte los datos de los 4 huéspedes");

        class Huesped {
            constructor (nombre, apellido, edad) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
            }
        }

        const huespedes = [];

        for (let i = 0; i < 4; i++) {
            let nombre = prompt ("Ingrese el nombre del huésped");
            let apellido = prompt ("Ingrese el apellido del huésped");
            let edad = prompt ("Ingrese la edad del huésped");

            let objeto = new Huesped (nombre, apellido, edad);

            huespedes.push (objeto);
        }

        let operacionExitosa = `La habitación fue reservada con éxito para 4 personas. Que la disfruten!`;
        alert (operacionExitosa);
    }
}