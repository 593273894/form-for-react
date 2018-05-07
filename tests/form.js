(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["form-for-react"] = factory(require("react"));
	else
		root["form-for-react"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(7)();
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/constants.js
const defaultRequiredMessage = 'This field is required.';
const NO_ERROR = null;
// CONCATENATED MODULE: ./src/Form.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




function noop() { }
var Form_Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.submit = _this.onSubmit;
        _this.state = {
            errors: {}
        };
        _this.values = {};
        _this.touched = {
            __allTouched: false
        };
        _this.validates = {};
        _this.fields = {};
        _this.mounted = false;
        return _this;
    }
    Form.prototype.getChildContext = function () {
        return {
            api: {
                getErrors: this.getErrors.bind(this),
                setValue: this.setValue.bind(this),
                getValues: this.getValues.bind(this),
                getTouched: this.getTouched.bind(this),
                addField: this.addField.bind(this),
                changeField: this.changeField.bind(this),
                removeField: this.removeField.bind(this),
            }
        };
    };
    Form.prototype.componentDidMount = function () {
        this.mounted = true;
    };
    Form.prototype.addField = function (field) {
        this.fields[field.name] = field;
        this.values[field.name] = '';
        this.touched[field.name] = false;
        this.setState({
            errors: __assign({}, this.state.errors, (_a = {}, _a[field.name] = null, _a)),
        });
        var _a;
    };
    Form.prototype.changeField = function (field) {
        this.fields[field.name] = field;
        this.setValue(field.name, this.values[field.name]);
    };
    Form.prototype.removeField = function (name) {
        delete this.fields[name];
        delete this.values[name];
        delete this.touched[name];
        var errors = this.state.errors;
        delete errors[name];
        this.setState({
            errors: errors,
        });
    };
    Form.prototype.validateFields = function () {
        var errors = {};
        for (var name_1 in this.fields) {
            var field = this.fields[name_1];
            if (isEmpty(this.values[name_1])) {
                if (field.required) {
                    errors[name_1] = field.requiredMessage;
                }
                else {
                    errors[name_1] = NO_ERROR;
                }
            }
            else {
                if (typeof this.fields[name_1].validate === 'function') {
                    var validateMessage = this.fields[name_1].validate(this.values[name_1], this.values);
                    if (typeof validateMessage !== 'string' && validateMessage !== NO_ERROR) {
                        console.warn('Expected return value of validate() to be a string for error message ' +
                            'or a null for validate success');
                    }
                    errors[name_1] = this.fields[name_1].validate(this.values[name_1], this.values);
                }
                else {
                    errors[name_1] = NO_ERROR;
                }
            }
        }
        return errors;
        function isEmpty(value) {
            if (Array.isArray(value)) {
                return value.length === 0;
            }
            if (typeof value === 'number') {
                return value === undefined;
            }
            else {
                return !value;
            }
        }
    };
    Form.prototype.setValue = function (name, value, triggerFormOnChange) {
        if (triggerFormOnChange === void 0) { triggerFormOnChange = false; }
        this.values[name] = value;
        var errors = this.validateFields();
        var noerror = true;
        for (var name_2 in errors) {
            if (errors[name_2] !== NO_ERROR && errors[name_2] !== undefined) {
                noerror = false;
                break;
            }
        }
        this.setState({
            errors: errors
        });
        noerror ? this.onValid() : this.onInvalid();
        if (triggerFormOnChange) {
            this.touched[name] = true;
            this.onchange(name, value);
        }
    };
    Form.prototype.getValues = function () {
        return this.values;
    };
    Form.prototype.getErrors = function () {
        return this.state.errors;
    };
    Form.prototype.getTouched = function () {
        return this.touched;
    };
    Form.prototype.onchange = function (name, value) {
        this.mounted && this.props.onChange && this.props.onChange(name, value);
    };
    Form.prototype.onValid = function () {
        this.props.onValid && this.props.onValid();
    };
    Form.prototype.onInvalid = function () {
        this.props.onInvalid && this.props.onInvalid();
    };
    Form.prototype.onSubmit = function (e) {
        e && e.preventDefault && e.preventDefault();
        this.touched.__allTouched = true;
        var errors = this.validateFields();
        var noerror = true;
        for (var name_3 in errors) {
            if (errors[name_3] !== NO_ERROR && errors[name_3] !== undefined) {
                noerror = false;
                break;
            }
        }
        if (noerror) {
            this.props.onSubmit && this.props.onSubmit(this.values);
        }
        this.setState({
            errors: errors
        });
    };
    Form.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, onChange = _a.onChange, onSubmit = _a.onSubmit, onInvalid = _a.onInvalid, onValid = _a.onValid, children = _a.children, rest = __rest(_a, ["className", "onChange", "onSubmit", "onInvalid", "onValid", "children"]);
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("form", __assign({ className: classnames_default()('form', className), onSubmit: function (e) { return _this.onSubmit(e); } }, rest), this.props.children));
    };
    Form.defaultProps = {
        onSubmit: noop,
    };
    Form.childContextTypes = {
        api: prop_types_default.a.object
    };
    return Form;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component));
/* harmony default export */ var src_Form = (Form_Form);

// CONCATENATED MODULE: ./src/FormError.tsx
var FormError_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FormError_FormError = /** @class */ (function (_super) {
    FormError_extends(FormError, _super);
    function FormError(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.error = null;
        return _this;
    }
    FormError.prototype.shouldComponentUpdate = function () {
        var name = this.props.name;
        var api = this.context.api;
        var error = api.getErrors(name);
        if (error !== this.error) {
            this.error = error;
            return true;
        }
        else {
            return false;
        }
    };
    FormError.prototype.render = function () {
        var _a = this.props, name = _a.name, className = _a.className;
        var api = this.context.api;
        var error = api.getErrors()[name];
        return (error !== NO_ERROR && error !== undefined ? external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", { className: classnames_default()('validation-message', className) }, String(error)) : null);
    };
    FormError.contextTypes = {
        api: prop_types_default.a.object
    };
    return FormError;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component));
/* harmony default export */ var src_FormError = (FormError_FormError);

// CONCATENATED MODULE: ./src/createFormField.tsx
var createFormField_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var createFormField_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var createFormField_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var createFromField = function (Input) {
    return _a = /** @class */ (function (_super) {
            createFormField_extends(FormField, _super);
            function FormField(props) {
                var _this = _super.call(this, props) || this;
                _this.propsValue = props.value;
                _this.state = {
                    value: props.value
                };
                return _this;
            }
            FormField.prototype.componentWillMount = function () {
                this.context.api.addField({
                    name: this.props.name,
                    validate: this.props.validate,
                    required: this.props.required,
                    requiredMessage: this.props.requiredMessage === undefined ? defaultRequiredMessage : this.props.requiredMessage,
                });
                if (this.props.value !== undefined && this.props.value !== '') {
                    this.context.api.setValue(this.props.name, this.props.value);
                }
            };
            FormField.prototype.componentWillUnmount = function () {
                this.context.api.removeField(this.props.name);
            };
            FormField.prototype.componentWillReceiveProps = function (nextprops) {
                if (nextprops.required !== this.props.required) {
                    this.context.api.changeField({
                        name: nextprops.name,
                        validate: nextprops.validate,
                        required: nextprops.required,
                        requiredMessage: nextprops.requiredMessage === undefined ? defaultRequiredMessage : nextprops.requiredMessage,
                    });
                }
                if (!this.isEqual(this.propsValue, nextprops.value)) {
                    this.propsValue = nextprops.value;
                    this.context.api.setValue(this.props.name, nextprops.value);
                    this.setState({
                        value: nextprops.value
                    });
                }
            };
            FormField.prototype.isEqual = function (value1, value2) {
                if (Array.isArray(value1)) {
                    return value1.every(function (item) { return value2.indexOf(item) >= 0; }) && value2.every(function (item) { return value1.indexOf(item) >= 0; });
                }
                else {
                    return value1 === value2;
                }
            };
            FormField.prototype.renderLabel = function () {
                var _a = this.props, label = _a.label, required = _a.required, name = _a.name;
                if (label !== undefined) {
                    return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", { htmlFor: name, className: "field-label" },
                        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", { className: "required" }, required && '*'),
                        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", { className: "label" }, label)));
                }
                else {
                    return null;
                }
            };
            FormField.prototype.renderInput = function () {
                var _this = this;
                var _a = this.props, name = _a.name, onChange = _a.onChange, value = _a.value, // props for input component
                label = _a.label, fieldClassName = _a.fieldClassName, fieldStyle = _a.fieldStyle, disabled = _a.disabled, validate = _a.validate, requiredMessage = _a.requiredMessage, required = _a.required, help = _a.help, // props for field, don't pass to input component
                rest = createFormField_rest(_a, ["name", "onChange", "value", "label", "fieldClassName", "fieldStyle", "disabled", "validate", "requiredMessage", "required", "help"]) // user's props
                ;
                var api = this.context.api;
                return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", { className: "field-input" },
                    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Input, createFormField_assign({ api: this.context.api, name: name, value: this.state.value, changeFieldValue: function (value) {
                            onChange && onChange(name, value);
                            api.setValue(name, value, true);
                            _this.setState({
                                value: value
                            });
                        } }, rest))));
            };
            FormField.prototype.renderHelp = function () {
                var help = this.props.help;
                return (help && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", { className: "field-help" }, help));
            };
            FormField.prototype.renderError = function () {
                var name = this.props.name;
                var api = this.context.api;
                var touched = api.getTouched();
                touched = touched[name] || touched.__allTouched;
                return (touched && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_FormError, { name: name }));
            };
            FormField.prototype.render = function () {
                var _a = this.props, fieldClassName = _a.fieldClassName, fieldStyle = _a.fieldStyle, disabled = _a.disabled, name = _a.name;
                var api = this.context.api;
                var touched = api.getTouched();
                touched = touched[name] || touched.__allTouched;
                var error = api.getErrors()[name];
                var hasError = error !== NO_ERROR && error !== undefined && touched;
                return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", { className: classnames_default()('form-field', fieldClassName, { disabled: disabled, 'has-error': hasError }), style: fieldStyle },
                    this.renderLabel(),
                    this.renderInput(),
                    this.renderHelp(),
                    this.renderError()));
            };
            return FormField;
        }(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component)),
        _a.contextTypes = {
            api: prop_types_default.a.object
        },
        _a;
    var _a;
};
/* harmony default export */ var createFormField = (createFromField);

// CONCATENATED MODULE: ./src/components/Input.tsx
var Input_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Input_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Input_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var emptyString = '';
var Input_Input = /** @class */ (function (_super) {
    Input_extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, name = _a.name, _b = _a.value, value = _b === void 0 ? emptyString : _b, api = _a.api, changeFieldValue = _a.changeFieldValue, rest = Input_rest(_a, ["name", "value", "api", "changeFieldValue"]);
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", Input_assign({ id: name, className: "input", value: value, onChange: function (e) {
                changeFieldValue(e.target.value);
            } }, rest)));
    };
    return Input;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component));
/* harmony default export */ var components_Input = (createFormField(Input_Input));

// CONCATENATED MODULE: ./src/components/RadioGroup.tsx
var RadioGroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RadioGroup_RadioGroup = /** @class */ (function (_super) {
    RadioGroup_extends(RadioGroup, _super);
    function RadioGroup(props) {
        return _super.call(this, props) || this;
    }
    RadioGroup.prototype.render = function () {
        var _a = this.props, value = _a.value, options = _a.options, changeFieldValue = _a.changeFieldValue, name = _a.name;
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", { className: "radio-group", id: name }, options.map(function (option) {
            var checked = option.value === value;
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", { key: option.value, className: "radio" + (checked ? ' checked' : '') },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", { name: option.name, className: "radio-input", type: "radio", checked: checked, onChange: function () {
                        changeFieldValue(option.value);
                    } }),
                option.label));
        })));
    };
    return RadioGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component));
/* harmony default export */ var components_RadioGroup = (createFormField(RadioGroup_RadioGroup));

// CONCATENATED MODULE: ./src/components/CheckboxGroup.tsx
var CheckboxGroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var emptyArray = [];
var CheckboxGroup_CheckboxGroup = /** @class */ (function (_super) {
    CheckboxGroup_extends(CheckboxGroup, _super);
    function CheckboxGroup(props) {
        return _super.call(this, props) || this;
    }
    CheckboxGroup.prototype.render = function () {
        var _a = this.props, _b = _a.value, value = _b === void 0 ? emptyArray : _b, options = _a.options, changeFieldValue = _a.changeFieldValue, name = _a.name;
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", { className: "checkbox-group", id: name }, options.map(function (option) {
            var checked = value.indexOf(option.value) >= 0;
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", { key: option.value, className: "checkbox" + (checked ? ' checked' : '') },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", { name: option.name, className: "checkbox-input", type: "checkbox", checked: checked, onChange: function () {
                        if (checked) {
                            changeFieldValue(value.filter(function (item) { return item !== option.value; }));
                        }
                        else {
                            changeFieldValue(value.concat([option.value]));
                        }
                    } }),
                option.label));
        })));
    };
    return CheckboxGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component));
/* harmony default export */ var components_CheckboxGroup = (createFormField(CheckboxGroup_CheckboxGroup));

// CONCATENATED MODULE: ./src/components/Select.tsx
var Select_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Select_emptyString = '';
var Select_Select = /** @class */ (function (_super) {
    Select_extends(Select, _super);
    function Select(props) {
        return _super.call(this, props) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, _b = _a.value, value = _b === void 0 ? Select_emptyString : _b, options = _a.options, changeFieldValue = _a.changeFieldValue, name = _a.name;
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("select", { name: name, id: name, value: value, onChange: function (e) {
                changeFieldValue(e.target.value);
            } },
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("option", { value: "" }, " --- "),
            options.map(function (option) {
                return (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("option", { key: option.value, value: option.value }, option.label));
            })));
    };
    return Select;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component));
/* harmony default export */ var components_Select = (createFormField(Select_Select));

// CONCATENATED MODULE: ./src/index.tsx
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Form", function() { return src_Form; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormError", function() { return src_FormError; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createFormField", function() { return createFormField; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Input", function() { return components_Input; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return components_RadioGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return components_CheckboxGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Select", function() { return components_Select; });










/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ })
/******/ ]);
});