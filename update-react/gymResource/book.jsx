import React from "react";
class Book extends React.Component {
    constructor(...props) {
        super(...props)
    }

    confirmOrder() {
        if (this.props.orderNum.length != 0) {
            var amount, str2, str3, str4, arrId, ordermx;
            ordermx = [];
            amount = $(".book-submit>p>strong").html().slice(1);//合计总金额
            arrId = this.props.orderNum.map(index=>index.group_ids);
            arrId = arrId.join().split(",");
            str2 = [];//订单id值集合array
            for (var i = 0; i < arrId.length; i++) {
                if (arrId[i] != "undefined") {
                    str2.push(arrId[i])
                }
            }
            //场地信息集合Array
            str3 = this.props.orderNum.map(index=>index.clmcontent);
            str4 = moment(this.props.orderNum[0].date, "YYYYMMDD").format("YYYY年MM月DD日");//订单的日期
            //转码
            function transoc(content) {
                return JSON.stringify(content)
            }
            str2 = transoc(str2);
            str3 = transoc(str3);
            str4 = transoc(str4);
            window.location.href = "/confirm?gymid="
                + this.props.gymid
                + "&gymname=" +
                this.props.gymname
                + "&total=" + amount
                + "&ordermx="
                + ordermx
                + "&arrid="
                + str2
                + "&content="
                + str3 +
                "&time="
                + str4;
        }
    }

    render() {
        return (<div>
            <div className="book-order">
                <ul className={this.props.orderNum.length == 0 ? "book-tip" : "book-tip hide"}>
                    <li><span className="site sold"></span>已售</li>
                    <li><span className="site optional"></span>可选</li>
                    <li><span className="site selected"></span>已选</li>
                </ul>
                {/*已售可选已选标记*/}
                {
                    this.props.orderNum.length == 0 ? "" : (
                        <ul className="book-orderinfo">
                            {this.props.orderNum.map((index, i)=> {
                                return <li
                                    data-group_ids={index.group_ids}
                                    key={i}>
                                    <div>{index.startTime + "-" + index.endTime}</div>
                                    <div className="txtStyle3">{index.siteNo}</div>
                                </li>
                            })}
                        </ul>
                    )
                }
                <div className="book-submit J_submit clearfix">
                    {this.props.orderNum.length == 0 ? <p className="fl">请选择场地</p> : (<p className="fl">
                        合计： <strong style={{
                        color: "red",
                        fontWeight: 600
                    }}>{"￥" + this.props.orderNum.length * this.props.orderNum[0].price}</strong>
                    </p>)}
                    <button type="button" onClick={this.confirmOrder.bind(this)}
                            className={this.props.orderNum.length == 0 ? "fr am-btn am-radius am-btn-gray" : "fr am-btn am-radius am-btn-orange"}>
                        立即预订
                    </button>
                </div>
            </div>
            {/*标记及按钮*/}
            <div className="book-noPaySprite hide">
            </div>
            <div className="toast hide">
                <div className="toast-alert">
                    <div className="toast-msg"></div>
                </div>
            </div>
        </div>)
    }
}

export default Book;