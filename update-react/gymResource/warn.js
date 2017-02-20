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
    Warn: {
        displayName: "Warn"
    }
};

var _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/warn.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "E:/work/react-\u53BB\u573A\u9986\u5FAE\u4FE1\u7AEF/update-react/gymResource/warn.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _EWorkReactUpdateReactNode_modulesReactTransformHmrLibIndexJs2(_EWorkReactUpdateReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Warn = _wrapComponent("Warn")(function (_React$Component) {
    _inherits(Warn, _React$Component);

    function Warn() {
        var _ref;

        _classCallCheck(this, Warn);

        for (var _len = arguments.length, prop = Array(_len), _key = 0; _key < _len; _key++) {
            prop[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = Warn.__proto__ || Object.getPrototypeOf(Warn)).call.apply(_ref, [this].concat(prop)));
    }

    _createClass(Warn, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var _this = this;
            if (this.props.msg.trim().length > 0) {
                $(this.refs.toast).fadeIn(600, function () {
                    $(_this.refs.toast).fadeOut(600, function () {
                        _this.props.clearMsg();
                    });
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react3.default.createElement(
                "div",
                { className: "toast hide", ref: "toast" },
                _react3.default.createElement(
                    "div",
                    { className: "toast-alert" },
                    _react3.default.createElement(
                        "div",
                        { className: "toast-msg" },
                        this.props.msg
                    )
                )
            );
        }
    }]);

    return Warn;
}(_react3.default.Component));

exports.default = Warn;

//# sourceMappingURL=warn.js.map