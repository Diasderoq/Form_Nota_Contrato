function enableFields(form){ 
	var AtividadeAtual = getValue('WKNumState'); 
	var indexes = form.getChildrenIndexes("TbNotaContrato");
	
	if(AtividadeAtual == 4 || AtividadeAtual == 10 || AtividadeAtual == 12 || AtividadeAtual == 15 ){
		
		form.setEnabled('SlPrioridade', false);
		form.setEnabled('TxtAprovador', false);
		

		for (var i = 0; i < indexes.length; i++) {
			 form.setEnabled("TxtFornecedor___" + indexes[i], false);
			 form.setEnabled("TxtDataVencimento___" + indexes[i], false);
			 form.setEnabled("NumNotaFiscal___" + indexes[i], false);
			 form.setEnabled("TxtCentroCusto___" + indexes[i], false);
			 form.setEnabled("TxtValorContrato___" + indexes[i], false);
		}
		
	}
	
	
}