(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[606],{958:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]\n// Project: [~THE PROJECT NAME~]\n// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>\n\n/*~ This is the module template file for function modules.\n *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.\n *~ For example, if you were writing a file for \"super-greeter\", this\n *~ file should be 'super-greeter/index.d.ts'\n */\n\n/*~ Note that ES6 modules cannot directly export callable functions.\n *~ This file should be imported using the CommonJS-style:\n *~   import x = require('someLibrary');\n *~\n *~ Refer to the documentation to understand common\n *~ workarounds for this limitation of ES6 modules.\n */\n\n/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when\n *~ loaded outside a module loader environment, declare that global here.\n *~ Otherwise, delete this declaration.\n */\nexport as namespace myFuncLib;\n\n/*~ This declaration specifies that the function\n *~ is the exported object from the file\n */\nexport = MyFunction;\n\n/*~ This example shows how to have multiple overloads for your function */\ndeclare function MyFunction(name: string): MyFunction.NamedReturnType;\ndeclare function MyFunction(length: number): MyFunction.LengthReturnType;\n\n/*~ If you want to expose types from your module as well, you can\n *~ place them in this block. Often you will want to describe the\n *~ shape of the return type of the function; that type should\n *~ be declared in here, as this example shows.\n */\ndeclare namespace MyFunction {\n    export interface LengthReturnType {\n        width: number;\n        height: number;\n    }\n    export interface NamedReturnType {\n        firstName: string;\n        lastName: string;\n    }\n\n    /*~ If the module also has properties, declare them here. For example,\n     *~ this declaration says that this code is legal:\n     *~   import f = require('myFuncLibrary');\n     *~   console.log(f.defaultName);\n     */\n    export const defaultName: string;\n    export let defaultLength: number;\n}\n"}}]);
//# sourceMappingURL=606.9e12d948.chunk.js.map