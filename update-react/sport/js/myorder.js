//取消订单
function cancelorder(id){
	$("#confirm_msg").text('确定取消该订单吗？');
	$('#modal-confirm').modal({
        relatedTarget: this,
        onConfirm: function(options) {
          $.post('/sport/member/cancelorder',{'orderNo':id},function(result){
          	     if(result.resultCode=='0'){
          	     	lwpAlert('订单已取消');
          	     	location.href="/sport/member/orders";
          	     }else{
          	     	lwpAlert(result.datas);
          	     }
          });
        	
        },
        onCancel: function() {
          return;
        }
    });
	
}

//查看订单
function orderinfo(id){
	location.href="/sport/member/orderinfo?orderNo="+id;
}

//去支付
function topay(id){
	location.href="/sport/order/pay?orderNo="+id;
}
