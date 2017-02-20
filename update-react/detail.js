"use strict";

var _css = require("antd/lib/spin/style/css");

var _spin = require("antd/lib/spin");

var _spin2 = _interopRequireDefault(_spin);

var _index = require("E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\redbox-react\\lib\\index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\react-transform-catch-errors\\lib\\index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _index5 = require("E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\react-transform-hmr\\lib\\index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _amazeuiTouch = require("amazeui-touch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Details: {
        displayName: "Details"
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/detail.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/detail.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2(_EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /**
   * Created by kellyZhang on 2017/1/9.
   */


var main = document.getElementById("main");

var Details = _wrapComponent("Details")(function (_React$Component) {
    _inherits(Details, _React$Component);

    function Details() {
        var _ref;

        _classCallCheck(this, Details);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = Details.__proto__ || Object.getPrototypeOf(Details)).call.apply(_ref, [this].concat(props)));
    }

    _createClass(Details, [{
        key: "componentWillMount",
        value: function componentWillMount() {
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
                loading: true
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            $($("head").find("style")[0]).remove(); //删除antd组件的通用样式,避免覆盖
            var _this = this;
            var data2 = [];
            var weeks = [];
            var ids = [];

            //通过pramas获取场馆id值
            var _id = window.location.search.slice(1);
            //获取场馆的数据
            var getData = new Promise(function (resolve, reject) {
                $.ajax({
                    url: "/sport/details?" + _id,
                    type: "get",
                    success: function success(data) {
                        resolve(data);
                    }
                });
            });
            getData.then(function (data) {
                if (data) {
                    if (data.data2) {
                        data.data2.map(function (index) {
                            if (index.billingUnit != 2) {
                                data2.push(index);
                            }
                        });
                        data2.map(function (index) {
                            index.price = ["", "", "", ""];
                            return index;
                        });
                        ids = data2.map(function (index) {
                            return index.id;
                        });
                    }
                    if (data.weeks) {
                        weeks = data.weeks;
                    }
                    if (data.data1) {
                        _this.setState({
                            d1imgNum: 0,
                            d1imgUrls: data.data1.imgurl || _this3.state.d1imgUrls,
                            ids: ids || _this3.state.ids,
                            weeks: weeks || _this3.state.weeks,
                            data2: data2 || _this3.state.data2,
                            d1id: data.data1.id || _this3.state.d1id,
                            d1name: data.data1.name || _this3.state.d1linkmanphone,
                            d1linkmanphone: data.data1.linkmanphone || _this3.state.d1linkmanphone,
                            d1city: data.data1.city || _this3.state.d1city,
                            d1district: data.data1.district || _this3.state.d1district,
                            d1address: data.data1.address || _this3.state.d1address
                        });
                    }
                    _this.getOnePrice(0, data2, ids, weeks);
                }
            });
        }
    }, {
        key: "updatePrice",
        value: function updatePrice(data2, weeks) {
            var _this4 = this;

            var newTabs = []; //
            data2.map(function (data, i) {
                if (data.billingUnit != 2) {
                    var obj = {};
                    obj.title = data.fieldname;
                    obj.desc = weeks.map(function (index, i) {
                        return _react3.default.createElement(
                            "div",
                            { className: "swiper-slide uniform",
                                style: { float: "left", background: "#ffffff", width: "25%", textAlign: "center" }, key: i },
                            _react3.default.createElement(
                                "div",
                                { className: "DateOrder" },
                                _react3.default.createElement(
                                    "p",
                                    { className: "good-price" },
                                    _react3.default.createElement(
                                        "strong",
                                        {
                                            className: "am-text-secondary ColorO" },
                                        "\uFFE5",
                                        data.price[i],
                                        _react3.default.createElement(
                                            "em",
                                            { className: "little-price" },
                                            "\u8D77"
                                        )
                                    )
                                ),
                                _react3.default.createElement(
                                    "h3",
                                    { className: "ColorA" },
                                    index.w
                                ),
                                _react3.default.createElement(
                                    "p",
                                    { className: "ColorB DateOrderT" },
                                    index.md
                                ),
                                _react3.default.createElement(
                                    "a",
                                    { href: "/gymresource?gymid=" + _this4.state.d1id + "&fiedid=" + data.id + "&date=" + index.d + "&gymname=" + _this4.state.d1name + data.fieldname + "#" + i,
                                        className: "ColorO DateOrderBut" },
                                    "\u9884\u5B9A"
                                )
                            )
                        );
                    });
                    newTabs.push(obj);
                }
            });
            this.setState({ map: newTabs, data2: data2, loading: false });
        }
    }, {
        key: "getOnePrice",
        value: function getOnePrice(e) {
            var data2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.data2;
            var ids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.state.ids;
            var weeks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.state.weeks;

            var _this = this;
            $.ajax({
                beforeSend: function beforeSend() {
                    _this.setState({ loading: true });
                },
                type: "get",
                url: "/sport/gym/clm/details?fiedid=" + ids[e],
                success: function success(datas) {
                    data2[e].price = datas;
                    _this.updatePrice(data2, weeks);
                }
            });
        }
    }, {
        key: "collect",
        value: function collect() {
            //点赞
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            //滑块的宽度
            var conWidth = $(".tabs>.btn-group-justify").outerWidth();
            //最大滑动距离，大于0允许滑动
            var maxDis = conWidth - $(".tabs").width() > 0 ? conWidth - $(".tabs").width() : 0;
            if (maxDis > 0) {
                var start = 0,
                    //滑动的初始位置
                moveDis,
                    //此次的滑动距离
                currentLoca; //当前位置
                $(".tabs-nav").on("touchstart", function (e) {
                    start = e.originalEvent.changedTouches[0].clientX;
                    currentLoca = parseFloat($(".tabs-nav").css("margin-Left"));
                });
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
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return _react3.default.createElement(
                "div",
                { className: "container", id: "container" },
                _react3.default.createElement(
                    "div",
                    { style: {
                            display: this.state.loading ? "block" : "none",
                            zIndex: 10000000,
                            textAlign: "center",
                            position: "fixed",
                            top: "0",
                            "bottom": "0",
                            width: "100%",
                            backgroundColor: "#000000",
                            opacity: "0.6"
                        } },
                    _react3.default.createElement(_spin2.default, { style: { position: "absolute", top: "50%", marginLeft: "-25.21px", marginTop: "-25px" }, tip: "Loading...", size: "large",
                        spinning: this.state.loading })
                ),
                _react3.default.createElement(
                    "header",
                    { className: "am-header am-header-default am-no-layout header-opacity" },
                    _react3.default.createElement(
                        "div",
                        { className: "am-header-left am-header-nav" },
                        _react3.default.createElement(
                            "a",
                            { href: "javascript:history.back();" },
                            _react3.default.createElement("span", { className: "am-header-nav-title" }),
                            _react3.default.createElement("i", { className: "am-header-icon am-icon-chevron-left" })
                        )
                    ),
                    _react3.default.createElement(
                        "div",
                        { className: "am-header-right am-header-nav" },
                        _react3.default.createElement(
                            "a",
                            { href: "#", onClick: this.collect.bind(this) },
                            _react3.default.createElement("i", { className: "am-header-icon am-icon-heart-o" })
                        )
                    )
                ),
                _react3.default.createElement(
                    "div",
                    { "data-am-widget": "slider", className: "am-slider am-slider-c2 am-sliders am-no-layout",
                        style: { marginTop: "-59px" } },
                    _react3.default.createElement(
                        "span",
                        { className: "ImgNumber" },
                        this.state.d1imgNum,
                        "\u5F20"
                    ),
                    _react3.default.createElement(
                        "div",
                        { className: "am-viewport" },
                        _react3.default.createElement(
                            "ul",
                            { className: "am-slides" },
                            this.state.d1imgUrls.map(function (index, i) {
                                return _react3.default.createElement(
                                    "li",
                                    { key: i },
                                    _react3.default.createElement("img", { src: "http://101.200.133.31:3008/uploadImage/" + _this5.state.id + "/" + index,
                                        style: { height: "200px" } })
                                );
                            })
                        )
                    )
                ),
                _react3.default.createElement(
                    "div",
                    { className: "CGlianxi", style: { padding: "1rem 1rem 0" } },
                    _react3.default.createElement(
                        "h2",
                        { className: "ColorA" },
                        this.state.d1name,
                        _react3.default.createElement(
                            "a",
                            { href: "tel:" + this.state.d1linkmanphone, className: "fr ico-phone" },
                            _react3.default.createElement(
                                "span",
                                { style: { borderLeft: "1px solid #d5d5d5", paddingLeft: "10px" } },
                                _react3.default.createElement("i", null)
                            )
                        )
                    ),
                    _react3.default.createElement(
                        "p",
                        { style: { padding: "1rem 0 0", margin: 0, fontSize: "1.6rem" } },
                        _react3.default.createElement(
                            "a",
                            { href: "javascript:;", className: "ico-DW" },
                            _react3.default.createElement(
                                "span",
                                null,
                                _react3.default.createElement("i", null)
                            )
                        ),
                        this.state.d1city,
                        this.state.d1district,
                        this.state.d1address
                    )
                ),
                _react3.default.createElement("hr", { className: "am-margin-top-sm am-margin-bottom-sm" }),
                this.state.data2.length == 0 ? _react3.default.createElement(
                    "div",
                    { className: "am-u-sm-12 am-text-center", style: { color: "red" } },
                    "\u62B1\u6B49!\u8BE5\u573A\u9986\u6682\u65E0\u5F00\u653E\u573A\u5730..."
                ) : _react3.default.createElement(
                    "div",
                    null,
                    _react3.default.createElement(
                        _amazeuiTouch.Container,
                        { style: { padding: 0, width: "100%" } },
                        _react3.default.createElement(
                            _amazeuiTouch.Tabs,
                            { onAction: function onAction(e) {
                                    _this5.getOnePrice(e);
                                }, style: { margin: 0 } },
                            this.state.map.map(function (ablum, i) {
                                return _react3.default.createElement(
                                    _amazeuiTouch.Tabs.Item,
                                    { navStyle: "secondary", title: ablum.title, noPadded: true, key: i },
                                    ablum.desc
                                );
                            })
                        )
                    ),
                    _react3.default.createElement(
                        "div",
                        { className: "am-u-sm-12 clearfix", style: { padding: 0 } },
                        _react3.default.createElement(
                            "div",
                            { className: "am-panel am-panel-default PBpanel",
                                style: { padding: 0, marginBottom: 0, border: 0 } },
                            _react3.default.createElement(
                                "div",
                                { className: "am-panel-hd ColorB" },
                                "\u670D\u52A1\u8BF4\u660E"
                            ),
                            _react3.default.createElement(
                                "div",
                                { className: "am-panel-bd ColorB", style: { paddingLeft: "20px" } },
                                _react3.default.createElement(
                                    "ul",
                                    { className: "serviceIco clearfix" },
                                    _react3.default.createElement(
                                        "li",
                                        null,
                                        _react3.default.createElement("img", { src: "/images/ico-car.png" }),
                                        _react3.default.createElement(
                                            "p",
                                            null,
                                            "\u505C\u8F66"
                                        )
                                    ),
                                    _react3.default.createElement(
                                        "li",
                                        null,
                                        _react3.default.createElement("img", { src: "/images/ico-bath.png" }),
                                        _react3.default.createElement(
                                            "p",
                                            null,
                                            "\u6DCB\u6D74"
                                        )
                                    ),
                                    _react3.default.createElement(
                                        "li",
                                        null,
                                        _react3.default.createElement("img", { src: "/images/ico-keyboard.png" }),
                                        _react3.default.createElement(
                                            "p",
                                            null,
                                            "\u50A8\u8863\u67DC"
                                        )
                                    ),
                                    _react3.default.createElement(
                                        "li",
                                        null,
                                        _react3.default.createElement("img", { src: "/images/ico-cloth.png" }),
                                        _react3.default.createElement(
                                            "p",
                                            null,
                                            "\u66F4\u8863\u5BA4"
                                        )
                                    ),
                                    _react3.default.createElement(
                                        "li",
                                        null,
                                        _react3.default.createElement("img", { src: "/images/ico-hot.png" }),
                                        _react3.default.createElement(
                                            "p",
                                            null,
                                            "\u6696\u6C14"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react3.default.createElement(
                        "div",
                        { className: "am-u-sm-12 clearfix",
                            style: {
                                padding: "0 0 1rem 0",
                                backgroundColor: "#ffffff",
                                borderBottom: "12px solid #f0f1f5"
                            } },
                        _react3.default.createElement(
                            "div",
                            { className: "am-panel am-panel-default PBpanel",
                                style: { padding: 0, marginBottom: 0, border: 0 } },
                            _react3.default.createElement(
                                "div",
                                { className: "am-panel-hd ColorB" },
                                "\u573A\u5730\u8BF4\u660E"
                            ),
                            _react3.default.createElement(
                                "div",
                                { className: "am-panel-bd ColorB" },
                                "\u5BA4\u5185\u3001\u4FA7\u706F\u3001\u5851\u80F6\u5730\u677F"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Details;
}(_react3.default.Component));

_reactDom2.default.render(_react3.default.createElement(Details, null), main);

//# sourceMappingURL=detail.js.map