var TOSH = {
		is_numeric : function(num){
			   return typeof num === 'number' && isFinite(num);
		},
		//*******************************************************************//
		is_email : function(email){
			  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,1})+$/;
			  //var regex = /^([a-zA-Z0-9+-_.){1+}\@([a-zA-Z0-9.-_){1+}(.){1}(a-zA-Z){2+} /; acceptible 5/22
			  return regex.test(email);
		},
		//*******************************************************************//
		//get querystring by passing the querystring name for example, www.toshmatov.us?employee_id=2232323.
		querystring : function (sVar){
			return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
		},
}
