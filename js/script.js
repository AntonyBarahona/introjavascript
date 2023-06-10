/* variables un automovil recorre una distancia de 144km de punto A al punto B en un tiempo de 3 horas calcular velocidad
var d=144;
var t=3;
var v=d/t;
alert("La velocidad es de:"+v+"km/h") 
function suma(){
    var a=3;
    var b=5;
    var c=a+b;
    alert(c);
}*/
/* listas y siclos
var animales=["conejo","pato","jirafa","elefante","leon"];
console.log(animales);
for(var x=0;x<=animales.length;x++){
    console.log(animales[x]);
}
console.log("******************************************");
console.log(animales.length);*/
//condiciones
/*se desea calcular la edad de una persona partiendo de el año de nacimmiento y año actual verifique si es mayor o meno de edad*/
an=prompt("ingrese año de nacimiento");
aa=prompt("ingrese año actual");
e=aa*an;
if(e>=18){
    alert("mayor de edad");
}else{
    alert("menor de edad")
}