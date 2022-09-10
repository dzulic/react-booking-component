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

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _Utils = require("../utils/Utils");

var options = [{
  label: '',
  value: undefined
}, {
  label: 'Interactive',
  value: 'interactive'
}, {
  label: 'Lecture',
  value: 'lecture'
}, {
  label: 'Combined',
  value: 'combined'
}, {
  label: 'Auditoria',
  value: 'auditoria'
}];
var itemList = options.map(function (item, index) {
  return /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    value: item.value,
    key: index
  }, item.label);
});

var renderSelectField = function renderSelectField(_ref) {
  var custom = Object.assign({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_material.InputLabel, {
    id: "demo-simple-select-label"
  }, "Select the type of the room"), /*#__PURE__*/_react.default.createElement(_material.Select, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Room Type",
    onChange: custom['other'],
    input: /*#__PURE__*/_react.default.createElement(_material.Input, {
      name: "roomType",
      id: "roomType",
      defaultValue: undefined
    })
  }, itemList));
};

var BookingRoomTypeComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BookingRoomTypeComponent, _Component);

  var _super = (0, _createSuper2.default)(BookingRoomTypeComponent);

  function BookingRoomTypeComponent() {
    var _this;

    (0, _classCallCheck2.default)(this, BookingRoomTypeComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleChange = function (event) {
      if (event !== undefined) {
        var dispatch = _this.props.dispatch;
        dispatch({
          type: _actions.ActionTypes.ADD_EDIT_APP_PROPERTY,
          property: {
            key: _Utils.ROOM_TYPE,
            value: event.target.value
          }
        });
      }
    };

    return _this;
  }

  (0, _createClass2.default)(BookingRoomTypeComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "favoriteColor",
        component: renderSelectField,
        label: "Favorite Color",
        other: this.handleChange
      }));
    }
  }]);
  return BookingRoomTypeComponent;
}(_react.Component);

var _default = (0, _reactRedux.connect)()(BookingRoomTypeComponent);

exports.default = _default;