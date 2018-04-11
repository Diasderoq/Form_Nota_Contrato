function afterProcessCreate(processId){
	var Solicitante = getValue("WKUser");
	var NumeroSolicitacao = getValue("WKNumProces");
	
	
	

	
	hAPI.setCardValue("HddSolicitante",Solicitante);
    hAPI.setCardValue("HddNumeroSolicitacao",NumeroSolicitacao);
 
	
	
}