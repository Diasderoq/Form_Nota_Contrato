function afterStateLeave(sequenceId){

	var AtividadeAtual = getValue("WKNumState");
	var AtividadeProxima = getValue("WKNextState");
	var Responsavel = getValue("WKUser");


	hAPI.setCardValue("HddAtividadeAtual",AtividadeAtual);
    hAPI.setCardValue("HddAtividadeProxima",AtividadeProxima);
    hAPI.setCardValue("HddResponsavel",Responsavel);


/*
//Da Atividade 1 para a Atividade 4 
//HddAtividadeAtual = 2
//HddAtividadeProxima = 4

//Da Atividade 4 para a Atividade 10 
//HddAtividadeAtual = 6
//HddAtividadeProxima = 10

//Da Atividade 4 para a Atividade 12 
//HddAtividadeAtual = 6
//HddAtividadeProxima = 12
*/


}