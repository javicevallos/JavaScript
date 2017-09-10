//Comentario Para enviar mensaje antes de cargar el html
//alert('Desarrollado por Soluciones Inform\u00E1ticas ALSA');

//Funcion de Mensaje
function mensajeinicial()
{
  alert('Desarrollado por Soluciones Inform\u00E1ticas ALSA');
}

function mensajeresultado(valorsill)
{
	 var valorsillo;
     valorsillo= valorsill;
	 //alert('Resultados');
	 return alert (valorsill);
}

//Declaramos variables
var operandoa;
var operandob;
var operacion;
var bandera=0;
var estado;
var ceros=0;
var cuentaceros=0;
var controlpunto=0;

function init(){
	//variables
	var resultado = document.getElementById("display");
	//var resultado1 = document.getElementById("display");
	var rrtt = document.getElementById("bla");
	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
	var igual = document.getElementById("igual");
	var punto = document.getElementById("punto");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var cero = document.getElementById("cero");

	//resultado1.textContent = "0";
	//alert(resultado1.textContent);
	
	//eventos de click
	uno.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "1";
		//mensajeresultado(resultado.textContent);
	}
	dos.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "2";
		//mensajeresultado(resultado.textContent);
	}
	tres.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "3";
		//mensajeresultado(resultado.textContent);
	}
	cuatro.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "4";
		//mensajeresultado(resultado.textContent);
	}
	cinco.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "5";
	}
	seis.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "6";
	}
	siete.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "7";
	}
	ocho.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "8";
	}
	nueve.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "9";
	}
	cero.onclick = function(e){
		//document.getElementById("cero").value=0;
		//resultado.textContent = resultado.textContent + "0";
		resultado.textContent = resultado.textContent + "0";
		ceros=resultado.textContent;
		++cuentaceros;
		//alert(cuentaceros);
		//mensajeresultado=alert(ceros.length);
		ero();
	}
	
	punto.onclick=function(e){
		   if (controlpunto==0){ 	 
			  resultado.textContent += ".";
		      controlpunto=1;
     }
	}
	
	//rs.addEventListener("click", "rstear();");
	rrtt.onclick = function(e){
  		//alert('RESETEAR');
		bandera=0;
		rstear();
		//rs.onclick=rstear();	//limpiar();	//document.getElementById("display").textContent = "0";
	}
	suma.onclick = function(e){
  		operandoa = resultado.textContent;
		operacion = "+";
		//mensajeresultado(operacion);
		controlpunto=0;
  		limpiar();
	}
	resta.onclick = function(e){
  		operandoa = resultado.textContent;
		//mensajeresultado(e);
  		operacion = "-";
		controlpunto=0;
  		limpiar();
	}
	multiplicacion.onclick = function(e){
  		operandoa = resultado.textContent;
		//mensajeresultado(e);
  		operacion = "*";
		controlpunto=0;
  		limpiar();
	}
	division.onclick = function(e){
  		operandoa = resultado.textContent;
		operacion = "/";
		//mensajeresultado(operacion);
		controlpunto=0;
  		limpiar();
	}
	igual.onclick = function(e){
  		
		//mensajeresultado(operandoa);
		//mensajeresultado(operacion);
		//mensajeresultado(operandob);
		//controlpunto=1;
			
		operandob = resultado.textContent;	 
         		
		resolver();
	}
}

function limpiar(){
	//resultado.textContent ="";
	document.getElementById("display").textContent = "";
	//resultado.innerHTML=0; 
}

function rstear(){
	//alert('RESETT JIMM');
	//resultado.textContent ="";
	if (bandera=='1'){
	    //document.getElementById("display").textContent = "";
		ceros=0;
        cuentaceros=0;
	    }
	else{
		document.getElementById("display").textContent = "0"
		ceros=1;
        cuentaceros=1;
		//alert('Limpiado');
	}
	operandoa = 0;
	operandob = 0;
	operacion = "";
	bandera=0;
	controlpunto=0;
}

// Verifica si esta solo el número cero en pantalla que no se vuelva a repetir
// Verifica si esta solo el número cero en pantalla que este sea reemplazado por otro
// Valida el ingreso solo de 8 dígitos

function ero(){
	//alert('Cuanto Ceros');
	//alert(cuentaceros);
	switch (cuentaceros) {
		case 1:
		   //alert(1);
			if (document.getElementById("display").textContent ==""){
				mensajeresultado(cuentaceros);
			}else {
				alert('Pantalla No Vacia');
			}

		   
		  break;
		  
		//case 2:
		//   return mensajeresultado(cuentaceros); 
		     //resultado.textContent = resultado.textContent + "0";
		//  break;
		
		default:
			//mensajeresultado(cuentaceros); 
			alert('Varios Ceros');
	}
}
function resolver(){
	var res = 0;
	bandera=1;
	var cadd="";
	switch(operacion){
		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob);
			break;

		case "-":
		    res = parseFloat(operandoa) - parseFloat(operandob);
		    break;

		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob);
			break;
		
		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob);
			break;
	}
	//alert (res);
	//resultado.textContent ="864";
	//teclado.display=res
	var cadd1=res.toString();
	cadd = cadd1.slice(0,8);
	if(cadd.indexOf('.') != -1){
       controlpunto=1;
    } else {
        controlpunto=0;
     } 
	
	//alert(cadd);
	//document.getElementById("display").textContent = res;
	document.getElementById("display").textContent = cadd;
	rstear();
	//resultado.textContent = res;
}
