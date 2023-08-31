
function sum(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var res = document.getElementById("res");
    res.innerHTML = eval(n1.value) + eval(n2.value);
}

function sub(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var res = document.getElementById("res");
    res.innerHTML = eval(n1.value) - eval(n2.value);
}

function mult(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var res = document.getElementById("res");
    res.innerHTML = eval(n1.value) * eval(n2.value);

}

function division(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var res = document.getElementById("res");
    res.innerHTML = eval(n1.value) / eval(n2.value);

}


function entrada(){
    var nome = document.getElementById("nomelogin");
    var nometroca = document.getElementById("nometitulo");
    nometroca.innerHTML = "nome";
// não deu certo *****
}