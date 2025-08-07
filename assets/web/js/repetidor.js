


function repetidor(id,lista,linea){
    contenidoHtml=""
    
    if(linea==undefined||linea===""){
       
        linea=document.getElementById(id).innerHTML
        
    }

for (var i = 0; i < lista.length; i++) {
    var element = lista[i];
    lineaMomentanea=linea;
    Object.entries(element).forEach(([key, value]) => {
        
        lineaMomentanea= lineaMomentanea.replace("{"+key+"}",value)
      });
    
    lineaMomentanea= lineaMomentanea.replace("{indice}",(i+1)+"")
    contenidoHtml+="\n"+lineaMomentanea;
}

document.getElementById(id).innerHTML="";
document.getElementById(id).innerHTML=contenidoHtml;


}