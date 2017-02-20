console.log("场馆详情页");
//收藏场馆
function collect(){
	
	
	
	
}
/**
 * data 格式如下:{
 *  fiedid:$('li.am-active').attr("dataId");
 * }
 * 封装$.get获取价格数组;
 * @param data
 */

function getDate(data){
    $.get('/sport/gym/clm/details',data).then(function(data){
        console.log(data);
        var dataText = [];
        if(data[0] == null){
            return;
        }
        for(var i =0;i<data.length; i++){
            dataText.push( "￥"+data[i]+"起" );
        }
        $(".am-active .am-text-secondary").each(function(index, ele){
            $(ele).text(dataText[index]);
        })
    })
}


$(function(){
    var data = {
        fiedid:$('li.am-active').attr("dataId")
    }

    getDate(data)



    $("#clm-tabs").on("click","li",function(){
        console.log($(this).attr("dataId"));
        var data = {
            fiedid:$(this).attr("dataId")
        }

        getDate(data);


    })
})
