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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);





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
      var form, _ref2, name, email, response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.prevenDefault();
              setLoading(true);
              form = e.target;
              _ref2 = [form.name.value, form.email.value], name = _ref2[0], email = _ref2[1];
              _context.prev = 4;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('http://api.brainstorm.qsimporta.com:3333/send_wpp', {
                message: "Novo usuário cadastrado para Lead:\n" + "*Nome*: " + name + "\n" + "*E-mail*:" + email
              });

            case 7:
              response = _context.sent;
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](4);
              alert("Erro ao enviar seus dados... :(\n Erro: " + _context.t0);

            case 13:
              setLoading(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 10]]);
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
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Let's Talk!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Please, fill your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 32
          }, this), " and your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "e-mail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 53
          }, this), " below and I will contact you pretty soon! Get in touch."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: onSubmit,
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
              lineNumber: 61,
              columnNumber: 16
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "email",
              required: true,
              type: "email",
              placeholder: "E-mail",
              className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 16
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 14
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            disabled: loading,
            className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
            children: loading ? "Carregando" : "Confirmar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 14
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 12
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_github_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: function onClick() {
          return _onClick('github');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: function onClick() {
          return _onClick('linkedin');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_instagram_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _onClick('instagram');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_whatsapp_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          return _onClick('whatsapp');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.text,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Hey, I'm Brian."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Building Technology To Simplify Processes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: " Doing something must be useful and / or delightful.If it is not, probably your collaborators or you would be thinking about doing something else. People get stressed and that stress lead to mistakes, mistakes leads to more work, and people get even more stressed.Stop the cycle. Let catalysts do the work for you. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          setOverlay(true);
        },
        children: "I want to Automatize!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/Grupo 8.png",
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.picture
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return setOverlay(false);
      },
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvdmVybGF5Iiwic2V0T3ZlcmxheSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU2NyaXB0IiwidXJscyIsImZhY2Vib29rIiwiZ2l0aHViIiwibGlua2VkaW4iLCJ3aGF0c2FwcCIsImluc3RhZ3JhbSIsIm9uQ2xpY2siLCJ0eXBlIiwid2luZG93Iiwib3BlbiIsIm9uU3VibWl0IiwiZSIsInByZXZlbkRlZmF1bHQiLCJmb3JtIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJhbGVydCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1vZGFsIiwiaGlkZGVuIiwiaW5wdXRzIiwiaW5wdXQiLCJidG4iLCJpY29ucyIsInN2ZyIsInRleHQiLCJwaWN0dXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBRUNDLDZDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRkQ7QUFBQTtBQUFBLE1BRXRCQyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBQUEseUJBR0NILDZDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSEQ7QUFBQTtBQUFBLE1BR3RCRyxPQUhzQjtBQUFBLE1BR2JDLFVBSGE7O0FBSzdCQyxrRUFBUyxDQUFDLFVBQUQsQ0FBVDtBQUVBLE1BQU1DLElBQUksR0FBRztBQUNYQyxZQUFRLEVBQUUsb0NBREM7QUFFWEMsVUFBTSxFQUFFLDZCQUZHO0FBR1hDLFlBQVEsRUFBRSxvRUFIQztBQUlYQyxZQUFRLEVBQUUsK0ZBSkM7QUFLWEMsYUFBUyxF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QUFBO0FBQUEsY0FIRixlQU1FO0FBQVEsZUFBTyxFQUFFLG1CQUFNO0FBQ3JCcEMsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxTQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENGLGVBa0RFO0FBQUssU0FBRyxFQUFDLGNBQVQ7QUFBd0IsZUFBUyxFQUFFMkIsK0RBQU0sQ0FBQ1U7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxERixlQW1ERTtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1yQyxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BRFg7QUFFRSxlQUFTLEVBQ1BELE9BQU8sR0FBRzRCLCtEQUFNLENBQUM1QixPQUFWLEdBQ1A0QiwrREFBTSxDQUFDNUIsT0FBUCxHQUFlLEdBQWYsR0FBbUI0QiwrREFBTSxDQUFDRztBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkREOztHQWhHdUJsQyxJO1VBS3RCTyx3RDs7O0tBTHNCUCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxMjFhZDk1NGQxMmQ5YTYyMTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU2NyaXB0IGZyb20gJy4uL2hvb2tzL3VzZVNjcmlwdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNhc3MnXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gXCIuLi9wdWJsaWMvZmFjZWJvb2suc3ZnXCI7XG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi4vcHVibGljL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSBcIi4uL3B1YmxpYy9saW5rZWRpbi1sb2dvLnN2Z1wiO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnLi4vcHVibGljL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IFdoYXRzYXBwSWNvbiBmcm9tIFwiLi4vcHVibGljL3doYXRzYXBwLnN2Z1wiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtvdmVybGF5LCBzZXRPdmVybGF5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZVNjcmlwdCgnL3Rlc3QuanMnKVxuXG4gIGNvbnN0IHVybHMgPSB7XG4gICAgZmFjZWJvb2s6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQnJpaWFuSXRvJyxcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYW5JdG8nLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JyaWFuLWl0by1kZS1vbGl2ZWlyYS1tb3VyYS1hNTQwMDExOWIvJyxcbiAgICB3aGF0c2FwcDogJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1OTI5ODQzNzQzNTcmdGV4dD1PbMOhLCUyMFRlJTIwYWNoZWklMjBwZWxvJTIwc2V1JTIwU2l0ZSEnLFxuICAgIGluc3RhZ3JhbTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXUuYnJpYW4vJ1xuICB9XG5cbiAgY29uc3Qgb25DbGljayA9ICh0eXBlKSA9PiB7XG4gICAgd2luZG93Lm9wZW4odXJsc1t0eXBlXSk7XG4gIH1cblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVuRGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IFtuYW1lLCBlbWFpbF0gPSBbZm9ybS5uYW1lLnZhbHVlLCBmb3JtLmVtYWlsLnZhbHVlXTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vYXBpLmJyYWluc3Rvcm0ucXNpbXBvcnRhLmNvbTozMzMzL3NlbmRfd3BwJywge1xuICAgICAgICBtZXNzYWdlOiBcIk5vdm8gdXN1w6FyaW8gY2FkYXN0cmFkbyBwYXJhIExlYWQ6XFxuXCIgK1xuICAgICAgICAgIFwiKk5vbWUqOiBcIiArIG5hbWUgKyBcIlxcblwiICtcbiAgICAgICAgICBcIipFLW1haWwqOlwiICsgZW1haWxcbiAgICAgIH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBhbGVydChcIkVycm8gYW8gZW52aWFyIHNldXMgZGFkb3MuLi4gOihcXG4gRXJybzogXCIrZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QnJpYW4gSXRvIC0gV2ViIERldmVsb3BlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheSA/IHN0eWxlcy5tb2RhbCA6IHN0eWxlcy5tb2RhbCArIFwiIFwiICsgc3R5bGVzLmhpZGRlbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkxldCdzIFRhbGshPC9oMT5cbiAgICAgICAgICA8cD5QbGVhc2UsIGZpbGwgeW91ciA8Yj5uYW1lPC9iPiBhbmQgeW91ciA8Yj5lLW1haWw8L2I+IGJlbG93IGFuZCBJIHdpbGxcbiAgICAgICAgICAgY29udGFjdCB5b3UgcHJldHR5IHNvb24hIEdldCBpbiB0b3VjaC48L3A+XG4gICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxuICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT48L2lucHV0PiBcbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIkNhcnJlZ2FuZG9cIiA6IFwiQ29uZmlybWFyXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgICAgPEZhY2Vib29rSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdmYWNlYm9vaycpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9IC8+XG4gICAgICAgIDxHaXRodWJJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2dpdGh1YicpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgICAgPExpbmtlZEluSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdsaW5rZWRpbicpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgICAgPEluc3RhZ3JhbUljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnaW5zdGFncmFtJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgICA8V2hhdHNhcHBJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ3doYXRzYXBwJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICA8aDI+SGV5LCBJJ20gQnJpYW4uPC9oMj5cbiAgICAgICAgPGgxPkJ1aWxkaW5nIFRlY2hub2xvZ3kgVG8gU2ltcGxpZnkgUHJvY2Vzc2VzLjwvaDE+XG4gICAgICAgIDxwPiBEb2luZyBzb21ldGhpbmcgbXVzdCBiZSB1c2VmdWwgYW5kIC8gb3IgZGVsaWdodGZ1bC5JZiBpdCBpcyBub3QsIHByb2JhYmx5IHlvdXIgY29sbGFib3JhdG9ycyBvciB5b3Ugd291bGQgYmUgdGhpbmtpbmcgYWJvdXQgZG9pbmcgc29tZXRoaW5nXG4gICAgICAgIGVsc2UuIFBlb3BsZSBnZXQgc3RyZXNzZWQgYW5kIHRoYXQgc3RyZXNzIGxlYWQgdG8gbWlzdGFrZXMsIG1pc3Rha2VzIGxlYWRzIHRvIG1vcmUgd29yaywgYW5kIHBlb3BsZSBnZXQgZXZlbiBtb3JlIHN0cmVzc2VkLlN0b3AgdGhlIGN5Y2xlLlxuICAgICAgICBMZXQgY2F0YWx5c3RzIGRvIHRoZSB3b3JrIGZvciB5b3UuIDwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3ZlcmxheSh0cnVlKTtcbiAgICAgICAgfX0+SSB3YW50IHRvIEF1dG9tYXRpemUhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPVwiL0dydXBvIDgucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMucGljdHVyZX0vPlxuICAgICAgPGRpdiBcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3ZlcmxheShmYWxzZSl9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgb3ZlcmxheSA/IHN0eWxlcy5vdmVybGF5IDpcbiAgICAgICAgICBzdHlsZXMub3ZlcmxheStcIiBcIitzdHlsZXMuaGlkZGVufT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==