function agregarDigito(digito)
{
    let display= document.getElementById("display");
    display.value=display.value + digito ;
}
function allClear(){
    document.getElementById("display").value="";
}
function agregarOperador(operador){
    let display = document.getElementById("display");
    display.value=display.value + operador ;
}
function calcularResultado(){
    display.value=eval(display.value);
}
function calcularPotencia(){
    let display = document.getElementById("display");
    let base = eval(display.value);
    let exponente =document.getElementById("elevar_potencia").value;
    let resultadoPotencia =Math.pow(base, exponente);
    display.value = resultadoPotencia;
}
function calcularFactorial() {
    let display = document.getElementById("display");
    apoyo =display.value;

	for (i=1; i<display.value; i++) {
		apoyo= apoyo * i; 
        
	}
    display.value= apoyo;

}
function calcularLn(){
    let display = document.getElementById("display");
    elemento= display.value;
    
    resultadoLog=Math.log( elemento);
    display.value= resultadoLog;
}
function calcularLog(){
    let display = document.getElementById("display");
    elemento2= display.value;
    
    resultadoLog=Math.log10(elemento2);
    display.value= resultadoLog;
}
function calcularRaiz(){
    let display = document.getElementById("display");
    raiz= display.value;
    resultadoRaiz= Math.sqrt(raiz);
    display.value=resultadoRaiz;
}
