import React from "react";
import ReactDOM from "react-dom";

var main=document.getElementById('main');

class List extends React.Component{
	constructor(...props){
		super(...props)
	}
	componentWillMount(){
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		var _this=this;
		$.ajax({
			url:"/sport/list",
			type:"get",
			success:function(newData){
				if(newData.locals.data.length>0){
					var data=newData.locals.data.map((index,i)=>{
						var imgUrl=Array.isArray(index.imgurl)?index.imgurl[0]:index.imgurl
						var s="http://101.200.133.31:3008/uploadImage/"+index.id+'/'+imgUrl;
						index.imgurl=index.imgurl?s:index.imgurl;
						return index;
						}
					)
					_this.setState({
						list:data
					})
					
				}
			}
		})
	}
	locations(id){
		window.location.href="/detail?id="+id;
	}
	render(){
		return (<div className="group-body">
				<ul className="am-list am-list-static">
					
					{
						this.state.list.length==0?(<div style={{textAlign:"center"}}>
						暂无信息...
						</div>):this.state.list.map((index,i)=>(

							<li key={i} target="_blank" className="am-g good-detial" onClick={this.locations.bind(this,index.id)}>
								<div className="am-u-sm-3">
									<img src={index.imgurl} className="scrollLoading" style={{height:"70px"}}/>
								</div>
								<div className="am-u-sm-9 ">
									<p className="am-text-sm good-name ColorA" >
										{index.name}
										<span className="am-fr am-text-xs am-text-default ColorB">500m
								        </span>
									</p>
									<p className="good-price">
								        <strong className="am-text-secondary ColorO">￥10
								        	<em className="little-price">起</em>
								        </strong>
								    </p>
								</div>
							</li>

							))
					}

				</ul>
			</div>)
	}
}

ReactDOM.render(<List/>,main)