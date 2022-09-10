"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REST_ROOT_ENDPOINT = void 0;
exports.getAllRooms = getAllRooms;
exports.getRoomsAndAgendasForCriteria = getRoomsAndAgendasForCriteria;

var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));

var _Api = require("../api/Api");

var _effects = require("redux-saga/effects");

var _actions = require("../actions");

var _Utils = require("../utils/Utils");

var _marked = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(getAllRooms),
    _marked2 = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(getRoomsAndAgendasForCriteria);

var REST_ROOT_ENDPOINT = "http://localhost:8082/rooms";
exports.REST_ROOT_ENDPOINT = REST_ROOT_ENDPOINT;

function getAllRooms(action) {
  var accessToken, response, availableRooms;
  return (0, _regeneratorRuntime2.default)().wrap(function getAllRooms$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(action.property.accessToken);

        case 2:
          accessToken = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return (0, _effects.call)(function () {
            return new Promise(function (resolve) {
              (0, _Api.handleApiFetchGET)(REST_ROOT_ENDPOINT, accessToken).then(function (_result) {
                resolve(_result);
              });
            });
          });

        case 6:
          response = _context.sent;

          if (response === true) {
            //redirect to homepage
            window.location = "/";
          }

          if (!response) {
            _context.next = 12;
            break;
          }

          availableRooms = {
            key: _Utils.ALL_ROOMS,
            value: response
          };
          _context.next = 12;
          return (0, _effects.put)({
            type: _actions.ActionTypes.ADD_EDIT_APP_PROP_STORE,
            property: availableRooms
          });

        case 12:
          _context.next = 19;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);
          _context.next = 19;
          return (0, _effects.put)({
            type: 'SHOW_ERROR_MODAL'
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 14]]);
}

function getRoomsAndAgendasForCriteria(action) {
  var accessToken, response;
  return (0, _regeneratorRuntime2.default)().wrap(function getRoomsAndAgendasForCriteria$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(action.property.accessToken);

        case 2:
          accessToken = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _effects.call)(_Api.handleApiFetchGET, "".concat(REST_ROOT_ENDPOINT, "/").concat(action.property.roomType, "?").concat(new URLSearchParams({
            computerPlacesMin: action.property.computerPlacesMin || 0,
            sittingPlacesMin: action.property.sittingPlacesMin || 0
          })), accessToken);

        case 6:
          response = _context2.sent;

          if (!response) {
            _context2.next = 12;
            break;
          }

          _context2.next = 10;
          return (0, _effects.put)({
            type: _actions.ActionTypes.ADD_EDIT_APP_PROP_STORE,
            property: {
              key: _Utils.AVAILABLE_ROOMS,
              value: response
            }
          });

        case 10:
          _context2.next = 12;
          return (0, _effects.put)({
            type: _actions.ActionTypes.GET_AGENDAS,
            property: {
              selectedDate: action.property.selectedDate,
              roomIds: response,
              accessToken: action.property.accessToken
            }
          });

        case 12:
          _context2.next = 19;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0); //TODO SHOW_ERROR_MODAL

          _context2.next = 19;
          return (0, _effects.put)({
            type: 'SHOW_ERROR_MODAL'
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[3, 14]]);
}