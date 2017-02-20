import React from "react";
class SelectWeek extends React.Component {
    constructor(...props) {
        super(...props)
    }

    componentDidUpdate() {
        var _this = this;
        {/*添加真实数据要放在componentDidUpdate*/
        }
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 4.5,
            paginationClickable: true,
            spaceBetween: 10
        });
        {/*选中样式*/
        }
        $("ul.swiper-wrapper").click(function (e) {
            $(e.target).parents("li").addClass("active").siblings().removeClass("active");
            $(".book-area>ul").css("margin-left", 0);
            $(".book-time>ul").css("margin-top", 0);
            $(".book-area>ul").css({top:0,marginLeft:0});
            _this.props.clearOrder();
        })
    }

    getData(date) {
        this.props.getData(date);
        $(".book-list").css({top: 0, marginTop: 0});
    }

    render() {
        return (
            <div className="am-u-sm-12 clearfix" style={{padding: "0.5rem 0 0 0", backgroundColor: "#ffffff"}}>
                <div className="swiper-container swiper-container-horizontal CD-swipe">
                    <ul className="swiper-wrapper" style={{paddingLeft: "1rem"}}>
                        {this.props.date.map((index, i)=> {
                            return (<li key={i} onClick={this.getData.bind(this, index.d)}
                                        className={i == this.props.active ? "swiper-slide active" : "swiper-slide"}>
                                <a>
                                    <h4>{index.w}</h4>
                                    <p className="DateOrderT">{index.md}</p>
                                </a>
                            </li>)
                        }) }
                    </ul>
                </div>
                <hr data-am-widget="divider" className="am-divider am-divider-default" style={{margin: 0}}/>
            </div>
        )
    }
}
export default SelectWeek;