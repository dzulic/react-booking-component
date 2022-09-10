"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _AddBookingModal = _interopRequireDefault(require("../AddBookingModal"));

var _actions = require("../../actions");

var _ErrorModal = _interopRequireDefault(require("./ErrorModal"));

var _BookingRemoveListingModal = _interopRequireDefault(require("../BookingRemoveListingModal"));

var ModalDialog = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ModalDialog, _React$Component);

  var _super = (0, _createSuper2.default)(ModalDialog);

  function ModalDialog(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ModalDialog);
    _this = _super.call(this, props);
    _this.onClose = _this.onClose.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ModalDialog, [{
    key: "onClose",
    value: function onClose() {
      var dispatch = this.props.dispatch;
      dispatch({
        type: _actions.ActionTypes.CLOSE_MODAL,
        property: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var modalDialog = this.props.modalDialog;

      var content = modalDialog.SHOW_ADD_BOOKING_MODAL && /*#__PURE__*/_react.default.createElement(_AddBookingModal.default, {
        closeMethod: this.onClose,
        property: modalDialog.SHOW_MODAL_PROPERTY
      }) || modalDialog.SHOW_ERROR && /*#__PURE__*/_react.default.createElement(_ErrorModal.default, {
        closeMethod: this.onClose,
        property: modalDialog.SHOW_MODAL_PROPERTY
      }) || modalDialog.SHOW_DELETE_MODAL && /*#__PURE__*/_react.default.createElement(_BookingRemoveListingModal.default, {
        closeMethod: this.onClose,
        property: modalDialog.SHOW_MODAL_PROPERTY
      });

      return /*#__PURE__*/_react.default.createElement("div", null, modalDialog.SHOW_MODAL_PROPERTY && content);
    }
  }]);
  return ModalDialog;
}(_react.default.Component);

function mapStateToProps(state) {
  return {
    modalDialog: state.modalDialog
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(ModalDialog);

exports.default = _default;