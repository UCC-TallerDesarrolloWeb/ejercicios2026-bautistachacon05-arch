/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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