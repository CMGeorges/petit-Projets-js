"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _posts = _interopRequireDefault(require("./routes/posts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//require('dotenv').config()
//const express = require('express');
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json({
  limit: "30mb",
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: "30mb",
  extended: true
}));
app.use((0, _cors["default"])());
var CONNECTION_URL = 'mongodb+srv://ReactApp:2095086@cluster0.zspjb.mongodb.net/ApplicationWeb?retryWrites=true&w=majority';
var PORT = process.env.PORT || 5000;
var URI = process.env.URI;
app.use('/posts', _posts["default"]);

_mongoose["default"].connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return app.listen(PORT, function () {
    return console.log("Server running on port: ".concat(PORT, " on ").concat(URI));
  });
})["catch"](function (error) {
  return console.log(error.message);
});

_mongoose["default"].set('useFindAndModify', false);