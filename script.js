
var izq = document.getElementById("cubo").style.marginLeft;
var tpp = document.getElementById("cubo").style.marginTop;

var movimiento = 60;

function right(){
    izq = parseInt(izq) + movimiento;
    if(izq>740){
    izq=740;
    }
    if(izq<=740){
    document.getElementById("cubo").style.marginLeft = parseInt(izq) + "px";
} else {
    return;
}
}

function left(){
    izq = parseInt(izq) - movimiento;
    if(izq<0){
    izq=0;
    }
    if(izq>=0){
    document.getElementById("cubo").style.marginLeft = parseInt(izq) + "px";
} else{
    return;
}
}

function tp(){
    tpp = parseInt(tpp) - movimiento;
    if(tpp<0){
    tpp=0;
    }
    if(tpp<=340){
    document.getElementById("cubo").style.marginTop = parseInt(tpp) + "px";
} else {
    return;
}
}

function bottom(){
    tpp = parseInt(tpp) + movimiento;
    if(tpp>340){
    tpp=340;
    }
    if(tpp>=0){
    document.getElementById("cubo").style.marginTop = parseInt(tpp) + "px";
} else {
    return;
}
}
