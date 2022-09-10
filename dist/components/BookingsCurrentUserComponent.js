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

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));

var _reactRedux = require("react-redux");

var _Utils = require("../utils/Utils");

var _moment = _interopRequireDefault(require("moment"));

var _actions = require("../actions");

var _auth0React = require("@auth0/auth0-react");

var BookingsCurrentUserComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BookingsCurrentUserComponent, _Component);

  var _super = (0, _createSuper2.default)(BookingsCurrentUserComponent);

  function BookingsCurrentUserComponent() {
    var _this;

    (0, _classCallCheck2.default)(this, BookingsCurrentUserComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.generate = function (element) {
      var _this$props = _this.props,
          currentUserEntries = _this$props.currentUserEntries,
          availableRooms = _this$props.availableRooms;

      if (currentUserEntries != null && availableRooms !== null) {
        console.log(currentUserEntries);
        return currentUserEntries.map(function (value) {
          var room = availableRooms.filter(function (it) {
            return it.id === value.roomId;
          })[0];
          return /*#__PURE__*/_react.default.cloneElement(element, {
            key: value.id
          }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
            sx: {
              fontSize: '0.1vw'
            },
            primary: "Time of your booking: ".concat((0, _moment.default)(value.timeStart).format("HH:mm DD/MM/YYYY"), "\n                                        At ").concat(room.roomId, " with purpose ").concat(value.usePurposeDescription)
          }), /*#__PURE__*/_react.default.createElement(_material.ListItemAvatar, null), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
            edge: "end",
            "aria-label": "delete",
            sx: {
              color: 'white'
            },
            key: value.id,
            onClick: function onClick() {
              return _this.handleDelete(value.id);
            }
          }, /*#__PURE__*/_react.default.createElement(_Delete.default, null))));
        });
      }
    };

    _this.handleDelete = function (id) {
      var dispatch = _this.props.dispatch;
      dispatch({
        type: _actions.ActionTypes.SHOW_DELETE_MODAL,
        property: {
          value: id
        }
      });
    };

    return _this;
  }

  (0, _createClass2.default)(BookingsCurrentUserComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          paddingTop: 5
        }
      }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
        variant: "h6"
      }, "Your listings"), /*#__PURE__*/_react.default.createElement(_material.List, null, this.generate( /*#__PURE__*/_react.default.createElement(_material.ListItem, null))));
    }
  }]);
  return BookingsCurrentUserComponent;
}(_react.Component);

function mapStateToProps(state) {
  return {
    currentUserEntries: (0, _Utils.getValueAppPropertyStore)(state, _Utils.CURRENT_USER_ENTRIES),
    availableRooms: (0, _Utils.getValueAppPropertyStore)(state, _Utils.ALL_ROOMS)
  };
}

var _default = (0, _auth0React.withAuth0)((0, _reactRedux.connect)(mapStateToProps)(BookingsCurrentUserComponent));

exports.default = _default;