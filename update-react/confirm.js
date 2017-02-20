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

var _header = require("./gymResource/header");

var _header2 = _interopRequireDefault(_header);

var _warn = require("./gymResource/warn");

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Confirm: {
        displayName: "Confirm"
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/confirm.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/confirm.jsx",
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

var Confirm = _wrapComponent("Confirm")(function (_React$Component) {
    _inherits(Confirm, _React$Component);

    function Confirm() {
        var _ref;

        _classCallCheck(this, Confirm);

        for (var _len = arguments.length, prop = Array(_len), _key = 0; _key < _len; _key++) {
            prop[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(prop)));
    }

    _createClass(Confirm, [{
        key: "componentWillMount",
        value: function componentWillMount() {
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
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var mation = window.location.search.slice(1).split("&");
            this.setState({
                gymId: decodeURI(mation[0].split("=")[1]),
                content: JSON.parse(decodeURI(mation[5].split("=")[1])),
                gymname: decodeURI(mation[1].split("=")[1]),
                time: JSON.parse(decodeURI(mation[6].split("=")[1])),
                total: JSON.parse(decodeURI(mation[2].split("=")[1])),
                arrId: JSON.parse(decodeURI(mation[4].split("=")[1]))
            });
            var _this = this;
            $.ajax({
                url: "/sport/confirmOrder",
                type: "get",
                success: function success(data) {
                    _this.setState({
                        title: data.title,
                        wxopenId: data.wxopenId
                    }, function () {
                        $.get("/sport/clm/userphone", _this.state.wxopenId, function (data) {
                            _this.setState({ phoneNum: data.phone });
                        });
                    });
                }
            });
        }
    }, {
        key: "changeNum",
        value: function changeNum(e) {
            this.setState({
                phoneNum: e.target.value
            });
        }
    }, {
        key: "orderOK",
        value: function orderOK() {
            var _this = this;
            _this.setState({ loading: true });
            //创建订单成功才能提交，微信openId，订单id，手机号验证
            //  Promise.all().then().catch
            var data1 = {
                gymname: this.state.gymname,
                total: this.state.total,
                gymid: this.state.gymId,
                arrid: JSON.stringify(this.state.arrId)
            };
            var data2 = {
                wxopenId: this.state.wxopenId,
                phone: this.state.phoneNum
            };
            var orderNo;
            var promises = [];
            promises[0] = new Promise(function (resolve, reject) {
                $.get("/sport/clm/updatephone", data2, function (result) {
                    result.code == "200" ? resolve() : reject();
                });
            });
            promises[1] = new Promise(function (resolve, reject) {
                $.post("/sport/order/add", data1, function (result) {
                    if (result.resultCode == "0") {
                        orderNo = result.orderNo;
                        resolve();
                    } else {
                        reject();
                    }
                });
            });

            Promise.all(promises).then(function () {
                window.location.href = "/orderPay?orderNo=" + orderNo;
            }).catch(function () {
                _this.setState({ loading: false, msg: "创建订单不成功" });
            });
        }
    }, {
        key: "clearPhone",
        value: function clearPhone() {
            this.setState({ phoneNum: "" });
        }
    }, {
        key: "clearMsg",
        value: function clearMsg() {
            this.setState({ msg: "" });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react3.default.createElement(
                "div",
                { className: "container", id: "container" },
                _react3.default.createElement(_header2.default, { h1: "确认订单", bgcolor: "#000000" }),
                _react3.default.createElement(
                    "div",
                    { className: "Order am-u-sm-12 clearfix", style: { padding: "2rem 0 0 0", backgroundColor: "#ffffff" } },
                    _react3.default.createElement(
                        "p",
                        { className: "am-u-sm-12" },
                        _react3.default.createElement(
                            "label",
                            { className: "am-u-sm-4 ColorB", style: { fontWeight: "normal" } },
                            "\u573A\u9986\u540D\u79F0\uFF1A"
                        ),
                        _react3.default.createElement(
                            "span",
                            { className: "am-u-sm-8 ColorA", style: { fontSize: "1.4em" } },
                            this.state.gymname
                        )
                    ),
                    _react3.default.createElement("hr", { "data-am-widget": "divider", className: "am-divider am-divider-default", style: { marginTop: 0 } }),
                    _react3.default.createElement(
                        "p",
                        { className: "am-u-sm-12" },
                        _react3.default.createElement(
                            "label",
                            { className: "am-u-sm-4 ColorB", style: { height: "70px", fontWeight: "normal" } },
                            "\u573A\u5730\u660E\u7EC6\uFF1A"
                        ),
                        this.state.content.length == 0 ? "" : this.state.content.map(function (index, i) {
                            return _react3.default.createElement(
                                "span",
                                { style: { fontSize: "1.4em" }, key: i, className: "am-u-sm-8 ColorA" },
                                index
                            );
                        })
                    ),
                    _react3.default.createElement("hr", { "data-am-widget": "divider", className: "am-divider am-divider-default", style: { marginTop: 0 } }),
                    _react3.default.createElement(
                        "p",
                        { className: "am-u-sm-12" },
                        _react3.default.createElement(
                            "label",
                            { className: "am-u-sm-4 ColorB", style: { fontWeight: "normal" } },
                            "\u65E5\u671F\uFF1A"
                        ),
                        _react3.default.createElement(
                            "span",
                            { className: "am-u-sm-8 ColorA", style: { fontSize: "1.4em" } },
                            this.state.time
                        )
                    )
                ),
                _react3.default.createElement(
                    "div",
                    { className: "Order am-u-sm-12",
                        style: { marginTop: "20px", padding: "1rem 0 0 0", backgroundColor: "#fff" } },
                    _react3.default.createElement(
                        "p",
                        { className: "am-u-sm-12" },
                        _react3.default.createElement(
                            "label",
                            { className: "am-u-sm-4 ColorB", style: { fontWeight: "normal" } },
                            "\u624B\u673A\u53F7\uFF1A"
                        ),
                        _react3.default.createElement(
                            "span",
                            { className: "am-u-sm-8 ColorA PR" },
                            _react3.default.createElement("input", { ref: "telNum", onChange: function onChange(e) {
                                    _this3.changeNum(e);
                                }, value: this.state.phoneNum, id: "userphone", type: "number",
                                style: { fontSize: "1.4em", width: "85%", outline: "none", border: "none" }, placeholder: "\u8F93\u5165\u7535\u8BDD\u53F7\u7801" }),
                            _react3.default.createElement("i", { onClick: function onClick() {
                                    _this3.clearPhone();
                                }, className: "fr am-icon-times-circle ColorC" })
                        )
                    )
                ),
                _react3.default.createElement(_warn2.default, { msg: this.state.msg, clearMsg: function clearMsg() {
                        _this3.clearMsg();
                    } }),
                _react3.default.createElement(
                    "div",
                    { style: {
                            display: this.state.loading ? "block" : "none",
                            zIndex: "100",
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
                    "div",
                    { className: "am-u-sm-12 botSubmit clearfix" },
                    _react3.default.createElement(
                        "p",
                        { className: "fl" },
                        "\u5408\u8BA1\uFF1A",
                        _react3.default.createElement(
                            "em",
                            { className: "ColorO priceB" },
                            "￥" + this.state.total
                        )
                    ),
                    _react3.default.createElement(
                        "button",
                        { type: "button", onClick: function onClick() {
                                _this3.orderOK();
                            }, className: "fr am-btn am-radius am-btn-orange" },
                        "\u63D0\u4EA4\u8BA2\u5355"
                    )
                )
            );
        }
    }]);

    return Confirm;
}(_react3.default.Component));

_reactDom2.default.render(_react3.default.createElement(Confirm, null), main);

//# sourceMappingURL=confirm.js.map