import React from "react";
import ReactDom from "react-dom";
import Header from "./gymResource/header";
var main = document.getElementById("main");

class OrderPay extends React.Component {
    constructor(...prop) {
        super(...prop)
    }

    componentWillMount() {
        this.state = {
            type: "微信支付",
            amount: "",
            gymName: "",
            gyming: "",
            appid: "",
            id: ""
        }

    }

    componentDidMount() {
        var _this = this;
        $.get("/sport/order/pay" + location.search, function (data) {
            _this.setState({
                amount: data.orderinfo.amount,
                gymName: data.orderinfo.amount.gymName,
                gyming: data.gyming,
                appid: data.appid,
                id: data.orderinfo.id
            })
        })
    }

    checkPaytype(type) {
        this.setState({type: type})
    }

    dopay() {
        var type = this.state.type;
        if (type == "微信支付") {
            var total = 1;  //金额
            //var total=parseInt($("#total").val()*100);
            //var proName=$("#proName").val();  //商品名称
            //订单信息
            var payxinxi = this.state.id + ":" + total;
            //微信支付
            var appid = 'wxe9b85da4f83aea6c'; //写死为华亿创新的appid测试支付   正常应该这样动态取 $("#wxappid").val();  //场馆appid

            location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=http%3A%2F%2Fgo.sportscv.cn%2Fwxpay%2Ftoken&response_type=code&scope=snsapi_base&state=" + payxinxi + "#wechat_redirect";
        } else if (type == "会员支付") {
            $("#textmsg").text('暂不支持会员支付!');
            $('#modal-alert').modal({
                relatedTarget: this,
            });
            return;
        }
    }

    render() {
        return (<div>
            <Header h1={"支付订单"} bgcolor={"#0e90d2"}/>
            <div className="am-g" style={{backgroundColor: "#ffffff", padding: "1rem 0"}}>
                <div className="am-u-sm-12">
                    <div className="am-u-sm-3">
                        <a href="#">
                            <img src={this.state.gyming} style={{height: "49px", width: "49px", borderRadius: "100%"}}/>
                        </a>
                    </div>
                    <div className="am-u-sm-9">
                        <div className="am-g ColorA">{"￥" + this.state.amount}</div>
                        <div className="am-g ColorA">{this.state.gymName}</div>
                    </div>
                </div>
            </div>
            <div className="jianju" style={{margin: 0}}></div>
            <div className="am-g payment" style={{backgroundColor: "#ffffff"}}>
                <div className="am-u-sm-12">
                    <div className="am-btn-group doc-js-btn-1 payWay" data-am-button>
                        <label style={{width: "100%"}} className="am-btn am-btn-primary am-active" onClick={()=> {
                            this.checkPaytype('微信支付')
                        }}>
                            <input type="radio" name="payType" value="微信支付"/>
                            <span className="ColorA">
							  	<img src="/images/weixin.png"/>微信支付
							</span>
                        </label>
                        <hr data-am-widget="divider" className="am-divider am-divider-default"
                            style={{margin: "0 -2rem"}}/>
                        <label className="am-btn am-btn-primary" onClick={()=> {
                            this.checkPaytype('会员支付')
                        }}>
                            <input type="radio" name="payType" value="会员支付"/>
                            <span className="ColorA">
								<img src="/images/card.png"/>会员支付
							</span>
                            <a href="#" className="HYarrow">
                                <i className="am-icon-angle-right am-icon-sm fr ColorC"></i>
                            </a>
                        </label>
                    </div>

                </div>
            </div>
            <div className="am-g">
                <div className="am-u-sm-12" style={{marginTop: "60px"}}>
                    <button type="button" onClick={()=> {
                        this.dopay()
                    }} className="am-btn am-radius am-btn-orange am-btn-block">
                        确认支付<em
                        className="price">{"￥" + this.state.amount}</em></button>
                </div>
            </div>
            <div className="am-modal am-modal-alert" tabIndex="-1" id="modal-alert">
                <div className="am-modal-dialog" style={{borderRadius: "5px"}}>
                    <div className="am-modal-hd">
                        提示
                    </div>
                    <div className="am-modal-bd" id="textmsg"></div>
                    <div className="am-modal-footer">
                        <span className="am-modal-btn">确定</span>
                    </div>
                </div>
            </div>
        </div>)
    }
}

ReactDom.render(
    <OrderPay/>
    , main)