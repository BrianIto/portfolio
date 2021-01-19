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
              return axios.post('http://api.brainstorm.qsimporta.com/send_wpp', {
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
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Let's Talk!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Please, fill your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 32
          }, this), " and your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "e-mail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 53
          }, this), " below and I will contact you pretty soon! Get in touch."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
              lineNumber: 60,
              columnNumber: 16
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "email",
              required: true,
              type: "email",
              placeholder: "E-mail",
              className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 16
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 14
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            disabled: loading,
            className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
            children: loading ? "Carregando" : "Confirmar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 14
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 12
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_github_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: function onClick() {
          return _onClick('github');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: function onClick() {
          return _onClick('linkedin');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_instagram_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _onClick('instagram');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_whatsapp_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          return _onClick('whatsapp');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.text,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Hey, I'm Brian."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Building Technology To Simplify Processes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: " Doing something must be useful and / or delightful.If it is not, probably your collaborators or you would be thinking about doing something else. People get stressed and that stress lead to mistakes, mistakes leads to more work, and people get even more stressed.Stop the cycle. Let catalysts do the work for you. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          setOverlay(true);
        },
        children: "I want to Automatize!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/Grupo 8.png",
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.picture
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return setOverlay(false);
      },
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvdmVybGF5Iiwic2V0T3ZlcmxheSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU2NyaXB0IiwidXJscyIsImZhY2Vib29rIiwiZ2l0aHViIiwibGlua2VkaW4iLCJ3aGF0c2FwcCIsImluc3RhZ3JhbSIsIm9uQ2xpY2siLCJ0eXBlIiwid2luZG93Iiwib3BlbiIsIm9uU3VibWl0IiwiZSIsInByZXZlbkRlZmF1bHQiLCJmb3JtIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJheGlvcyIsInBvc3QiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJhbGVydCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1vZGFsIiwiaGlkZGVuIiwiaW5wdXRzIiwiaW5wdXQiLCJidG4iLCJpY29ucyIsInN2ZyIsInRleHQiLCJwaWN0dXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSx3QkFFQ0MsNkNBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGRDtBQUFBO0FBQUEsTUFFdEJDLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFBQSx5QkFHQ0gsNkNBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FIRDtBQUFBO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHYkMsVUFIYTs7QUFLN0JDLGtFQUFTLENBQUMsVUFBRCxDQUFUO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFlBQVEsRUFBRSxvQ0FEQztBQUVYQyxVQUFNLEVBQUUsNkJBRkc7QUFHWEMsWUFBUSxFQUFFLG9FQUhDO0FBSVhDLFlBQVEsRUFBRSwrRkFKQztBQUtYQyxhQUFTLEVBQUU7QUFM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LGNBSEYsZUFNRTtBQUFRLGVBQU8sRUFBRSxtQkFBTTtBQUNyQnBDLG9CQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsU0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDRixlQWtERTtBQUFLLFNBQUcsRUFBQyxjQUFUO0FBQXdCLGVBQVMsRUFBRTJCLCtEQUFNLENBQUNVO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsREYsZUFtREU7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUFNckMsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxPQURYO0FBRUUsZUFBUyxFQUNQRCxPQUFPLEdBQUc0QiwrREFBTSxDQUFDNUIsT0FBVixHQUNQNEIsK0RBQU0sQ0FBQzVCLE9BQVAsR0FBZSxHQUFmLEdBQW1CNEIsK0RBQU0sQ0FBQ0c7QUFKOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7R0FoR3VCbEMsSTtVQUt0Qk8sd0Q7OztLQUxzQlAsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YjU2NDYxN2ExZWEyZTkyY2M3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNjcmlwdCBmcm9tICcuLi9ob29rcy91c2VTY3JpcHQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zYXNzJ1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tIFwiLi4vcHVibGljL2ZhY2Vib29rLnN2Z1wiO1xuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4uL3B1YmxpYy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCIuLi9wdWJsaWMvbGlua2VkaW4tbG9nby5zdmdcIjtcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJy4uL3B1YmxpYy9pbnN0YWdyYW0uc3ZnJztcbmltcG9ydCBXaGF0c2FwcEljb24gZnJvbSBcIi4uL3B1YmxpYy93aGF0c2FwcC5zdmdcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtvdmVybGF5LCBzZXRPdmVybGF5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZVNjcmlwdCgnL3Rlc3QuanMnKVxuXG4gIGNvbnN0IHVybHMgPSB7XG4gICAgZmFjZWJvb2s6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQnJpaWFuSXRvJyxcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYW5JdG8nLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JyaWFuLWl0by1kZS1vbGl2ZWlyYS1tb3VyYS1hNTQwMDExOWIvJyxcbiAgICB3aGF0c2FwcDogJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1OTI5ODQzNzQzNTcmdGV4dD1PbMOhLCUyMFRlJTIwYWNoZWklMjBwZWxvJTIwc2V1JTIwU2l0ZSEnLFxuICAgIGluc3RhZ3JhbTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXUuYnJpYW4vJ1xuICB9XG5cbiAgY29uc3Qgb25DbGljayA9ICh0eXBlKSA9PiB7XG4gICAgd2luZG93Lm9wZW4odXJsc1t0eXBlXSk7XG4gIH1cblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVuRGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IFtuYW1lLCBlbWFpbF0gPSBbZm9ybS5uYW1lLnZhbHVlLCBmb3JtLmVtYWlsLnZhbHVlXTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vYXBpLmJyYWluc3Rvcm0ucXNpbXBvcnRhLmNvbS9zZW5kX3dwcCcsIHtcbiAgICAgICAgbWVzc2FnZTogXCJOb3ZvIHVzdcOhcmlvIGNhZGFzdHJhZG8gcGFyYSBMZWFkOlxcblwiICtcbiAgICAgICAgICBcIipOb21lKjogXCIgKyBuYW1lICsgXCJcXG5cIiArXG4gICAgICAgICAgXCIqRS1tYWlsKjpcIiArIGVtYWlsXG4gICAgICB9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgYWxlcnQoXCJFcnJvIGFvIGVudmlhciBzZXVzIGRhZG9zLi4uIDooXFxuIEVycm86IFwiK2UpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJyaWFuIEl0byAtIFdlYiBEZXZlbG9wZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXkgPyBzdHlsZXMubW9kYWwgOiBzdHlsZXMubW9kYWwgKyBcIiBcIiArIHN0eWxlcy5oaWRkZW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5MZXQncyBUYWxrITwvaDE+XG4gICAgICAgICAgPHA+UGxlYXNlLCBmaWxsIHlvdXIgPGI+bmFtZTwvYj4gYW5kIHlvdXIgPGI+ZS1tYWlsPC9iPiBiZWxvdyBhbmQgSSB3aWxsXG4gICAgICAgICAgIGNvbnRhY3QgeW91IHByZXR0eSBzb29uISBHZXQgaW4gdG91Y2guPC9wPlxuICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cbiAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+PC9pbnB1dD4gXG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG59PlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJDYXJyZWdhbmRvXCIgOiBcIkNvbmZpcm1hclwifVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgIDxGYWNlYm9va0ljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnZmFjZWJvb2snKX0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfSAvPlxuICAgICAgICA8R2l0aHViSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdnaXRodWInKX0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfS8+XG4gICAgICAgIDxMaW5rZWRJbkljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnbGlua2VkaW4nKX0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfS8+XG4gICAgICAgIDxJbnN0YWdyYW1JY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2luc3RhZ3JhbScpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgICAgPFdoYXRzYXBwSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCd3aGF0c2FwcCcpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgPGgyPkhleSwgSSdtIEJyaWFuLjwvaDI+XG4gICAgICAgIDxoMT5CdWlsZGluZyBUZWNobm9sb2d5IFRvIFNpbXBsaWZ5IFByb2Nlc3Nlcy48L2gxPlxuICAgICAgICA8cD4gRG9pbmcgc29tZXRoaW5nIG11c3QgYmUgdXNlZnVsIGFuZCAvIG9yIGRlbGlnaHRmdWwuSWYgaXQgaXMgbm90LCBwcm9iYWJseSB5b3VyIGNvbGxhYm9yYXRvcnMgb3IgeW91IHdvdWxkIGJlIHRoaW5raW5nIGFib3V0IGRvaW5nIHNvbWV0aGluZ1xuICAgICAgICBlbHNlLiBQZW9wbGUgZ2V0IHN0cmVzc2VkIGFuZCB0aGF0IHN0cmVzcyBsZWFkIHRvIG1pc3Rha2VzLCBtaXN0YWtlcyBsZWFkcyB0byBtb3JlIHdvcmssIGFuZCBwZW9wbGUgZ2V0IGV2ZW4gbW9yZSBzdHJlc3NlZC5TdG9wIHRoZSBjeWNsZS5cbiAgICAgICAgTGV0IGNhdGFseXN0cyBkbyB0aGUgd29yayBmb3IgeW91LiA8L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldE92ZXJsYXkodHJ1ZSk7XG4gICAgICAgIH19Pkkgd2FudCB0byBBdXRvbWF0aXplITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nIHNyYz1cIi9HcnVwbyA4LnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLnBpY3R1cmV9Lz5cbiAgICAgIDxkaXYgXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE92ZXJsYXkoZmFsc2UpfVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIG92ZXJsYXkgPyBzdHlsZXMub3ZlcmxheSA6XG4gICAgICAgICAgc3R5bGVzLm92ZXJsYXkrXCIgXCIrc3R5bGVzLmhpZGRlbn0+PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=