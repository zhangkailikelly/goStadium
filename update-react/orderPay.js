"use strict";

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

var _header = require("./gymResource/header");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    OrderPay: {
        displayName: "OrderPay"
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/orderPay.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/orderPay.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2(_EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var main = document.getElementById("main");

var OrderPay = _wrapComponent("OrderPay")(function (_React$Component) {
    _inherits(OrderPay, _React$Component);

    function OrderPay() {
        var _ref;

        _classCallCheck(this, OrderPay);

        for (var _len = arguments.length, prop = Array(_len), _key = 0; _key < _len; _key++) {
            prop[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = OrderPay.__proto__ || Object.getPrototypeOf(OrderPay)).call.apply(_ref, [this].concat(prop)));
    }

    _createClass(OrderPay, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.state = {
                type: "微信支付",
                amount: "",
                gymName: "",
                gyming: "",
                appid: "",
                id: ""
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this = this;
            $.get("/sport/order/pay" + location.search, function (data) {
                _this.setState({
                    amount: data.orderinfo.amount,
                    gymName: data.orderinfo.amount.gymName,
                    gyming: data.gyming,
                    appid: data.appid,
                    id: data.orderinfo.id
                });
            });
        }
    }, {
        key: "checkPaytype",
        value: function checkPaytype(type) {
            this.setState({ type: type });
        }
    }, {
        key: "dopay",
        value: function dopay() {
            var type = this.state.type;
            if (type == "微信支付") {
                var total = 1; //金额
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
                    relatedTarget: this
                });
                return;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react3.default.createElement(
                "div",
                null,
                _react3.default.createElement(_header2.default, { h1: "支付订单", bgcolor: "#0e90d2" }),
                _react3.default.createElement(
                    "div",
                    { className: "am-g", style: { backgroundColor: "#ffffff", padding: "1rem 0" } },
                    _react3.default.createElement(
                        "div",
                        { className: "am-u-sm-12" },
                        _react3.default.createElement(
                            "div",
                            { className: "am-u-sm-3" },
                            _react3.default.createElement(
                                "a",
                                { href: "#" },
                                _react3.default.createElement("img", { src: this.state.gyming, style: { height: "49px", width: "49px", borderRadius: "100%" } })
                            )
                        ),
                        _react3.default.createElement(
                            "div",
                            { className: "am-u-sm-9" },
                            _react3.default.createElement(
                                "div",
                                { className: "am-g ColorA" },
                                "￥" + this.state.amount
                            ),
                            _react3.default.createElement(
                                "div",
                                { className: "am-g ColorA" },
                                this.state.gymName
                            )
                        )
                    )
                ),
                _react3.default.createElement("div", { className: "jianju", style: { margin: 0 } }),
                _react3.default.createElement(
                    "div",
                    { className: "am-g payment", style: { backgroundColor: "#ffffff" } },
                    _react3.default.createElement(
                        "div",
                        { className: "am-u-sm-12" },
                        _react3.default.createElement(
                            "div",
                            { className: "am-btn-group doc-js-btn-1 payWay", "data-am-button": true },
                            _react3.default.createElement(
                                "label",
                                { style: { width: "100%" }, className: "am-btn am-btn-primary am-active", onClick: function onClick() {
                                        _this3.checkPaytype('微信支付');
                                    } },
                                _react3.default.createElement("input", { type: "radio", name: "payType", value: "\u5FAE\u4FE1\u652F\u4ED8" }),
                                _react3.default.createElement(
                                    "span",
                                    { className: "ColorA" },
                                    _react3.default.createElement("img", { src: "/images/weixin.png" }),
                                    "\u5FAE\u4FE1\u652F\u4ED8"
                                )
                            ),
                            _react3.default.createElement("hr", { "data-am-widget": "divider", className: "am-divider am-divider-default",
                                style: { margin: "0 -2rem" } }),
                            _react3.default.createElement(
                                "label",
                                { className: "am-btn am-btn-primary", onClick: function onClick() {
                                        _this3.checkPaytype('会员支付');
                                    } },
                                _react3.default.createElement("input", { type: "radio", name: "payType", value: "\u4F1A\u5458\u652F\u4ED8" }),
                                _react3.default.createElement(
                                    "span",
                                    { className: "ColorA" },
                                    _react3.default.createElement("img", { src: "/images/card.png" }),
                                    "\u4F1A\u5458\u652F\u4ED8"
                                ),
                                _react3.default.createElement(
                                    "a",
                                    { href: "#", className: "HYarrow" },
                                    _react3.default.createElement("i", { className: "am-icon-angle-right am-icon-sm fr ColorC" })
                                )
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    "div",
                    { className: "am-g" },
                    _react3.default.createElement(
                        "div",
                        { className: "am-u-sm-12", style: { marginTop: "60px" } },
                        _react3.default.createElement(
                            "button",
                            { type: "button", onClick: function onClick() {
                                    _this3.dopay();
                                }, className: "am-btn am-radius am-btn-orange am-btn-block" },
                            "\u786E\u8BA4\u652F\u4ED8",
                            _react3.default.createElement(
                                "em",
                                {
                                    className: "price" },
                                "￥" + this.state.amount
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    "div",
                    { className: "am-modal am-modal-alert", tabIndex: "-1", id: "modal-alert" },
                    _react3.default.createElement(
                        "div",
                        { className: "am-modal-dialog", style: { borderRadius: "5px" } },
                        _react3.default.createElement(
                            "div",
                            { className: "am-modal-hd" },
                            "\u63D0\u793A"
                        ),
                        _react3.default.createElement("div", { className: "am-modal-bd", id: "textmsg" }),
                        _react3.default.createElement(
                            "div",
                            { className: "am-modal-footer" },
                            _react3.default.createElement(
                                "span",
                                { className: "am-modal-btn" },
                                "\u786E\u5B9A"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return OrderPay;
}(_react3.default.Component));

_reactDom2.default.render(_react3.default.createElement(OrderPay, null), main);

//# sourceMappingURL=orderPay.js.map