function validateForm(form){
	var indexes = form.getChildrenIndexes("TbNotaContrato");
	if ( 0 == indexes.length){
		throw ("Adicione uma Linha")
	}
	if (form.getValue ("TxtAprovador") == "" || form.getValue ("TxtAprovador") == null){
		throw ("Aprovador é um campo Obrigatorio")
	}
for (var i = 0; i < indexes.length; i++) {
		
		if (form.getValue ("TxtFornecedor___" +  indexes[i]) == "" ){
			throw ("Fornecedor é obrigatorio")
		}
		if (form.getValue ("TxtCentroCusto___" +  indexes[i]) == "" ){
			throw ("Centro de Custo é obrigatorio")
		}
		if (form.getValue ("TxtValorContrato___" +  indexes[i]) == "" ){
			throw ("Valor do Contrato é obrigatorio")
		}
		if (form.getValue ("TxtDataVencimento___" +  indexes[i]) == "" ){
			throw ("Data de Vencimento da Nota Fiscal é obrigatorio")
		}
		if (form.getValue ("NumNotaFiscal___" +  indexes[i]) == "" ){
			throw ("Numero da Nota Fiscal é obrigatorio")
		}
	}
}