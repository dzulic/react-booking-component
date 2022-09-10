"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

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

var _react = _interopRequireWildcard(require("react"));

var _system = require("@mui/system");

var _material = require("@mui/material");

var _moment = _interopRequireDefault(require("moment"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _actions = require("../actions");

var _MuiTextFieldRendering = require("./base/MuiTextFieldRendering");

var _auth0React = require("@auth0/auth0-react");

var _Utils = require("../utils/Utils");

var formatDate = function formatDate(date, time) {
  return new Date("".concat((0, _moment.default)(date).format("yyyy-MM-DD"), "T").concat(time, ":00.000+02:00")).toISOString();
};

var formName = 'bookRoomModule';

var AddBookingModal = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(AddBookingModal, _Component);

  var _super = (0, _createSuper2.default)(AddBookingModal);

  function AddBookingModal() {
    var _this;

    (0, _classCallCheck2.default)(this, AddBookingModal);
    _this = _super.call(this);

    _this.submitBookRoom = function (event) {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          property = _this$props.property,
          formValues = _this$props.formValues,
          auth0 = _this$props.auth0,
          selectedDate = _this$props.selectedDate,
          roomType = _this$props.roomType;
      dispatch({
        type: _actions.ActionTypes.SUBMIT_SCHEDULE_ROOM,
        property: {
          roomId: property.groupId,
          description: formValues.description,
          selectedTimeStart: formatDate(property.time, formValues.selectedTimeStart),
          selectedTimeEnd: formatDate(property.time, formValues.selectedTimeEnd),
          accessToken: auth0.getAccessTokenSilently
        }
      });
      dispatch({
        type: _actions.ActionTypes.CLOSE_MODAL,
        property: true
      });
      dispatch({
        type: _actions.ActionTypes.GET_CURRENT_USER_BOOKINGS,
        property: {
          accessToken: auth0.getAccessTokenSilently
        }
      });
      dispatch({
        type: _actions.ActionTypes.GET_ROOMS_AND_AGENDAS,
        property: {
          roomType: roomType,
          selectedDate: selectedDate,
          computerPlacesMin: formValues != null ? formValues.computerPlaces : 0,
          sittingPlacesMin: formValues != null ? formValues.sittingPlaces : 0,
          accessToken: auth0.getAccessTokenSilently
        }
      });
    };

    _this.state = {
      selectedTimeStart: undefined
    };
    _this.submitBookRoom = _this.submitBookRoom.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(AddBookingModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_material.Dialog, {
        open: true,
        onClose: this.props.closeMethod
      }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, null, "You can now book a room"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null, "Please check start and end time to reserve"), /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null, (0, _moment.default)(this.props.property.time).format("DD/MM/YYYY HH:mm")), /*#__PURE__*/_react.default.createElement(_system.Box, {
        sx: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          gridTemplateRows: 'auto',
          gridTemplateAreas: "\"text-field text-field\""
        }
      }, /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Select Time Start"), /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "selectedTimeStart",
        component: _MuiTextFieldRendering.renderTextField,
        label: "Select Time Start",
        autoFocus: true,
        margin: "dense",
        id: "selectedTimeStart",
        type: "time",
        fullWidth: true,
        variant: "standard"
      }), /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Select Time End"), /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "selectedTimeEnd",
        component: _MuiTextFieldRendering.renderTextField,
        label: "Select Time End",
        autoFocus: true,
        margin: "dense",
        id: "selectedTimeEnd",
        type: "time",
        fullWidth: true,
        variant: "standard"
      })), /*#__PURE__*/_react.default.createElement(_material.Typography, null, "What is the purpose of the booking"), /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "description",
        component: _MuiTextFieldRendering.renderTextField,
        label: "Description",
        autoFocus: true,
        margin: "dense",
        id: "description",
        type: "text",
        fullWidth: true,
        variant: "standard"
      })), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
        onClick: this.props.closeMethod
      }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
        onClick: this.submitBookRoom
      }, "Book a room")))));
    }
  }]);
  return AddBookingModal;
}(_react.Component);

function mapStateToProps(state) {
  return {
    formName: formName,
    formValues: (0, _reduxForm.getFormValues)(formName)(state),
    roomType: (0, _Utils.getValueAppPropertyStore)(state, _Utils.ROOM_TYPE),
    selectedDate: (0, _Utils.getValueAppPropertyStore)(state, _Utils.SELECTED_DATE)
  };
}

var _default = (0, _auth0React.withAuth0)((0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)({
  form: formName
})(AddBookingModal)));

exports.default = _default;