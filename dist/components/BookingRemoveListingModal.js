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

var _actions = require("../actions");

var BookingRemovalListingModal = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BookingRemovalListingModal, _Component);

  var _super = (0, _createSuper2.default)(BookingRemovalListingModal);

  function BookingRemovalListingModal() {
    var _this;

    (0, _classCallCheck2.default)(this, BookingRemovalListingModal);
    _this = _super.call(this);

    _this.delete = function () {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          auth0 = _this$props.auth0,
          property = _this$props.property,
          closeMethod = _this$props.closeMethod;
      dispatch({
        type: _actions.ActionTypes.REMOVE_BOOKING,
        property: {
          value: property.value,
          accessToken: auth0.getAccessTokenSilently
        }
      });
      closeMethod();
    };

    return _this;
  }

  (0, _createClass2.default)(BookingRemovalListingModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_material.Dialog, {
        open: true,
        onClose: this.props.closeMethod
      }, /*#__PURE__*/_react.default.createElement(_material.Alert, {
        severity: "warning"
      }, "Deleting listing"), /*#__PURE__*/_react.default.createElement(_material.DialogTitle, null, "Are you sure you want to remove listing?"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null)), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
        onClick: this.props.closeMethod
      }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
        onClick: this.delete
      }, "Delete"))));
    }
  }]);
  return BookingRemovalListingModal;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

var _default = (0, _auth0React.withAuth0)((0, _reactRedux.connect)(mapStateToProps)(BookingRemovalListingModal));

exports.default = _default;