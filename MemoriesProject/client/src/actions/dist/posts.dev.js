"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePost = exports.likePost = exports.updatePost = exports.createPost = exports.getPosts = void 0;

var api = _interopRequireWildcard(require("../api"));

var _actionTypes = require("../constants/actionTypes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//Action Creators
var getPosts = function getPosts(dispatch) {
  var _ref, data;

  return regeneratorRuntime.async(function getPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(api.fetchPost());

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          dispatch({
            type: _actionTypes.FETCH_ALL,
            payload: data
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log.error(_context.t0.message);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getPosts = getPosts;

var createPost = function createPost(post) {
  return function _callee(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(api.createPost(post));

          case 3:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _actionTypes.CREATE,
              payload: data
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.message);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.createPost = createPost;

var updatePost = function updatePost(id, post) {
  return function _callee2(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(api.updatePost(id, post));

          case 3:
            _ref3 = _context3.sent;
            data = _ref3.data;
            dispatch({
              type: _actionTypes.UPDATE,
              payload: data
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0.message);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.updatePost = updatePost;

var likePost = function likePost(id) {
  return function _callee3(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(api.likePost(id));

          case 3:
            _ref4 = _context4.sent;
            data = _ref4.data;
            dispatch({
              type: _actionTypes.LIKE,
              payload: data
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0.message);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.likePost = likePost;

var deletePost = function deletePost(id) {
  return function _callee4(dispatch) {
    return regeneratorRuntime.async(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.t0 = regeneratorRuntime;
            _context5.next = 4;
            return regeneratorRuntime.awrap(api.deletePost(id));

          case 4:
            _context5.t1 = _context5.sent;
            _context5.next = 7;
            return _context5.t0.awrap.call(_context5.t0, _context5.t1);

          case 7:
            dispatch({
              type: _actionTypes.DELETE,
              payload: id
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t2 = _context5["catch"](0);
            console.log(_context5.t2.message);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
};

exports.deletePost = deletePost;