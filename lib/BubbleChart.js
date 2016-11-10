'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dc = require('dc');

var _dc2 = _interopRequireDefault(_dc);

var _Base = require('./Base.jsx!');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BubbleChart = function (_Component) {
  _inherits(BubbleChart, _Component);

  function BubbleChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BubbleChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BubbleChart.__proto__ || Object.getPrototypeOf(BubbleChart)).call.apply(_ref, [this].concat(args))), _this), _this.loadChart = function (container) {
      var chart = _dc2.default.bubbleChart(container);
      var helper = _this.props.chartHelper(_this, chart);
      helper.setProperties('colorAccessor', 'keyAccessor', 'valueAccessor', 'radiusValueAccessor', 'x', 'y', 'r', 'colorDomain');
      chart.render();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BubbleChart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.className, ref: this.loadChart });
    }
  }]);

  return BubbleChart;
}(_react.Component);

BubbleChart.propTypes = {
  colorAccessor: _react.PropTypes.func,
  keyAccessor: _react.PropTypes.func,
  valueAccessor: _react.PropTypes.func,
  radiusValueAccessor: _react.PropTypes.func,
  x: _react.PropTypes.func,
  y: _react.PropTypes.func,
  r: _react.PropTypes.func,
  colorDomain: _react.PropTypes.array
};
exports.default = (0, _Base.Base)(BubbleChart);