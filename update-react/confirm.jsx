import React from "react";
import ReactDom from "react-dom";
import Header from "./gymResource/header";
import {Spin} from "antd";
import Warn from "./gymResource/warn";
var main = document.getElementById("main")

class Confirm extends React.Component {
    constructor(...prop) {
        super(...prop)
    }

    componentWillMount() {
        this.state = {
            gymId: "",
            content: [],
            gymname: "",
            time: "",
            total: "",
            phoneNum: "",
            title: "",
            arrId: [],
            wxopenId: "",
            loading: false,
            msg: ""
        }
    }

    componentDidMount() {
        var mation = window.location.search.slice(1).split("&");
        this.setState({
            gymId: decodeURI(mation[0].split("=")[1]),
            content: JSON.parse(decodeURI(mation[5].split("=")[1])),
            gymname: decodeURI(mation[1].split("=")[1]),
            time: JSON.parse(decodeURI(mation[6].split("=")[1])),
            total: JSON.parse(decodeURI(mation[2].split("=")[1])),
            arrId: JSON.parse(decodeURI(mation[4].split("=")[1]))
        })
        var _this = this;
        $.ajax({
            url: "/sport/confirmOrder",
            type: "get",
            success: function (data) {
                _this.setState({
                    title: data.title,
                    wxopenId: data.wxopenId
                }, function () {
                    $.get("/sport/clm/userphone", _this.state.wxopenId, function (data) {
                        _this.setState({phoneNum: data.phone})
                    })
                })
            }
        })
    }

    changeNum(e) {
        this.setState({
            phoneNum: e.target.value
        })
    }

    orderOK() {
        var _this = this;
        _this.setState({loading: true})
        //创建订单成功才能提交，微信openId，订单id，手机号验证
        //  Promise.all().then().catch
        var data1 = {
            gymname: this.state.gymname,
            total: this.state.total,
            gymid: this.state.gymId,
            arrid: JSON.stringify(this.state.arrId)
        }
        var data2 = {
            wxopenId: this.state.wxopenId,
            phone: this.state.phoneNum
        }
        var orderNo;
        var promises = [];
        promises[0] = new Promise((resolve, reject)=> {
            $.get("/sport/clm/updatephone", data2, function (result) {
                result.code == "200" ? resolve() : reject()
            })
        });
        promises[1] = new Promise((resolve, reject)=> {
            $.post("/sport/order/add", data1, function (result) {
                if (result.resultCode == "0") {
                    orderNo = result.orderNo;
                    resolve()
                } else {
                    reject()
                }
            })
        });

        Promise.all(promises).then(function () {
            window.location.href = "/orderPay?orderNo=" + orderNo
        }).catch(function () {
                _this.setState({loading: false, msg: "创建订单不成功"})
            }
        )

    }

    clearPhone() {
        this.setState({phoneNum: ""})
    }

    clearMsg() {
        this.setState({msg: ""})
    }

    render() {
        return (<div className="container" id="container">
                <Header h1={"确认订单"} bgcolor={"#000000"}/>
                <div className="Order am-u-sm-12 clearfix" style={{padding: "2rem 0 0 0", backgroundColor: "#ffffff"}}>
                    <p className="am-u-sm-12">
                        <label className="am-u-sm-4 ColorB" style={{fontWeight: "normal"}}>场馆名称：</label>
                        <span className="am-u-sm-8 ColorA" style={{fontSize:"1.4em"}}>{this.state.gymname}</span>
                    </p>
                    <hr data-am-widget="divider" className="am-divider am-divider-default" style={{marginTop: 0}}/>
                    <p className="am-u-sm-12">
                        <label className="am-u-sm-4 ColorB" style={{height: "70px", fontWeight: "normal"}}>场地明细：</label>
                        {this.state.content.length == 0 ? "" : this.state.content.map((index, i)=>(
                            <span style={{fontSize:"1.4em"}} key={i} className="am-u-sm-8 ColorA">{index}</span>))}
                    </p>
                    <hr data-am-widget="divider" className="am-divider am-divider-default" style={{marginTop: 0}}/>
                    <p className="am-u-sm-12">
                        <label className="am-u-sm-4 ColorB" style={{fontWeight: "normal"}}>日期：</label>
                        <span className="am-u-sm-8 ColorA" style={{fontSize:"1.4em"}}>{this.state.time}</span>
                    </p>
                </div>
                <div className="Order am-u-sm-12"
                     style={{marginTop: "20px", padding: "1rem 0 0 0", backgroundColor: "#fff"}}>
                    <p className="am-u-sm-12">
                        <label className="am-u-sm-4 ColorB" style={{fontWeight: "normal"}}>手机号：</label>
                        <span className="am-u-sm-8 ColorA PR">
                        <input ref="telNum" onChange={(e)=> {
                            this.changeNum(e)
                        }} value={this.state.phoneNum} id="userphone" type="number"
                               style={{fontSize:"1.4em",width: "85%", outline: "none", border: "none"}} placeholder="输入电话号码"/>
    			<i onClick={()=> {
                    this.clearPhone()
                }} className="fr am-icon-times-circle ColorC"></i>
    			</span>
                    </p>
                </div>
                <Warn msg={this.state.msg} clearMsg={()=> {
                    this.clearMsg()
                }}/>
                <div style={{
                    display: this.state.loading ? "block" : "none",
                    zIndex: "100",
                    textAlign: "center",
                    position: "fixed",
                    top: "0",
                    "bottom": "0",
                    width: "100%",
                    backgroundColor: "#000000",
                    opacity: "0.6"
                }}>
                    <Spin style={{position: "absolute", top: "50%",marginLeft:"-25.21px",marginTop:"-25px"}} tip="Loading..." size="large"
                          spinning={this.state.loading}/>
                </div>
                <div className="am-u-sm-12 botSubmit clearfix">
                    <p className="fl">合计：<em className="ColorO priceB">{"￥" + this.state.total}</em></p>
                    <button type="button" onClick={()=> {
                        this.orderOK()
                    }} className="fr am-btn am-radius am-btn-orange">提交订单
                    </button>
                </div>
            </div>
        )
    }
}

ReactDom.render(<Confirm/>, main)