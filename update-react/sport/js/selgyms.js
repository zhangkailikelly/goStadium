var gymid;   //场馆id
var fiedid;  //场地id
var ddate;  //日期
var amount=0;	 //总价

var ordermx=[]; //场地明细

$(function(){
	gymid=$("#gymid").val();
	fiedid=$("#fiedid").val();
	ddate=$("#date").val();
	// console.log(ddate);
	//初始化数据
	var liIndex = Number(window.location.hash[1]);
	//alert(liIndex);
	setTimeout(function(){
		$(".swiper-wrapper .swiper-slide").eq(liIndex).trigger("click");
	});
	initdata(ddate);
	
});


//初始化数据
function initdata(ddate){
	var data="gymid="+gymid+"&fiedid="+fiedid+"&date="+ddate;
	$.get('/sport/clm/resource',data,function(result){
		//console.log(result);

		if(result.code){
			var tempFn1 = doT.template($('#test_tmpl1').html());
			var resultText1 = tempFn1(result);
			console.log(resultText1);
			$('.book-list').html(resultText1);
		}else{
			var tempFn = doT.template($('#test_tmpl').html());
			var resultText = tempFn(result);
			$('.book-list').html(resultText);
			var len = result.length;

			$(".book-area ul").css({width:($(".book-area ul li").width())*(len+1)+1030});
			$(".book-area ul").html(creatDom(len));
			$(".book-time ul").html(creatTimeDom(result[0]));
			//$(".book-list").css({width:($(".book-area ul li").width())*(len+1)+1000,zIndex:"999"});
		}

	});
	
}

//
function getData(data){
	//ddate=data;
	initdata(data);
}




//确认订单
/**
 * 处理资源id;
 * @param arr
 * @returns {Array}
 */
function chuliId(arr){
	var arrId4 = [];
	Array.prototype.slice.call(arrId).join(",").split(",").forEach(function(ele,index){
		if(ele != "undefined"){
			arrId4.push(ele);
		}
	});
	return arrId4;
}
function confirmOrder(){
	//var arrId = [];
	//var carrId2 = Array.prototype.slice.call(arrId).join(",").split(",");
	//var str = carrId2.join(",");
	//var arrId3 = str.split(",");


	arrId = $('.book-list .selected').map(function(index,ele){

		return $(this).attr("group_ids");
	});
	var arrId4 = chuliId(arrId);
	var data = {
		arr:arrId4
	}
	var str2 = encodeURIComponent(JSON.stringify(data));


	//拼接场地信息字符串通过Url传递;
	arrContent = $('.book-list .selected').map(function(index,ele){

		return $(this).attr("clmcontent");
	});
	var strContent =  Array.prototype.slice.call(arrContent);
	var dataContent = {
		content:strContent
	}
	var  str3= encodeURIComponent(JSON.stringify(dataContent));

	console.log(str3);
	var str5 = $(".swiper-wrapper .active .DateOrderT").text();
	var str4 = encodeURIComponent(JSON.stringify(str5));

	console.log(str4);



	location.href="/sport/confirmOrder?gymid="+$("#gymid").val()+"&gymname="+$("#gymname").val()+"&total="+amount+"&ordermx="+ordermx+"&arrid="+str2+"&content="+str3+"&time="+str4;
	
	//$.post('/sport/confirmOrder',data);
	
}

function creatDom( num ){
	var dom = '';
	for(var i = 0; i<num; i++){
		dom += "<li>"+(i+1)+"号场"+"</li>"
	}
	return dom;
}

function creatTimeDom( num ){
	var dom = '';
	var len = num.length;
	for(var i = 0; i <len; i++){
		if(i == 0){
			dom += "<li style='margin-top:20px;'>"+num[i].beginTimeText+"</li>";
		}else{
			dom += "<li>"+num[i].beginTimeText+"</li>";
		}
	}
	dom += "<li>"+num[len-1].endTimeText+"</li>"


	return dom;
}