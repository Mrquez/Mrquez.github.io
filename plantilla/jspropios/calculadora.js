function Suma()
{
//Referencia a los objetos del html
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let suma = Number(num1) + Number(num2);
alert("La suma es: " +suma);

}
function Resta()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resta = num1 - num2;
    alert("La resta es: " +resta);
}
function Multi()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let multi = num1 * num2;
    alert("La multiplicacion es: " +multi);
}
function Division()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let div = num1 /num2;
    alert("La division es: " +div);
}