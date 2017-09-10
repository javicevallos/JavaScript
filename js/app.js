//Comentario Para enviar mensaje antes de cargar el html
//alert('Desarrollado por Soluciones Inform\u00E1ticas ALSA');

//Funcion de Mensaje
function mensajeinicial()
{
  alert('Desarrollado por Soluciones Inform\u00E1ticas ALSA');
}

function mensajeresultado()
{
  alert('Resultados');
}


var numero = 0;
var numeros = document.querySelectorAll("img");

  for (var i = 0; i < numeros.length; i++) {
    numeros[i].onclick = add;
  }
    function add(e) {
        e.stopPropagation()
        var pantalla = document.getElementById("display");
        var addigit = pantalla;
        numero = e.innerHTML;  
        addigit.textContent += this.getAttribute("alt");

    document.getElementById("on").onclick = function(){
     display.innerHTML = 0;
    }

    }
