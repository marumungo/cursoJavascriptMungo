// EMPRESA DE PASAJES 

let usuario = (prompt ("Ingrese su nombre de usuario"));

while (usuario != "cristian") {
    alert ("Usuario incorrecto");
    usuario = prompt ("Ingrese su nombre de usuario nuevamente");
}

alert ("Bienvenido")
let turno = (prompt ("Tiene tres pasajes gratis. Desea reservarlos?"));

if (turno === "si") {
    for (let pasaje = 1; pasaje <= 3; pasaje++) {
        let pasajero = (prompt ("Ingresar el nombre del pasajero"));
        let mensaje = `El pasaje ${pasaje} fue reservado para ${pasajero}`;
        alert (mensaje);
    }
    alert ("Tus 3 pasajes fueron reservados con exito!")
}else {
    alert ("Okay, cualquier duda estamos a disposición");
}