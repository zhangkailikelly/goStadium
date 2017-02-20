'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\work\\react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF\\update-react\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SelectWeek: {
        displayName: 'SelectWeek'
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/selectWeek.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/selectWeek.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2(_EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var SelectWeek = _wrapComponent('SelectWeek')(function (_React$Component) {
    _inherits(SelectWeek, _React$Component);

    function SelectWeek() {
        var _ref;

        _classCallCheck(this, SelectWeek);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = SelectWeek.__proto__ || Object.getPrototypeOf(SelectWeek)).call.apply(_ref, [this].concat(props)));
    }

    _createClass(SelectWeek, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
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
                $(".book-area>ul").css({ top: 0, marginLeft: 0 });
                _this.props.clearOrder();
            });
        }
    }, {
        key: 'getData',
        value: function getData(date) {
            this.props.getData(date);
            $(".book-list").css({ top: 0, marginTop: 0 });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react3.default.createElement(
                'div',
                { className: 'am-u-sm-12 clearfix', style: { padding: "0.5rem 0 0 0", backgroundColor: "#ffffff" } },
                _react3.default.createElement(
                    'div',
                    { className: 'swiper-container swiper-container-horizontal CD-swipe' },
                    _react3.default.createElement(
                        'ul',
                        { className: 'swiper-wrapper', style: { paddingLeft: "1rem" } },
                        this.props.date.map(function (index, i) {
                            return _react3.default.createElement(
                                'li',
                                { key: i, onClick: _this3.getData.bind(_this3, index.d),
                                    className: i == _this3.props.active ? "swiper-slide active" : "swiper-slide" },
                                _react3.default.createElement(
                                    'a',
                                    null,
                                    _react3.default.createElement(
                                        'h4',
                                        null,
                                        index.w
                                    ),
                                    _react3.default.createElement(
                                        'p',
                                        { className: 'DateOrderT' },
                                        index.md
                                    )
                                )
                            );
                        })
                    )
                ),
                _react3.default.createElement('hr', { 'data-am-widget': 'divider', className: 'am-divider am-divider-default', style: { margin: 0 } })
            );
        }
    }]);

    return SelectWeek;
}(_react3.default.Component));

exports.default = SelectWeek;

//# sourceMappingURL=selectWeek.js.map