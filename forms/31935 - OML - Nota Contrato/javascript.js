//Chamando Filho(table)
function fornecedor(tablename) {
			$('#TbNotaContrato').show();
			var row = wdkAddChild('TbNotaContrato');
			//mask de valor
			$(function(){
			 $("#TxtValorContrato___" + row).maskMoney({symbol:'', 
			showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
			 })
			//mask de Data
			FLUIGC.calendar("#TxtDataVencimento___" + row, {
				minDate : new Date(),
			});
			
//Inserindo Valor do DsCscResponsavel na variavel responsavel 			
			var dataset = DatasetFactory.getDataset("DsCscResponsavel"); 
			   $('#HddCscResponsavel').val(dataset.values[0].USER_CODE);
}
//Calculo de Valor
function Valor(){
	var table = document.getElementById('TbNotaContrato');
	var linhas = table.getElementsByTagName('tr');
	var totalParcialPecas = "0.00";
	if (linhas.length > 2){
		for(var i=2; linhas.length > i; i++){
			var arrayInput = linhas[i].getElementsByTagName("input");
			if (arrayInput[4].value != ''){
				var valorTotalItem = arrayInput[4].value.replace(".","").replace(",",".");
				totalParcialPecas = parseFloat(totalParcialPecas) + parseFloat(valorTotalItem);	
				$('#TxtTotalSolicitacao').val(totalParcialPecas.toFixed(2).replace(".",","));
				$("#TxtTotalSolicitacao").maskMoney({symbol:'R$', 
				showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
			}

		}
		
	}focus();
	
}

//Chamdo DS CSC Responsavel


function focus(){
	$("#TxtTotalSolicitacao").focus();
	return	false
}
//Zoom chamada
function ZoomFornecedor(buttonSelected) {

	var size = buttonSelected.id.length;
	number = buttonSelected.id.substring(2, size);
	
	window.open(
			"/webdesk/zoom.jsp?datasetId=Fornecedor_Prothes&dataFields=COD_Fornecedor, Codigo do Fornecedor, DES_Fornecedor, Descrição do Fornecedor"
							+ "&resultFields=COD_Fornecedor, Codigo do Fornecedor, DES_Fornecedor, Descrição do Fornecedor&type=tyfornecedor&title=tlfornecedor",
					"zoom",
					"status , scrollbars=no ,width=600, height=350 ,left="
							+ (screen.width - 600) / 2 + ",top="
							+ (screen.height - 350) / 4);
	
	
}
function ZoomCentroCusto(buttonSelected){
	var size = buttonSelected.id.length;
	number = buttonSelected.id.substring(2, size);
	window.open(
			"/webdesk/zoom.jsp?datasetId=CC_Protheus&dataFields=COD_CC, Codigo do Centro de Custo, DES_CC, Descrição do Centro de Custo"
							+ "&resultFields=COD_CC, Codigo do Centro de Custo, DES_CC, Descrição do Centro de Custo&type=tycc&title=tlcc",
					"zoom",
					"status , scrollbars=no ,width=600, height=350 ,left="
							+ (screen.width - 600) / 2 + ",top="
							+ (screen.height - 350) / 4);
	
}

function ZoomAprovadorCsc() {
	window.open(
			"/webdesk/zoom.jsp?datasetId=DsAprovador&dataFields=FULL_NAME,NOME"
							+ "&resultFields=FULL_NAME,GROUP_CODE,LOGIN,USER_CODE,CHEFE_CODE&type=tyAprovador&title=tlAprovador",							
					"zoom",
					"status , scrollbars=no ,width=600, height=350 ,left="
							+ (screen.width - 600) / 2 + ",top="
							+ (screen.height - 350) / 4);
}


function setSelectedZoomItem(selectedItem) {

	let TxtAprovador = "TxtAprovador";
	let HddGroupCode = "HddGroupCode";
	let HddLogin = "HddLogin";
	let HddUserCode = "HddUserCode";
	let HddChefeCode = "HddChefeCode";
	let FIELD = selectedItem.inputId;
	
	if (selectedItem.inputId == TxtAprovador) {
		let c0 = selectedItem["FULL_NAME"]
		let c1 = DatasetFactory.createConstraint("FULL_NAME", c0, c0, ConstraintType.MUST);
		let constraints   = new Array(c1)
		var fields = new Array("LOGIN","GROUP_CODE","USER_CODE","CHEFE_CODE")
		var dataset = DatasetFactory.getDataset("DsAprovador",fields,constraints,null); 
		


		$('#' + HddGroupCode).val(dataset.values[0].GROUP_CODE)
		$('#' + HddLogin).val(dataset.values[0].LOGIN)
		$('#' + HddUserCode).val(dataset.values[0].USER_CODE)
		$('#' + HddChefeCode).val(dataset.values[0].CHEFE_CODE)

	}
}

//Zoom Input
/*function setSelectedZoomItem(selectedObj) {
	if (selectedObj.type == "tyfornecedor") {
		$("#TxtFornecedor___" + number).val(selectedObj.DES_Fornecedor);
	};
	 if (selectedObj.type == "tycc") {
		$("#TxtCentroCusto___" + number).val(selectedObj.DES_CC);
	}; 
	 if (selectedObj.type == "tyAprovador") {
		$("#TxtAprovador").val(selectedObj.FULL_NAME);
		$("#HddGroupCode").val(selectedObj.GROUP_CODE);
		$("#HddLogin").val(selectedObj.LOGIN);
		$("#HddUserCode").val(selectedObj.USER_CODE);
		$("#HddChefeCode").val(selectedObj.CHEFE_CODE);
			
	};
}
*/