$(document).ready(function(){
	//network button toggle
    $('.switch-field>input[type="radio"]').click(function(){
        var inputValue = $(this).val();
        var targetBox = $("." + inputValue);
      	$('#accordion .card .show .network-type').val(inputValue);
        $(".box").hide();
        $(targetBox).show();
    });
    $('.data-bundles input[type="radio"]').click(function(){
        var inputValue = $(this).val();
      $('#accordion .card .show .data-type').val(inputValue);
    });



   $('#accordion  .card .card-header').click(function(){
	   		$('.card-header').show();
	   		$(this).hide();
	   		$(this).parent().css({'border':'2px solid #39689c'});
	   		
	   //get the network type from a benefiary selected eairl
	   		var networkType = $(this).parent().find('.network-type').val();
	   	//get the data type from a beneficiary

	   	if(networkType !=""){
	   		//alert("hi");
	   		var dataType = $(this).parent().find('.data-type').val();
	   //target the network
	   		var targetNetwork = $('#switch_'+networkType);
	   	//target the plan
	   		var targetPlan = $('.data-bundles #switch_'+networkType+'_'+dataType);
	   	//display the selection
	   		 targetNetwork.prop('checked','checked');
	   		targetPlan.prop('checked','checked');
	   		var inputValue = targetNetwork.val();
	   		var targetBox = $("." + inputValue);
	        $(".box").not(targetBox).hide();
	        $(targetBox).show();
	       }else{
	       		$(".box").hide();
	       }
       
   });

});
//function to get sms unit balance 
	function balanceCheck(username,password){
		var url = "https://mobileairtimeng.com/httpapi/balance.php?userid="+username+"&pass="+password;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "get", url, false ); // false for synchronous request
		xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlHttp.send();
		var res = xmlHttp.responseText; 
	}
//function for airtime top up 
	function airtimeTopUp(username,password,phoneno,network,amount){

		var provider;
		switch(network){
			case "mtn":
				provider = 15;
				break;
			case "airtel":
				provider =  1;
				break;
			case "9mobile":
				provider = 2;
				break;
			case "glo" :
				provider = 6;
				break;
			default:
				provider = 4;
		}
		var url = "https://mobileairtimeng.com/httpapi/?userid="+username+"&pass="+password+"&network="+provider+"&phone="+phoneno+"&amt="+amount;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "get", url, false ); // false for synchronous request
		xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlHttp.send();
		var res = xmlHttp.responseText; 
	}
	function dataTopUp(username,password,phoneno,network,amount){

		var provider;
		switch(network){
			case "mtn":
				provider = 15;
				break;
			case "airtel":
				provider =  1;
				break;
			case "9mobile":
				provider = 2;
				break;
			case "glo" :
				provider = 6;
				break;
			default:
				provider = 4;
		}
		var url = "https://mobileairtimeng.com/httpapi/datatopup.php?userid="+username+"&pass="+password+"&network="+provider+"&phone="+phoneno+"&amt="+amount;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "get", url, false ); // false for synchronous request
		xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlHttp.send();
		var res = xmlHttp.responseText; 
	}