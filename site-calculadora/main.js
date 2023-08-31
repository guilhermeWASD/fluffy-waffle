
function sum(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    
    if ((n1.value > 0) && (n2.value > 0)){
        var res = document.getElementById("res");
        res.innerHTML = eval(n1.value) + eval(n2.value);
    }else{
        alert("Numeros invalidos ");
    }
}

function sub(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    
    if ((n1.value > 0) && (n2.value > 0)){
    var res = document.getElementById("res");
    res.innerHTML = eval(n1.value) - eval(n2.value);
    }else{
        alert("Numeros invalidos ");
    }
}

function mult(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");

    if ((n1.value > 0) && (n2.value > 0)){
    var res = document.getElementById("res");
    res.innerHTML = eval(n1.value) * eval(n2.value);
    }else{
        alert("Numeros invalidos ");
    }
}

function division(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");

    if ((n1.value > 0) && (n2.value > 0)){
    var res = document.getElementById("res");
    res.innerHTML = eval(n1.value) / eval(n2.value);
    }else{
        alert("Numeros invalidos ");
    }

}
