'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = exports.Base = function Base(DCComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.dcHelper = function (dcComponent, dcChart) {
        var loadDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var helper = new _helpers.ChartPropertyHelper(dcComponent, dcChart);
        if (loadDefault) {
          helper.setProperties('width', 'height', 'title', 'label', 'transitionDuration', 'margins', 'mouseZoomable', 'legend').setContextProperties('dimension', 'group');
        }
        if (dcComponent.props.setChart) {
          dcComponent.props.setChart(dcChart);
        }

        return helper;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(DCComponent, _extends({}, this.props, {
          crossfilterContext: this.context.crossfilterContext,
          chartHelper: this.dcHelper }));
      }
    }]);

    return _class;
  }(_react.Component), _class.propTypes = {
    dimension: _react.PropTypes.func.isRequired,
    group: _react.PropTypes.func.isRequired,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    title: _react.PropTypes.func,
    label: _react.PropTypes.func,
    transitionDuration: _react.PropTypes.number,
    margins: _react.PropTypes.object,
    mouseZoomable: _react.PropTypes.bool,
    legend: _react.PropTypes.object,
    setChart: _react.PropTypes.func
  }, _class.contextTypes = {
    crossfilterContext: _react.PropTypes.object.isRequired
  }, _temp2;
};