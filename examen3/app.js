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

    // Crear instancia de jsPDF

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`Tu resultado es: ${texto}`, 10, 10);
    doc.save('resultado.pdf');
}