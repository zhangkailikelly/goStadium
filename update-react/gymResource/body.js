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

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

var _selectWeek = require("./selectWeek");

var _selectWeek2 = _interopRequireDefault(_selectWeek);

var _bookContainer = require("./bookContainer");

var _bookContainer2 = _interopRequireDefault(_bookContainer);

var _warn = require("./warn");

var _warn2 = _interopRequireDefault(_warn);

var _book = require("./book");

var _book2 = _interopRequireDefault(_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Body: {
        displayName: "Body"
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/body.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/body.jsx",
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

var Body = _wrapComponent("Body")(function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));
    }

    _createClass(Body, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.state = {
                weeks: [], //周
                title: "选择场地",
                bookData: [], //预定的数据
                active: 0, //当前选中的周
                gymid: "",
                gymname: "",
                fiedid: "",
                loading: true,
                msg: "", //错误信息
                orderNum: [] //TODO 选中的订单
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            $($("head").find("style")[0]).remove(); //删除antd组件的通用样式,避免覆盖
            // var timers = moment().format("YYYYMMDD");
            // var testId = "gymid=f8d5e740-91a8-11e6-9c3c-25a22e7c8c34&fiedid=9e05aeb7-bd23-4205-af3a-1f5513568af9&date=" + timers + "&gymname=宁夏亲水体育中心篮球场#2";
            var _id = window.location.search.slice(1);
            var hash = window.location.hash[1]; //获取哈希值,0为当天,以此类推;
            var _this = this;
            var weeks, date, gymid, fiedid, gymname, title;
            $.ajax({
                url: "/sport/gymresource?" + _id,
                type: "get",
                success: function success(data) {
                    if (data) {
                        if (data.weeks) {
                            weeks = data.weeks;
                        }
                        title = data.title;
                        if (data.params) {
                            date = data.params.date;
                            gymid = data.params.gymid;
                            fiedid = data.params.fiedid;
                            gymname = data.params.gymname;
                        }
                        _this.setState({
                            weeks: weeks,
                            title: title,
                            gymid: gymid,
                            gymname: gymname,
                            /*TODO active为hash值，用户选中的那天*/
                            active: hash,
                            fiedid: fiedid
                        }, function () {
                            //获取日期选择信息，成功后在获取价格
                            if (date && gymid && fiedid) {
                                _this.getPrice(date, gymid, fiedid);
                            }
                        });
                    }
                }
            });
            setInterval(function () {
                var f = false;
                //实实更新状态
                _this.updateSelect();
                // 提交订单前判断选中的是否超时
                if (_this.state.orderNum.length == 0) {
                    return;
                }
                var updateOrderNum = [];
                var newOrderNum = _this.state.orderNum;
                for (var i = 0; i < newOrderNum.length; i++) {
                    if (newOrderNum[i].date + newOrderNum[i].startTime.split(":").join("") > moment().format("YYYYMMDDHHmmss")) {
                        updateOrderNum.push(newOrderNum[i]);
                        continue;
                    }
                    f = true;
                }
                if (f) {
                    _this.setState({ orderNum: updateOrderNum });
                }
            }, 500);
        }
    }, {
        key: "getPrice",
        value: function getPrice(date) {
            var gymid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.gymid;
            var fiedid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.state.fiedid;

            var _this = this;
            $.ajax({
                beforeSend: function beforeSend() {
                    _this.setState({ loading: true });
                },
                url: "/sport/clm/resource?" + "gymid=" + gymid + "&fiedid=" + fiedid + "&date=" + date,
                type: "get",
                success: function success(data) {
                    //设定类名,区分已预订,未预定,已过期
                    if (data && Array.isArray(data) && data.length > 0) {
                        //   var nowDate = data[0][0].beginTime.slice(0, 8)//获取日期
                        // var selectDate = _this.state.orderNum.length > 0 ? _this.state.orderNum[0].date : 0;
                        //var pos = selectDate == 0 ? [] : _this.state.orderNum.map(index=>(index.siteNo + index.startTime))
                        var newData = data.map(function (index) {
                            return index.map(function (v) {
                                v.className = moment().format("YYYYMMDDHHmmss") > v.beginTime ? "overtime" : v.num == 1 ? "available" : "sold";
                                return v;
                            });
                        });
                        _this.setState({ bookData: newData, loading: false });
                    }
                }
            });
        }
    }, {
        key: "updateSelect",
        value: function updateSelect() {
            //时时更新,判断所选订单是否过期
            var f = false;
            var oldState = this.state.bookData;
            var newData = oldState.map(function (index) {
                return index.map(function (v) {
                    if (moment().format("YYYYMMDDHHmmss") > v.beginTime && v.className != "overtime") {
                        v.className = "overtime";
                        f = true;
                    }
                    return v;
                });
            });
            if (f) {
                this.setState({ bookData: newData });
            }
        }
    }, {
        key: "book",
        value: function book(num, newName, mation) {
            /**
             * mation  携带信息
             * num     获取位置
             * newName 新的类名 select/available/overtime
             * * @type {Array}
             */

            var results = [];
            var oldName = this.state.bookData;
            var pos = num.split("|")[0];
            var p1 = pos.split(",")[0];
            var p2 = pos.split(",")[1];
            mation.date = num.split("|")[2]; //获取当天日期
            if (newName == "selected" && this.state.orderNum.length == 0) {
                results.push(mation);
                oldName[p1][p2].className = newName;
            } else {
                //取消
                if (newName != "selected") {
                    for (var i = 0; i < this.state.orderNum.length; i++) {
                        if (mation.pos != this.state.orderNum[i].pos) {
                            results.push(this.state.orderNum[i]);
                        }
                    }
                    oldName[p1][p2].className = newName;
                } else {
                    //预定，判断预定的个数是否大于四条
                    if (this.state.orderNum.length == 4) {
                        this.setMsg("每次只能预定四条");
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
            });
        }
    }, {
        key: "clearMsg",
        value: function clearMsg() {
            this.setState({ msg: "" });
        }
    }, {
        key: "clearOrder",
        value: function clearOrder() {
            this.setState({
                orderNum: []
            });
        }
    }, {
        key: "setMsg",
        value: function setMsg(msg) {
            this.setState({ msg: msg });
        }
    }, {
        key: "clearLoading",
        value: function clearLoading() {
            this.setState({ loading: false });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react3.default.createElement(
                "div",
                { className: "container" },
                _react3.default.createElement(_header2.default, { h1: this.state.title }),
                _react3.default.createElement(_selectWeek2.default, {
                    clearOrder: function clearOrder() {
                        _this3.clearOrder();
                    },
                    date: this.state.weeks,
                    getData: function getData(date) {
                        _this3.getPrice(date);
                    },
                    active: this.state.active
                }),
                _react3.default.createElement(_bookContainer2.default, {
                    clearLoading: function clearLoading() {
                        _this3.clearLoading();
                    },
                    bookData: this.state.bookData,
                    setMsg: function setMsg(msg) {
                        _this3.setMsg(msg);
                    },
                    setClassName: function setClassName(num, newName, mation) {
                        _this3.book(num, newName, mation);
                    }
                }),
                _react3.default.createElement(_warn2.default, { msg: this.state.msg,
                    clearMsg: function clearMsg() {
                        _this3.clearMsg();
                    } }),
                _react3.default.createElement(_book2.default, { orderNum: this.state.orderNum,
                    gymname: this.state.gymname,
                    gymid: this.state.gymid
                }),
                _react3.default.createElement(
                    "div",
                    { style: {
                            display: this.state.loading ? "block" : "none",
                            zIndex: "100",
                            textAlign: "center",
                            position: "fixed",
                            top: 0,
                            bottom: 0,
                            width: "100%",
                            backgroundColor: "#000000",
                            opacity: "0.6"
                        } },
                    _react3.default.createElement(_spin2.default, { style: { position: "absolute", top: "50%", marginLeft: "-25.21px", marginTop: "-25px" },
                        tip: "Loading...", size: "large",
                        spinning: this.state.loading })
                )
            );
        }
    }]);

    return Body;
}(_react3.default.Component));

_reactDom2.default.render(_react3.default.createElement(Body, null), main);

//# sourceMappingURL=body.js.map