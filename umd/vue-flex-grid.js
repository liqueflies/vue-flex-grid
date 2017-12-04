
/*! @liqueflies/vue-flex-grid - v0.0.1
 * https://github.com/liqueflies/vue-flex-grid
 * Copyright (c) 2017 - [object Object];
 * Licensed MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueGrid = {})));
}(this, (function (exports) { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

var lodash_isplainobject = isPlainObject;

var ObjProto = Object.prototype;
var toString = ObjProto.toString;
var hasOwn = ObjProto.hasOwnProperty;

var FN_MATCH_REGEXP = /^\s*function (\w+)/;

// https://github.com/vuejs/vue/blob/dev/src/core/util/props.js#L159
var getType = function getType(fn) {
  var type = fn !== null && fn !== undefined ? fn.type ? fn.type : fn : null;
  var match = type && type.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};

var getNativeType = function getNativeType(value) {
  if (value === null || value === undefined) return null;
  var match = value.constructor.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};

/**
 * No-op function
 */
var noop = function noop() {};

/**
 * Checks for a own property in an object
 *
 * @param {object} obj - Object
 * @param {string} prop - Property to check
 */


/**
 * Determines whether the passed value is an integer. Uses `Number.isInteger` if available
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean}
 */
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to be tested for being an array.
 * @returns {boolean}
 */
var isArray = Array.isArray || function (value) {
  return toString.call(value) === '[object Array]';
};

/**
 * Checks if a value is a function
 *
 * @param {any} value - Value to check
 * @returns {boolean}
 */
var isFunction = function isFunction(value) {
  return toString.call(value) === '[object Function]';
};

/**
 * Adds a `def` method to the object returning a new object with passed in argument as `default` property
 *
 * @param {object} type - Object to enhance
 */
var withDefault = function withDefault(type) {
  Object.defineProperty(type, 'def', {
    value: function value(def) {
      if (def === undefined && !this.default) {
        return this;
      }
      if (!isFunction(def) && !validateType(this, def)) {
        warn(this._vueTypes_name + ' - invalid default value: "' + def + '"', def);
        return this;
      }
      this.default = isArray(def) || lodash_isplainobject(def) ? function () {
        return def;
      } : def;
      return this;
    },

    enumerable: false,
    writable: false
  });
};

/**
 * Adds a `isRequired` getter returning a new object with `required: true` key-value
 *
 * @param {object} type - Object to enhance
 */
var withRequired = function withRequired(type) {
  Object.defineProperty(type, 'isRequired', {
    get: function get() {
      this.required = true;
      return this;
    },

    enumerable: false
  });
};

/**
 * Adds `isRequired` and `def` modifiers to an object
 *
 * @param {string} name - Type internal name
 * @param {object} obj - Object to enhance
 * @returns {object}
 */
var toType = function toType(name, obj) {
  Object.defineProperty(obj, '_vueTypes_name', {
    enumerable: false,
    writable: false,
    value: name
  });
  withRequired(obj);
  withDefault(obj);

  if (isFunction(obj.validator)) {
    obj.validator = obj.validator.bind(obj);
  }
  return obj;
};

/**
 * Validates a given value against a prop type object
 *
 * @param {Object|*} type - Type to use for validation. Either a type object or a constructor
 * @param {*} value - Value to check
 * @param {boolean} silent - Silence warnings
 * @returns {boolean}
 */
var validateType = function validateType(type, value) {
  var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var typeToCheck = type;
  var valid = true;
  var expectedType = void 0;
  if (!lodash_isplainobject(type)) {
    typeToCheck = { type: type };
  }
  var namePrefix = typeToCheck._vueTypes_name ? typeToCheck._vueTypes_name + ' - ' : '';

  if (hasOwn.call(typeToCheck, 'type') && typeToCheck.type !== null) {
    if (isArray(typeToCheck.type)) {
      valid = typeToCheck.type.some(function (type) {
        return validateType(type, value, true);
      });
      expectedType = typeToCheck.type.map(function (type) {
        return getType(type);
      }).join(' or ');
    } else {
      expectedType = getType(typeToCheck);

      if (expectedType === 'Array') {
        valid = isArray(value);
      } else if (expectedType === 'Object') {
        valid = lodash_isplainobject(value);
      } else if (expectedType === 'String' || expectedType === 'Number' || expectedType === 'Boolean' || expectedType === 'Function') {
        valid = getNativeType(value) === expectedType;
      } else {
        valid = value instanceof typeToCheck.type;
      }
    }
  }

  if (!valid) {
    silent === false && warn(namePrefix + 'value "' + value + '" should be of type "' + expectedType + '"');
    return false;
  }

  if (hasOwn.call(typeToCheck, 'validator') && isFunction(typeToCheck.validator)) {
    valid = typeToCheck.validator(value);
    if (!valid && silent === false) warn(namePrefix + 'custom validation failed');
    return valid;
  }
  return valid;
};

var warn = noop;

{
  var hasConsole = typeof console !== 'undefined';
  warn = function warn(msg) {
    if (hasConsole) {
      console.warn('[VueTypes warn]: ' + msg);
    }
  };
}

var VuePropTypes = {

  get any() {
    return toType('any', {
      type: null
    });
  },

  get func() {
    return toType('function', {
      type: Function
    }).def(currentDefaults.func);
  },

  get bool() {
    return toType('boolean', {
      type: Boolean
    }).def(currentDefaults.bool);
  },

  get string() {
    return toType('string', {
      type: String
    }).def(currentDefaults.string);
  },

  get number() {
    return toType('number', {
      type: Number
    }).def(currentDefaults.number);
  },

  get array() {
    return toType('array', {
      type: Array
    }).def(currentDefaults.array);
  },

  get object() {
    return toType('object', {
      type: Object
    }).def(currentDefaults.object);
  },

  get integer() {
    return toType('integer', {
      type: Number,
      validator: function validator(value) {
        return isInteger(value);
      }
    }).def(currentDefaults.integer);
  },

  custom: function custom(validatorFn) {
    var warnMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'custom validation failed';

    if (typeof validatorFn !== 'function') {
      throw new TypeError('[VueTypes error]: You must provide a function as argument');
    }

    return toType(validatorFn.name || '<<anonymous function>>', {
      validator: function validator() {
        var valid = validatorFn.apply(undefined, arguments);
        if (!valid) warn(this._vueTypes_name + ' - ' + warnMsg);
        return valid;
      }
    });
  },
  oneOf: function oneOf(arr) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }
    var msg = 'oneOf - value should be one of "' + arr.join('", "') + '"';
    var allowedTypes = arr.reduce(function (ret, v) {
      if (v !== null && v !== undefined) {
        ret.indexOf(v.constructor) === -1 && ret.push(v.constructor);
      }
      return ret;
    }, []);

    return toType('oneOf', {
      type: allowedTypes.length > 0 ? allowedTypes : null,
      validator: function validator(value) {
        var valid = arr.indexOf(value) !== -1;
        if (!valid) warn(msg);
        return valid;
      }
    });
  },
  instanceOf: function instanceOf(instanceConstructor) {
    return toType('instanceOf', {
      type: instanceConstructor
    });
  },
  oneOfType: function oneOfType(arr) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }

    var hasCustomValidators = false;

    var nativeChecks = arr.reduce(function (ret, type, i) {
      if (lodash_isplainobject(type)) {
        if (type._vueTypes_name === 'oneOf') {
          return ret.concat(type.type || []);
        }
        if (type.type && !isFunction(type.validator)) {
          if (isArray(type.type)) return ret.concat(type.type);
          ret.push(type.type);
        } else if (isFunction(type.validator)) {
          hasCustomValidators = true;
        }
        return ret;
      }
      ret.push(type);
      return ret;
    }, []);

    if (!hasCustomValidators) {
      // we got just native objects (ie: Array, Object)
      // delegate to Vue native prop check
      return toType('oneOfType', {
        type: nativeChecks
      });
    }

    var typesStr = arr.map(function (type) {
      if (type && isArray(type.type)) {
        return type.type.map(getType);
      }
      return getType(type);
    }).reduce(function (ret, type) {
      return ret.concat(isArray(type) ? type : [type]);
    }, []).join('", "');

    return this.custom(function oneOfType(value) {
      var valid = arr.some(function (type) {
        if (type._vueTypes_name === 'oneOf') {
          return type.type ? validateType(type.type, value, true) : true;
        }
        return validateType(type, value, true);
      });
      if (!valid) warn('oneOfType - value type should be one of "' + typesStr + '"');
      return valid;
    });
  },
  arrayOf: function arrayOf(type) {
    return toType('arrayOf', {
      type: Array,
      validator: function validator(values) {
        var valid = values.every(function (value) {
          return validateType(type, value);
        });
        if (!valid) warn('arrayOf - value must be an array of "' + getType(type) + '"');
        return valid;
      }
    });
  },
  objectOf: function objectOf(type) {
    return toType('objectOf', {
      type: Object,
      validator: function validator(obj) {
        var valid = Object.keys(obj).every(function (key) {
          return validateType(type, obj[key]);
        });
        if (!valid) warn('objectOf - value must be an object of "' + getType(type) + '"');
        return valid;
      }
    });
  },
  shape: function shape(obj) {
    var keys = Object.keys(obj);
    var requiredKeys = keys.filter(function (key) {
      return obj[key] && obj[key].required === true;
    });

    var type = toType('shape', {
      type: Object,
      validator: function validator(value) {
        var _this = this;

        if (!lodash_isplainobject(value)) {
          return false;
        }
        var valueKeys = Object.keys(value);

        // check for required keys (if any)
        if (requiredKeys.length > 0 && requiredKeys.some(function (req) {
          return valueKeys.indexOf(req) === -1;
        })) {
          warn('shape - at least one of required properties "' + requiredKeys.join('", "') + '" is not present');
          return false;
        }

        return valueKeys.every(function (key) {
          if (keys.indexOf(key) === -1) {
            if (_this._vueTypes_isLoose === true) return true;
            warn('shape - object is missing "' + key + '" property');
            return false;
          }
          var type = obj[key];
          return validateType(type, value[key]);
        });
      }
    });

    Object.defineProperty(type, '_vueTypes_isLoose', {
      enumerable: false,
      writable: true,
      value: false
    });

    Object.defineProperty(type, 'loose', {
      get: function get() {
        this._vueTypes_isLoose = true;
        return this;
      },

      enumerable: false
    });

    return type;
  }
};

var typeDefaults = function typeDefaults() {
  return {
    func: noop,
    bool: true,
    string: '',
    number: 0,
    array: function array() {
      return [];
    },
    object: function object() {
      return {};
    },
    integer: 0
  };
};

var currentDefaults = typeDefaults();

Object.defineProperty(VuePropTypes, 'sensibleDefaults', {
  enumerable: false,
  set: function set(value) {
    if (value === false) {
      currentDefaults = {};
    } else if (value === true) {
      currentDefaults = typeDefaults();
    } else if (lodash_isplainobject(value)) {
      currentDefaults = value;
    }
  },
  get: function get() {
    return currentDefaults;
  }
});

var styles = __$styleInject("/* Uncomment and set these variables to customize the grid. */\n\n._container-fluid_rsof4_3 {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n._row_rsof4_10 {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  -webkit-box-flex: 0;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -1rem;\n  margin-left: -1rem;\n}\n\n._row_rsof4_10._reverse_rsof4_28 {\n  -ms-flex-direction: row-reverse;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  flex-direction: row-reverse;\n}\n\n._col_rsof4_35._reverse_rsof4_28 {\n  -ms-flex-direction: column-reverse;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  flex-direction: column-reverse;\n}\n\n._col-xs_rsof4_42,\n._col-xs-1_rsof4_43,\n._col-xs-2_rsof4_44,\n._col-xs-3_rsof4_45,\n._col-xs-4_rsof4_46,\n._col-xs-5_rsof4_47,\n._col-xs-6_rsof4_48,\n._col-xs-7_rsof4_49,\n._col-xs-8_rsof4_50,\n._col-xs-9_rsof4_51,\n._col-xs-10_rsof4_52,\n._col-xs-11_rsof4_53,\n._col-xs-12_rsof4_54 {\n  box-sizing: border-box;\n  -ms-flex: 0 0 auto;\n  -webkit-box-flex: 0;\n  flex: 0 0 auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n._col-xs_rsof4_42 {\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n._col-xs-1_rsof4_43 {\n  -ms-flex-preferred-size: 8.333%;\n  flex-basis: 8.333%;\n  max-width: 8.333%;\n}\n\n._col-xs-2_rsof4_44 {\n  -ms-flex-preferred-size: 16.667%;\n  flex-basis: 16.667%;\n  max-width: 16.667%;\n}\n\n._col-xs-3_rsof4_45 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n._col-xs-4_rsof4_46 {\n  -ms-flex-preferred-size: 33.333%;\n  flex-basis: 33.333%;\n  max-width: 33.333%;\n}\n\n._col-xs-5_rsof4_47 {\n  -ms-flex-preferred-size: 41.667%;\n  flex-basis: 41.667%;\n  max-width: 41.667%;\n}\n\n._col-xs-6_rsof4_48 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n._col-xs-7_rsof4_49 {\n  -ms-flex-preferred-size: 58.333%;\n  flex-basis: 58.333%;\n  max-width: 58.333%;\n}\n\n._col-xs-8_rsof4_50 {\n  -ms-flex-preferred-size: 66.667%;\n  flex-basis: 66.667%;\n  max-width: 66.667%;\n}\n\n._col-xs-9_rsof4_51 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n._col-xs-10_rsof4_52 {\n  -ms-flex-preferred-size: 83.333%;\n  flex-basis: 83.333%;\n  max-width: 83.333%;\n}\n\n._col-xs-11_rsof4_53 {\n  -ms-flex-preferred-size: 91.667%;\n  flex-basis: 91.667%;\n  max-width: 91.667%;\n}\n\n._col-xs-12_rsof4_54 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n._col-xs-offset-1_rsof4_145 {\n  margin-left: 8.333%;\n}\n\n._col-xs-offset-2_rsof4_149 {\n  margin-left: 16.667%;\n}\n\n._col-xs-offset-3_rsof4_153 {\n  margin-left: 25%;\n}\n\n._col-xs-offset-4_rsof4_157 {\n  margin-left: 33.333%;\n}\n\n._col-xs-offset-5_rsof4_161 {\n  margin-left: 41.667%;\n}\n\n._col-xs-offset-6_rsof4_165 {\n  margin-left: 50%;\n}\n\n._col-xs-offset-7_rsof4_169 {\n  margin-left: 58.333%;\n}\n\n._col-xs-offset-8_rsof4_173 {\n  margin-left: 66.667%;\n}\n\n._col-xs-offset-9_rsof4_177 {\n  margin-left: 75%;\n}\n\n._col-xs-offset-10_rsof4_181 {\n  margin-left: 83.333%;\n}\n\n._col-xs-offset-11_rsof4_185 {\n  margin-left: 91.667%;\n}\n\n._start-xs_rsof4_189 {\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n._center-xs_rsof4_196 {\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n._end-xs_rsof4_203 {\n  -ms-flex-pack: end;\n  -webkit-box-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n._top-xs_rsof4_210 {\n  -ms-flex-align: start;\n  -webkit-box-align: start;\n  align-items: flex-start;\n}\n\n._middle-xs_rsof4_216 {\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n._bottom-xs_rsof4_222 {\n  -ms-flex-align: end;\n  -webkit-box-align: end;\n  align-items: flex-end;\n}\n\n._around-xs_rsof4_228 {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n._between-xs_rsof4_233 {\n  -ms-flex-pack: justify;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n._first-xs_rsof4_239 {\n  -ms-flex-order: -1;\n  -webkit-box-ordinal-group: 0;\n  order: -1;\n}\n\n._last-xs_rsof4_245 {\n  -ms-flex-order: 1;\n  -webkit-box-ordinal-group: 2;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  ._container_rsof4_3 {\n    width: 46rem;\n  }\n\n  ._col-sm_rsof4_256,\n  ._col-sm-1_rsof4_257,\n  ._col-sm-2_rsof4_258,\n  ._col-sm-3_rsof4_259,\n  ._col-sm-4_rsof4_260,\n  ._col-sm-5_rsof4_261,\n  ._col-sm-6_rsof4_262,\n  ._col-sm-7_rsof4_263,\n  ._col-sm-8_rsof4_264,\n  ._col-sm-9_rsof4_265,\n  ._col-sm-10_rsof4_266,\n  ._col-sm-11_rsof4_267,\n  ._col-sm-12_rsof4_268 {\n    box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  ._col-sm_rsof4_256 {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  ._col-sm-1_rsof4_257 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%;\n  }\n\n  ._col-sm-2_rsof4_258 {\n    -ms-flex-preferred-size: 16.667%;\n    flex-basis: 16.667%;\n    max-width: 16.667%;\n  }\n\n  ._col-sm-3_rsof4_259 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  ._col-sm-4_rsof4_260 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%;\n  }\n\n  ._col-sm-5_rsof4_261 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%;\n  }\n\n  ._col-sm-6_rsof4_262 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  ._col-sm-7_rsof4_263 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%;\n  }\n\n  ._col-sm-8_rsof4_264 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%;\n  }\n\n  ._col-sm-9_rsof4_265 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  ._col-sm-10_rsof4_266 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%;\n  }\n\n  ._col-sm-11_rsof4_267 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%;\n  }\n\n  ._col-sm-12_rsof4_268 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  ._col-sm-offset-1_rsof4_359 {\n    margin-left: 8.333%;\n  }\n\n  ._col-sm-offset-2_rsof4_363 {\n    margin-left: 16.667%;\n  }\n\n  ._col-sm-offset-3_rsof4_367 {\n    margin-left: 25%;\n  }\n\n  ._col-sm-offset-4_rsof4_371 {\n    margin-left: 33.333%;\n  }\n\n  ._col-sm-offset-5_rsof4_375 {\n    margin-left: 41.667%;\n  }\n\n  ._col-sm-offset-6_rsof4_379 {\n    margin-left: 50%;\n  }\n\n  ._col-sm-offset-7_rsof4_383 {\n    margin-left: 58.333%;\n  }\n\n  ._col-sm-offset-8_rsof4_387 {\n    margin-left: 66.667%;\n  }\n\n  ._col-sm-offset-9_rsof4_391 {\n    margin-left: 75%;\n  }\n\n  ._col-sm-offset-10_rsof4_395 {\n    margin-left: 83.333%;\n  }\n\n  ._col-sm-offset-11_rsof4_399 {\n    margin-left: 91.667%;\n  }\n\n  ._start-sm_rsof4_403 {\n    -ms-flex-pack: start;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  ._center-sm_rsof4_410 {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  ._end-sm_rsof4_417 {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  ._top-sm_rsof4_424 {\n    -ms-flex-align: start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  ._middle-sm_rsof4_430 {\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  ._bottom-sm_rsof4_436 {\n    -ms-flex-align: end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  ._around-sm_rsof4_442 {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  ._between-sm_rsof4_447 {\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n  }\n\n  ._first-sm_rsof4_453 {\n    -ms-flex-order: -1;\n    -webkit-box-ordinal-group: 0;\n    order: -1;\n  }\n\n  ._last-sm_rsof4_459 {\n    -ms-flex-order: 1;\n    -webkit-box-ordinal-group: 2;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 62em) {\n  ._container_rsof4_3 {\n    width: 61rem;\n  }\n\n  ._col-md_rsof4_471,\n  ._col-md-1_rsof4_472,\n  ._col-md-2_rsof4_473,\n  ._col-md-3_rsof4_474,\n  ._col-md-4_rsof4_475,\n  ._col-md-5_rsof4_476,\n  ._col-md-6_rsof4_477,\n  ._col-md-7_rsof4_478,\n  ._col-md-8_rsof4_479,\n  ._col-md-9_rsof4_480,\n  ._col-md-10_rsof4_481,\n  ._col-md-11_rsof4_482,\n  ._col-md-12_rsof4_483 {\n    box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  ._col-md_rsof4_471 {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  ._col-md-1_rsof4_472 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%;\n  }\n\n  ._col-md-2_rsof4_473 {\n    -ms-flex-preferred-size: 16.667%;\n    flex-basis: 16.667%;\n    max-width: 16.667%;\n  }\n\n  ._col-md-3_rsof4_474 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  ._col-md-4_rsof4_475 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%;\n  }\n\n  ._col-md-5_rsof4_476 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%;\n  }\n\n  ._col-md-6_rsof4_477 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  ._col-md-7_rsof4_478 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%;\n  }\n\n  ._col-md-8_rsof4_479 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%;\n  }\n\n  ._col-md-9_rsof4_480 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  ._col-md-10_rsof4_481 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%;\n  }\n\n  ._col-md-11_rsof4_482 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%;\n  }\n\n  ._col-md-12_rsof4_483 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  ._col-md-offset-1_rsof4_574 {\n    margin-left: 8.333%;\n  }\n\n  ._col-md-offset-2_rsof4_578 {\n    margin-left: 16.667%;\n  }\n\n  ._col-md-offset-3_rsof4_582 {\n    margin-left: 25%;\n  }\n\n  ._col-md-offset-4_rsof4_586 {\n    margin-left: 33.333%;\n  }\n\n  ._col-md-offset-5_rsof4_590 {\n    margin-left: 41.667%;\n  }\n\n  ._col-md-offset-6_rsof4_594 {\n    margin-left: 50%;\n  }\n\n  ._col-md-offset-7_rsof4_598 {\n    margin-left: 58.333%;\n  }\n\n  ._col-md-offset-8_rsof4_602 {\n    margin-left: 66.667%;\n  }\n\n  ._col-md-offset-9_rsof4_606 {\n    margin-left: 75%;\n  }\n\n  ._col-md-offset-10_rsof4_610 {\n    margin-left: 83.333%;\n  }\n\n  ._col-md-offset-11_rsof4_614 {\n    margin-left: 91.667%;\n  }\n\n  ._start-md_rsof4_618 {\n    -ms-flex-pack: start;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  ._center-md_rsof4_625 {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  ._end-md_rsof4_632 {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  ._top-md_rsof4_639 {\n    -ms-flex-align: start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  ._middle-md_rsof4_645 {\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  ._bottom-md_rsof4_651 {\n    -ms-flex-align: end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  ._around-md_rsof4_657 {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  ._between-md_rsof4_662 {\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n  }\n\n  ._first-md_rsof4_668 {\n    -ms-flex-order: -1;\n    -webkit-box-ordinal-group: 0;\n    order: -1;\n  }\n\n  ._last-md_rsof4_674 {\n    -ms-flex-order: 1;\n    -webkit-box-ordinal-group: 2;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  ._container_rsof4_3 {\n    width: 71rem;\n  }\n\n  ._col-lg_rsof4_686,\n  ._col-lg-1_rsof4_687,\n  ._col-lg-2_rsof4_688,\n  ._col-lg-3_rsof4_689,\n  ._col-lg-4_rsof4_690,\n  ._col-lg-5_rsof4_691,\n  ._col-lg-6_rsof4_692,\n  ._col-lg-7_rsof4_693,\n  ._col-lg-8_rsof4_694,\n  ._col-lg-9_rsof4_695,\n  ._col-lg-10_rsof4_696,\n  ._col-lg-11_rsof4_697,\n  ._col-lg-12_rsof4_698 {\n    box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  ._col-lg_rsof4_686 {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  ._col-lg-1_rsof4_687 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%;\n  }\n\n  ._col-lg-2_rsof4_688 {\n    -ms-flex-preferred-size: 16.667%;\n    flex-basis: 16.667%;\n    max-width: 16.667%;\n  }\n\n  ._col-lg-3_rsof4_689 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  ._col-lg-4_rsof4_690 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%;\n  }\n\n  ._col-lg-5_rsof4_691 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%;\n  }\n\n  ._col-lg-6_rsof4_692 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  ._col-lg-7_rsof4_693 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%;\n  }\n\n  ._col-lg-8_rsof4_694 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%;\n  }\n\n  ._col-lg-9_rsof4_695 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  ._col-lg-10_rsof4_696 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%;\n  }\n\n  ._col-lg-11_rsof4_697 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%;\n  }\n\n  ._col-lg-12_rsof4_698 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  ._col-lg-offset-1_rsof4_789 {\n    margin-left: 8.333%;\n  }\n\n  ._col-lg-offset-2_rsof4_793 {\n    margin-left: 16.667%;\n  }\n\n  ._col-lg-offset-3_rsof4_797 {\n    margin-left: 25%;\n  }\n\n  ._col-lg-offset-4_rsof4_801 {\n    margin-left: 33.333%;\n  }\n\n  ._col-lg-offset-5_rsof4_805 {\n    margin-left: 41.667%;\n  }\n\n  ._col-lg-offset-6_rsof4_809 {\n    margin-left: 50%;\n  }\n\n  ._col-lg-offset-7_rsof4_813 {\n    margin-left: 58.333%;\n  }\n\n  ._col-lg-offset-8_rsof4_817 {\n    margin-left: 66.667%;\n  }\n\n  ._col-lg-offset-9_rsof4_821 {\n    margin-left: 75%;\n  }\n\n  ._col-lg-offset-10_rsof4_825 {\n    margin-left: 83.333%;\n  }\n\n  ._col-lg-offset-11_rsof4_829 {\n    margin-left: 91.667%;\n  }\n\n  ._start-lg_rsof4_833 {\n    -ms-flex-pack: start;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  ._center-lg_rsof4_840 {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  ._end-lg_rsof4_847 {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  ._top-lg_rsof4_854 {\n    -ms-flex-align: start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  ._middle-lg_rsof4_860 {\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  ._bottom-lg_rsof4_866 {\n    -ms-flex-align: end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  ._around-lg_rsof4_872 {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  ._between-lg_rsof4_877 {\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n  }\n\n  ._first-lg_rsof4_883 {\n    -ms-flex-order: -1;\n    -webkit-box-ordinal-group: 0;\n    order: -1;\n  }\n\n  ._last-lg_rsof4_889 {\n    -ms-flex-order: 1;\n    -webkit-box-ordinal-group: 2;\n    order: 1;\n  }\n}",{"container-fluid":"_container-fluid_rsof4_3","row":"_row_rsof4_10","reverse":"_reverse_rsof4_28","col":"_col_rsof4_35","col-xs":"_col-xs_rsof4_42","col-xs-1":"_col-xs-1_rsof4_43","col-xs-2":"_col-xs-2_rsof4_44","col-xs-3":"_col-xs-3_rsof4_45","col-xs-4":"_col-xs-4_rsof4_46","col-xs-5":"_col-xs-5_rsof4_47","col-xs-6":"_col-xs-6_rsof4_48","col-xs-7":"_col-xs-7_rsof4_49","col-xs-8":"_col-xs-8_rsof4_50","col-xs-9":"_col-xs-9_rsof4_51","col-xs-10":"_col-xs-10_rsof4_52","col-xs-11":"_col-xs-11_rsof4_53","col-xs-12":"_col-xs-12_rsof4_54","col-xs-offset-1":"_col-xs-offset-1_rsof4_145","col-xs-offset-2":"_col-xs-offset-2_rsof4_149","col-xs-offset-3":"_col-xs-offset-3_rsof4_153","col-xs-offset-4":"_col-xs-offset-4_rsof4_157","col-xs-offset-5":"_col-xs-offset-5_rsof4_161","col-xs-offset-6":"_col-xs-offset-6_rsof4_165","col-xs-offset-7":"_col-xs-offset-7_rsof4_169","col-xs-offset-8":"_col-xs-offset-8_rsof4_173","col-xs-offset-9":"_col-xs-offset-9_rsof4_177","col-xs-offset-10":"_col-xs-offset-10_rsof4_181","col-xs-offset-11":"_col-xs-offset-11_rsof4_185","start-xs":"_start-xs_rsof4_189","center-xs":"_center-xs_rsof4_196","end-xs":"_end-xs_rsof4_203","top-xs":"_top-xs_rsof4_210","middle-xs":"_middle-xs_rsof4_216","bottom-xs":"_bottom-xs_rsof4_222","around-xs":"_around-xs_rsof4_228","between-xs":"_between-xs_rsof4_233","first-xs":"_first-xs_rsof4_239","last-xs":"_last-xs_rsof4_245","container":"_container_rsof4_3","col-sm":"_col-sm_rsof4_256","col-sm-1":"_col-sm-1_rsof4_257","col-sm-2":"_col-sm-2_rsof4_258","col-sm-3":"_col-sm-3_rsof4_259","col-sm-4":"_col-sm-4_rsof4_260","col-sm-5":"_col-sm-5_rsof4_261","col-sm-6":"_col-sm-6_rsof4_262","col-sm-7":"_col-sm-7_rsof4_263","col-sm-8":"_col-sm-8_rsof4_264","col-sm-9":"_col-sm-9_rsof4_265","col-sm-10":"_col-sm-10_rsof4_266","col-sm-11":"_col-sm-11_rsof4_267","col-sm-12":"_col-sm-12_rsof4_268","col-sm-offset-1":"_col-sm-offset-1_rsof4_359","col-sm-offset-2":"_col-sm-offset-2_rsof4_363","col-sm-offset-3":"_col-sm-offset-3_rsof4_367","col-sm-offset-4":"_col-sm-offset-4_rsof4_371","col-sm-offset-5":"_col-sm-offset-5_rsof4_375","col-sm-offset-6":"_col-sm-offset-6_rsof4_379","col-sm-offset-7":"_col-sm-offset-7_rsof4_383","col-sm-offset-8":"_col-sm-offset-8_rsof4_387","col-sm-offset-9":"_col-sm-offset-9_rsof4_391","col-sm-offset-10":"_col-sm-offset-10_rsof4_395","col-sm-offset-11":"_col-sm-offset-11_rsof4_399","start-sm":"_start-sm_rsof4_403","center-sm":"_center-sm_rsof4_410","end-sm":"_end-sm_rsof4_417","top-sm":"_top-sm_rsof4_424","middle-sm":"_middle-sm_rsof4_430","bottom-sm":"_bottom-sm_rsof4_436","around-sm":"_around-sm_rsof4_442","between-sm":"_between-sm_rsof4_447","first-sm":"_first-sm_rsof4_453","last-sm":"_last-sm_rsof4_459","col-md":"_col-md_rsof4_471","col-md-1":"_col-md-1_rsof4_472","col-md-2":"_col-md-2_rsof4_473","col-md-3":"_col-md-3_rsof4_474","col-md-4":"_col-md-4_rsof4_475","col-md-5":"_col-md-5_rsof4_476","col-md-6":"_col-md-6_rsof4_477","col-md-7":"_col-md-7_rsof4_478","col-md-8":"_col-md-8_rsof4_479","col-md-9":"_col-md-9_rsof4_480","col-md-10":"_col-md-10_rsof4_481","col-md-11":"_col-md-11_rsof4_482","col-md-12":"_col-md-12_rsof4_483","col-md-offset-1":"_col-md-offset-1_rsof4_574","col-md-offset-2":"_col-md-offset-2_rsof4_578","col-md-offset-3":"_col-md-offset-3_rsof4_582","col-md-offset-4":"_col-md-offset-4_rsof4_586","col-md-offset-5":"_col-md-offset-5_rsof4_590","col-md-offset-6":"_col-md-offset-6_rsof4_594","col-md-offset-7":"_col-md-offset-7_rsof4_598","col-md-offset-8":"_col-md-offset-8_rsof4_602","col-md-offset-9":"_col-md-offset-9_rsof4_606","col-md-offset-10":"_col-md-offset-10_rsof4_610","col-md-offset-11":"_col-md-offset-11_rsof4_614","start-md":"_start-md_rsof4_618","center-md":"_center-md_rsof4_625","end-md":"_end-md_rsof4_632","top-md":"_top-md_rsof4_639","middle-md":"_middle-md_rsof4_645","bottom-md":"_bottom-md_rsof4_651","around-md":"_around-md_rsof4_657","between-md":"_between-md_rsof4_662","first-md":"_first-md_rsof4_668","last-md":"_last-md_rsof4_674","col-lg":"_col-lg_rsof4_686","col-lg-1":"_col-lg-1_rsof4_687","col-lg-2":"_col-lg-2_rsof4_688","col-lg-3":"_col-lg-3_rsof4_689","col-lg-4":"_col-lg-4_rsof4_690","col-lg-5":"_col-lg-5_rsof4_691","col-lg-6":"_col-lg-6_rsof4_692","col-lg-7":"_col-lg-7_rsof4_693","col-lg-8":"_col-lg-8_rsof4_694","col-lg-9":"_col-lg-9_rsof4_695","col-lg-10":"_col-lg-10_rsof4_696","col-lg-11":"_col-lg-11_rsof4_697","col-lg-12":"_col-lg-12_rsof4_698","col-lg-offset-1":"_col-lg-offset-1_rsof4_789","col-lg-offset-2":"_col-lg-offset-2_rsof4_793","col-lg-offset-3":"_col-lg-offset-3_rsof4_797","col-lg-offset-4":"_col-lg-offset-4_rsof4_801","col-lg-offset-5":"_col-lg-offset-5_rsof4_805","col-lg-offset-6":"_col-lg-offset-6_rsof4_809","col-lg-offset-7":"_col-lg-offset-7_rsof4_813","col-lg-offset-8":"_col-lg-offset-8_rsof4_817","col-lg-offset-9":"_col-lg-offset-9_rsof4_821","col-lg-offset-10":"_col-lg-offset-10_rsof4_825","col-lg-offset-11":"_col-lg-offset-11_rsof4_829","start-lg":"_start-lg_rsof4_833","center-lg":"_center-lg_rsof4_840","end-lg":"_end-lg_rsof4_847","top-lg":"_top-lg_rsof4_854","middle-lg":"_middle-lg_rsof4_860","bottom-lg":"_bottom-lg_rsof4_866","around-lg":"_around-lg_rsof4_872","between-lg":"_between-lg_rsof4_877","first-lg":"_first-lg_rsof4_883","last-lg":"_last-lg_rsof4_889"});

function getClass(className) {
  return styles && styles[className] ? styles[className] : className;
}

var TagNameType = VuePropTypes.string.def('div');
var ViewportSizeType = VuePropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
var ColumnSizeType = VuePropTypes.oneOfType([VuePropTypes.number, VuePropTypes.bool]);

var Grid = {
  name: 'grid',
  props: {
    tagName: TagNameType,
    fluid: VuePropTypes.bool
  },
  render: function render(createElement) {
    return createElement(this.tagName, {
      attrs: this.$attrs,
      on: this.$listeners,
      class: this.classNames
    }, this.$slots.default);
  },
  computed: {
    classNames: function classNames() {
      return getClass(this.fluid ? 'container-fluid' : 'container');
    }
  }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var Symbol = root.Symbol;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray$1(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString$1.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike$1(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString$1.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

var lodash_pick = pick;

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

var Row = {
  name: 'row',
  props: {
    reverse: VuePropTypes.bool,
    tagName: TagNameType,
    start: ViewportSizeType,
    center: ViewportSizeType,
    end: ViewportSizeType,
    top: ViewportSizeType,
    middle: ViewportSizeType,
    bottom: ViewportSizeType,
    around: ViewportSizeType,
    between: ViewportSizeType
  },
  render: function render(createElement) {
    return createElement(this.tagName, {
      attrs: this.$attrs,
      on: this.$listeners,
      class: this.classNames
    }, this.$slots.default);
  },
  computed: {
    pickedProps: function pickedProps() {
      return lodash_pick(this.$props, rowKeys);
    },
    classNames: function classNames() {
      var classNames = [getClass('row')];

      for (var key in this.pickedProps) {
        var value = this.pickedProps[key];
        if (value) {
          classNames.push(getClass(key + '-' + value));
        }
      }

      if (this.reverse) {
        classNames.push(getClass('reverse'));
      }

      return classNames;
    }
  }
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xl: 'col-xl',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
};

var Column = {
  name: 'column',
  props: {
    tagName: TagNameType,
    xs: ColumnSizeType,
    sm: ColumnSizeType,
    md: ColumnSizeType,
    lg: ColumnSizeType,
    xl: ColumnSizeType,
    xsOffset: VuePropTypes.number,
    smOffset: VuePropTypes.number,
    mdOffset: VuePropTypes.number,
    lgOffset: VuePropTypes.number,
    xlOffset: VuePropTypes.number,
    first: ViewportSizeType,
    last: ViewportSizeType
  },
  render: function render(createElement) {
    return createElement(this.tagName, {
      attrs: this.$attrs,
      on: this.$listeners,
      class: this.classNames
    }, this.$slots.default);
  },
  computed: {
    pickedProps: function pickedProps() {
      return lodash_pick(this.$props, Object.keys(classMap));
    },
    classNames: function classNames() {
      var classNames = [];

      if (this.first) {
        classNames.push(getClass('first-' + this.first));
      }

      if (this.last) {
        classNames.push(getClass('last-' + this.last));
      }

      for (var key in this.pickedProps) {
        var value = this.pickedProps[key];
        if (!!value) {
          classNames.push(getClass(classMap[key] + '-' + value));
        }
      }

      return classNames;
    }
  }
};

var VueGrid = {
  install: function install(Vue) {
    Vue.component(Grid.name, Grid);
    Vue.component(Row.name, Row);
    Vue.component(Column.name, Column);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGrid);
}

exports.Grid = Grid;
exports.Row = Row;
exports.Column = Column;
exports['default'] = VueGrid;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vue-flex-grid.js.map
