!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["form-for-react"]=t(require("react")):e["form-for-react"]=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(5),a=n(2),s=n.n(a),u=n(3),c=n.n(u),p=n(4),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},d=function(e){return t=function(t){function n(e){var n=t.call(this,e)||this;return n.propsValue=e.value,n.state={value:e.value},n}return l(n,t),n.prototype.componentWillMount=function(){this.context.api.addField({name:this.props.name,validate:this.props.validate,required:this.props.required,requiredMessage:this.props.requiredMessage||p.a}),void 0!==this.props.value&&""!==this.props.value&&this.context.api.setValue(this.props.name,this.props.value)},n.prototype.componentWillUnmount=function(){this.context.api.removeField(this.props.name)},n.prototype.componentWillReceiveProps=function(e){e.required!==this.props.required&&this.context.api.changeField({name:e.name,validate:e.validate,required:e.required}),this.isEqual(this.propsValue,e.value)||(this.propsValue=e.value,this.context.api.setValue(this.props.name,e.value),this.setState({value:e.value}))},n.prototype.isEqual=function(e,t){return Array.isArray(e)?e.every(function(e){return t.indexOf(e)>=0})&&t.every(function(t){return e.indexOf(t)>=0}):e===t},n.prototype.renderLabel=function(){var e=this.props,t=e.label,n=e.required,r=e.name;return void 0!==t?o.a.createElement("label",{htmlFor:r,className:"field-label"},o.a.createElement("span",{className:"required"},n&&"*"),o.a.createElement("span",{className:"label"},t)):null},n.prototype.renderInput=function(){var t=this,n=this.props,r=n.name,i=n.onChange,a=(n.value,n.label,n.fieldClassName,n.fieldStyle,n.disabled,n.validate,n.requiredMessage,n.required,n.help,h(n,["name","onChange","value","label","fieldClassName","fieldStyle","disabled","validate","requiredMessage","required","help"])),s=this.context.api;return o.a.createElement("div",{className:"field-input"},o.a.createElement(e,f({api:this.context.api,name:r,value:this.state.value,changeFieldValue:function(e){i&&i(r,e),s.setValue(r,e),t.setState({value:e})}},a)))},n.prototype.renderHelp=function(){var e=this.props.help;return e&&o.a.createElement("span",{className:"field-help"},e)},n.prototype.renderError=function(){var e=this.props.name,t=this.context.api,n=t.getTouched();return(n=n[e]||n.__allTouched)&&o.a.createElement(i.a,{name:e})},n.prototype.render=function(){var e=this.props,t=e.fieldClassName,n=e.fieldStyle,r=e.disabled,i=e.name,a=this.context.api,u=a.getTouched();u=u[i]||u.__allTouched;var c=a.getErrors()[i]&&u;return o.a.createElement("div",{className:s()("form-field",t,{disabled:r,"has-error":c}),style:n},this.renderLabel(),this.renderInput(),this.renderHelp(),this.renderError())},n}(o.a.Component),t.contextTypes={api:c.a.object},t;var t};t.a=d},function(e,t,n){var r,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){e.exports=n(13)()},function(e,t,n){"use strict";t.a="This field is required.";t.b=null},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3),a=n.n(i),s=n(2),u=n.n(s),c=n(4),p=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.error=null,r}return p(t,e),t.prototype.shouldComponentUpdate=function(){var e=this.props.name,t=this.context.api,n=t.getErrors(e);return n!==this.error&&(this.error=n,!0)},t.prototype.render=function(){var e=this.props,t=e.name,n=e.className,r=this.context.api,i=r.getErrors()[t];return i!==c.b?o.a.createElement("span",{className:u()("validation-message",n)},i):null},t.contextTypes={api:a.a.object},t}(o.a.Component);t.a=l},function(e,t,n){"use strict";function r(){}var o=n(0),i=n.n(o),a=n(3),s=n.n(a),u=n(2),c=n.n(u),p=n(4),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},d=function(e){function t(t){var n=e.call(this,t)||this;return n.state={errors:{}},n.values={},n.touched={__allTouched:!1},n.validates={},n.fields={},n}return l(t,e),t.prototype.getChildContext=function(){return{api:{getErrors:this.getErrors.bind(this),setValue:this.setValue.bind(this),getValues:this.getValues.bind(this),getTouched:this.getTouched.bind(this),addField:this.addField.bind(this),changeField:this.changeField.bind(this),removeField:this.removeField.bind(this)}}},t.prototype.addField=function(e){this.fields[e.name]=e,this.values[e.name]=""},t.prototype.changeField=function(e){this.fields[e.name]=e,this.setValue(e.name,this.values[e.name])},t.prototype.removeField=function(e){delete this.fields[e],this.values[e]=""},t.prototype.validateFields=function(){var e={};for(var t in this.fields){var n=this.fields[t];!function(e){return Array.isArray(e)?0===e.length:"number"==typeof e?void 0===e:!e}(this.values[t])?"function"==typeof this.fields[t].validate?e[t]=this.fields[t].validate(this.values[t],this.values):e[t]=p.b:n.required?e[t]=n.requiredMessage:e[t]=p.b}return e},t.prototype.setValue=function(e,t){this.values[e]=t,this.touched[e]=!0;var n=this.validateFields(),r=!0;for(var o in n)if(n[o]!==p.b){r=!1;break}this.setState({errors:n}),r?this.onValid():this.onInvalid()},t.prototype.getValues=function(){return this.values},t.prototype.getErrors=function(){return this.state.errors},t.prototype.getTouched=function(){return this.touched},t.prototype.onValid=function(){this.props.onValid&&this.props.onValid()},t.prototype.onInvalid=function(){this.props.onInvalid&&this.props.onInvalid()},t.prototype.onSubmit=function(e){e.preventDefault(),this.touched.__allTouched=!0;var t=this.validateFields(),n=!0;for(var r in t)if(t[r]!==p.b){n=!1;break}n&&this.props.onSubmit&&this.props.onSubmit(this.values),this.setState({errors:t})},t.prototype.render=function(){var e=this,t=this.props,n=t.className,r=(t.onInvalid,t.onSubmit,t.onValid,t.children,h(t,["className","onInvalid","onSubmit","onValid","children"]));return i.a.createElement("form",f({className:c()("form",n),onSubmit:function(t){return e.onSubmit(t)}},r),this.props.children)},t.defaultProps={onSubmit:r},t.childContextTypes={api:s.a.object},t}(i.a.Component);t.a=d},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=[],u=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.value,n=void 0===t?s:t,r=e.options,i=e.changeFieldValue,a=e.name;return o.a.createElement("div",{className:"checkbox-group",id:a},r.map(function(e){var t=n.indexOf(e.value)>=0;return o.a.createElement("label",{key:e.value,className:"checkbox"+(t?" checked":"")},o.a.createElement("input",{name:e.name,className:"checkbox-input",type:"checkbox",checked:t,onChange:function(){i(t?n.filter(function(t){return t!==e.value}):n.concat([e.value]))}}),e.label)}))},t}(o.a.Component);t.a=n.i(i.a)(u)},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.value,r=void 0===n?"":n,i=(e.api,e.changeFieldValue),a=u(e,["name","value","api","changeFieldValue"]);return o.a.createElement("input",s({id:t,className:"input",value:r,onChange:function(e){i(e.target.value)}},a))},t}(o.a.Component);t.a=n.i(i.a)(c)},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.value,n=e.options,r=e.changeFieldValue,i=e.name;return o.a.createElement("div",{className:"radio-group",id:i},n.map(function(e){var n=e.value===t;return o.a.createElement("label",{key:e.value,className:"radio"+(n?" checked":"")},o.a.createElement("input",{name:e.name,className:"radio-input",type:"radio",checked:n,onChange:function(){r(e.value)}}),e.label)}))},t}(o.a.Component);t.a=n.i(i.a)(s)},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.value,n=void 0===t?"":t,r=e.options,i=e.changeFieldValue,a=e.name;return o.a.createElement("select",{name:a,id:a,value:n,onChange:function(e){i(e.target.value)}},o.a.createElement("option",{value:""}," --- "),r.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.label)}))},t}(o.a.Component);t.a=n.i(i.a)(s)},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,a,s,u){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,r,i,a,s,u],l=0;c=new Error(t.replace(/%s/g,function(){return p[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";var r=n(11),o=n(12),i=n(14);e.exports=function(){function e(e,t,n,r,a,s){s!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=n(5),i=n(1),a=n(8),s=n(9),u=n(7),c=n(10);n.d(t,"Form",function(){return r.a}),n.d(t,"FormError",function(){return o.a}),n.d(t,"createFormField",function(){return i.a}),n.d(t,"Input",function(){return a.a}),n.d(t,"RadioGroup",function(){return s.a}),n.d(t,"CheckboxGroup",function(){return u.a}),n.d(t,"Select",function(){return c.a})}])});