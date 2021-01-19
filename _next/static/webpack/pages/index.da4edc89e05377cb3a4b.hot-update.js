webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_useScript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useScript */ "./hooks/useScript.js");
/* harmony import */ var _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.sass */ "./styles/Home.module.sass");
/* harmony import */ var _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/facebook.svg */ "./public/facebook.svg");
/* harmony import */ var _public_github_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/github.svg */ "./public/github.svg");
/* harmony import */ var _public_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/linkedin-logo.svg */ "./public/linkedin-logo.svg");
/* harmony import */ var _public_instagram_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/instagram.svg */ "./public/instagram.svg");
/* harmony import */ var _public_whatsapp_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/whatsapp.svg */ "./public/whatsapp.svg");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\Christiano\\portfolio\\pages\\index.js",
    _s = $RefreshSig$();










function Home() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_12___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      overlay = _React$useState2[0],
      setOverlay = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_12___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  Object(_hooks_useScript__WEBPACK_IMPORTED_MODULE_4__["default"])('/test.js');
  var urls = {
    facebook: 'https://www.facebook.com/BriianIto',
    github: 'https://github.com/BrianIto',
    linkedin: 'https://www.linkedin.com/in/brian-ito-de-oliveira-moura-a5400119b/',
    whatsapp: 'https://api.whatsapp.com/send?phone=5592984374357&text=Olá,%20Te%20achei%20pelo%20seu%20Site!',
    instagram: 'https://www.instagram.com/eu.brian/'
  };

  var _onClick = function onClick(type) {
    window.open(urls[type]);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.prevenDefault();
              setLoading(true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Brian Ito - Web Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Let's Talk!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Please, fill your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 32
          }, this), " and your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "e-mail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 53
          }, this), " below and I will contact you pretty soon! Get in touch."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.inputs,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "name",
              required: true,
              type: "text",
              placeholder: "Name",
              className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 16
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "email",
              required: true,
              type: "email",
              placeholder: "E-mail",
              className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 16
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 14
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
            children: "Confirmar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 14
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 12
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.icons,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_facebook_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: function onClick() {
          return _onClick('facebook');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_github_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: function onClick() {
          return _onClick('github');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: function onClick() {
          return _onClick('linkedin');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_instagram_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _onClick('instagram');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_whatsapp_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          return _onClick('whatsapp');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.text,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Hey, I'm Brian."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Building Technology To Simplify Processes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: " Doing something must be useful and / or delightful.If it is not, probably your collaborators or you would be thinking about doing something else. People get stressed and that stress lead to mistakes, mistakes leads to more work, and people get even more stressed.Stop the cycle. Let catalysts do the work for you. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          setOverlay(true);
        },
        children: "I want to Automatize!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/Grupo 8.png",
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.picture
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return setOverlay(false);
      },
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(Home, "ZD0VZr3VrTiw+NI8Ce5qrHWSbOQ=", false, function () {
  return [_hooks_useScript__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvdmVybGF5Iiwic2V0T3ZlcmxheSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU2NyaXB0IiwidXJscyIsImZhY2Vib29rIiwiZ2l0aHViIiwibGlua2VkaW4iLCJ3aGF0c2FwcCIsImluc3RhZ3JhbSIsIm9uQ2xpY2siLCJ0eXBlIiwid2luZG93Iiwib3BlbiIsIm9uU3VibWl0IiwiZSIsInByZXZlbkRlZmF1bHQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtb2RhbCIsImhpZGRlbiIsImlucHV0cyIsImlucHV0IiwiYnRuIiwiaWNvbnMiLCJzdmciLCJ0ZXh0IiwicGljdHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBRUNDLDZDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRkQ7QUFBQTtBQUFBLE1BRXRCQyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBQUEseUJBR0NILDZDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSEQ7QUFBQTtBQUFBLE1BR3RCRyxPQUhzQjtBQUFBLE1BR2JDLFVBSGE7O0FBSzdCQyxrRUFBUyxDQUFDLFVBQUQsQ0FBVDtBQUVBLE1BQU1DLElBQUksR0FBRztBQUNYQyxZQUFRLEVBQUUsb0NBREM7QUFFWEMsVUFBTSxFQUFFLDZCQUZHO0FBR1hDLFlBQVEsRUFBRSxvRUFIQztBQUlYQyxZQUFRLEVBQUUsK0ZBSkM7QUFLWEMsYUFBUyxFQUFFO0FBTEEsR0FBYjs7QUFRQSxNQUFNQyxRQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVU7QUFDeEJDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZ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NkRBQUQ7QUFBYyxlQUFPLEVBQUU7QUFBQSxpQkFBTWYsUUFBTyxDQUFDLFVBQUQsQ0FBYjtBQUFBLFNBQXZCO0FBQWtELGlCQUFTLEVBQUVPLCtEQUFNLENBQUNRO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkYsZUFtQ0U7QUFBSyxlQUFTLEVBQUVSLCtEQUFNLENBQUNTLElBQXZCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBTUU7QUFBUSxlQUFPLEVBQUUsbUJBQU07QUFDckIxQixvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNELFNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0YsZUE2Q0U7QUFBSyxTQUFHLEVBQUMsY0FBVDtBQUF3QixlQUFTLEVBQUVpQiwrREFBTSxDQUFDVTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0NGLGVBOENFO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTTNCLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsT0FEWDtBQUVFLGVBQVMsRUFDUEQsT0FBTyxHQUFHa0IsK0RBQU0sQ0FBQ2xCLE9BQVYsR0FDUGtCLCtEQUFNLENBQUNsQixPQUFQLEdBQWUsR0FBZixHQUFtQmtCLCtEQUFNLENBQUNHO0FBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7O0dBaEZ1QnhCLEk7VUFLdEJPLHdEOzs7S0FMc0JQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGE0ZWRjODllMDUzNzdjYjNhNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTY3JpcHQgZnJvbSAnLi4vaG9va3MvdXNlU2NyaXB0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2FzcydcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSBcIi4uL3B1YmxpYy9mYWNlYm9vay5zdmdcIjtcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuLi9wdWJsaWMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiLi4vcHVibGljL2xpbmtlZGluLWxvZ28uc3ZnXCI7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICcuLi9wdWJsaWMvaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgV2hhdHNhcHBJY29uIGZyb20gXCIuLi9wdWJsaWMvd2hhdHNhcHAuc3ZnXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbb3ZlcmxheSwgc2V0T3ZlcmxheV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VTY3JpcHQoJy90ZXN0LmpzJylcblxuICBjb25zdCB1cmxzID0ge1xuICAgIGZhY2Vib29rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0JyaWlhbkl0bycsXG4gICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0JyaWFuSXRvJyxcbiAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9icmlhbi1pdG8tZGUtb2xpdmVpcmEtbW91cmEtYTU0MDAxMTliLycsXG4gICAgd2hhdHNhcHA6ICdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTkyOTg0Mzc0MzU3JnRleHQ9T2zDoSwlMjBUZSUyMGFjaGVpJTIwcGVsbyUyMHNldSUyMFNpdGUhJyxcbiAgICBpbnN0YWdyYW06ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2V1LmJyaWFuLydcbiAgfVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSAodHlwZSkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKHVybHNbdHlwZV0pO1xuICB9XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbkRlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CcmlhbiBJdG8gLSBXZWIgRGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5ID8gc3R5bGVzLm1vZGFsIDogc3R5bGVzLm1vZGFsICsgXCIgXCIgKyBzdHlsZXMuaGlkZGVufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+TGV0J3MgVGFsayE8L2gxPlxuICAgICAgICAgIDxwPlBsZWFzZSwgZmlsbCB5b3VyIDxiPm5hbWU8L2I+IGFuZCB5b3VyIDxiPmUtbWFpbDwvYj4gYmVsb3cgYW5kIEkgd2lsbFxuICAgICAgICAgICBjb250YWN0IHlvdSBwcmV0dHkgc29vbiEgR2V0IGluIHRvdWNoLjwvcD5cbiAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxuICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT48L2lucHV0PiBcbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+Q29uZmlybWFyPC9idXR0b24+XG4gICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICA8RmFjZWJvb2tJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2ZhY2Vib29rJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30gLz5cbiAgICAgICAgPEdpdGh1Ykljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnZ2l0aHViJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgICA8TGlua2VkSW5JY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2xpbmtlZGluJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgICA8SW5zdGFncmFtSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdpbnN0YWdyYW0nKX0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfS8+XG4gICAgICAgIDxXaGF0c2FwcEljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnd2hhdHNhcHAnKX0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIDxoMj5IZXksIEknbSBCcmlhbi48L2gyPlxuICAgICAgICA8aDE+QnVpbGRpbmcgVGVjaG5vbG9neSBUbyBTaW1wbGlmeSBQcm9jZXNzZXMuPC9oMT5cbiAgICAgICAgPHA+IERvaW5nIHNvbWV0aGluZyBtdXN0IGJlIHVzZWZ1bCBhbmQgLyBvciBkZWxpZ2h0ZnVsLklmIGl0IGlzIG5vdCwgcHJvYmFibHkgeW91ciBjb2xsYWJvcmF0b3JzIG9yIHlvdSB3b3VsZCBiZSB0aGlua2luZyBhYm91dCBkb2luZyBzb21ldGhpbmdcbiAgICAgICAgZWxzZS4gUGVvcGxlIGdldCBzdHJlc3NlZCBhbmQgdGhhdCBzdHJlc3MgbGVhZCB0byBtaXN0YWtlcywgbWlzdGFrZXMgbGVhZHMgdG8gbW9yZSB3b3JrLCBhbmQgcGVvcGxlIGdldCBldmVuIG1vcmUgc3RyZXNzZWQuU3RvcCB0aGUgY3ljbGUuXG4gICAgICAgIExldCBjYXRhbHlzdHMgZG8gdGhlIHdvcmsgZm9yIHlvdS4gPC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRPdmVybGF5KHRydWUpO1xuICAgICAgICB9fT5JIHdhbnQgdG8gQXV0b21hdGl6ZSE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBzcmM9XCIvR3J1cG8gOC5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5waWN0dXJlfS8+XG4gICAgICA8ZGl2IFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPdmVybGF5KGZhbHNlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBvdmVybGF5ID8gc3R5bGVzLm92ZXJsYXkgOlxuICAgICAgICAgIHN0eWxlcy5vdmVybGF5K1wiIFwiK3N0eWxlcy5oaWRkZW59PjwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9