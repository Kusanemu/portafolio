let original=[" ","A","B","C","D","E","F","G","H","I","J","K","L","M","Ñ","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let romano=[" ","I","C","Ñ","H","O","M","T","L","B","S","A","R","Q","P","E","W","J","F","V","U","K","X","D","Y","N","Z","G"];

function encriptar(){
    let msj=document.getElementById("cadena").value;
    let texto="";
    for(let i in msj){
        for(let j in original){
            if (msj[i].toUpperCase()==original[j]){
                texto+=romano[j];
                break;
            }
        }
    }
    console.log(texto);
    document.getElementById("mensaje").innerHTML=texto;
    var doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(20, 20, 'Texto a codificar:\n' + cadena + '\n\nCodificacion:\n' + mensaje);
    var string = doc.output('datauristring');
    $('#pdfPreview').attr('src', string);
}