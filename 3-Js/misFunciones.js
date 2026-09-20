/**
 * conversion de unidades, de metros, yardas,pie y pulgadas
 * @method cambiar unidades
 * @param {string} id-contiene el id de los inputs demetros, yardas,pie y pulgadas
 * @param {number} valor-el valor de los inputs metros, yardas,pie y pulgadas
 * @return 
 */

function cambiarunidades(id,valor){
if (isNaN(valor)) {
    alert("se ingreso un valor invalido");
    document.lasunidades.unid_metro.value="";
    document.lasunidades.unid_pulgada.value="";
    document.lasunidades.unid_pie.value="";
    document.lasunidades.unid_yarda.value="";

} else if (id=="metro") {
    document.lasunidades.unid_pulgada.value=39.3701*valor;
    document.lasunidades.unid_pie.value=3.28084*valor;
    document.lasunidades.unid_yarda.value=1.09361*valor;
}

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