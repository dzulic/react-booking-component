"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECTED_TIME = exports.SELECTED_DATE = exports.ROOM_TYPE = exports.CURRENT_USER_ENTRIES = exports.AVAILABLE_ROOMS = exports.ALL_ROOMS = exports.AGENDA_ENTRIES = void 0;
exports.getValueAppPropertyStore = getValueAppPropertyStore;

function getValueAppPropertyStore(state, key) {
  if (state.app) {
    var property = state.app.filter(function (property) {
      return property.key === key;
    });
    var ret = property && property.length !== 0 ? property[0].value : null;
    return ret;
  }

  return null;
}

var SELECTED_DATE = 'SELECTED_DATE';
exports.SELECTED_DATE = SELECTED_DATE;
var SELECTED_TIME = 'SELECTED_TIME';
exports.SELECTED_TIME = SELECTED_TIME;
var ROOM_TYPE = 'ROOM_TYPE';
exports.ROOM_TYPE = ROOM_TYPE;
var ALL_ROOMS = 'ALL_ROOMS';
exports.ALL_ROOMS = ALL_ROOMS;
var AGENDA_ENTRIES = 'AGENDA_ENTRIES';
exports.AGENDA_ENTRIES = AGENDA_ENTRIES;
var CURRENT_USER_ENTRIES = 'CURRENT_USER_ENTRIES';
exports.CURRENT_USER_ENTRIES = CURRENT_USER_ENTRIES;
var AVAILABLE_ROOMS = 'AVAILABLE_ROOMS';
exports.AVAILABLE_ROOMS = AVAILABLE_ROOMS;