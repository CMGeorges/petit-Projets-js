"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    mainContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    smMargin: {
      margin: theme.spacing(1)
    },
    actionDiv: {
      textAlign: 'center'
    }
  };
});

exports["default"] = _default;