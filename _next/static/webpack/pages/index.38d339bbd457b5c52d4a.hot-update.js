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
                message: "Novo usuário cadastrado para Lead:\n" + "*Nome*: " + name + "\n" + "*E-mail*:" + email,
                nome: name
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
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.modal + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Let's Talk!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Please, fill your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 32
          }, this), " and your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "e-mail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 53
          }, this), " below and I will contact you pretty soon! Get in touch."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
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
              lineNumber: 62,
              columnNumber: 16
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "email",
              required: true,
              type: "email",
              placeholder: "E-mail",
              className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 16
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 14
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            disabled: loading,
            className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
            children: loading ? "Carregando" : "Confirmar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 14
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 12
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_github_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: function onClick() {
          return _onClick('github');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: function onClick() {
          return _onClick('linkedin');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_instagram_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _onClick('instagram');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_whatsapp_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          return _onClick('whatsapp');
        },
        className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.svg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.text,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Hey, I'm Brian."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Building Technology To Simplify Processes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: " Doing something must be useful and / or delightful.If it is not, probably your collaborators or you would be thinking about doing something else. People get stressed and that stress lead to mistakes, mistakes leads to more work, and people get even more stressed.Stop the cycle. Let catalysts do the work for you. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          setOverlay(true);
        },
        children: "I want to Automatize!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/Grupo 8.png",
      className: _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.picture
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return setOverlay(false);
      },
      className: overlay ? _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay : _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.overlay + " " + _styles_Home_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.hidden
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvdmVybGF5Iiwic2V0T3ZlcmxheSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU2NyaXB0IiwidXJscyIsImZhY2Vib29rIiwiZ2l0aHViIiwibGlua2VkaW4iLCJ3aGF0c2FwcCIsImluc3RhZ3JhbSIsIm9uQ2xpY2siLCJ0eXBlIiwid2luZG93Iiwib3BlbiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwibWVzc2FnZSIsIm5vbWUiLCJyZXNwb25zZSIsImFsZXJ0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibW9kYWwiLCJoaWRkZW4iLCJpbnB1dHMiLCJpbnB1dCIsImJ0biIsImljb25zIiwic3ZnIiwidGV4dCIsInBpY3R1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSx3QkFFQ0MsNkNBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGRDtBQUFBO0FBQUEsTUFFdEJDLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFBQSx5QkFHQ0gsNkNBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FIRDtBQUFBO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHYkMsVUFIYTs7QUFLN0JDLGtFQUFTLENBQUMsVUFBRCxDQUFUO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFlBQVEsRUFBRSxvQ0FEQztBQUVYQyxVQUFNLEVBQUUsNkJBRkc7QUFHWEMsWUFBUSxFQUFFLG9FQUhDO0FBSVhDLFlBQVEsRUFBRSwrRkFKQztBQUtY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QSxjQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU1FO0FBQVEsZUFBTyxFQUFFLG1CQUFNO0FBQ3JCckMsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxTQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENGLGVBa0RFO0FBQUssU0FBRyxFQUFDLGNBQVQ7QUFBd0IsZUFBUyxFQUFFNEIsK0RBQU0sQ0FBQ1U7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxERixlQW1ERTtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU10QyxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BRFg7QUFFRSxlQUFTLEVBQ1BELE9BQU8sR0FBRzZCLCtEQUFNLENBQUM3QixPQUFWLEdBQ1A2QiwrREFBTSxDQUFDN0IsT0FBUCxHQUFlLEdBQWYsR0FBbUI2QiwrREFBTSxDQUFDRztBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkREOztHQWpHdUJuQyxJO1VBS3RCTyx3RDs7O0tBTHNCUCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4ZDMzOWJiZDQ1N2I1YzUyZDRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU2NyaXB0IGZyb20gJy4uL2hvb2tzL3VzZVNjcmlwdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNhc3MnXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gXCIuLi9wdWJsaWMvZmFjZWJvb2suc3ZnXCI7XG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi4vcHVibGljL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSBcIi4uL3B1YmxpYy9saW5rZWRpbi1sb2dvLnN2Z1wiO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnLi4vcHVibGljL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IFdoYXRzYXBwSWNvbiBmcm9tIFwiLi4vcHVibGljL3doYXRzYXBwLnN2Z1wiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtvdmVybGF5LCBzZXRPdmVybGF5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZVNjcmlwdCgnL3Rlc3QuanMnKVxuXG4gIGNvbnN0IHVybHMgPSB7XG4gICAgZmFjZWJvb2s6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vQnJpaWFuSXRvJyxcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYW5JdG8nLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JyaWFuLWl0by1kZS1vbGl2ZWlyYS1tb3VyYS1hNTQwMDExOWIvJyxcbiAgICB3aGF0c2FwcDogJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1OTI5ODQzNzQzNTcmdGV4dD1PbMOhLCUyMFRlJTIwYWNoZWklMjBwZWxvJTIwc2V1JTIwU2l0ZSEnLFxuICAgIGluc3RhZ3JhbTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXUuYnJpYW4vJ1xuICB9XG5cbiAgY29uc3Qgb25DbGljayA9ICh0eXBlKSA9PiB7XG4gICAgd2luZG93Lm9wZW4odXJsc1t0eXBlXSk7XG4gIH1cblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IFtuYW1lLCBlbWFpbF0gPSBbZm9ybS5uYW1lLnZhbHVlLCBmb3JtLmVtYWlsLnZhbHVlXTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9hcGkuYnJhaW5zdG9ybS5xc2ltcG9ydGEuY29tOjMzMzMvc2VuZF93cHAnLCB7XG4gICAgICAgIG1lc3NhZ2U6IFwiTm92byB1c3XDoXJpbyBjYWRhc3RyYWRvIHBhcmEgTGVhZDpcXG5cIiArXG4gICAgICAgICAgXCIqTm9tZSo6IFwiICsgbmFtZSArIFwiXFxuXCIgK1xuICAgICAgICAgIFwiKkUtbWFpbCo6XCIgKyBlbWFpbCxcbiAgICAgICAgbm9tZTogbmFtZVxuICAgICAgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGFsZXJ0KFwiRXJybyBhbyBlbnZpYXIgc2V1cyBkYWRvcy4uLiA6KFxcbiBFcnJvOiBcIitlKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CcmlhbiBJdG8gLSBXZWIgRGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5ID8gc3R5bGVzLm1vZGFsIDogc3R5bGVzLm1vZGFsICsgXCIgXCIgKyBzdHlsZXMuaGlkZGVufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+TGV0J3MgVGFsayE8L2gxPlxuICAgICAgICAgIDxwPlBsZWFzZSwgZmlsbCB5b3VyIDxiPm5hbWU8L2I+IGFuZCB5b3VyIDxiPmUtbWFpbDwvYj4gYmVsb3cgYW5kIEkgd2lsbFxuICAgICAgICAgICBjb250YWN0IHlvdSBwcmV0dHkgc29vbiEgR2V0IGluIHRvdWNoLjwvcD5cbiAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XG4gICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT48L2lucHV0PlxuICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PjwvaW5wdXQ+IFxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiQ2FycmVnYW5kb1wiIDogXCJDb25maXJtYXJcIn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICA8RmFjZWJvb2tJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2ZhY2Vib29rJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30gLz5cbiAgICAgICAgPEdpdGh1Ykljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnZ2l0aHViJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgICA8TGlua2VkSW5JY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2xpbmtlZGluJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgICA8SW5zdGFncmFtSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdpbnN0YWdyYW0nKX0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfS8+XG4gICAgICAgIDxXaGF0c2FwcEljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnd2hhdHNhcHAnKX0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIDxoMj5IZXksIEknbSBCcmlhbi48L2gyPlxuICAgICAgICA8aDE+QnVpbGRpbmcgVGVjaG5vbG9neSBUbyBTaW1wbGlmeSBQcm9jZXNzZXMuPC9oMT5cbiAgICAgICAgPHA+IERvaW5nIHNvbWV0aGluZyBtdXN0IGJlIHVzZWZ1bCBhbmQgLyBvciBkZWxpZ2h0ZnVsLklmIGl0IGlzIG5vdCwgcHJvYmFibHkgeW91ciBjb2xsYWJvcmF0b3JzIG9yIHlvdSB3b3VsZCBiZSB0aGlua2luZyBhYm91dCBkb2luZyBzb21ldGhpbmdcbiAgICAgICAgZWxzZS4gUGVvcGxlIGdldCBzdHJlc3NlZCBhbmQgdGhhdCBzdHJlc3MgbGVhZCB0byBtaXN0YWtlcywgbWlzdGFrZXMgbGVhZHMgdG8gbW9yZSB3b3JrLCBhbmQgcGVvcGxlIGdldCBldmVuIG1vcmUgc3RyZXNzZWQuU3RvcCB0aGUgY3ljbGUuXG4gICAgICAgIExldCBjYXRhbHlzdHMgZG8gdGhlIHdvcmsgZm9yIHlvdS4gPC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRPdmVybGF5KHRydWUpO1xuICAgICAgICB9fT5JIHdhbnQgdG8gQXV0b21hdGl6ZSE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBzcmM9XCIvR3J1cG8gOC5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5waWN0dXJlfS8+XG4gICAgICA8ZGl2IFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPdmVybGF5KGZhbHNlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBvdmVybGF5ID8gc3R5bGVzLm92ZXJsYXkgOlxuICAgICAgICAgIHN0eWxlcy5vdmVybGF5K1wiIFwiK3N0eWxlcy5oaWRkZW59PjwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9