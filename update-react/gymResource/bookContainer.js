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
    BookContainer: {
        displayName: "BookContainer"
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/bookContainer.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/bookContainer.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2(_EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var BookContainer = _wrapComponent("BookContainer")(function (_React$Component) {
    _inherits(BookContainer, _React$Component);

    function BookContainer() {
        var _ref;

        _classCallCheck(this, BookContainer);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = BookContainer.__proto__ || Object.getPrototypeOf(BookContainer)).call.apply(_ref, [this].concat(props)));
    }

    _createClass(BookContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
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

            $("#wrapper").scroll(function () {
                var left = $(this).scrollLeft();
                var top = $(this).scrollTop();
                $(".book-area>ul").css("left", -left);
                $(".book-time>ul").css("marginTop", -top);
            });

            this.props.clearLoading(); //取消加载

        }
    }, {
        key: "select",
        value: function select(num) {
            //获取类名,用来判断状态
            var oldClassName = this.refs[num].className;
            var mation, price, siteNo, startDate, endDate, goodId, group_ids, clmcontent;
            mation = {};
            price = $(this.refs[num]).data("price"); //价格
            siteNo = $(this.refs[num]).data("content").split(",")[2];
            startDate = $(this.refs[num]).data("content").split(",")[0];
            endDate = $(this.refs[num]).data("content").split(",")[1];
            goodId = $(this.refs[num]).data("goodsid");
            group_ids = $(this.refs[num]).data("group_ids");
            clmcontent = $(this.refs[num]).data("clmcontent");
            mation.startTime = startDate;
            mation.endTime = endDate;
            mation.siteNo = siteNo;
            mation.goodId = goodId;
            mation.price = price;
            mation.clmcontent = clmcontent;
            mation.group_ids = group_ids;
            mation.pos = num;

            if (oldClassName == "overtime") {
                this.props.setMsg("选中的以超时");
                return;
            } else if (oldClassName == "available") {
                this.props.setClassName(num, "selected", mation);
            } else if (oldClassName == "sold") {
                this.props.setMsg("选中的已售");
                return;
            } else if (oldClassName == "selected") {
                this.props.setClassName(num, "available", mation);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react3.default.createElement(
                "div",
                { className: "main" },
                _react3.default.createElement(
                    "div",
                    { className: "book-container", style: { padding: 0 } },
                    _react3.default.createElement(
                        "div",
                        { className: "book-area" },
                        _react3.default.createElement(
                            "ul",
                            { style: { display: "inline-flex" } },
                            this.props.bookData.length == 0 ? "" : this.props.bookData.map(function (index, i) {
                                return _react3.default.createElement(
                                    "li",
                                    { key: i },
                                    1 + i,
                                    "\u53F7\u573A"
                                );
                            })
                        )
                    ),
                    _react3.default.createElement(
                        "div",
                        { className: "book-time" },
                        _react3.default.createElement(
                            "ul",
                            null,
                            _react3.default.createElement(
                                "li",
                                { style: { marginTop: "20px" } },
                                "08:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "09:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "10:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "11:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "12:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "13:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "14:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "15:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "16:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "17:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "18:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "19:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "20:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "21:30"
                            ),
                            _react3.default.createElement(
                                "li",
                                null,
                                "22:00"
                            )
                        )
                    ),
                    _react3.default.createElement(
                        "div",
                        { id: "wrapper" },
                        _react3.default.createElement(
                            "div",
                            { className: "book-list", style: { display: "inline-flex", whiteSpace: "nowrap", position: "absolute" } },
                            !Array.isArray(this.props.bookData) && this.props.bookData.length > 0 ? _react3.default.createElement(
                                "h1",
                                { style: { color: "#ff4455" } },
                                this.props.bookData
                            ) : this.props.bookData.map(function (index, i) {
                                return _react3.default.createElement(
                                    "ul",
                                    { key: i },
                                    index.map(function (v, k) {
                                        return _react3.default.createElement(
                                            "li",
                                            {
                                                ref: i + "," + k + "|" + v.name + "|" + v.beginTime.slice(0, 8),
                                                onClick: _this2.select.bind(_this2, i + "," + k + "|" + v.name + "|" + v.beginTime.slice(0, 8)),
                                                "data-goodsid": index.length * i + k,
                                                "data-price": v.price,
                                                "data-content": v.beginTimeText + "," + v.endTimeText + "," + v.name,
                                                "data-course_content": v.name + "," + v.beginTimeText + "," + v.endTimeText + "," + v.beginTimeText + "-" + v.endTimeText,
                                                "data-group_ids": v.resourceId[0] + "," + v.resourceId[1],
                                                key: k,
                                                "data-clmcontent": v.name + "地" + v.beginTimeText + "-" + v.endTimeText + "￥" + v.price,
                                                className: v.className },
                                            "\uFFE5",
                                            _react3.default.createElement(
                                                "em",
                                                null,
                                                v.price
                                            )
                                        );
                                    })
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return BookContainer;
}(_react3.default.Component));

exports.default = BookContainer;

//# sourceMappingURL=bookContainer.js.map