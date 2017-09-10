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
var connum=0;
var vv;
var vvmm;

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

	//document.getElementById("display").textContent ="0"
		
	//eventos de click
	uno.onclick = function(e){
		if (connum<=7){
			vv=resultado.textContent;
			if (vv == "0"){
				//resultado.textContent =1;
				resultado.textContent = 1;
			} else {
				resultado.textContent = resultado.textContent  + "1";
				
			}
		   connum++;	
		} uno.src ="image/1.png";
	}
	
	dos.onclick = function(e){
  		if (connum<=7){
			//var vv;
			vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 2;
			} else {
				resultado.textContent = resultado.textContent  + "2";
			}
		   connum++;	
		} dos.src ="image/2.png";
	}
	tres.onclick = function(e){
  		if (connum<=7){
			//var vv;
			vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 3;
			} else {
				resultado.textContent = resultado.textContent  + "3";
			}
		   connum++;	
		} tres.src ="image/3.png";
	}
	cuatro.onclick = function(e){
  		if (connum<=7){
			//var vv;
			vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 4;
			} else {
				resultado.textContent = resultado.textContent  + "4";
			}
		   connum++;	
		}cuatro.src ="image/4.png";
	}
	cinco.onclick = function(e){
  		if (connum<=7){
			//var vv;
			vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 5;
			} else {
				resultado.textContent = resultado.textContent  + "5";
			}
		   connum++;	
		} cinco.src ="image/5.png";
	}
	seis.onclick = function(e){
  		if (connum<=7){
			//var vv;
			vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 6;
			} else {
				resultado.textContent = resultado.textContent  + "6";
			}
		   connum++;	
		} seis.src ="image/6.png";
	}
	siete.onclick = function(e){
  		if (connum<=7){
			//var vv;
			vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 7;
			} else {
				resultado.textContent = resultado.textContent  + "7";
			}
		   connum++;	
		} siete.src ="image/7.png";
	}
	ocho.onclick = function(e){
  		if (connum<=7){
			//var vv;
			vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 8;
			} else {
				resultado.textContent = resultado.textContent  + "8";
			}
		   connum++;	
		} ocho.src ="image/8.png";
	}
	nueve.onclick = function(e){
  		if (connum<=7){
			//var vv;
			//vv=resultado.textContent;
			//alert(vv);
			if (vv == "0"){
				resultado.textContent = 9;
			} else {
				resultado.textContent = resultado.textContent  + "9";
			}
		   connum++;	
		} nueve.src ="image/9.png";
	}
	cero.onclick = function(e){
	   vv=resultado.textContent;
	   if (vv =="0" || vv ==""){
		   
		   document.getElementById("display").textContent = "0";
		   resultado.textContent = resultado.textContent
		   connum++;
		   cero.src ="image/0.png";
		   return;
	   }
	   
	   if (connum<=7){
			//alert("aaa");
			resultado.textContent = resultado.textContent + "0";
			ceros=resultado.textContent;
			//++cuentaceros;
			connum++;
	   }
      cero.src ="image/0.png";	   
	}
	
	punto.onclick=function(e){
	  if (connum <= 7){	
		if (controlpunto==0){ 	 
			resultado.textContent += ".";
			connum++;
			controlpunto=1;
		   }
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
		connum=0;
  		limpiar();
	}
	resta.onclick = function(e){
  		operandoa = resultado.textContent;
		//mensajeresultado(e);
  		operacion = "-";
		controlpunto=0;
		connum=0;
  		limpiar();
	}
	multiplicacion.onclick = function(e){
  		operandoa = resultado.textContent;
		//mensajeresultado(e);
  		operacion = "*";
		controlpunto=0;
		connum=0;
  		limpiar();
	}
	division.onclick = function(e){
  		operandoa = resultado.textContent;
		operacion = "/";
		//mensajeresultado(operacion);
		controlpunto=0;
		connum=0;
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

//******************************
//******************************
    //Cambia Valores de imagen
//******************************
//******************************
function cambia_imagen(vvmm){
	if (vvmm==1){
	   uno.src ="image/image/1.png";
    }else if (vvmm==2){
        dos.src ="image/image/2.png";		
	} else if (vvmm==3){
        tres.src ="image/image/3.png";		
	} else if (vvmm==4){
        cuatro.src ="image/image/4.png";		
	} else if (vvmm==5){
        cinco.src ="image/image/5.png";		
	} else if (vvmm==6){
        seis.src ="image/image/6.png";		
	} else if (vvmm==7){
        siete.src ="image/image/7.png";		
	} else if (vvmm==8){
        ocho.src ="image/image/8.png";		
	} else if (vvmm==9){
        nueve.src ="image/image/9.png";		
	} else if (vvmm==0){
        cero.src ="image/image/0.png";		
	} 
}	   
function limpiar(){
	//resultado.textContent ="";
	document.getElementById("display").textContent = "";
	connum=0;
	//resultado.innerHTML=0; 
}

function rstear(){
	//alert('RESETT JIMM');
	//resultado.textContent ="";
	if (bandera=='1'){
	    //document.getElementById("display").textContent = "";
		ceros=0;
        //cuentaceros=0;
	    }
	else{
		document.getElementById("display").textContent = "0"
		ceros=1;
        //cuentaceros=1;
		//alert('Limpiado');
	}
	operandoa = 0;
	operandob = 0;
	operacion = "";
	bandera=0;
	controlpunto=0;
	connum=0;
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
