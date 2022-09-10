"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sagas;

var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));

var _actions = require("./actions");

var _sagaCalendar = require("./sagas/sagaCalendar");

var _effects = require("redux-saga/effects");

var _saga = require("./sagas/saga");

var _sagaRooms = require("./sagas/sagaRooms");

var _marked = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(sagas);

function sagas() {
  return (0, _regeneratorRuntime2.default)().wrap(function sagas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_actions.ActionTypes.ADD_EDIT_APP_PROPERTY, _saga.addEditAppPropertySaga);

        case 2:
          _context.next = 4;
          return (0, _effects.takeEvery)(_actions.ActionTypes.SUBMIT_SCHEDULE_ROOM, _sagaCalendar.submitScheduleRoom);

        case 4:
          _context.next = 6;
          return (0, _effects.takeEvery)(_actions.ActionTypes.GET_AGENDAS, _sagaCalendar.getAgendasForTimeAndType);

        case 6:
          _context.next = 8;
          return (0, _effects.takeEvery)(_actions.ActionTypes.GET_ALL_ROOMS, _sagaRooms.getAllRooms);

        case 8:
          _context.next = 10;
          return (0, _effects.takeEvery)(_actions.ActionTypes.CLOSE_MODAL, _saga.closeModalDialog);

        case 10:
          _context.next = 12;
          return (0, _effects.takeEvery)(_actions.ActionTypes.SHOW_MODAL, _saga.showModalDialog);

        case 12:
          _context.next = 14;
          return (0, _effects.takeEvery)(_actions.ActionTypes.GET_CURRENT_USER_BOOKINGS, _sagaCalendar.getCurrentUserBookings);

        case 14:
          _context.next = 16;
          return (0, _effects.takeEvery)(_actions.ActionTypes.GET_ROOMS_AND_AGENDAS, _sagaRooms.getRoomsAndAgendasForCriteria);

        case 16:
          _context.next = 18;
          return (0, _effects.takeEvery)(_actions.ActionTypes.REMOVE_BOOKING, _sagaCalendar.removeBooking);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}