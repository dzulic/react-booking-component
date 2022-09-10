"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _toolkit = require("@reduxjs/toolkit");

var _reducer = require("./reducers/reducer");

var _modalReducer = require("./reducers/modalReducer");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _sagas = _interopRequireDefault(require("./sagas"));

var _history = require("./utils/history");

var _reduxForm = require("redux-form");

var reducers = (0, _redux.combineReducers)({
  app: _reducer.AppReducer,
  modalDialog: _modalReducer.modalReducer,
  form: _reduxForm.reducer
});
var middlewares = []; // add the saga middleware

var sagaMiddleware = (0, _reduxSaga.default)();
middlewares.push(sagaMiddleware);
var store = (0, _toolkit.configureStore)({
  reducer: reducers,
  middleware: middlewares
});
sagaMiddleware.run(_sagas.default, _history.history);
var _default = store;
exports.default = _default;