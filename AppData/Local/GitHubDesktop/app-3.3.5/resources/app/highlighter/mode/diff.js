(self.webpackChunk=self.webpackChunk||[]).push([["mode/diff"],{81:(e,n,i)=>{!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(n){var i=n.string.search(/[\t ]+?$/);if(!n.sol()||0===i)return n.skipToEnd(),("error "+(e[n.string.charAt(0)]||"")).replace(/ $/,"");var r=e[n.peek()]||n.skipToEnd();return-1===i?n.skipToEnd():n.pos=i,r}}})),e.defineMIME("text/x-diff","diff")}(i(7750))}}]);
//# sourceMappingURL=diff.js.map