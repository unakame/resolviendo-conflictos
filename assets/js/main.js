function calcularIMC(e){

 var peSo = document.getElementById("peso").value;
 var esTatura = document.getElementById("estatura").value;

 var resultado = parseInt(peSo) / Math.pow(esTatura,2);
 var resultado2 = resultado.toFixed(1);
   return  alert( "Tu IMC es: " + resultado2);
}
