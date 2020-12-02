"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePost = exports.updatePost = exports.likePost = exports.createPost = exports.fetchPost = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = 'http://localhost:5000/posts';

var fetchPost = function fetchPost() {
  return _axios["default"].get(url);
};

exports.fetchPost = fetchPost;

var createPost = function createPost(newPost) {
  return _axios["default"].post(url, newPost);
};

exports.createPost = createPost;

var likePost = function likePost(id) {
  return _axios["default"].patch("".concat(url, "/").concat(id, "/likePost"));
};

exports.likePost = likePost;

var updatePost = function updatePost(id, updatedPost) {
  return _axios["default"].patch("".concat(url, "/").concat(id), updatedPost);
};

exports.updatePost = updatePost;

var deletePost = function deletePost(id) {
  return _axios["default"]["delete"]("".concat(url, "/").concat(id));
};

exports.deletePost = deletePost;