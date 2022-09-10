"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalReducer = void 0;

var _actions = require("../actions");

var modalReducer = function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.ActionTypes.CLOSE_MODAL_STORE:
      {
        return {};
      }
    //TODO REFACTOR NAMING

    case _actions.ActionTypes.SHOW_MODAL_STORE:
      return {
        SHOW_MODAL_PROPERTY: action.property,
        SHOW_ADD_BOOKING_MODAL: true
      };

    case _actions.ActionTypes.SHOW_ERROR:
      return {
        SHOW_MODAL_PROPERTY: action.property,
        SHOW_ERROR: true
      };

    case _actions.ActionTypes.SHOW_DELETE_MODAL:
      return {
        SHOW_MODAL_PROPERTY: action.property,
        SHOW_DELETE_MODAL: true
      };

    default:
      return state;
  }
};

exports.modalReducer = modalReducer;