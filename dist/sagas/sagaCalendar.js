"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REST_ROOT_ENDPOINT = void 0;
exports.getAgendasForTimeAndType = getAgendasForTimeAndType;
exports.getCurrentUserBookings = getCurrentUserBookings;
exports.removeBooking = removeBooking;
exports.submitScheduleRoom = submitScheduleRoom;

var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));

var _effects = require("redux-saga/effects");

var _Api = require("../api/Api");

var _Utils = require("../utils/Utils");

var _actions = require("../actions");

var _moment = _interopRequireDefault(require("moment"));

var _marked = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(submitScheduleRoom),
    _marked2 = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(getAgendasForTimeAndType),
    _marked3 = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(getCurrentUserBookings),
    _marked4 = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(removeBooking);

var REST_ROOT_ENDPOINT = "http://localhost:8081/calendars";
exports.REST_ROOT_ENDPOINT = REST_ROOT_ENDPOINT;

function submitScheduleRoom(action) {
  var accessToken, body, response;
  return (0, _regeneratorRuntime2.default)().wrap(function submitScheduleRoom$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(action.property.accessToken);

        case 2:
          accessToken = _context.sent;
          body = {
            roomId: action.property.roomId,
            selectedTimeStart: action.property.selectedTimeStart,
            selectedTimeEnd: action.property.selectedTimeEnd,
            description: action.property.description
          };
          _context.prev = 4;
          _context.next = 7;
          return (0, _effects.call)(_Api.handleApiFetchPOST, REST_ROOT_ENDPOINT + "/reservations", body, accessToken);

        case 7:
          response = _context.sent;

          if (!(response.error != null)) {
            _context.next = 10;
            break;
          }

          throw new Error(response.message);

        case 10:
          _context.next = 17;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);
          _context.next = 17;
          return (0, _effects.put)({
            type: _actions.ActionTypes.SHOW_ERROR
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4, 12]]);
}

function getAgendasForTimeAndType(action) {
  var accessToken, response;
  return (0, _regeneratorRuntime2.default)().wrap(function getAgendasForTimeAndType$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(action.property.accessToken);

        case 2:
          accessToken = _context2.sent;
          console.log("GET A", action);
          _context2.prev = 4;
          _context2.next = 7;
          return (0, _effects.call)(_Api.handleApiFetchGET, "".concat(REST_ROOT_ENDPOINT, "/availability?").concat(new URLSearchParams({
            selectedTimeStart: action.property.selectedDate === null ? new Date().toISOString() : action.property.selectedDate,
            roomsIds: action.property.roomIds
          })), accessToken);

        case 7:
          response = _context2.sent;

          if (!(response.error != null)) {
            _context2.next = 10;
            break;
          }

          throw new Error(response.message);

        case 10:
          if (!response) {
            _context2.next = 13;
            break;
          }

          _context2.next = 13;
          return (0, _effects.put)({
            type: _actions.ActionTypes.ADD_EDIT_APP_PROP_STORE,
            property: {
              key: _Utils.AGENDA_ENTRIES,
              value: response
            }
          });

        case 13:
          _context2.next = 20;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](4);
          console.log(_context2.t0);
          _context2.next = 20;
          return (0, _effects.put)({
            property: _context2.t0,
            type: _actions.ActionTypes.SHOW_ERROR
          });

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[4, 15]]);
}

function getCurrentUserBookings(action) {
  var accessToken, response;
  return (0, _regeneratorRuntime2.default)().wrap(function getCurrentUserBookings$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(action.property.accessToken);

        case 2:
          accessToken = _context3.sent;
          _context3.prev = 3;
          _context3.next = 6;
          return (0, _effects.call)(_Api.handleApiFetchGET, "".concat(REST_ROOT_ENDPOINT, "/reservations/current"), accessToken);

        case 6:
          response = _context3.sent;

          if (!(response.error != null)) {
            _context3.next = 9;
            break;
          }

          throw new Error(response.message);

        case 9:
          if (!response) {
            _context3.next = 12;
            break;
          }

          _context3.next = 12;
          return (0, _effects.put)({
            type: _actions.ActionTypes.ADD_EDIT_APP_PROP_STORE,
            property: {
              key: _Utils.CURRENT_USER_ENTRIES,
              value: response
            }
          });

        case 12:
          _context3.next = 19;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](3);
          console.log(_context3.t0);
          _context3.next = 19;
          return (0, _effects.put)({
            type: _actions.ActionTypes.SHOW_ERROR
          });

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[3, 14]]);
}

function removeBooking(action) {
  var accessToken, response;
  return (0, _regeneratorRuntime2.default)().wrap(function removeBooking$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.call)(action.property.accessToken);

        case 2:
          accessToken = _context4.sent;
          _context4.prev = 3;
          _context4.next = 6;
          return (0, _effects.call)(_Api.handleApiFetchDELETE, "".concat(REST_ROOT_ENDPOINT, "/reservations/").concat(action.property.value), accessToken);

        case 6:
          _context4.next = 8;
          return (0, _effects.call)(_Api.handleApiFetchGET, "".concat(REST_ROOT_ENDPOINT, "/reservations/current"), accessToken);

        case 8:
          response = _context4.sent;

          if (!(response.error != null)) {
            _context4.next = 11;
            break;
          }

          throw new Error(response.message);

        case 11:
          if (!response) {
            _context4.next = 14;
            break;
          }

          _context4.next = 14;
          return (0, _effects.put)({
            type: _actions.ActionTypes.ADD_EDIT_APP_PROP_STORE,
            property: {
              key: _Utils.CURRENT_USER_ENTRIES,
              value: response
            }
          });

        case 14:
          _context4.next = 21;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](3);
          console.log(_context4.t0);
          _context4.next = 21;
          return (0, _effects.put)({
            type: _actions.ActionTypes.SHOW_ERROR
          });

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[3, 16]]);
}