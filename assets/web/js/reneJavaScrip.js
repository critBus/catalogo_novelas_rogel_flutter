


function contains(a,sub){
return a.indexOf(sub)!=-1
}

function esString(a){
	if(typeof(a)=="string"){
		return true;
	}
	return false;
}

function volverCodigoInternoATexto_Clase(clase){
	elments=document.getElementsByClassName(clase);
for (var i = elments.length - 1; i >= 0; i--) {
	v= elments[i];
	setText(v,v.innerHTML);
}
}
function volverCodigoInternoATexto(id){
	setText(id,document.getElementById(id).innerHTML);
}
function setText(id,text) {
		var v;
	 	if(esString(id)){
	 		v=document.getElementById(id);
	 	}else{

	 		v=id;
	 	}
	 	
	 	while(contains(text,'<br><br>')){
	 		text=text.replace('<br><br>','<br>');
	 	}
	 	while(contains(text,'\n\n')){
	 		text=text.replace('\n\n','\n');
	 	}
	 	if(text.startsWith('\n')){
	 		text=text.substring(1);
	 	}
	 	//console.log(text)
	 	v.innerText=text;
	}

function repetidor(id,lista,linea){
contenidoHtml=""
for (var i = 0; i < lista.length; i++) {
    var element = lista[i];
    lineaMomentanea=linea;
    for (var j = 0; j < element.length; j++) {
        var parAtributo = element[j];
        lineaMomentanea= lineaMomentanea.replace("{"+parAtributo[0]+"}",parAtributo[1])
    }
    lineaMomentanea= lineaMomentanea.replace("{indice}",(i+1)+"")
    contenidoHtml+="\n"+lineaMomentanea;
}

document.getElementById(id).innerHTML=contenidoHtml;


}

function ponerElementoDeLista(id,lista,indice,linea){

	var element = lista[indice];
    lineaMomentanea=linea;
    for (var j = 0; j < element.length; j++) {
        var parAtributo = element[j];
        lineaMomentanea= lineaMomentanea.replace("{"+parAtributo[0]+"}",parAtributo[1])
    }
    lineaMomentanea= lineaMomentanea.replace("{indice}",(indice+1)+"")

	document.getElementById(id).innerHTML=lineaMomentanea;

}