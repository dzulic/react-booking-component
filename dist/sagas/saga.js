"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEditAppPropertySaga = addEditAppPropertySaga;
exports.closeModalDialog = closeModalDialog;
exports.showModalDialog = showModalDialog;

var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));

var _effects = require("redux-saga/effects");

var _actions = require("../actions");

var _marked = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(addEditAppPropertySaga),
    _marked2 = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(closeModalDialog),
    _marked3 = /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(showModalDialog);

//add or edit single property
function addEditAppPropertySaga(action) {
  var newProperty;
  return (0, _regeneratorRuntime2.default)().wrap(function addEditAppPropertySaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!action.property) {
            _context.next = 6;
            break;
          }

          newProperty = {
            key: action.property.key,
            value: action.property.value
          };
          _context.next = 4;
          return (0, _effects.put)({
            type: _actions.ActionTypes.ADD_EDIT_APP_PROP_STORE,
            property: newProperty
          });

        case 4:
          _context.next = 7;
          break;

        case 6:
          console.log("NO SAGA");

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function closeModalDialog(action) {
  return (0, _regeneratorRuntime2.default)().wrap(function closeModalDialog$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!action.property) {
            _context2.next = 3;
            break;
          }

          _context2.next = 3;
          return (0, _effects.put)({
            type: _actions.ActionTypes.CLOSE_MODAL_STORE
          });

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function showModalDialog(action) {
  return (0, _regeneratorRuntime2.default)().wrap(function showModalDialog$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!action.property) {
            _context3.next = 3;
            break;
          }

          _context3.next = 3;
          return (0, _effects.put)({
            type: _actions.ActionTypes.SHOW_MODAL_STORE,
            property: action.property
          });

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}