webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/TaskM/TaskM.js":
/*!***********************************!*\
  !*** ./components/TaskM/TaskM.js ***!
  \***********************************/
/*! exports provided: TaskM, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskM", function() { return TaskM; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");









var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\TaskM\\TaskM.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //constante JSON

var url = "https://jsonplaceholder.typicode.com/todos";
var TaskM = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TaskM, _Component);

  var _super = _createSuper(TaskM);

  function TaskM(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TaskM);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "modalInsertar", function () {
      _this.setState({
        modalInsertar: !_this.state.modalInsertar
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.persist();
                _context.next = 3;
                return _this.setState({
                  form: _objectSpread(_objectSpread({}, _this.state.form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value))
                });

              case 3:
                console.log(_this.state.form);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "seleccionarTask", function (todo) {
      _this.setState({
        tipoModal: "actualizar",
        form: {
          id: todo.id,
          title: todo.title
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionGet", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url).then(function (response) {
        _this.setState({
          todo: response.data
        });
      })["catch"](function (error) {
        console.log(error.message);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionPost", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(url, _this.state.form).then(function (response) {
                _this.modalInsertar();

                _this.peticionGet();

                console.log(response);
              })["catch"](function (error) {
                console.log(error.message);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionPut", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.put(url + _this.state.form.id, _this.state.form).then(function (response) {
        _this.modalInsertar();

        _this.peticionGet();

        console.log(response);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionDelete", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a["delete"](url + _this.state.form.id).then(function (response) {
        _this.setState({
          modalEliminar: false
        });

        _this.peticionGet();

        console.log(response);
      });
    });

    _this.state = {
      todo: [],
      modalInsertar: false,
      modalEliminar: false,
      tipoModal: "",
      form: {
        id: "",
        title: ""
      }
    };
    return _this;
  } //acciones


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TaskM, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.peticionGet();
    } //Task Manager

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.state.form;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          _this2.setState(function (oldState) {
            return _objectSpread(_objectSpread({}, oldState), {}, {
              tipoModal: "insertar"
            });
          });

          _this2.modalInsertar();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, "Agregar Task"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 27
        }
      }), __jsx("table", {
        className: "table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 25
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 29
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 33
        }
      }, "ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 33
        }
      }, "TASK"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 33
        }
      }, "ACCIONES"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 25
        }
      }, this.state.todo.map(function (userID) {
        return __jsx("tr", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 37
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 41
          }
        }, userID.id), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 41
          }
        }, userID.title), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 41
          }
        }, __jsx("button", {
          className: "btn btn-secondary",
          onClick: function onClick() {
            _this2.seleccionarTask(userID);

            _this2.modalInsertar();
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 45
          }
        }, "Editar"), "   ", __jsx("button", {
          className: "btn btn-danger",
          onClick: function onClick() {
            _this2.seleccionarTask(userID);

            _this2.setState({
              modalEliminar: true
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 45
          }
        }, "Eliminar")));
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        isOpen: this.state.modalInsertar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalHeader"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }
      }, "Nueva Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        htmlFor: "id",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 25
        }
      }, "ID"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        className: "form-control",
        type: "text",
        name: "id",
        id: "id",
        readOnly: true,
        onChange: this.handleChange,
        value: this.state.todo.length + 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 25
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        htmlFor: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }
      }, "Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        className: "form-control",
        type: "text",
        name: "title",
        id: "title",
        onChange: this.handleChange,
        value: form.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }
      }, this.state.tipoModal == "insertar" ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionPost();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 25
        }
      }, "Agregar") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionPut();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 25
        }
      }, "Actualizar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.modalInsertar();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }
      }, "Cancelar"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        isOpen: this.state.modalEliminar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }
      }, "Est\xE1s seguro que deseas eliminar esta Task? ", form && form.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionDelete();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 25
        }
      }, "Si"), __jsx("button", {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.setState({
            modalEliminar: false
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 25
        }
      }, "NO"))));
    }
  }]);

  return TaskM;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (TaskM);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tNL1Rhc2tNLmpzIl0sIm5hbWVzIjpbInVybCIsIlRhc2tNIiwicHJvcHMiLCJzZXRTdGF0ZSIsIm1vZGFsSW5zZXJ0YXIiLCJzdGF0ZSIsImUiLCJwZXJzaXN0IiwiZm9ybSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2RvIiwidGlwb01vZGFsIiwiaWQiLCJ0aXRsZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsInBvc3QiLCJwZXRpY2lvbkdldCIsInB1dCIsIm1vZGFsRWxpbWluYXIiLCJvbGRTdGF0ZSIsIm1hcCIsInVzZXJJRCIsInNlbGVjY2lvbmFyVGFzayIsImhhbmRsZUNoYW5nZSIsImxlbmd0aCIsInBldGljaW9uUG9zdCIsInBldGljaW9uUHV0IiwicGV0aWNpb25EZWxldGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBLElBQU1BLEdBQUcsR0FBRyw0Q0FBWjtBQUVPLElBQU1DLEtBQWI7QUFBQTs7QUFBQTs7QUFFSSxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHdOQWdCTCxZQUFJO0FBQ2QsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLHFCQUFhLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdEO0FBQTVCLE9BQWQ7QUFDSCxLQWxCa0I7O0FBQUE7QUFBQSxrTUFvQkwsaUJBQU1FLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWQSxpQkFBQyxDQUFDQyxPQUFGO0FBRFU7QUFBQSx1QkFFSixNQUFLSixRQUFMLENBQWM7QUFDaEJLLHNCQUFJLGtDQUNHLE1BQUtILEtBQUwsQ0FBV0csSUFEZCxxR0FFQ0YsQ0FBQyxDQUFDRyxN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QUEsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISixFQUtJLE1BQUMsa0RBQUQ7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUU7QUFBQSxpQkFBSSxNQUFJLENBQUNoQyxhQUFMLEVBQUo7QUFBQSxTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLENBM0JKLENBL0NKLEVBb0ZJLE1BQUMsaURBQUQ7QUFBTyxjQUFNLEVBQUUsS0FBS0MsS0FBTCxDQUFXdUIsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0REFDaURwQixJQUFJLElBQUlBLElBQUksQ0FBQ1MsS0FEOUQsQ0FESixFQUlJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQVEsaUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsZUFBTyxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDb0IsY0FBTCxFQUFKO0FBQUEsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUU7QUFBQSxpQkFBSSxNQUFJLENBQUNsQyxRQUFMLENBQWM7QUFBQ3lCLHlCQUFhLEVBQUU7QUFBaEIsV0FBZCxDQUFKO0FBQUEsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLENBSkosQ0FwRkosQ0FESjtBQWdHSDtBQXJMTDs7QUFBQTtBQUFBLEVBQTJCVSwrQ0FBM0I7QUF3TGVyQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFuYWdlci5qcy5iM2I4YjFkYTY1OTBlNDFiMjM3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWx9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuLy9jb25zdGFudGUgSlNPTlxyXG5jb25zdCB1cmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgVGFza00gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0geyBcclxuICAgICAgICAgICAgdG9kbzogW10sXHJcbiAgICAgICAgICAgIG1vZGFsSW5zZXJ0YXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RhbEVsaW1pbmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgdGlwb01vZGFsOiBcIlwiLFxyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbi8vYWNjaW9uZXNcclxuICAgIG1vZGFsSW5zZXJ0YXI9KCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RhbEluc2VydGFyOiAhdGhpcy5zdGF0ZS5tb2RhbEluc2VydGFyfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlPSBhc3luYyBlPT57XHJcbiAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZm9ybSxcclxuICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWNjaW9uYXJUYXNrPSh0b2RvKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aXBvTW9kYWw6IFwiYWN0dWFsaXphclwiLFxyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdG9kby5pZCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0b2RvLnRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuLy9wZXRpY2lvbmVzXHJcbiAgICBwZXRpY2lvbkdldD0oKT0+IHtcclxuICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvZG86IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgIHBldGljaW9uUG9zdD0gYXN5bmMgKCk9PntcclxuICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHRoaXMuc3RhdGUuZm9ybSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgIHRoaXMubW9kYWxJbnNlcnRhcigpO1xyXG4gICAgICAgICAgIHRoaXMucGV0aWNpb25HZXQoKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgfVxyXG5cclxuICAgICBwZXRpY2lvblB1dD0oKT0+e1xyXG4gICAgICAgICBheGlvcy5wdXQodXJsICsgdGhpcy5zdGF0ZS5mb3JtLmlkLCB0aGlzLnN0YXRlLmZvcm0pLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgIHRoaXMubW9kYWxJbnNlcnRhcigpO1xyXG4gICAgICAgICAgICAgdGhpcy5wZXRpY2lvbkdldCgpO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICB9KVxyXG4gICAgIH1cclxuXHJcbiAgICAgcGV0aWNpb25EZWxldGU9KCk9PntcclxuICAgICAgICBheGlvcy5kZWxldGUodXJsICsgdGhpcy5zdGF0ZS5mb3JtLmlkKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsRWxpbWluYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIHRoaXMucGV0aWNpb25HZXQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBldGljaW9uR2V0KCk7XHJcbiAgICB9XHJcblxyXG4vL1Rhc2sgTWFuYWdlclxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtmb3JtfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvbGRTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vbGRTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb01vZGFsOiBcImluc2VydGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEluc2VydGFyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFncmVnYXIgVGFza1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VEFTSzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFDQ0lPTkVTPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvZG8ubWFwKCh1c2VySUQsKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VySUQuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcklELnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5zZWxlY2Npb25hclRhc2sodXNlcklEKTsgdGhpcy5tb2RhbEluc2VydGFyKCl9fT5FZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2VsZWNjaW9uYXJUYXNrKHVzZXJJRCk7IHRoaXMuc2V0U3RhdGUoe21vZGFsRWxpbWluYXI6IHRydWV9KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTW9kYWwgQWdyZWdhci9FZGl0YXIgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsSW5zZXJ0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2YSBUYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaWRcIj5JRDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9IFwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2RvLmxlbmd0aCsxfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGFzazwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS50aXRsZX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXBvTW9kYWwgPT0gXCJpbnNlcnRhclwiP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT50aGlzLnBldGljaW9uUG9zdCgpfT5BZ3JlZ2FyPC9CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT50aGlzLnBldGljaW9uUHV0KCl9PkFjdHVhbGl6YXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCk9PnRoaXMubW9kYWxJbnNlcnRhcigpfT5DYW5jZWxhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNb2RhbCBFbGltaW5hciAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWxFbGltaW5hcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXN0w6FzIHNlZ3VybyBxdWUgZGVzZWFzIGVsaW1pbmFyIGVzdGEgVGFzaz8ge2Zvcm0gJiYgZm9ybS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17KCk9PnRoaXMucGV0aWNpb25EZWxldGUoKX0+U2k8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHttb2RhbEVsaW1pbmFyOiBmYWxzZX0pfT5OTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tNIl0sInNvdXJjZVJvb3QiOiIifQ==