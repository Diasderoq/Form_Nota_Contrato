
Number.prototype.formatNumber = function(decimals, sepDecimals, sepThousand){
	  if(decimals==null)decimals=2;  
	  if(sepDecimals==null)sepDecimals=',';
	  if(sepThousand==null)sepThousand='.';  

	  var n = new String(this.toFixed(decimals)).replace('.','').split('');
	  n.reverse();
	  var fn = new Array();
	  var cont = decimals+1;
	  for(this.i=0;this.i<n.length;this.i++){
	   if(this.i==decimals-1 && n.length>decimals-1){
	    fn.unshift(sepDecimals+n[this.i]);
	   }else{
	    if(cont--==0 && this.i != n.length-1){
	     fn.unshift(sepThousand+n[this.i]);
	     cont = 2;
	    }else fn.unshift(n[this.i]);
	   } 
	  }
	  return fn.join('');
};

String.prototype.replaceAll = function(token, newToken, ignoreCase) {
    var str, i = -1, _token;
    if((str = this.toString()) && typeof token === "string") {
            _token = ignoreCase === true? token.toLowerCase() : undefined;
            while((i = (
                    _token !== undefined? 
                            str.toLowerCase().indexOf(
                                                    _token, 
                                                    i >= 0? i + newToken.length : 0
                            ) : str.indexOf(
                                                    token,
                                                    i >= 0? i + newToken.length : 0
                            )
            )) !== -1 ) {
                str = str.substring(0, i)
                                .concat(newToken)
                                .concat(str.substring(i + token.length));
            }
    }
return str;
};