"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = void 0;

var _history = require("history");

var history = (0, _history.createBrowserHistory)({
  pathname: 'http://localhost:3000'
});
exports.history = history;