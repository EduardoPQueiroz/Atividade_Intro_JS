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
    alert(resultado);

}

function subtrair(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 - n2
    console.log(resultado)
    alert(resultado);
}

function multiplicar(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 * n2
    console.log(resultado)
    alert(resultado);
}

function dividir(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 / n2
    console.log(resultado)
    alert(resultado);
}

function quadrado(){
    var n1 = parseInt(prompt("digite o número a ser elevado ao quadrado: "))
    var resultado = n1 * n1
    console.log(resultado)
    alert(resultado);
}
function Raiz(){
    var n1 = parseInt(prompt("digite o número que deseja saber a raiz quadrada: "))
    var resultado = (Math.sqrt(n1))
    console.log(resultado)
    alert(resultado);
}

function Potência(){
    var n1 = parseInt(prompt("digite o número a ser elevado: "))
    var n2 = parseInt(prompt("digite o expoente: "))
    var resultado = n1 ** n2
    console.log(resultado)
    alert(resultado);
}

function addname(){
    const addname = document.getElementById("addname").value
    console.log(addname)
    document.getElementById("showname").innerHTML = addname
}

function addlist(){
    let addlist = document.getElementById("addlist").value
    let li = document.createElement("li") 
    li.innerHTML=addlist
    // document.getElementById("produto").innerHTML = product
    document.getElementById("showlist").appendChild(li)
    console.log(product)
}

function addproduct(){
    let addshoppingcart = []
    let product = {
        nome_prod : Arroz,
        marca_prod : Campinas,
        preço_prod : R$10
    }
    addshoppingcart.push(product);
    
    let product2={
        nome_prod : Headset,
        marca_prod : Kenzoos_Headsets,
        preço_prod : R$405
    }
    addshoppingcart.push(product2);
    
    let product3={
        nome_prod : Cadeira_Gamer,
        marca_prod : Jamaal_Chairs,
        preço_prod : R$699
    }
    addshoppingcart.push(product3); 
    console.log(addshoppingcart);
}