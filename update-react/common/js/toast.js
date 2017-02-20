/** 
 * 模仿android里面的Toast效果，主要是用于在不打断程序正常执行的情况下显示提示数据 
 * @param config 
 * @return 
 * 用法：new Toast({message:'Toast效果显示'}).show(); 
 */  



var Toast = function(config){  
    this.context = config.context==null?$('body'):config.context;//上下文  
    this.message = config.message;//显示内容  
    this.time = config.time==null?3000:config.time;//持续时间  
    this.left = config.left;//距容器左边的距离  
    this.top = config.top;//距容器上方的距离  
    this.bgcolor=config.bgcolor;
    this.init();  
}  
var msgEntity;  
Toast.prototype = {  
    //初始化显示的位置内容等  
    init : function(){  
        $("#toastMessage").remove();  
        //设置消息体  
        var msgDIV = new Array();  
        msgDIV.push('<div id="toastMessage">');  
        msgDIV.push('<span>'+this.message+'</span>');  
        msgDIV.push('</div>');  
        msgEntity = $(msgDIV.join('')).appendTo(this.context);  
        //设置消息样式  
        var left = this.left == null ? this.context.width()/2-msgEntity.find('span').width()/2 : this.left;  
      //  var top = this.top == null ? this.context.height()/2-msgEntity.find('span').height()/2 : this.height;  
                                  //屏幕分辨率高window.screen.height    窗口可视高$(window).height()
        var top=this.top == null?$(window).height()/2:this.top; 
        
        //var top = this.top == null ? '20px' : this.top;  
        var bgcolor=this.bgcolor == null ? 'black' : this.bgcolor; 
        msgEntity.css({position:'absolute',top:top,'z-index':'9999',left:left,'border-radius':'5px','background-color':bgcolor,color:'white','font-size':'16px',padding:'5px'});  
        msgEntity.hide();  
    },  
    //显示动画  
    show :function(){  
        msgEntity.fadeIn(this.time/2);  
        $("#toastMessage").animate({top:'0px'});
        msgEntity.fadeOut(this.time/2);  
    }  
          
}  

//Toast效果
function lwpToast(config){
	var bgcolor=config.bgcolor == null ? 'black' : config.bgcolor; 
	var text=config.text;
	
	var html='<div id="toast" style="position: fixed;left: 50%;bottom: 50%;z-index: 9999;background-color:'+bgcolor+';color: #FFF;border-radius:5px;padding: 5px;width: 200px;text-align: center;margin-left: -95px;margin-top: -18px;opacity: .8;">';
	    html+=text;
	    html+='</div>';
	
	$(document.body).append(html);
	
	$("#toast").fadeIn(3000);  
   // $("#toast").animate({top:'0px'});
    $("#toast").fadeOut(3000);
	
}


//alert 提示框
function lwpAlert(text){
	
	$("#my-alert").remove();  
	var html='<div class="am-modal am-modal-alert" tabindex="-1" id="my-alert" >';
	    html+='<div class="am-modal-dialog" style="border-radius:5px;">';
		    html+='<div class="am-modal-hd">提示</div>';
		    html+='<div class="am-modal-bd">';
		    html+=text;
		    html+='</div>';
		    html+='<div class="am-modal-footer">';
		    html+='<span class="am-modal-btn">确定</span>';
		    html+='</div>';
	    html+='</div>';
	html+='</div>';
	
	$(document.body).append(html);
	
	$('#my-alert').modal({
		 relatedTarget: this,
	});
	
	
}



