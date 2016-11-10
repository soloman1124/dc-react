'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartContainer = function (_Component) {
  _inherits(ChartContainer, _Component);

  function ChartContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChartContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChartContainer.__proto__ || Object.getPrototypeOf(ChartContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      crossfilterContext: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChartContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.crossfilterContext(function (crossfilterContext) {
        return _this2.setState({ crossfilterContext: crossfilterContext });
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return { crossfilterContext: this.state.crossfilterContext };
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.crossfilterContext === null) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      );
    }
  }]);

  return ChartContainer;
}(_react.Component);

ChartContainer.propTypes = {
  children: _react.PropTypes.node,
  crossfilterContext: _react.PropTypes.func.isRequired
};
ChartContainer.childContextTypes = {
  crossfilterContext: _react.PropTypes.object
};
exports.default = ChartContainer;