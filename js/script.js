var monto = 0;
const precio = 200;

function capturar(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var correo = document.getElementById('correo').value
    // para el calculo uso los siguientes datos:
    var cantidad_entradas = document.getElementById('cantidad').value;
    var categoria = document.getElementById('categoria').value;
    var descuento = 0;

    if (categoria == "Estudiante"){
        descuento = 0.8;
    }
    else if(categoria == "Trainee"){
        descuento = 0.5;
    }
    else if(categoria == "Junior"){
        descuento = 0.15;
    }
    else {
        descuento = 0;
    }
    monto = Math.round(cantidad_entradas *  (1 - descuento) * precio);
    escribir_monto();

    console.log(`Los tickets estan a nombre de: ${nombre} con apellido: ${apellido} y un mail: ${correo}`)
    console.log(`Por ser :${categoria} el descuento es del : ${descuento * 100}% El monto total es: ${monto}`)
}

function escribir_monto(){
    document.getElementById('monto').innerHTML=`${monto}`;
}

function borrar_monto(){
    monto = 0;
    escribir_monto();
}