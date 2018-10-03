webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/download.js":
/*!********************************!*\
  !*** ./components/download.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/zerox/Desktop/Projects/NewWallWeb/components/download.js";


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding: 10px 20px;\n  border: 1px solid black;\n  border-radius: 5px;\n  background: white;\n  font-family: \"lato\";\n  font-size: 18px;\n  outline: none;\n  cursor: pointer;\n  transition: background 0.3s, color 0.3s;\n  text-decoration: none;\n  color: black;\n  &:hover {\n    background: black;\n    color: white;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  background: #3498db;\n  color: white;\n  font-family: \"lato\";\n  font-size: 18px;\n  outline: none;\n  cursor: pointer;\n  margin-right: 10px;\n  &:last-child {\n    margin-right: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n  text-align: center;\n  font-family: \"Lato\";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Download = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var DownloadButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject2());
var SourceCode = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject3());
var version = "1.0.0";
var downloadURL = "https://github.com/ZeroX-DG/NewWall/releases/download/v".concat(version);
var links = {
  window: "".concat(downloadURL, "/NewWall.Setup.").concat(version, ".exe"),
  linuxDeb: "".concat(downloadURL, "/newwall_").concat(version, "_amd64.deb"),
  linuxAppImage: "".concat(downloadURL, "/newwall-").concat(version, "-x86_64.AppImage")
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Download, {
    id: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      marginBottom: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Download"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadButton, {
    href: links.window,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Windows"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadButton, {
    href: links.linuxAppImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Linux (.AppImage)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownloadButton, {
    href: links.linuxDeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Linux (.deb)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceCode, {
    href: "https://github.com/ZeroX-DG/NewWall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Source code")));
});

/***/ })

})
//# sourceMappingURL=index.js.e24940581b5f30fba9cb.hot-update.js.map