/**
 * Created by kellyZhang on 2017/1/9.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Spin} from "antd";
import {Container, Tabs} from "amazeui-touch";

var main = document.getElementById("main");

class Details extends React.Component {
    constructor(...props) {
        super(...props)
    }

    componentWillMount() {
        this.state = {
            d1imgNum: 0,
            d1imgUrls: [],
            d1id: "",
            d1name: "",
            d1linkmanphone: "",
            d1city: "",
            d1district: "",
            d1address: "",
            data2: [],
            weeks: [],
            map: [],
            ids: [],
            datas: [],
            loading:true
        }
    }

    componentDidMount() {
        $($("head").find("style")[0]).remove();//删除antd组件的通用样式,避免覆盖
        var _this = this;
        var data2 = [];
        var weeks = [];
        var ids = [];

        //通过pramas获取场馆id值
        var _id = window.location.search.slice(1);
        //获取场馆的数据
        var getData = new Promise((resolve, reject)=> {
            $.ajax({
                url: "/sport/details?"+_id,
                type: "get",
                success:function(data){
                    resolve(data)
                }
            })
        })
        getData.then(
            data=> {
                if (data) {
                    if (data.data2) {
                        data.data2.map(index=> {
                            if (index.billingUnit != 2) {
                                data2.push(index)
                            }
                        });
                        data2.map(index=> {
                            index.price = ["", "", "", ""]
                            return index;
                        })
                        ids = data2.map(index=>index.id)
                    }
                    if (data.weeks) {
                        weeks = data.weeks
                    }
                    if (data.data1) {
                        _this.setState({
                            d1imgNum: 0,
                            d1imgUrls: data.data1.imgurl || this.state.d1imgUrls,
                            ids: ids || this.state.ids,
                            weeks: weeks || this.state.weeks,
                            data2: data2 || this.state.data2,
                            d1id: data.data1.id || this.state.d1id,
                            d1name: data.data1.name || this.state.d1linkmanphone,
                            d1linkmanphone: data.data1.linkmanphone || this.state.d1linkmanphone,
                            d1city: data.data1.city || this.state.d1city,
                            d1district: data.data1.district || this.state.d1district,
                            d1address: data.data1.address || this.state.d1address
                        })
                    }
                    _this.getOnePrice(0, data2, ids, weeks)
                }

            }
        )
    }

    updatePrice(data2, weeks) {
        var newTabs = [];//
        data2.map((data, i)=> {
            if (data.billingUnit != 2) {
                var obj = {};
                obj.title = data.fieldname;
                obj.desc = weeks.map((index, i)=> {
                    return (
                        <div className="swiper-slide uniform"
                             style={{float: "left", background: "#ffffff", width: "25%", textAlign: "center"}} key={i}>
                            <div className="DateOrder">
                                <p className="good-price">
                                    <strong
                                        className="am-text-secondary ColorO">￥{data.price[i]}
                                        <em className="little-price">起</em>
                                    </strong>
                                </p>
                                <h3 className="ColorA">{index.w}</h3>
                                <p className="ColorB DateOrderT">{index.md}</p>
                                <a href={"/gymresource?gymid=" + this.state.d1id + "&fiedid=" + data.id + "&date=" + index.d + "&gymname=" + this.state.d1name + data.fieldname + "#" + i}
                                   className="ColorO DateOrderBut">预定</a>
                            </div>
                        </div>
                    )
                })
                newTabs.push(obj);
            }
        })
        this.setState({map: newTabs, data2: data2,loading:false});
    }

    getOnePrice(e, data2 = this.state.data2, ids = this.state.ids, weeks = this.state.weeks) {
        var _this = this;
        $.ajax({
            beforeSend:function(){_this.setState({loading:true})},
            type: "get",
            url: "/sport/gym/clm/details?fiedid=" + ids[e],
            success: (datas)=> {
                data2[e].price = datas;
                _this.updatePrice(data2, weeks)
            }
        })
    }

    collect() {
        //点赞
    }

    componentDidUpdate() {
        //滑块的宽度
        var conWidth = $(".tabs>.btn-group-justify").outerWidth();
        //最大滑动距离，大于0允许滑动
        var maxDis = conWidth - $(".tabs").width() > 0 ? conWidth - $(".tabs").width() : 0;
        if (maxDis > 0) {
            var start = 0,  //滑动的初始位置
                moveDis,        //此次的滑动距离
                currentLoca;//当前位置
            $(".tabs-nav").on("touchstart", function (e) {
                start = e.originalEvent.changedTouches[0].clientX;
                currentLoca = parseFloat($(".tabs-nav").css("margin-Left"));

            })
            $(".tabs-nav").on("touchmove", function (e) {
                moveDis = e.originalEvent.changedTouches[0].clientX - start;
                //向右移动时
                if (moveDis > 0) {
                    if (Math.abs(currentLoca) > moveDis) {
                        $(".tabs-nav").css("margin-Left", moveDis + currentLoca + "px");
                    } else {
                        $(".tabs-nav").css("margin-Left", 0 + "px");
                    }
                    //向左移动时
                } else if (moveDis < 0) {
                    if (Math.abs(moveDis + currentLoca) < maxDis) {
                        $(".tabs-nav").css("margin-Left", moveDis + currentLoca + "px");

                    } else {
                        $(".tabs-nav").css("margin-Left", "-" + maxDis + "px");
                    }

                }
            })

        }
    }

    render() {
        return (
            <div className="container" id="container">
                <div style={{
                    display: this.state.loading ? "block" : "none",
                    zIndex: 10000000,
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
                <header className="am-header am-header-default am-no-layout header-opacity">
                    <div className="am-header-left am-header-nav">
                        <a href="javascript:history.back();">
                            <span className="am-header-nav-title"></span>
                            <i className="am-header-icon am-icon-chevron-left"></i>
                        </a>
                    </div>
                    <div className="am-header-right am-header-nav">
                        <a href="#" onClick={this.collect.bind(this)}>
                            <i className="am-header-icon am-icon-heart-o"></i>
                        </a>
                    </div>
                </header>
                {/*图片轮播*/}
                <div data-am-widget="slider" className="am-slider am-slider-c2 am-sliders am-no-layout"
                     style={{marginTop: "-59px"}}>
                    <span className="ImgNumber">
                        {this.state.d1imgNum}张
                    </span>
                    <div className="am-viewport">
                        <ul className="am-slides">
                            {this.state.d1imgUrls.map((index, i)=> {
                                return <li key={i}>
                                    <img src={"http://101.200.133.31:3008/uploadImage/" + this.state.id + "/" + index}
                                         style={{height: "200px"}}/>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                {/*图片轮播*/}
                <div className="CGlianxi" style={{padding: "1rem 1rem 0"}}>
                    <h2 className="ColorA">{this.state.d1name}
                        <a href={"tel:" + this.state.d1linkmanphone} className="fr ico-phone">
                            <span style={{borderLeft: "1px solid #d5d5d5", paddingLeft: "10px"}}><i></i></span>
                        </a>
                    </h2>
                    <p style={{padding: "1rem 0 0", margin: 0, fontSize: "1.6rem"}}>
                        <a href="javascript:;" className="ico-DW">
                            <span>
                                <i></i>
                            </span>
                        </a>
                        {this.state.d1city}{this.state.d1district}{this.state.d1address}
                    </p>
                </div>

                <hr className="am-margin-top-sm am-margin-bottom-sm"/>
                {
                    this.state.data2.length == 0 ? (
                        <div className="am-u-sm-12 am-text-center" style={{color: "red"}}>
                            抱歉!该场馆暂无开放场地...
                        </div>) : (
                        <div>
                            <Container style={{padding: 0, width: "100%"}}>
                                <Tabs onAction={(e)=> {
                                    this.getOnePrice(e)
                                }} style={{margin: 0}}>
                                    {this.state.map.map((ablum, i) => {
                                        return (
                                            <Tabs.Item navStyle='secondary' title={ablum.title} noPadded={true} key={i}>
                                                {ablum.desc}
                                            </Tabs.Item>
                                        )
                                    })}
                                </Tabs>
                            </Container>
                            <div className="am-u-sm-12 clearfix" style={{padding: 0}}>
                                <div className="am-panel am-panel-default PBpanel"
                                     style={{padding: 0, marginBottom: 0, border: 0}}>
                                    <div className="am-panel-hd ColorB">
                                        服务说明
                                    </div>
                                    <div className="am-panel-bd ColorB" style={{paddingLeft: "20px"}}>
                                        <ul className="serviceIco clearfix">
                                            <li>
                                                <img src="/images/ico-car.png"/>
                                                <p>停车</p>
                                            </li>
                                            <li>
                                                <img src="/images/ico-bath.png"/>
                                                <p>淋浴</p>
                                            </li>
                                            <li>
                                                <img src="/images/ico-keyboard.png"/>
                                                <p>储衣柜</p>
                                            </li>
                                            <li>
                                                <img src="/images/ico-cloth.png"/>
                                                <p>更衣室</p>
                                            </li>
                                            <li>
                                                <img src="/images/ico-hot.png"/>
                                                <p>暖气</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="am-u-sm-12 clearfix"
                                 style={{
                                     padding: "0 0 1rem 0",
                                     backgroundColor: "#ffffff",
                                     borderBottom: "12px solid #f0f1f5"
                                 }}>
                                <div className="am-panel am-panel-default PBpanel"
                                     style={{padding: 0, marginBottom: 0, border: 0}}>
                                    <div className="am-panel-hd ColorB">
                                        场地说明
                                    </div>
                                    <div className="am-panel-bd ColorB">
                                        室内、侧灯、塑胶地板
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}


ReactDOM.render(<Details/>, main)












