"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require("E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\redbox-react\\lib\\index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\react-transform-catch-errors\\lib\\index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _index5 = require("E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\react-transform-hmr\\lib\\index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Book: {
        displayName: "Book"
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/book.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/book.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2(_EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Book = _wrapComponent("Book")(function (_React$Component) {
    _inherits(Book, _React$Component);

    function Book() {
        var _ref;

        _classCallCheck(this, Book);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = Book.__proto__ || Object.getPrototypeOf(Book)).call.apply(_ref, [this].concat(props)));
    }

    _createClass(Book, [{
        key: "confirmOrder",
        value: function confirmOrder() {
            if (this.props.orderNum.length != 0) {
                //订单的日期
                //转码
                var transoc = function transoc(content) {
                    return JSON.stringify(content);
                };

                var amount, str2, str3, str4, arrId, ordermx;
                ordermx = [];
                amount = $(".book-submit>p>strong").html().slice(1); //合计总金额
                arrId = this.props.orderNum.map(function (index) {
                    return index.group_ids;
                });
                arrId = arrId.join().split(",");
                str2 = []; //订单id值集合array
                for (var i = 0; i < arrId.length; i++) {
                    if (arrId[i] != "undefined") {
                        str2.push(arrId[i]);
                    }
                }
                //场地信息集合Array
                str3 = this.props.orderNum.map(function (index) {
                    return index.clmcontent;
                });
                str4 = moment(this.props.orderNum[0].date, "YYYYMMDD").format("YYYY年MM月DD日");
                str2 = transoc(str2);
                str3 = transoc(str3);
                str4 = transoc(str4);
                window.location.href = "/confirm?gymid=" + this.props.gymid + "&gymname=" + this.props.gymname + "&total=" + amount + "&ordermx=" + ordermx + "&arrid=" + str2 + "&content=" + str3 + "&time=" + str4;
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react3.default.createElement(
                "div",
                null,
                _react3.default.createElement(
                    "div",
                    { className: "book-order" },
                    _react3.default.createElement(
                        "ul",
                        { className: this.props.orderNum.length == 0 ? "book-tip" : "book-tip hide" },
                        _react3.default.createElement(
                            "li",
                            null,
                            _react3.default.createElement("span", { className: "site sold" }),
                            "\u5DF2\u552E"
                        ),
                        _react3.default.createElement(
                            "li",
                            null,
                            _react3.default.createElement("span", { className: "site optional" }),
                            "\u53EF\u9009"
                        ),
                        _react3.default.createElement(
                            "li",
                            null,
                            _react3.default.createElement("span", { className: "site selected" }),
                            "\u5DF2\u9009"
                        )
                    ),
                    this.props.orderNum.length == 0 ? "" : _react3.default.createElement(
                        "ul",
                        { className: "book-orderinfo" },
                        this.props.orderNum.map(function (index, i) {
                            return _react3.default.createElement(
                                "li",
                                {
                                    "data-group_ids": index.group_ids,
                                    key: i },
                                _react3.default.createElement(
                                    "div",
                                    null,
                                    index.startTime + "-" + index.endTime
                                ),
                                _react3.default.createElement(
                                    "div",
                                    { className: "txtStyle3" },
                                    index.siteNo
                                )
                            );
                        })
                    ),
                    _react3.default.createElement(
                        "div",
                        { className: "book-submit J_submit clearfix" },
                        this.props.orderNum.length == 0 ? _react3.default.createElement(
                            "p",
                            { className: "fl" },
                            "\u8BF7\u9009\u62E9\u573A\u5730"
                        ) : _react3.default.createElement(
                            "p",
                            { className: "fl" },
                            "\u5408\u8BA1\uFF1A ",
                            _react3.default.createElement(
                                "strong",
                                { style: {
                                        color: "red",
                                        fontWeight: 600
                                    } },
                                "￥" + this.props.orderNum.length * this.props.orderNum[0].price
                            )
                        ),
                        _react3.default.createElement(
                            "button",
                            { type: "button", onClick: this.confirmOrder.bind(this),
                                className: this.props.orderNum.length == 0 ? "fr am-btn am-radius am-btn-gray" : "fr am-btn am-radius am-btn-orange" },
                            "\u7ACB\u5373\u9884\u8BA2"
                        )
                    )
                ),
                _react3.default.createElement("div", { className: "book-noPaySprite hide" }),
                _react3.default.createElement(
                    "div",
                    { className: "toast hide" },
                    _react3.default.createElement(
                        "div",
                        { className: "toast-alert" },
                        _react3.default.createElement("div", { className: "toast-msg" })
                    )
                )
            );
        }
    }]);

    return Book;
}(_react3.default.Component));

exports.default = Book;

//# sourceMappingURL=book.js.map