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
                nome: "Brian"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvdmVybGF5Iiwic2V0T3ZlcmxheSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU2NyaXB0IiwidXJscyIsImZhY2Vib29rIiwiZ2l0aHViIiwibGlua2VkaW4iLCJ3aGF0c2FwcCIsImluc3RhZ3JhbSIsIm9uQ2xpY2siLCJ0eXBlIiwid2luZG93Iiwib3BlbiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwiYXhpb3MiLCJwb3N0IiwibWVzc2FnZSIsIm5vbWUiLCJyZXNwb25zZSIsImFsZXJ0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibW9kYWwiLCJoaWRkZW4iLCJpbnB1dHMiLCJpbnB1dCIsImJ0biIsImljb25zIiwic3ZnIiwidGV4dCIsInBpY3R1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSx3QkFFQ0MsNkNBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGRDtBQUFBO0FBQUEsTUFFdEJDLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFBQSx5QkFHQ0gsNkNBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FIRDtBQUFBO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHYkMsVUFIYTs7QUFLN0JDLGtFQUFTLENBQUMsVUFBRCxDQUFUO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFlBQVEsRUFBRSxvQ0FEQztBQUVYQyxVQUFNLEVBQUUsNkJBRkc7QUFHWEMsWUFBUSxFQUFFLG9FQUhDO0FBSVhDLFlBQVEsRUFBRSwrRkFKQztBQUtY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LGNBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBTUU7QUFBUSxlQUFPLEVBQUUsbUJBQU07QUFDckJyQyxvQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNELFNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q0YsZUFrREU7QUFBSyxTQUFHLEVBQUMsY0FBVDtBQUF3QixlQUFTLEVBQUU0QiwrREFBTSxDQUFDVTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbERGLGVBbURFO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTXRDLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsT0FEWDtBQUVFLGVBQVMsRUFDUEQsT0FBTyxHQUFHNkIsK0RBQU0sQ0FBQzdCLE9BQVYsR0FDUDZCLCtEQUFNLENBQUM3QixPQUFQLEdBQWUsR0FBZixHQUFtQjZCLCtEQUFNLENBQUNHO0FBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7O0dBakd1Qm5DLEk7VUFLdEJPLHdEOzs7S0FMc0JQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzIwYTBiZGY3NGMyNjE0ZmQxMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTY3JpcHQgZnJvbSAnLi4vaG9va3MvdXNlU2NyaXB0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2FzcydcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSBcIi4uL3B1YmxpYy9mYWNlYm9vay5zdmdcIjtcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuLi9wdWJsaWMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiLi4vcHVibGljL2xpbmtlZGluLWxvZ28uc3ZnXCI7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICcuLi9wdWJsaWMvaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgV2hhdHNhcHBJY29uIGZyb20gXCIuLi9wdWJsaWMvd2hhdHNhcHAuc3ZnXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW292ZXJsYXksIHNldE92ZXJsYXldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlU2NyaXB0KCcvdGVzdC5qcycpXG5cbiAgY29uc3QgdXJscyA9IHtcbiAgICBmYWNlYm9vazogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9CcmlpYW5JdG8nLFxuICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Ccmlhbkl0bycsXG4gICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYnJpYW4taXRvLWRlLW9saXZlaXJhLW1vdXJhLWE1NDAwMTE5Yi8nLFxuICAgIHdoYXRzYXBwOiAnaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTU5Mjk4NDM3NDM1NyZ0ZXh0PU9sw6EsJTIwVGUlMjBhY2hlaSUyMHBlbG8lMjBzZXUlMjBTaXRlIScsXG4gICAgaW5zdGFncmFtOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ldS5icmlhbi8nXG4gIH1cblxuICBjb25zdCBvbkNsaWNrID0gKHR5cGUpID0+IHtcbiAgICB3aW5kb3cub3Blbih1cmxzW3R5cGVdKTtcbiAgfVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgW25hbWUsIGVtYWlsXSA9IFtmb3JtLm5hbWUudmFsdWUsIGZvcm0uZW1haWwudmFsdWVdO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2FwaS5icmFpbnN0b3JtLnFzaW1wb3J0YS5jb206MzMzMy9zZW5kX3dwcCcsIHtcbiAgICAgICAgbWVzc2FnZTogXCJOb3ZvIHVzdcOhcmlvIGNhZGFzdHJhZG8gcGFyYSBMZWFkOlxcblwiICtcbiAgICAgICAgICBcIipOb21lKjogXCIgKyBuYW1lICsgXCJcXG5cIiArXG4gICAgICAgICAgXCIqRS1tYWlsKjpcIiArIGVtYWlsLFxuICAgICAgICBub21lOiBcIkJyaWFuXCJcbiAgICAgIH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBhbGVydChcIkVycm8gYW8gZW52aWFyIHNldXMgZGFkb3MuLi4gOihcXG4gRXJybzogXCIrZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QnJpYW4gSXRvIC0gV2ViIERldmVsb3BlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheSA/IHN0eWxlcy5tb2RhbCA6IHN0eWxlcy5tb2RhbCArIFwiIFwiICsgc3R5bGVzLmhpZGRlbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkxldCdzIFRhbGshPC9oMT5cbiAgICAgICAgICA8cD5QbGVhc2UsIGZpbGwgeW91ciA8Yj5uYW1lPC9iPiBhbmQgeW91ciA8Yj5lLW1haWw8L2I+IGJlbG93IGFuZCBJIHdpbGxcbiAgICAgICAgICAgY29udGFjdCB5b3UgcHJldHR5IHNvb24hIEdldCBpbiB0b3VjaC48L3A+XG4gICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxuICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT48L2lucHV0PiBcbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIkNhcnJlZ2FuZG9cIiA6IFwiQ29uZmlybWFyXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgICAgPEZhY2Vib29rSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdmYWNlYm9vaycpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9IC8+XG4gICAgICAgIDxHaXRodWJJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2dpdGh1YicpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgICAgPExpbmtlZEluSWNvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdsaW5rZWRpbicpfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Lz5cbiAgICAgICAgPEluc3RhZ3JhbUljb24gb25DbGljaz17KCkgPT4gb25DbGljaygnaW5zdGFncmFtJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgICA8V2hhdHNhcHBJY29uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ3doYXRzYXBwJyl9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICA8aDI+SGV5LCBJJ20gQnJpYW4uPC9oMj5cbiAgICAgICAgPGgxPkJ1aWxkaW5nIFRlY2hub2xvZ3kgVG8gU2ltcGxpZnkgUHJvY2Vzc2VzLjwvaDE+XG4gICAgICAgIDxwPiBEb2luZyBzb21ldGhpbmcgbXVzdCBiZSB1c2VmdWwgYW5kIC8gb3IgZGVsaWdodGZ1bC5JZiBpdCBpcyBub3QsIHByb2JhYmx5IHlvdXIgY29sbGFib3JhdG9ycyBvciB5b3Ugd291bGQgYmUgdGhpbmtpbmcgYWJvdXQgZG9pbmcgc29tZXRoaW5nXG4gICAgICAgIGVsc2UuIFBlb3BsZSBnZXQgc3RyZXNzZWQgYW5kIHRoYXQgc3RyZXNzIGxlYWQgdG8gbWlzdGFrZXMsIG1pc3Rha2VzIGxlYWRzIHRvIG1vcmUgd29yaywgYW5kIHBlb3BsZSBnZXQgZXZlbiBtb3JlIHN0cmVzc2VkLlN0b3AgdGhlIGN5Y2xlLlxuICAgICAgICBMZXQgY2F0YWx5c3RzIGRvIHRoZSB3b3JrIGZvciB5b3UuIDwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3ZlcmxheSh0cnVlKTtcbiAgICAgICAgfX0+SSB3YW50IHRvIEF1dG9tYXRpemUhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPVwiL0dydXBvIDgucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMucGljdHVyZX0vPlxuICAgICAgPGRpdiBcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3ZlcmxheShmYWxzZSl9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgb3ZlcmxheSA/IHN0eWxlcy5vdmVybGF5IDpcbiAgICAgICAgICBzdHlsZXMub3ZlcmxheStcIiBcIitzdHlsZXMuaGlkZGVufT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==