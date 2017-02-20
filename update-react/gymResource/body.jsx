import React from "react";
import ReactDOM from "react-dom";
import {Spin} from "antd";

import Header from "./header";
import SelectWeek from "./selectWeek";
import BookContainer from "./bookContainer";
import Warn from "./warn";
import Book from "./book";
var main = document.getElementById("main")

class Body extends React.Component {
    constructor() {
        super()
    }

    componentWillMount() {
        this.state = {
            weeks: [],//周
            title: "选择场地",
            bookData: [],//预定的数据
            active: 0,//当前选中的周
            gymid: "",
            gymname: "",
            fiedid: "",
            loading: true,
            msg: "",//错误信息
            orderNum: []//TODO 选中的订单
        }
    }

    componentDidMount() {
        $($("head").find("style")[0]).remove();//删除antd组件的通用样式,避免覆盖
        // var timers = moment().format("YYYYMMDD");
        // var testId = "gymid=f8d5e740-91a8-11e6-9c3c-25a22e7c8c34&fiedid=9e05aeb7-bd23-4205-af3a-1f5513568af9&date=" + timers + "&gymname=宁夏亲水体育中心篮球场#2";
        var _id = window.location.search.slice(1);
        var hash = window.location.hash[1];//获取哈希值,0为当天,以此类推;
        var _this = this;
        var weeks,
            date,
            gymid,
            fiedid,
            gymname,
            title;
        $.ajax({
            url: "/sport/gymresource?" + _id,
            type: "get",
            success: function (data) {
                if (data) {
                    if (data.weeks) {
                        weeks = data.weeks;
                    }
                    title = data.title
                    if (data.params) {
                        date = data.params.date
                        gymid = data.params.gymid
                        fiedid = data.params.fiedid
                        gymname = data.params.gymname
                    }
                    _this.setState({
                            weeks: weeks,
                            title: title,
                            gymid: gymid,
                            gymname: gymname,
                            /*TODO active为hash值，用户选中的那天*/
                            active: hash,
                            fiedid: fiedid
                        },
                        function () {
                            //获取日期选择信息，成功后在获取价格
                            if (date && gymid && fiedid) {
                                _this.getPrice(date, gymid, fiedid)
                            }
                        }
                    )
                }
            }
        })
        setInterval(function () {
            var f = false;
            //实实更新状态
            _this.updateSelect()
            // 提交订单前判断选中的是否超时
            if (_this.state.orderNum.length == 0) {
                return;
            }
            var updateOrderNum = [];
            var newOrderNum = _this.state.orderNum
            for (var i = 0; i < newOrderNum.length; i++) {
                if ((newOrderNum[i].date + newOrderNum[i].startTime.split(":").join("")) > moment().format("YYYYMMDDHHmmss")) {
                    updateOrderNum.push(newOrderNum[i]);
                    continue;
                }
                f = true;
            }
            if (f) {
                _this.setState({orderNum: updateOrderNum})
            }

        }, 500)
    }

    getPrice(date, gymid = this.state.gymid, fiedid = this.state.fiedid) {
        var _this = this
        $.ajax({
            beforeSend: function () {
                _this.setState({loading: true})
            },
            url: "/sport/clm/resource?" + "gymid=" + gymid + "&fiedid=" + fiedid + "&date=" + date,
            type: "get",
            success: function (data) {
                //设定类名,区分已预订,未预定,已过期
                if (data && Array.isArray(data) && data.length > 0) {
                 //   var nowDate = data[0][0].beginTime.slice(0, 8)//获取日期
                   // var selectDate = _this.state.orderNum.length > 0 ? _this.state.orderNum[0].date : 0;
                    //var pos = selectDate == 0 ? [] : _this.state.orderNum.map(index=>(index.siteNo + index.startTime))
                    var newData = data.map(index=> {
                        return index.map(v=> {
                            v.className = moment().format("YYYYMMDDHHmmss") > v.beginTime ? "overtime" : v.num==1 ?"available" : "sold";
                            return v;
                        })
                    })
                    _this.setState({bookData: newData, loading: false});
                }
            }
        })
    }

    updateSelect() {
        //时时更新,判断所选订单是否过期
        var f = false;
        var oldState = this.state.bookData;
        var newData = oldState.map(index=> {
            return index.map(v=> {
                if (moment().format("YYYYMMDDHHmmss") > v.beginTime && v.className != "overtime") {
                    v.className = "overtime";
                    f = true;
                }
                return v;
            })
        })
        if (f) {
            this.setState({bookData: newData});
        }
    }

    book(num, newName, mation) {
        /**
         * mation  携带信息
         * num     获取位置
         * newName 新的类名 select/available/overtime
         * * @type {Array}
         */

        var results = [];
        var oldName = this.state.bookData;
        var pos = num.split("|")[0]
        var p1 = pos.split(",")[0];
        var p2 = pos.split(",")[1];
        mation.date = num.split("|")[2];//获取当天日期
        if (newName == "selected" && this.state.orderNum.length == 0) {
            results.push(mation);
            oldName[p1][p2].className = newName;
        } else {
            //取消
            if (newName != "selected") {
                for (var i = 0; i < this.state.orderNum.length; i++) {
                    if (mation.pos != this.state.orderNum[i].pos) {
                        results.push(this.state.orderNum[i])
                    }
                }
                oldName[p1][p2].className = newName;
            } else {
                //预定，判断预定的个数是否大于四条
                if (this.state.orderNum.length == 4) {
                    this.setMsg("每次只能预定四条")
                    return;
                } else {
                    results = this.state.orderNum;
                    results.push(mation);
                    oldName[p1][p2].className = newName;
                }
            }
        }
        this.setState({
            orderNum: results,
            bookData: oldName
        })
    }

    clearMsg() {
        this.setState({msg: ""})
    }

    clearOrder() {
        this.setState({
            orderNum: []
        })
    }

    setMsg(msg) {
        this.setState({msg: msg})
    }
    clearLoading(){
        this.setState({loading:false})
    }
    render() {
        return (<div className="container">
            <Header h1={this.state.title}/>
            <SelectWeek
                clearOrder={()=> {
                    this.clearOrder()
                }}
                date={this.state.weeks}
                getData={(date)=> {
                    this.getPrice(date)
                }}
                active={this.state.active}
            />
            <BookContainer
                clearLoading={()=>{this.clearLoading()}}
                bookData={this.state.bookData}
                setMsg={(msg)=> {
                    this.setMsg(msg)
                }}
                setClassName={(num, newName, mation)=> {
                    this.book(num, newName, mation)
                }}
            />
            <Warn msg={this.state.msg}
                  clearMsg={()=> {
                      this.clearMsg()
                  }
                  }/>
            <Book orderNum={this.state.orderNum}
                  gymname={this.state.gymname}
                  gymid={this.state.gymid}
            />
            <div style={{
                display: this.state.loading ? "block" : "none",
                zIndex: "100",
                textAlign: "center",
                position: "fixed",
                top: 0,
                bottom: 0,
                width: "100%",
                backgroundColor: "#000000",
                opacity: "0.6"
            }}>
                <Spin style={{position: "absolute", top: "50%", marginLeft: "-25.21px", marginTop: "-25px"}}
                      tip="Loading..." size="large"
                      spinning={this.state.loading}/>
            </div>
        </div>)
    }
}

ReactDOM.render(<Body/>, main)
