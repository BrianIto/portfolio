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
              e.preventDefault();
              setLoading(true);
              _context.prev = 2;
              form = e.target;
              _ref2 = [form.name.value, form.email.value], name = _ref2[0], email = _ref2[1];
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
              _context.t0 = _context["catch"](2);
              alert("Erro ao enviar seus dados... :(\n Erro: " + _context.t0);

            case 13:
              setLoading(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvdmVybGF5Iiwic2V0T3ZlcmxheSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU2NyaXB0IiwidXJscyIsImZhY2Vib29rIiwiZ2l0aHViIiwibGlua2VkaW4iLCJ3aGF0c2FwcCIsImluc3RhZ3JhbSIsIm9uQ2xpY2siLCJ0eXBlIiwid2luZG93Iiwib3BlbiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwibWVzc2FnZSIsInJlc3BvbnNlIiwiYWxlcnQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtb2RhbCIsImhpZGRlbiIsImlucHV0cyIsImlucHV0IiwiYnRuIiwiaWNvbnMiLCJzdmciLCJ0ZXh0IiwicGljdHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLHdCQUVDQyw2Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUZEO0FBQUE7QUFBQSxNQUV0QkMsT0FGc0I7QUFBQSxNQUViQyxVQUZhOztBQUFBLHlCQUdDSCw2Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhEO0FBQUE7QUFBQSxNQUd0QkcsT0FIc0I7QUFBQSxNQUdiQyxVQUhhOztBQUs3QkMsa0VBQVMsQ0FBQyxVQUFELENBQVQ7QUFFQSxNQUFNQyxJQUFJLEdBQUc7QUFDWEMsWUFBUSxFQUFFLG9DQURDO0FBRVhDLFVBQU0sRUFBRSw2QkFGRztBQUdYQyxZQUFRLEVBQUUsb0VBSEM7QUFJWEMsWUFBUSxFQUFFLCtGQUpDO0FBS1hDLGFBQVMs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QUFBQTtBQUFBLGNBSEYsZUFNRTtBQUFRLGVBQU8sRUFBRSxtQkFBTTtBQUNyQnBDLG9CQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsU0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDRixlQWtERTtBQUFLLFNBQUcsRUFBQyxjQUFUO0FBQXdCLGVBQVMsRUFBRTJCLCtEQUFNLENBQUNVO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsREYsZUFtREU7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUFNckMsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxPQURYO0FBRUUsZUFBUyxFQUNQRCxPQUFPLEdBQUc0QiwrREFBTSxDQUFDNUIsT0FBVixHQUNQNEIsK0RBQU0sQ0FBQzVCLE9BQVAsR0FBZSxHQUFmLEdBQW1CNEIsK0RBQU0sQ0FBQ0c7QUFKOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7R0FoR3VCbEMsSTtVQUt0Qk8sd0Q7OztLQUxzQlAsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZjM0YzQ3ODcxMDg5ZDI3NDc1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNjcmlwdCBmcm9tICcuLi9ob29rcy91c2VTY3JpcHQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zYXNzJ1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tIFwiLi4vcHVibGljL2ZhY2Vib29rLnN2Z1wiO1xuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4uL3B1YmxpYy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCIuLi9wdWJsaWMvbGlua2VkaW4tbG9nby5zdmdcIjtcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJy4uL3B1YmxpYy9pbnN0YWdyYW0uc3ZnJztcbmltcG9ydCBXaGF0c2FwcEljb24gZnJvbSBcIi4uL3B1YmxpYy93aGF0c2FwcC5zdmdcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbb3ZlcmxheSwgc2V0T3ZlcmxheV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VTY3JpcHQoJy90ZXN0LmpzJylcblxuICBjb25zdCB1cmxzID0ge1xuICAgIGZhY2Vib29rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0JyaWlhbkl0bycsXG4gICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0JyaWFuSXRvJyxcbiAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9icmlhbi1pdG8tZGUtb2xpdmVpcmEtbW91cmEtYTU0MDAxMTliLycsXG4gICAgd2hhdHNhcHA6ICdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTkyOTg0Mzc0MzU3JnRleHQ9T2zDoSwlMjBUZSUyMGFjaGVpJTIwcGVsbyUyMHNldSUyMFNpdGUhJyxcbiAgICBpbnN0YWdyYW06ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2V1LmJyaWFuLydcbiAgfVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSAodHlwZSkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKHVybHNbdHlwZV0pO1xuICB9XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBbbmFtZSwgZW1haWxdID0gW2Zvcm0ubmFtZS52YWx1ZSwgZm9ybS5lbWFpbC52YWx1ZV07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vYXBpLmJyYWluc3Rvcm0ucXNpbXBvcnRhLmNvbTozMzMzL3NlbmRfd3BwJywge1xuICAgICAgICBtZXNzYWdlOiBcIk5vdm8gdXN1w6FyaW8gY2FkYXN0cmFkbyBwYXJhIExlYWQ6XFxuXCIgK1xuICAgICAgICAgIFwiKk5vbWUqOiBcIiArIG5hbWUgKyBcIlxcblwiICtcbiAgICAgICAgICBcIipFLW1haWwqOlwiICsgZW1haWxcbiAgICAgIH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBhbGVydChcIkVycm8gYW8gZW52aWFyIHNldXMgZGFkb3MuLi4gOihcXG4gRXJybzogXCIrZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QnJpYW4gSXRvIC0gV2ViIERldmVsb3BlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheSA/IHN0eWxlcy5tb2RhbCA6IHN0eWxlcy5tb2RhbCArIFwiIFwiICsgc3R5bGVzLmhpZGRlbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkxldCdzIFRhbGshPC9oMT5cbiAgICAgICAgICA8cD5QbGVhc2UsIGZpbGwgeW91ciA8Yj5uYW1lPC9iPiBhbmQgeW91ciA8Yj5lLW1haWw8L2I+IGJlbG93IGFuZCBJIHdpbGxcbiAgICAgICAgICAgY29udGFjdCB5b3UgcHJldHR5IHNvb24hIEdldCBpbiB0b3VjaC48L3A+XG4gICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxuICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT48L2lucHV0PiBcbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIkNhcnJlZ2FuZG9cIiA6IFwiQ29uZmlybWFyXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgICAgPEZhY2Vib29rSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdmYWNlYm9vaycpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9IC8+XG4gICAgICAgIDxHaXRodWJJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2dpdGh1YicpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgICAgPExpbmtlZEluSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdsaW5rZWRpbicpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgICAgPEluc3RhZ3JhbUljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnaW5zdGFncmFtJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgICA8V2hhdHNhcHBJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ3doYXRzYXBwJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICA8aDI+SGV5LCBJJ20gQnJpYW4uPC9oMj5cbiAgICAgICAgPGgxPkJ1aWxkaW5nIFRlY2hub2xvZ3kgVG8gU2ltcGxpZnkgUHJvY2Vzc2VzLjwvaDE+XG4gICAgICAgIDxwPiBEb2luZyBzb21ldGhpbmcgbXVzdCBiZSB1c2VmdWwgYW5kIC8gb3IgZGVsaWdodGZ1bC5JZiBpdCBpcyBub3QsIHByb2JhYmx5IHlvdXIgY29sbGFib3JhdG9ycyBvciB5b3Ugd291bGQgYmUgdGhpbmtpbmcgYWJvdXQgZG9pbmcgc29tZXRoaW5nXG4gICAgICAgIGVsc2UuIFBlb3BsZSBnZXQgc3RyZXNzZWQgYW5kIHRoYXQgc3RyZXNzIGxlYWQgdG8gbWlzdGFrZXMsIG1pc3Rha2VzIGxlYWRzIHRvIG1vcmUgd29yaywgYW5kIHBlb3BsZSBnZXQgZXZlbiBtb3JlIHN0cmVzc2VkLlN0b3AgdGhlIGN5Y2xlLlxuICAgICAgICBMZXQgY2F0YWx5c3RzIGRvIHRoZSB3b3JrIGZvciB5b3UuIDwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3ZlcmxheSh0cnVlKTtcbiAgICAgICAgfX0+SSB3YW50IHRvIEF1dG9tYXRpemUhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPVwiL0dydXBvIDgucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMucGljdHVyZX0vPlxuICAgICAgPGRpdiBcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3ZlcmxheShmYWxzZSl9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgb3ZlcmxheSA/IHN0eWxlcy5vdmVybGF5IDpcbiAgICAgICAgICBzdHlsZXMub3ZlcmxheStcIiBcIitzdHlsZXMuaGlkZGVufT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==