(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(3),c=t.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(14);var o=t(4),l=t(5),s=t(7),u=t(6),h=t(8),m=function(e){var n=e.character,t=e.reading,a=e.meaning;return r.a.createElement("div",{className:"bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("div",null,r.a.createElement("h1",null,n),r.a.createElement("p",null,t),r.a.createElement("p",null,a)))},d=function(e){var n=e.kanjiList;return r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(m,{key:t,character:n[t].character,reading:n[t].kunyomi+" "+n[t].onyomi,meaning:n[t].meaning})})))},g=function(e){var n=e.searchChange;return r.a.createElement("div",{className:"pa3"},r.a.createElement("input",{className:"bg-light-yellow pa3 ba b--green ",size:"35",type:"search",placeholder:"Kanji, reading or keyword",onChange:n}))},f=function(e){return console.log(e),r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"800px"}},e.children)},v=(t(2),function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).searchChange=function(n){e.setState({searchField:n.target.value})},e.state={kanjiList:[],searchField:""},e}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/jensechu/kanji/master/data/kanji.json").then((function(e){return e.json()})).then((function(n){return e.setState({kanjiList:n.kanji})}))}},{key:"render",value:function(){var e=this.state,n=e.kanjiList,t=e.searchField,a=n.filter((function(e){return e.kunyomi.includes(t)||e.character.includes(t)||e.meaning.toLowerCase().includes(t)}));return n.length?r.a.createElement("div",{className:"tc "},r.a.createElement("h1",{className:"f1"},"Mikes Kanji Dictionary"),r.a.createElement(g,{searchChange:this.searchChange}),r.a.createElement(f,null,r.a.createElement(d,{kanjiList:a}))):r.a.createElement("h1",null,"LOADING")}}]),n}(a.Component));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},2:function(e,n,t){},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.03892a7f.chunk.js.map