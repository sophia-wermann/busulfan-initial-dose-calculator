function calcularDose() {
    var idade = window.document.getElementById('idade');
    var peso = window.document.getElementById('peso');
    var auc = window.document.getElementById('auc');
    var res = window.document.getElementById('res');
    
    var idadeNum = Number(idade.value);
    var pesoNum = Number(peso.value);
    var aucNum = Number(auc.value);
    var aucTransformada = ((aucNum * 246.304) / 1000) / 60;
    
    var vd = (8.61 * (1 + 0.0914 * (pesoNum - 13.65))) * Math.log(0.0195);
    var cl = (3.17 * (1 + 0.0202 * (idadeNum - 43))) * Math.log(0.156);
    var dose = aucTransformada * cl;
    
    res.innerHTML = `O paciente apresenta Volume de Distribuição (Vd) igual a ${vd.toFixed(2).toString().replace('.', ',')}L 
    e Clearance (CL) igual a ${cl.toFixed(2).toString().replace('.', ',')}L/h.<br><br> 
    <strong>A dose inicial a ser administrada é de ${dose.toFixed(2).toString().replace('.', ',')}mg</strong>.`;
}
