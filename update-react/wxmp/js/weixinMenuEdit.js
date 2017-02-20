/**
微信菜单管理前端控制js
@author :laiwp
@date:  :2015-05-05
@version : 0.1.0 
@constructor : 0.1.0 
*/

$(document).ready(function() {
	
	$('#btn_save').click(function(){
		var check = true;
		$('input[type=text]').each(function(){
			 if($(this).val() == '' && $(this).attr("required")){
				$(this).attr('placeholder','请输入');
		
				check = false;
			}
		});
		
		var menuType=$('input[name="menuType"]:checked').val();
		var data="appid="+$("#appid").val();
		data+='&secret='+$("#secret").val();
		data+='&menuType='+menuType;
		data+='&menuBody='+$("#menuBody").val();
        
	    $("#confirm_msg").text('确认:'+menuType+'吗？');
		$('#modal-confirm').modal({
	        relatedTarget: this,
	        onConfirm: function(options) {
	          $.post('/wx/menu/edit',data,function(result){
	          	    if(menuType== "菜单查询"){
						$("#menuBody").text(result);	
					}else{
						 $("#textmsg").text(result);
						 $('#modal-alert').modal({
							 relatedTarget: this,
						 });
					}
					 $("#textmsg").text("提交成功");
					 $('#modal-alert').modal({
						 relatedTarget: this,
					 });
	          	
	          });
	        	
	        },
	        onCancel: function() {
	          return;
	        }
	    });
	    
	     
	    
	});
});
