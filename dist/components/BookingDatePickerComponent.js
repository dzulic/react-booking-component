"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _AdapterMoment = require("@mui/x-date-pickers/AdapterMoment");

var _xDatePickers = require("@mui/x-date-pickers");

var _material = require("@mui/material");

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _Utils = require("../utils/Utils");

var _moment = _interopRequireDefault(require("moment"));

var DATE_FORMAT = 'YYYY-MM-DDTHH:mm:00.000+02:00';

var BookingDatePickerComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BookingDatePickerComponent, _Component);

  var _super = (0, _createSuper2.default)(BookingDatePickerComponent);

  function BookingDatePickerComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, BookingDatePickerComponent);
    _this = _super.call(this, props);

    _this.handleChange = function (date) {
      if (date !== undefined) {
        var dispatch = _this.props.dispatch;
        dispatch({
          type: _actions.ActionTypes.ADD_EDIT_APP_PROPERTY,
          property: {
            key: _Utils.SELECTED_DATE,
            value: date.format(DATE_FORMAT)
          }
        });
      }
    };

    return _this;
  }

  (0, _createClass2.default)(BookingDatePickerComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.FormControl, {
        fullWidth: true
      }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
        component: "h5"
      }, "Choose a date"), /*#__PURE__*/_react.default.createElement(_xDatePickers.LocalizationProvider, {
        dateAdapter: _AdapterMoment.AdapterMoment
      }, /*#__PURE__*/_react.default.createElement(_xDatePickers.DesktopDatePicker, {
        componentsProps: {
          actionBar: {
            actions: []
          }
        },
        minutesStep: 15,
        displayStaticWrapperAs: "mobile",
        disablePast: true,
        format: "dd / MM / yyyy",
        inputFormat: "DD/MM/yyyy",
        toolbarTitle: "Please select date and time to book a room",
        openTo: "day",
        sx: {
          width: '100%'
        },
        ampm: false,
        value: this.props.selectedDate !== undefined ? (0, _moment.default)(this.props.selectedDate, DATE_FORMAT) : null,
        onChange: function onChange(newValue) {
          _this2.handleChange(newValue);
        },
        renderInput: function renderInput(params) {
          return /*#__PURE__*/_react.default.createElement(_material.TextField, params);
        }
      }))));
    }
  }]);
  return BookingDatePickerComponent;
}(_react.Component);

function mapStateToProps(state) {
  return {
    selectedDate: (0, _Utils.getValueAppPropertyStore)(state, _Utils.SELECTED_DATE)
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(BookingDatePickerComponent);

exports.default = _default;