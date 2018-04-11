function validarAnexo(){
	var docs = hAPI.listAttachments();
	log.info("[validarAnexo] docs.size:" + docs.size());
	if(docs.size() == 0){
		throw " Anexo Obrigatório";
	}
	return false;
}