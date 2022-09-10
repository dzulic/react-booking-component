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

var _BookingDatePickerComponent = _interopRequireDefault(require("./BookingDatePickerComponent"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _BookingRoomTypeComponent = _interopRequireDefault(require("./BookingRoomTypeComponent"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _Utils = require("../utils/Utils");

var _material = require("@mui/material");

var _actions = require("../actions");

var _ModalDialog = _interopRequireDefault(require("./base/ModalDialog"));

var _BookRoomAgendaForm = _interopRequireDefault(require("./BookRoomAgendaForm"));

var _auth0React = require("@auth0/auth0-react");

var _MuiTextFieldRendering = require("./base/MuiTextFieldRendering");

require("../../App.css");

var BookRoomForm = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BookRoomForm, _Component);

  var _super = (0, _createSuper2.default)(BookRoomForm);

  function BookRoomForm(props) {
    var _this;

    (0, _classCallCheck2.default)(this, BookRoomForm);
    _this = _super.call(this, props);

    _this.onSubmit = function () {
      var getAccessTokenSilently = _this.props.auth0.getAccessTokenSilently;
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          selectedDate = _this$props.selectedDate,
          roomType = _this$props.roomType,
          formValues = _this$props.formValues;
      dispatch({
        type: _actions.ActionTypes.GET_ROOMS_AND_AGENDAS,
        property: {
          roomType: roomType,
          selectedDate: selectedDate,
          computerPlacesMin: formValues != null ? formValues.computerPlaces : 0,
          sittingPlacesMin: formValues != null ? formValues.sittingPlaces : 0,
          accessToken: getAccessTokenSilently
        }
      });
    };

    return _this;
  }

  (0, _createClass2.default)(BookRoomForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props2 = this.props,
          dispatch = _this$props2.dispatch,
          formValues = _this$props2.formValues,
          selectedDate = _this$props2.selectedDate,
          roomType = _this$props2.roomType;
      var getAccessTokenSilently = this.props.auth0.getAccessTokenSilently;
      dispatch({
        type: _actions.ActionTypes.GET_ROOMS_AND_AGENDAS,
        property: {
          roomType: roomType,
          selectedDate: selectedDate,
          computerPlacesMin: formValues != null ? formValues.computerPlaces : 0,
          sittingPlacesMin: formValues != null ? formValues.sittingPlaces : 0,
          accessToken: getAccessTokenSilently
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var getAccessTokenSilently = this.props.auth0.getAccessTokenSilently;
      var _this$props3 = this.props,
          dispatch = _this$props3.dispatch,
          availableRooms = _this$props3.availableRooms;

      if (availableRooms == null) {
        dispatch({
          type: _actions.ActionTypes.GET_ALL_ROOMS,
          property: {
            accessToken: getAccessTokenSilently
          }
        });
        dispatch({
          type: _actions.ActionTypes.GET_CURRENT_USER_BOOKINGS,
          property: {
            accessToken: getAccessTokenSilently
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var buttonDisabled = this.props.roomType === undefined || this.props.roomType == null || this.props.selectedDate === null;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement(_ModalDialog.default, null), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateAreas: " \"title title\"\n                    \"selectRoomType selectDay\"\n                    \"selectRoom1 selectRoom2\"\n                    \"button button\"\n                    \"timeline timeline\"",
          gap: 5,
          gridTemplateRows: 'auto'
        }
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          gridArea: 'title',
          padding: '20px'
        }
      }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
        variant: "h5",
        component: "h5"
      }, "Please fill in all the search criteria")), /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          gridArea: 'selectRoomType'
        }
      }, /*#__PURE__*/_react.default.createElement(_BookingRoomTypeComponent.default, null)), /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          gridArea: 'selectDay'
        }
      }, /*#__PURE__*/_react.default.createElement(_BookingDatePickerComponent.default, null)), /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          gridArea: 'selectRoom1'
        }
      }, /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Computer Places Min:"), /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "computerPlaces",
        component: _MuiTextFieldRendering.renderTextField,
        label: "Number of computer places",
        variant: "outlined",
        required: true,
        fullWidth: true,
        type: "number",
        id: "computerPlaces",
        defaultValue: 0,
        autoFocus: true
      })), /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          gridArea: 'selectRoom2'
        }
      }, /*#__PURE__*/_react.default.createElement(_material.Typography, null, "Sitting Places Min:"), /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "sittingPlaces",
        component: _MuiTextFieldRendering.renderTextField,
        label: "Number of sitting places",
        variant: "outlined",
        type: "number",
        required: true,
        fullWidth: true,
        id: "sittingPlaces",
        defaultValue: 0,
        autoFocus: true
      })), /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          gridArea: 'button'
        }
      }, /*#__PURE__*/_react.default.createElement(_material.Button, {
        variant: "contained",
        onClick: this.onSubmit,
        disabled: buttonDisabled
      }, "Filter rooms")), /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          gridArea: "timeline",
          marginTop: '50px',
          marginBottom: '50px'
        }
      }, /*#__PURE__*/_react.default.createElement(_BookRoomAgendaForm.default, null)))));
    }
  }]);
  return BookRoomForm;
}(_react.Component);

function mapStateToProps(state) {
  return {
    roomType: (0, _Utils.getValueAppPropertyStore)(state, _Utils.ROOM_TYPE),
    selectedDate: (0, _Utils.getValueAppPropertyStore)(state, _Utils.SELECTED_DATE),
    selectedTime: (0, _Utils.getValueAppPropertyStore)(state, _Utils.SELECTED_TIME),
    availableRooms: (0, _Utils.getValueAppPropertyStore)(state, _Utils.ALL_ROOMS),
    agendaEntries: (0, _Utils.getValueAppPropertyStore)(state, _Utils.AGENDA_ENTRIES),
    formValues: (0, _reduxForm.getFormValues)("bookRoomModule")(state)
  };
}

var _default = (0, _auth0React.withAuth0)((0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)({
  form: "bookRoomModule",
  // TO REMOVE
  destroyOnUnmount: false,
  enableReinitialize: true
})(BookRoomForm)));

exports.default = _default;