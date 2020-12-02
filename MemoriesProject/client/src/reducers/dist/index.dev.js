"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = void 0;

var _redux = require("redux");

var _posts = _interopRequireDefault(require("./posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  posts: _posts["default"]
});
exports.reducers = reducers;