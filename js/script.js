const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
    const random_color = 'rgb('+ random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = random_color;
    console.log(`${random_color}`)
}

console.log("hola pepe")

const input = document.querySelector('input');
const log = document.getElementById('valores');

input.addEventListener('input', updateValue);
console.log

function updateValue(e) {
  log.textContent = e.srcElement.value;
}

var monto = 0;

function capturar(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var correo = document.getElementById('correo').value
    // para el calculo uso los siguientes datos:
    var cantidad_entradas = document.getElementById('cantidad').value;
    var categoria = document.getElementById('categoria').value;
    var descuento = 0;
    const precio = 200;

    if (categoria == "Estudiante"){
        descuento = 0.8;
    }
    else if(categoria == "Trainee"){
        descuento = 0.5;
    }
    else{
        descuento = 0.15;
    }
    monto = Math.round(cantidad_entradas *  (1 - descuento) * precio);
    // updateValue(monto);
    console.log(`Por ser :${categoria} el descuento es del : ${descuento * 100}% El monto total es: ${monto}`)
    escribir();
}

function escribir(){
    document.getElementById('monto').innerHTML=`El Monto total es: ${monto}`;
    }