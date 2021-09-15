let number1 = prompt("Digite um número");
let number2 = prompt("Digite um número");
const formato1 = parseInt(number1);
const formato2 = parseInt(number2);

let operacao1 = formato1 + formato2;
let operacao2 = formato1 - formato2;
let operacao3 = formato1 / formato2;
let operacao4 = formato1 * formato2;
let operation = prompt("Digite o operador")

if (operation == "+") {
    operation
    alert(operacao1)


} else if (operation == "-") {
    operation
    alert(operacao2)
} else if (operation == "/") {
    operation
    alert(operacao3)
} else if (operation == "*") {
    operation
    alert(operacao4)
} //else(operation == ".") {
//alert("Escolha entre +, -, / e *")
//}