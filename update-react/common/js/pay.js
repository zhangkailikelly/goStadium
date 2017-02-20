
var payType="微信支付";
var orderNo;

$(function(){
    orderNo=$("#orderNo").val();  //订单编号
	
});

//选择支付方式
function checkPaytype(type){
    payType=type;
    
	var order = {
	     'orderNo':orderNo,
	     'payType':payType,
	};
	
	//修改支付方式
	
	
	
	
     
};



//支付
function dopay(){
	
	if(payType=='微信支付'){
		var total=1;  //金额
		//var total=parseInt($("#total").val()*100);
		//var proName=$("#proName").val();  //商品名称
		//订单信息
		var payxinxi=orderNo+":"+total;
		//微信支付
		var appid='wxe9b85da4f83aea6c'; //写死为华亿创新的appid测试支付   正常应该这样动态取 $("#wxappid").val();  //场馆appid
		
		location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri=http%3A%2F%2Fgo.sportscv.cn%2Fwxpay%2Ftoken&response_type=code&scope=snsapi_base&state="+payxinxi+"#wechat_redirect";
	}else if(payType=='会员支付'){
		 $("#textmsg").text('暂不支持会员支付!');
		 $('#modal-alert').modal({
			 relatedTarget: this,
		 });
		 return;
	}
	
}

