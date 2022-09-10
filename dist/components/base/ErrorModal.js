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

var _system = require("@mui/system");

var _material = require("@mui/material");

var _reactRedux = require("react-redux");

var _auth0React = require("@auth0/auth0-react");

var ErrorModal = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ErrorModal, _Component);

  var _super = (0, _createSuper2.default)(ErrorModal);

  function ErrorModal() {
    (0, _classCallCheck2.default)(this, ErrorModal);
    return _super.call(this);
  }

  (0, _createClass2.default)(ErrorModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_material.Dialog, {
        open: true,
        onClose: this.props.closeMethod
      }, /*#__PURE__*/_react.default.createElement(_material.Alert, {
        severity: "error"
      }, "Something went wrong"), /*#__PURE__*/_react.default.createElement(_material.DialogTitle, null, "Please refresh the page"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null)), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
        onClick: this.props.closeMethod
      }, "Close modal"))));
    }
  }]);
  return ErrorModal;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

var _default = (0, _auth0React.withAuth0)((0, _reactRedux.connect)(mapStateToProps)(ErrorModal));

exports.default = _default;