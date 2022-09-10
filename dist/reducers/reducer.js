"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppReducer = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _actions = require("../actions");

var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var property = action.property;

  switch (action.type) {
    case _actions.ActionTypes.ADD_EDIT_APP_PROP_STORE:
      var edit = state.filter(function (stateProperty) {
        return stateProperty.key === property.key;
      })[0];

      if (!edit) {
        return [].concat((0, _toConsumableArray2.default)(state), [property]);
      } else {
        return state.map(function (stateProperty) {
          return stateProperty.key === property.key ? (0, _objectSpread2.default)({}, action.property) : stateProperty;
        });
      }

    case _actions.ActionTypes.REMOVE_APP_PROP_STORE:
      return state.filter(function (stateProperty) {
        return stateProperty.key !== property.key;
      });

    default:
      return state;
  }
};

exports.AppReducer = AppReducer;