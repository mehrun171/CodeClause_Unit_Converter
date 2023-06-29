const km=document.querySelector("#km");
const m=document.querySelector("#m");
const cm=document.querySelector("#cm");
const mm=document.querySelector("#mm");
function kilometer(value){
    m.value=value*100;
    cm.value=value*10000;
    mm.value=value*1000000;
}
function meter(value){
    km.value=value/1000;
    cm.value=value*100;
    mm.value=value*1000;
}
function centimeter(value){
    km.value=value/100000;
    m.value=value/100;
    mm.value=value*10;
}
function millimeter(value){
    km.value=value/1000000;
    m.value=value/1000;
    cm.value=value/10;
}
