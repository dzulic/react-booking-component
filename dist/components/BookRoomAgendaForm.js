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

var _reactCalendarTimeline = _interopRequireWildcard(require("react-calendar-timeline"));

var _moment = _interopRequireDefault(require("moment"));

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _CustomHeader = require("react-calendar-timeline/lib/lib/headers/CustomHeader");

var _Utils = require("../utils/Utils");

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _TodayMarker = _interopRequireDefault(require("react-calendar-timeline/lib/lib/markers/public/TodayMarker"));

var _actions = require("../actions");

var defaultTime = (0, _moment.default)().startOf("hour");
var defaultTimeStart = defaultTime.toDate();
var defaultTimeEnd = defaultTime.add(13, "h").toDate();

var BookRoomAgendaForm = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BookRoomAgendaForm, _Component);

  var _super = (0, _createSuper2.default)(BookRoomAgendaForm);

  function BookRoomAgendaForm() {
    var _this;

    (0, _classCallCheck2.default)(this, BookRoomAgendaForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.createGroups = function () {
      var _this$props = _this.props,
          allRooms = _this$props.allRooms,
          availableRooms = _this$props.availableRooms,
          roomType = _this$props.roomType;
      var groups = [];

      if (allRooms !== null) {
        groups = allRooms.filter(function (it) {
          return it.roomType === roomType;
        }).filter(function (all) {
          return availableRooms.includes(all.id);
        }).map(function (room) {
          return {
            id: room.id,
            title: room.roomId,
            height: 80,
            rightTitle: "".concat(room.computerPlaces, "cp / ").concat(room.sittingPlaces, "sp")
          };
        });
      }

      console.log(allRooms);

      if (groups.length === 0 && allRooms != null) {
        return allRooms.map(function (room) {
          return {
            id: room.id,
            title: "".concat(room.roomId, " / ").concat(room.roomType, " \n                  "),
            height: 80,
            rightTitle: "".concat(room.computerPlaces, "cp / ").concat(room.sittingPlaces, "sp")
          };
        });
      }

      return groups;
    };

    _this.createItems = function () {
      var agendaEntries = _this.props.agendaEntries;
      var items = [];

      if (agendaEntries !== null) {
        items = agendaEntries.map(function (entry, index) {
          return {
            id: index,
            group: entry.roomId,
            title: entry.usePurposeDescription,
            start_time: (0, _moment.default)(entry.timeStart),
            end_time: (0, _moment.default)(entry.timeEnd).add(2, 'h')
          };
        });
      }

      return items;
    };

    _this.handleItemClick = function (itemId, _, time) {
      var dispatch = _this.props.dispatch;
      dispatch({
        type: _actions.ActionTypes.SHOW_DELETE_MODAL,
        property: {
          value: itemId
        }
      });
    };

    _this.handleCanvasClick = function (groupId, time) {
      var dispatch = _this.props.dispatch;
      dispatch({
        type: _actions.ActionTypes.SHOW_MODAL,
        property: {
          groupId: groupId,
          time: (0, _moment.default)(time).format()
        }
      });
    };

    return _this;
  }

  (0, _createClass2.default)(BookRoomAgendaForm, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_Box.default, {
        sx: {
          width: '100%',
          margin: 'auto'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactCalendarTimeline.default, {
        groups: this.createGroups(),
        items: this.createItems(),
        defaultTimeStart: defaultTimeStart,
        defaultTimeEnd: defaultTimeEnd,
        itemHeightRatio: 0.75,
        onItemClick: this.handleItemClick,
        onCanvasClick: this.handleCanvasClick,
        rightSidebarWidth: 150,
        buffer: 1.2
      }, /*#__PURE__*/_react.default.createElement(_TodayMarker.default, null), /*#__PURE__*/_react.default.createElement(_reactCalendarTimeline.TimelineHeaders, null, /*#__PURE__*/_react.default.createElement(_reactCalendarTimeline.SidebarHeader, null, function (_ref) {
        var getRootProps = _ref.getRootProps;
        return /*#__PURE__*/_react.default.createElement("div", Object.assign({
          className: "rct-sidebar-title-text"
        }, getRootProps()), "Room id/Room type");
      }), /*#__PURE__*/_react.default.createElement(_reactCalendarTimeline.DateHeader, {
        unit: "primaryHeader"
      }), /*#__PURE__*/_react.default.createElement(_reactCalendarTimeline.DateHeader, null), /*#__PURE__*/_react.default.createElement(_CustomHeader.CustomHeader, {
        getLeftOffsetFromDate: function getLeftOffsetFromDate(start) {
          return start;
        },
        showPeriod: function showPeriod() {
          return console.log("Show period");
        },
        canvasWidth: 50,
        canvasTimeStart: 8,
        canvasTimeEnd: 20,
        visibleTimeStart: 8,
        visibleTimeEnd: 20,
        timeSteps: {
          hour: 1
        },
        height: 80,
        headerData: {
          someData: 'data'
        },
        unit: "day"
      }, function (_ref2) {
        var intervals = _ref2.headerContext.intervals,
            getRootProps = _ref2.getRootProps,
            getIntervalProps = _ref2.getIntervalProps,
            showPeriod = _ref2.showPeriod;
        return /*#__PURE__*/_react.default.createElement("div", getRootProps(), intervals.map(function (interval) {
          var intervalStyle = {
            lineHeight: '30px',
            textAlign: 'center',
            borderLeft: '1px solid black',
            cursor: 'pointer',
            backgroundColor: 'Turquoise',
            color: 'white'
          };
          return /*#__PURE__*/_react.default.createElement("div", Object.assign({
            onClick: function onClick() {
              showPeriod(interval.startTime, interval.endTime);
            }
          }, getIntervalProps({
            interval: interval,
            style: intervalStyle
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: "sticky"
          }, interval.startTime.format('YYYY')));
        }));
      }))));
    }
  }]);
  return BookRoomAgendaForm;
}(_react.Component);

function mapStateToProps(state) {
  return {
    roomType: (0, _Utils.getValueAppPropertyStore)(state, _Utils.ROOM_TYPE),
    agendaEntries: (0, _Utils.getValueAppPropertyStore)(state, _Utils.AGENDA_ENTRIES),
    availableRooms: (0, _Utils.getValueAppPropertyStore)(state, _Utils.AVAILABLE_ROOMS),
    allRooms: (0, _Utils.getValueAppPropertyStore)(state, _Utils.ALL_ROOMS)
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)({
  form: "app",
  // TO REMOVE
  destroyOnUnmount: false,
  enableReinitialize: false
})(BookRoomAgendaForm));

exports.default = _default;