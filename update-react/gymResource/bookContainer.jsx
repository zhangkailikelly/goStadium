import React from "react";

class BookContainer extends React.Component {
    constructor(...props) {
        super(...props)
    }

    componentDidMount() {
        // var containW = $("#wrapper").width();
        // var containH = $("#wrapper").height();
        // var bookW = $(".book-list").outerWidth();
        // var bookH = $(".book-list").outerHeight();
        // if (bookW > containW) {
        //     var maxDisW = bookW - containW;
        //     var startW = 0;//触摸初始位置
        //     var posW = 0;//滑块位置
        //     $(".book-list").on("touchstart", function (e) {
        //         startW = e.originalEvent.touches[0].clientX;
        //         posW = parseFloat($(this).css("margin-left"));
        //     })
        //     $(".book-list").on("touchmove", function (e) {
        //         //滑动的距离
        //         var movedis = e.originalEvent.touches[0].clientX - startW;
        //         //当前位置
        //         //  右滑
        //         if (movedis > 0) {
        //             if (Math.abs(posW) > movedis) {
        //                 $(this).css("margin-left", posW + movedis + "px")
        //                 $(".book-area ul").css("margin-left", posW + movedis + "px")
        //
        //             } else {
        //                 $(this).css("margin-left", 0 + "px")
        //                 $(".book-area ul").css("margin-left", 0 + "px")
        //
        //             }
        //
        //         } else if (movedis < 0) {
        //             if (Math.abs(posW + movedis) < maxDisW) {
        //                 $(this).css("margin-left", posW + movedis + "px");
        //                 $(".book-area ul").css("margin-left", posW + movedis + "px")
        //             } else {
        //                 $(this).css("margin-left", "-" + maxDisW + "px")
        //                 $(".book-area ul").css("margin-left", "-" + maxDisW + "px")
        //
        //             }
        //
        //         }
        //     })
        // }
        // if (bookH> containH) {
        //     var maxDisH = bookH - containH;
        //     var startH = 0;//触摸初始位置
        //     var posH = 0;//滑块位置
        //     $(".book-list").on("touchstart", function (e) {
        //         startH = e.originalEvent.touches[0].clientY;
        //         posH = parseFloat($(this).css("margin-top"));
        //     })
        //     $(".book-list").on("touchmove", function (e) {
        //         //滑动的距离
        //         var movedisH = e.originalEvent.touches[0].clientY - startH;
        //         //当前位置
        //         //  下滑
        //         if (movedisH > 0) {
        //             if (Math.abs(posH) > movedisH) {
        //                 $(this).css("top", posH + movedisH + "px")
        //                 $(".book-time ul").css("margin-top", posH + movedisH + "px")
        //
        //             } else {
        //                 $(this).css("margin-top", 0 + "px")
        //                 $(".book-time ul").css("margin-top", 0 + "px")
        //
        //             }
        //
        //         } else if (movedisH < 0) {
        //             if (Math.abs(posH + movedisH) < maxDisH) {
        //                 $(this).css("top", posH + movedisH + "px");
        //                 $(".book-time ul").css("margin-top", posH + movedisH + "px")
        //             } else {
        //                 $(this).css("top", "-" + maxDisH + "px")
        //                 $(".book-time ul").css("margin-top", "-" + maxDisH + "px")
        //
        //             }
        //
        //         }
        //     })
        // }

        $("#wrapper").scroll(function(){
           var left=$(this).scrollLeft()
           var top=$(this).scrollTop()
            $(".book-area>ul").css("left",-left)
            $(".book-time>ul").css("marginTop",-top)
        })


        this.props.clearLoading();//取消加载


    }

    select(num) {
        //获取类名,用来判断状态
        var oldClassName = this.refs[num].className;
        var mation, price, siteNo, startDate, endDate, goodId,group_ids,clmcontent;
        mation = {};
        price = $(this.refs[num]).data("price"); //价格
        siteNo = $(this.refs[num]).data("content").split(",")[2];
        startDate = $(this.refs[num]).data("content").split(",")[0];
        endDate = $(this.refs[num]).data("content").split(",")[1];
        goodId = $(this.refs[num]).data("goodsid");
        group_ids=$(this.refs[num]).data("group_ids");
        clmcontent=$(this.refs[num]).data("clmcontent");
        mation.startTime = startDate;
        mation.endTime = endDate;
        mation.siteNo = siteNo;
        mation.goodId = goodId;
        mation.price = price;
        mation.clmcontent = clmcontent;
        mation.group_ids = group_ids;
        mation.pos = num;

        if (oldClassName == "overtime") {
            this.props.setMsg("选中的以超时")
            return;
        } else if (oldClassName == "available") {
            this.props.setClassName(num, "selected", mation)
        } else if (oldClassName == "sold") {
            this.props.setMsg("选中的已售")
            return;
        }else if(oldClassName == "selected"){
            this.props.setClassName(num, "available", mation)
        }

    }

    render() {
        return (<div className="main">
            <div className="book-container" style={{padding: 0}}>
                <div className="book-area">
                    <ul style={{display:"inline-flex"}}>
                        {this.props.bookData.length == 0 ? "" : this.props.bookData.map((index, i)=> {
                            return (<li key={i}>{1 + i}号场</li>)
                        })}
                    </ul>
                </div>
                <div className="book-time">
                    <ul>
                        <li style={{marginTop: "20px"}}>08:30</li>
                        <li>09:30</li>
                        <li>10:30</li>
                        <li>11:30</li>
                        <li>12:30</li>
                        <li>13:30</li>
                        <li>14:30</li>
                        <li>15:30</li>
                        <li>16:30</li>
                        <li>17:30</li>
                        <li>18:30</li>
                        <li>19:30</li>
                        <li>20:30</li>
                        <li>21:30</li>
                        <li>22:00</li>
                    </ul>
                </div>
                <div id="wrapper">
                    <div className="book-list" style={{display: "inline-flex", whiteSpace: "nowrap",position:"absolute"}}>
                        {!Array.isArray(this.props.bookData) && this.props.bookData.length > 0 ? (
                            <h1 style={{color: "#ff4455"}}>{this.props.bookData}</h1>) :
                            (this.props.bookData.map((index, i)=> {
                                return (
                                    <ul key={i}>
                                        {index.map((v, k)=> {
                                            return (
                                                <li
                                                    ref={i + "," + k + "|" + v.name + "|" + v.beginTime.slice(0, 8)}
                                                    onClick={this.select.bind(this, i + "," + k + "|" + v.name + "|" + v.beginTime.slice(0, 8))}
                                                    data-goodsid={index.length * i + k}
                                                    data-price={v.price}
                                                    data-content={v.beginTimeText + "," + v.endTimeText + "," + v.name}
                                                    data-course_content={v.name + "," + v.beginTimeText + "," + v.endTimeText + "," + v.beginTimeText + "-" + v.endTimeText}
                                                    data-group_ids={v.resourceId[0] + "," + v.resourceId[1]}
                                                    key={k}
                                                    data-clmcontent={v.name + "地" + v.beginTimeText + "-" + v.endTimeText + "￥" + v.price}
                                                    className={v.className}>
                                                    ￥<em>{v.price}</em>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )
                            }))}
                    </div>
                </div>

            </div>
        </div>)
    }
}
export default BookContainer;