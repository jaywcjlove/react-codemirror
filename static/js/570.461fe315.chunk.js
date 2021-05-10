(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[570],{922:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;s.default="doctype html\n  html\n    head\n      title= \"Pug Templating CodeMirror Mode Example\"\n      link(rel='stylesheet', href='/css/bootstrap.min.css')\n      link(rel='stylesheet', href='/css/index.css')\n      script(type='text/javascript', src='/js/jquery-1.9.1.min.js')\n      script(type='text/javascript', src='/js/bootstrap.min.js')\n    body\n      div.header\n        h1 Welcome to this Example\n      div.spots\n        if locals.spots\n          each spot in spots\n            div.spot.well\n         div\n           if spot.logo\n             img.img-rounded.logo(src=spot.logo)\n           else\n             img.img-rounded.logo(src=\"img/placeholder.png\")\n         h3\n           a(href=spot.hash) ##{spot.hash}\n           if spot.title\n             span.title #{spot.title}\n           if spot.desc\n             div #{spot.desc}\n        else\n          h3 There are no spots currently available.\n\n"}}]);
//# sourceMappingURL=570.461fe315.chunk.js.map