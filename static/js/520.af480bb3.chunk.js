(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[520],{872:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="import Color exposing (..)\nimport Graphics.Collage exposing (..)\nimport Graphics.Element exposing (..)\nimport Time exposing (..)\n\nmain =\n  Signal.map clock (every second)\n\nclock t =\n  collage 400 400\n    [ filled    lightGrey   (ngon 12 110)\n    , outlined (solid grey) (ngon 12 110)\n    , hand orange   100  t\n    , hand charcoal 100 (t/60)\n    , hand charcoal 60  (t/720)\n    ]\n\nhand clr len time =\n  let angle = degrees (90 - 6 * inSeconds time)\n  in\n      segment (0,0) (fromPolar (len,angle))\n        |> traced (solid clr)\n\n"}}]);
//# sourceMappingURL=520.af480bb3.chunk.js.map