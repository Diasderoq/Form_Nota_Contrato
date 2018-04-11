function displayFields(form,customHTML){
	var AtividadeAtual = getValue("WKNumState");
	
	if(AtividadeAtual == 4 || AtividadeAtual == 10 || AtividadeAtual == 12 || AtividadeAtual == 15 ){
		customHTML.append("<script>");
		form.setHideDeleteButton(true);
		customHTML.append("$('#btNotaContrato').hide();");
		customHTML.append("</script>");	
	
	}
	
}