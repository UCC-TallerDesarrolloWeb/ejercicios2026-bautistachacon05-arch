/**
 * conversion de unidades, de metros, yardas,pie y pulgadas
 * @method cambiar unidades
 * @param {string} id-contiene el id de los inputs demetros, yardas,pie y pulgadas
 * @param {number} valor-el valor de los inputs metros, yardas,pie y pulgadas
 * @return 
 */

function cambiarunidades(id,valor){
    var metro,pulgada,pie,yarda;
    if (valor.includes(",")) {
        valor=valor.replace(",",".");
        
    }
if (isNaN(valor)) {
    alert("se ingreso un valor invalido"+id);
    metro="";
    pulgada="";
    pie="";
    yarda="";
    

} else if (id=="metro") {
    metro=valor;
    pulgada=39.3701*valor;
    pie=3.28084*valor;
    yarda=1.09361*valor;
} else if (id=="pulgada") {
    pulgada=valor;
    metro=0.0254*valor;
    pie=0.0833333*valor;
    yarda=0.0277778*valor;
} else if (id=="yarda") {
    yarda=valor;
    pulgada=36*valor;
    pie=3*valor;
    metro=0.9144*valor;
} else if (id=="pie") {
    pie=valor
    pulgada=12*valor;
    metro=0.3048*valor;
    yarda=0.333333*valor;
}
document.lasunidades.unid_metro.value= Math.round(metro*100)/100;
document.lasunidades.unid_pulgada.value=Math.round(pulgada*100)/100;
document.lasunidades.unid_pie.value=Math.round(pie*100)/100;
document.lasunidades.unid_yarda.value=Math.round(yarda*100)/100;
}
function convertirGr(id) {
    var grad,rad;
    if (id=="grados") {
        grad=document.getElementById("grados").value;
        rad=(grad/Math.PI)/180;
    }else if (id=="radianes") {
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI;
        
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}
function mostrar_ocultar(valormo){
    if (valormo=="val_mostrar") {
        document.getElementById("divmo").style.display='block ';

    }else if (valormo=="val_ocultar") {
        document.getElementById("divmo").style.display='none ';
    }

}
function calcularsuma(){
    var num1,num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=num1+Number(num2);
}
function calcularresta(){
    var num1,num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML=num1-Number(num2);
}
function calcularmult(){
    var num1,num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML=num1*Number(num2);
}
function calculardiv(){
    var num1,num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=num1/Number(num2);
}