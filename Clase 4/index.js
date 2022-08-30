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
                    alert ("Esa cuota NO es válida");
                }
            }

            let cuotas = parseInt(prompt ("Quiere realizar el pago en 1, 3 o 6 cuotas?"));
            let resultado1 = cuentaCuotas(10000, cuotas);

            if (cuotas === 1 || cuotas === 3 || cuotas === 6) {
                let mensaje = `La habitación tiene un costo de $10.000 por noche. El pago se realizará en ${cuotas} cuotas de ${resultado1}.`;
                alert (mensaje);
            }
        }
    }
}