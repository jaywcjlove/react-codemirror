(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[505],{857:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="# CoffeeScript mode for CodeMirror\n# Copyright (c) 2011 Jeff Pickhardt, released under\n# the MIT License.\n#\n# Modified from the Python CodeMirror mode, which also is \n# under the MIT License Copyright (c) 2010 Timothy Farrell.\n#\n# The following script, Underscore.coffee, is used to \n# demonstrate CoffeeScript mode for CodeMirror.\n#\n# To download CoffeeScript mode for CodeMirror, go to:\n# https://github.com/pickhardt/coffeescript-codemirror-mode\n\n# **Underscore.coffee\n# (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.**\n# Underscore is freely distributable under the terms of the\n# [MIT license](http://en.wikipedia.org/wiki/MIT_License).\n# Portions of Underscore are inspired by or borrowed from\n# [Prototype.js](http://prototypejs.org/api), Oliver Steele's\n# [Functional](http://osteele.com), and John Resig's\n# [Micro-Templating](http://ejohn.org).\n# For all details and documentation:\n# http://documentcloud.github.com/underscore/\n\n\n# Baseline setup\n# --------------\n\n# Establish the root object, `window` in the browser, or `global` on the server.\nroot = this\n\n\n# Save the previous value of the `_` variable.\npreviousUnderscore = root._\n\n### Multiline\n    comment\n###\n\n# Establish the object that gets thrown to break out of a loop iteration.\n# `StopIteration` is SOP on Mozilla.\nbreaker = if typeof(StopIteration) is 'undefined' then '__break__' else StopIteration\n\n\n#### Docco style single line comment (title)\n\n\n# Helper function to escape **RegExp** contents, because JS doesn't have one.\nescapeRegExp = (string) -> string.replace(/([.*+?^${}()|[\\]\\/\\])/g, '\\$1')\n\n\n# Save bytes in the minified (but not gzipped) version:\nArrayProto = Array.prototype\nObjProto = Object.prototype\n\n\n# Create quick reference variables for speed access to core prototypes.\nslice = ArrayProto.slice\nunshift = ArrayProto.unshift\ntoString = ObjProto.toString\nhasOwnProperty = ObjProto.hasOwnProperty\npropertyIsEnumerable = ObjProto.propertyIsEnumerable\n\n\n# All **ECMA5** native implementations we hope to use are declared here.\nnativeForEach = ArrayProto.forEach\nnativeMap = ArrayProto.map\nnativeReduce = ArrayProto.reduce\nnativeReduceRight = ArrayProto.reduceRight\nnativeFilter = ArrayProto.filter\nnativeEvery = ArrayProto.every\nnativeSome = ArrayProto.some\nnativeIndexOf = ArrayProto.indexOf\nnativeLastIndexOf = ArrayProto.lastIndexOf\nnativeIsArray = Array.isArray\nnativeKeys = Object.keys\n\n\n# Create a safe reference to the Underscore object for use below.\n_ = (obj) -> new wrapper(obj)\n\n\n# Export the Underscore object for **CommonJS**.\nif typeof(exports) != 'undefined' then exports._ = _\n\n\n# Export Underscore to global scope.\nroot._ = _\n\n\n# Current version.\n_.VERSION = '1.1.0'\n\n\n# Collection Functions\n# --------------------\n\n# The cornerstone, an **each** implementation.\n# Handles objects implementing **forEach**, arrays, and raw objects.\n_.each = (obj, iterator, context) ->\n  try\n    if nativeForEach and obj.forEach is nativeForEach\n      obj.forEach iterator, context\n    else if _.isNumber obj.length\n      iterator.call context, obj[i], i, obj for i in [0...obj.length]\n    else\n      iterator.call context, val, key, obj for own key, val of obj\n  catch e\n    throw e if e isnt breaker\n  obj\n\n\n# Return the results of applying the iterator to each element. Use JavaScript\n# 1.6's version of **map**, if possible.\n_.map = (obj, iterator, context) ->\n  return obj.map(iterator, context) if nativeMap and obj.map is nativeMap\n  results = []\n  _.each obj, (value, index, list) ->\n    results.push iterator.call context, value, index, list\n  results\n\n\n# **Reduce** builds up a single result from a list of values. Also known as\n# **inject**, or **foldl**. Uses JavaScript 1.8's version of **reduce**, if possible.\n_.reduce = (obj, iterator, memo, context) ->\n  if nativeReduce and obj.reduce is nativeReduce\n    iterator = _.bind iterator, context if context\n    return obj.reduce iterator, memo\n  _.each obj, (value, index, list) ->\n    memo = iterator.call context, memo, value, index, list\n  memo\n\n\n# The right-associative version of **reduce**, also known as **foldr**. Uses\n# JavaScript 1.8's version of **reduceRight**, if available.\n_.reduceRight = (obj, iterator, memo, context) ->\n  if nativeReduceRight and obj.reduceRight is nativeReduceRight\n    iterator = _.bind iterator, context if context\n    return obj.reduceRight iterator, memo\n  reversed = _.clone(_.toArray(obj)).reverse()\n  _.reduce reversed, iterator, memo, context\n\n\n# Return the first value which passes a truth test.\n_.detect = (obj, iterator, context) ->\n  result = null\n  _.each obj, (value, index, list) ->\n    if iterator.call context, value, index, list\n      result = value\n      _.breakLoop()\n  result\n\n\n# Return all the elements that pass a truth test. Use JavaScript 1.6's\n# **filter**, if it exists.\n_.filter = (obj, iterator, context) ->\n  return obj.filter iterator, context if nativeFilter and obj.filter is nativeFilter\n  results = []\n  _.each obj, (value, index, list) ->\n    results.push value if iterator.call context, value, index, list\n  results\n\n\n# Return all the elements for which a truth test fails.\n_.reject = (obj, iterator, context) ->\n  results = []\n  _.each obj, (value, index, list) ->\n    results.push value if not iterator.call context, value, index, list\n  results\n\n\n# Determine whether all of the elements match a truth test. Delegate to\n# JavaScript 1.6's **every**, if it is present.\n_.every = (obj, iterator, context) ->\n  iterator ||= _.identity\n  return obj.every iterator, context if nativeEvery and obj.every is nativeEvery\n  result = true\n  _.each obj, (value, index, list) ->\n    _.breakLoop() unless (result = result and iterator.call(context, value, index, list))\n  result\n\n\n# Determine if at least one element in the object matches a truth test. Use\n# JavaScript 1.6's **some**, if it exists.\n_.some = (obj, iterator, context) ->\n  iterator ||= _.identity\n  return obj.some iterator, context if nativeSome and obj.some is nativeSome\n  result = false\n  _.each obj, (value, index, list) ->\n    _.breakLoop() if (result = iterator.call(context, value, index, list))\n  result\n\n\n# Determine if a given value is included in the array or object,\n# based on `=== `.\n_.include = (obj, target) ->\n  return _.indexOf(obj, target) isnt -1 if nativeIndexOf and obj.indexOf is nativeIndexOf\n  return true for own key, val of obj when val is target\n  false\n\n\n# Invoke a method with arguments on every item in a collection.\n_.invoke = (obj, method) ->\n  args = _.rest arguments, 2\n  (if method then val[method] else val).apply(val, args) for val in obj\n\n\n# Convenience version of a common use case of **map**: fetching a property.\n_.pluck = (obj, key) ->\n  _.map(obj, (val) -> val[key])\n\n\n# Return the maximum item or (item-based computation).\n_.max = (obj, iterator, context) ->\n  return Math.max.apply(Math, obj) if not iterator and _.isArray(obj)\n  result = computed: -Infinity\n  _.each obj, (value, index, list) ->\n    computed = if iterator then iterator.call(context, value, index, list) else value\n    computed >= result.computed and (result = {value: value, computed: computed})\n  result.value\n\n\n# Return the minimum element (or element-based computation).\n_.min = (obj, iterator, context) ->\n  return Math.min.apply(Math, obj) if not iterator and _.isArray(obj)\n  result = computed: Infinity\n  _.each obj, (value, index, list) ->\n    computed = if iterator then iterator.call(context, value, index, list) else value\n    computed < result.computed and (result = {value: value, computed: computed})\n  result.value\n\n\n# Sort the object's values by a criterion produced by an iterator.\n_.sortBy = (obj, iterator, context) ->\n  _.pluck(((_.map obj, (value, index, list) ->\n    {value: value, criteria: iterator.call(context, value, index, list)}\n  ).sort((left, right) ->\n    a = left.criteria; b = right.criteria\n    if a < b then -1 else if a > b then 1 else 0\n  )), 'value')\n\n\n# Use a comparator function to figure out at what index an object should\n# be inserted so as to maintain order. Uses binary search.\n_.sortedIndex = (array, obj, iterator) ->\n  iterator ||= _.identity\n  low = 0\n  high = array.length\n  while low < high\n    mid = (low + high) >> 1\n    if iterator(array[mid]) < iterator(obj) then low = mid + 1 else high = mid\n  low\n\n\n# Convert anything iterable into a real, live array.\n_.toArray = (iterable) ->\n  return [] if (!iterable)\n  return iterable.toArray() if (iterable.toArray)\n  return iterable if (_.isArray(iterable))\n  return slice.call(iterable) if (_.isArguments(iterable))\n  _.values(iterable)\n\n\n# Return the number of elements in an object.\n_.size = (obj) -> _.toArray(obj).length\n\n\n# Array Functions\n# ---------------\n\n# Get the first element of an array. Passing `n` will return the first N\n# values in the array. Aliased as **head**. The `guard` check allows it to work\n# with **map**.\n_.first = (array, n, guard) ->\n  if n and not guard then slice.call(array, 0, n) else array[0]\n\n\n# Returns everything but the first entry of the array. Aliased as **tail**.\n# Especially useful on the arguments object. Passing an `index` will return\n# the rest of the values in the array from that index onward. The `guard`\n# check allows it to work with **map**.\n_.rest = (array, index, guard) ->\n  slice.call(array, if _.isUndefined(index) or guard then 1 else index)\n\n\n# Get the last element of an array.\n_.last = (array) -> array[array.length - 1]\n\n\n# Trim out all falsy values from an array.\n_.compact = (array) -> item for item in array when item\n\n\n# Return a completely flattened version of an array.\n_.flatten = (array) ->\n  _.reduce array, (memo, value) ->\n    return memo.concat(_.flatten(value)) if _.isArray value\n    memo.push value\n    memo\n  , []\n\n\n# Return a version of the array that does not contain the specified value(s).\n_.without = (array) ->\n  values = _.rest arguments\n  val for val in _.toArray(array) when not _.include values, val\n\n\n# Produce a duplicate-free version of the array. If the array has already\n# been sorted, you have the option of using a faster algorithm.\n_.uniq = (array, isSorted) ->\n  memo = []\n  for el, i in _.toArray array\n    memo.push el if i is 0 || (if isSorted is true then _.last(memo) isnt el else not _.include(memo, el))\n  memo\n\n\n# Produce an array that contains every item shared between all the\n# passed-in arrays.\n_.intersect = (array) ->\n  rest = _.rest arguments\n  _.select _.uniq(array), (item) ->\n    _.all rest, (other) ->\n      _.indexOf(other, item) >= 0\n\n\n# Zip together multiple lists into a single array -- elements that share\n# an index go together.\n_.zip = ->\n  length = _.max _.pluck arguments, 'length'\n  results = new Array length\n  for i in [0...length]\n    results[i] = _.pluck arguments, String i\n  results\n\n\n# If the browser doesn't supply us with **indexOf** (I'm looking at you, MSIE),\n# we need this function. Return the position of the first occurrence of an\n# item in an array, or -1 if the item is not included in the array.\n_.indexOf = (array, item) ->\n  return array.indexOf item if nativeIndexOf and array.indexOf is nativeIndexOf\n  i = 0; l = array.length\n  while l - i\n    if array[i] is item then return i else i++\n  -1\n\n\n# Provide JavaScript 1.6's **lastIndexOf**, delegating to the native function,\n# if possible.\n_.lastIndexOf = (array, item) ->\n  return array.lastIndexOf(item) if nativeLastIndexOf and array.lastIndexOf is nativeLastIndexOf\n  i = array.length\n  while i\n    if array[i] is item then return i else i--\n  -1\n\n\n# Generate an integer Array containing an arithmetic progression. A port of\n# [the native Python **range** function](http://docs.python.org/library/functions.html#range).\n_.range = (start, stop, step) ->\n  a = arguments\n  solo = a.length <= 1\n  i = start = if solo then 0 else a[0]\n  stop = if solo then a[0] else a[1]\n  step = a[2] or 1\n  len = Math.ceil((stop - start) / step)\n  return [] if len <= 0\n  range = new Array len\n  idx = 0\n  loop\n    return range if (if step > 0 then i - stop else stop - i) >= 0\n    range[idx] = i\n    idx++\n    i+= step\n\n\n# Function Functions\n# ------------------\n\n# Create a function bound to a given object (assigning `this`, and arguments,\n# optionally). Binding with arguments is also known as **curry**.\n_.bind = (func, obj) ->\n  args = _.rest arguments, 2\n  -> func.apply obj or root, args.concat arguments\n\n\n# Bind all of an object's methods to that object. Useful for ensuring that\n# all callbacks defined on an object belong to it.\n_.bindAll = (obj) ->\n  funcs = if arguments.length > 1 then _.rest(arguments) else _.functions(obj)\n  _.each funcs, (f) -> obj[f] = _.bind obj[f], obj\n  obj\n\n\n# Delays a function for the given number of milliseconds, and then calls\n# it with the arguments supplied.\n_.delay = (func, wait) ->\n  args = _.rest arguments, 2\n  setTimeout((-> func.apply(func, args)), wait)\n\n\n# Memoize an expensive function by storing its results.\n_.memoize = (func, hasher) ->\n  memo = {}\n  hasher or= _.identity\n  ->\n    key = hasher.apply this, arguments\n    return memo[key] if key of memo\n    memo[key] = func.apply this, arguments\n\n\n# Defers a function, scheduling it to run after the current call stack has\n# cleared.\n_.defer = (func) ->\n  _.delay.apply _, [func, 1].concat _.rest arguments\n\n\n# Returns the first function passed as an argument to the second,\n# allowing you to adjust arguments, run code before and after, and\n# conditionally execute the original function.\n_.wrap = (func, wrapper) ->\n  -> wrapper.apply wrapper, [func].concat arguments\n\n\n# Returns a function that is the composition of a list of functions, each\n# consuming the return value of the function that follows.\n_.compose = ->\n  funcs = arguments\n  ->\n    args = arguments\n    for i in [funcs.length - 1..0] by -1\n      args = [funcs[i].apply(this, args)]\n    args[0]\n\n\n# Object Functions\n# ----------------\n\n# Retrieve the names of an object's properties.\n_.keys = nativeKeys or (obj) ->\n  return _.range 0, obj.length if _.isArray(obj)\n  key for key, val of obj\n\n\n# Retrieve the values of an object's properties.\n_.values = (obj) ->\n  _.map obj, _.identity\n\n\n# Return a sorted list of the function names available in Underscore.\n_.functions = (obj) ->\n  _.filter(_.keys(obj), (key) -> _.isFunction(obj[key])).sort()\n\n\n# Extend a given object with all of the properties in a source object.\n_.extend = (obj) ->\n  for source in _.rest(arguments)\n    obj[key] = val for key, val of source\n  obj\n\n\n# Create a (shallow-cloned) duplicate of an object.\n_.clone = (obj) ->\n  return obj.slice 0 if _.isArray obj\n  _.extend {}, obj\n\n\n# Invokes interceptor with the obj, and then returns obj.\n# The primary purpose of this method is to \"tap into\" a method chain,\n# in order to perform operations on intermediate results within\n the chain.\n_.tap = (obj, interceptor) ->\n  interceptor obj\n  obj\n\n\n# Perform a deep comparison to check if two objects are equal.\n_.isEqual = (a, b) ->\n  # Check object identity.\n  return true if a is b\n  # Different types?\n  atype = typeof(a); btype = typeof(b)\n  return false if atype isnt btype\n  # Basic equality test (watch out for coercions).\n  return true if `a == b`\n  # One is falsy and the other truthy.\n  return false if (!a and b) or (a and !b)\n  # One of them implements an `isEqual()`?\n  return a.isEqual(b) if a.isEqual\n  # Check dates' integer values.\n  return a.getTime() is b.getTime() if _.isDate(a) and _.isDate(b)\n  # Both are NaN?\n  return false if _.isNaN(a) and _.isNaN(b)\n  # Compare regular expressions.\n  if _.isRegExp(a) and _.isRegExp(b)\n    return a.source is b.source and\n           a.global is b.global and\n           a.ignoreCase is b.ignoreCase and\n           a.multiline is b.multiline\n  # If a is not an object by this point, we can't handle it.\n  return false if atype isnt 'object'\n  # Check for different array lengths before comparing contents.\n  return false if a.length and (a.length isnt b.length)\n  # Nothing else worked, deep compare the contents.\n  aKeys = _.keys(a); bKeys = _.keys(b)\n  # Different object sizes?\n  return false if aKeys.length isnt bKeys.length\n  # Recursive comparison of contents.\n  return false for key, val of a when !(key of b) or !_.isEqual(val, b[key])\n  true\n\n\n# Is a given array or object empty?\n_.isEmpty = (obj) ->\n  return obj.length is 0 if _.isArray(obj) or _.isString(obj)\n  return false for own key of obj\n  true\n\n\n# Is a given value a DOM element?\n_.isElement = (obj) -> obj and obj.nodeType is 1\n\n\n# Is a given value an array?\n_.isArray = nativeIsArray or (obj) -> !!(obj and obj.concat and obj.unshift and not obj.callee)\n\n\n# Is a given variable an arguments object?\n_.isArguments = (obj) -> obj and obj.callee\n\n\n# Is the given value a function?\n_.isFunction = (obj) -> !!(obj and obj.constructor and obj.call and obj.apply)\n\n\n# Is the given value a string?\n_.isString = (obj) -> !!(obj is '' or (obj and obj.charCodeAt and obj.substr))\n\n\n# Is a given value a number?\n_.isNumber = (obj) -> (obj is +obj) or toString.call(obj) is '[object Number]'\n\n\n# Is a given value a boolean?\n_.isBoolean = (obj) -> obj is true or obj is false\n\n\n# Is a given value a Date?\n_.isDate = (obj) -> !!(obj and obj.getTimezoneOffset and obj.setUTCFullYear)\n\n\n# Is the given value a regular expression?\n_.isRegExp = (obj) -> !!(obj and obj.exec and (obj.ignoreCase or obj.ignoreCase is false))\n\n\n# Is the given value NaN -- this one is interesting. `NaN != NaN`, and\n# `isNaN(undefined) == tru`, so we make sure it's a number first.\n_.isNaN = (obj) -> _.isNumber(obj) and window.isNaN(obj)\n\n\n# Is a given value equal to null?\n_.isNull = (obj) -> obj is null\n\n\n# Is a given variable undefined?\n_.isUndefined = (obj) -> typeof obj is 'undefined'\n\n\n# Utility Functions\n# -----------------\n\n# Run Underscore.js in noConflict mode, returning the `_` variable to its\n# previous owner. Returns a reference to the Underscore object.\n_.noConflict = ->\n  root._ = previousUnderscore\n  this\n\n\n# Keep the identity function around for default iterators.\n_.identity = (value) -> value\n\n\n# Run a function `n` times.\n_.times = (n, iterator, context) ->\n  iterator.call context, i for i in [0...n]\n\n\n# Break out of the middle of an iteration.\n_.breakLoop = -> throw breaker\n\n\n# Add your own custom functions to the Underscore object, ensuring that\n# they're correctly added to the OOP wrapper as well.\n_.mixin = (obj) ->\n  for name in _.functions(obj)\n    addToWrapper name, _[name] = obj[name]\n\n\n# Generate a unique integer id (unique within the entire client session).\n# Useful for temporary DOM ids.\nidCounter = 0\n_.uniqueId = (prefix) ->\n  (prefix or '') + idCounter++\n\n\n# By default, Underscore uses **ERB**-style template delimiters, change the\n# following template settings to use alternative delimiters.\n_.templateSettings = {\n  start: '<%'\n  end: '%>'\n  interpolate: /<%=(.+?)%>/g\n}\n\n\n# JavaScript templating a-la **ERB**, pilfered from John Resig's\n# *Secrets of the JavaScript Ninja*, page 83.\n# Single-quote fix from Rick Strahl.\n# With alterations for arbitrary delimiters, and to preserve whitespace.\n_.template = (str, data) ->\n  c = _.templateSettings\n  endMatch = new RegExp(\"'(?=[^\"+c.end.substr(0, 1)+\"]*\"+escapeRegExp(c.end)+\")\",\"g\")\n  fn = new Function 'obj',\n    'var p=[],print=function(){p.push.apply(p,arguments);};' +\n    'with(obj||{}){p.push(\\'' +\n    str.replace(/\r/g, '\\r')\n       .replace(/\n/g, '\\n')\n       .replace(/\t/g, '\\t')\n       .replace(endMatch,\"\ufffd\ufffd\ufffd\")\n       .split(\"'\").join(\"\\'\")\n       .split(\"\ufffd\ufffd\ufffd\").join(\"'\")\n       .replace(c.interpolate, \"',$1,'\")\n       .split(c.start).join(\"');\")\n       .split(c.end).join(\"p.push('\") +\n       \"');}return p.join('');\"\n  if data then fn(data) else fn\n\n\n# Aliases\n# -------\n\n_.forEach = _.each\n_.foldl = _.inject = _.reduce\n_.foldr = _.reduceRight\n_.select = _.filter\n_.all = _.every\n_.any = _.some\n_.contains = _.include\n_.head = _.first\n_.tail = _.rest\n_.methods = _.functions\n\n\n# Setup the OOP Wrapper\n# ---------------------\n\n# If Underscore is called as a function, it returns a wrapped object that\n# can be used OO-style. This wrapper holds altered versions of all the\n# underscore functions. Wrapped objects may be chained.\nwrapper = (obj) ->\n  this._wrapped = obj\n  this\n\n\n# Helper function to continue chaining intermediate results.\nresult = (obj, chain) ->\n  if chain then _(obj).chain() else obj\n\n\n# A method to easily add functions to the OOP wrapper.\naddToWrapper = (name, func) ->\n  wrapper.prototype[name] = ->\n    args = _.toArray arguments\n    unshift.call args, this._wrapped\n    result func.apply(_, args), this._chain\n\n\n# Add all ofthe Underscore functions to the wrapper object.\n_.mixin _\n\n\n# Add all mutator Array functions to the wrapper.\n_.each ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], (name) ->\n  method = Array.prototype[name]\n  wrapper.prototype[name] = ->\n    method.apply(this._wrapped, arguments)\n    result(this._wrapped, this._chain)\n\n\n# Add all accessor Array functions to the wrapper.\n_.each ['concat', 'join', 'slice'], (name) ->\n  method = Array.prototype[name]\n  wrapper.prototype[name] = ->\n    result(method.apply(this._wrapped, arguments), this._chain)\n\n\n# Start chaining a wrapped Underscore object.\nwrapper::chain = ->\n  this._chain = true\n  this\n\n\n# Extracts the result from a wrapped and chained object.\nwrapper::value = -> this._wrapped\n\n"}}]);
//# sourceMappingURL=505.c750e9f7.chunk.js.map