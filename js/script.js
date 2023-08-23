/*function nome da função(){

}*/
function login(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    console.log(email);
    console.log(pass);
    if(email == "horacio@horacio.com" && pass == "has1234"){
    alert("Login realizado com sucesso");
    }
    else{
        alert("Não foi possível realizar o login");
    }
}

function somar(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o segundo número: "))
   // console.log(typeof(n1))
    //console.log(typeof(n2))
    
    var resultado = n1 + n2 
    console.log(resultado)

}

function subtrair(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 - n2
    console.log(resultado)
}

function multiplicar(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 * n2
    console.log(resultado)
}

function dividir(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 / n2
    console.log(resultado)
}

function quadrado(){
    var n1 = parseInt(prompt("digite o número a ser elevado ao quadrado: "))
    var resultado = n1 * n1
    console.log(resultado)
}
function Raiz(){
    var n1 = parseInt(prompt("digite o número que deseja saber a raiz quadrada: "))
    var resultado = (Math.sqrt(n1))
    console.log(resultado)
}

function Potência(){
    var n1 = parseInt(prompt("digite o número a ser elevado: "))
    var n2 = parseInt(prompt("digite o expoente: "))
    var resultado = n1 ** n2
    console.log(resultado)
}

function addname(){
    const addname = document.getElementById("addname").value
    console.log(addname)
    document.getElementById("showname").innerHTML = addname
}