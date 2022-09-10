"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTextField = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _excluded = ["input", "label", "meta"];

var renderTextField = function renderTextField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.TextField, Object.assign({
    value: input.value // errorText={touched && error}

  }, input, custom));
};

exports.renderTextField = renderTextField;