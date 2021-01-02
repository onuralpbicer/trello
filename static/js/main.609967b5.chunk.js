(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(0),r=n.n(o),i=n(13),a=n.n(i),l=(n(38),n(53)),s=n(51),d=n(4),u=n(8),j=n(15),b=Object(j.b)({name:"columns",initialState:{columns:[],nextId:0},reducers:{LoadSavedColumns:function(e,t){e.columns=t.payload.columns,e.nextId=t.payload.nextId},AddColumn:function(e,t){e.columns.push({name:t.payload.name,items:[]})},AddEntryToColumn:function(e,t){var n=t.payload,c=n.colIndex,o=n.text;e.columns[c].items.push({text:o,id:e.nextId}),e.nextId++},ClearColumns:function(e){e.columns.length=0},MoveEntry:function(e,t){var n=e.columns,c=t.payload,o=c.item,r=c.sourceCol,i=c.targetCol,a=c.sourceEntryIndex;n[r].items.splice(a,1),n[i].items.push(o.item)}}}),x=b.actions,O=x.LoadSavedColumns,m=x.AddColumn,h=x.AddEntryToColumn,f=x.ClearColumns,p=x.MoveEntry,g=b,v=n(30),C=n(31),y=Object(l.a)(Object(s.a)({outerContainer:{height:"100vh",width:"100vw",position:"absolute",top:0,left:0,backgroundColor:"#000000AA",zIndex:1600,display:"flex",justifyContent:"center",alignItems:"center"},innerContainer:{backgroundColor:"white"}})),I=function(e){var t=e.component,n=e.onClose,o=y();return Object(c.jsx)("div",{className:o.outerContainer,onClick:n,children:Object(c.jsx)("div",{className:o.innerContainer,onClick:function(e){return e.stopPropagation()},children:t})})},w=function(e){var t=e.show,n=e.children,o=Object(C.a)(e,["show","children"]);return t?Object(c.jsx)(I,Object(v.a)({component:n},o)):null},k=function(){var e=Object(d.b)(),t=Object(o.useState)(""),n=Object(u.a)(t,2),r=n[0],i=n[1],a=Object(o.useState)(!1),l=Object(u.a)(a,2),s=l[0],j=l[1],b=function(){r&&(e(m({name:r})),i(""),j(!1))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{show:s,onClose:function(){j(!1),i("")},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"Create New Column"}),Object(c.jsx)("input",{placeholder:"Enter Column Name",value:r,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"!==e.key||e.ctrlKey||e.shiftKey||b()},autoFocus:!0}),Object(c.jsx)("button",{onClick:b,disabled:!r,children:"Add"})]})}),Object(c.jsx)("button",{onClick:function(){return j(!0)},children:"Add Column"})]})},S=n(6),N=Object(S.c)({todo:g.reducer}),E=Object(j.a)({reducer:N});window.onbeforeunload=function(){localStorage.setItem(A,JSON.stringify(E.getState()))};var A="savedState";var D,T=n(54),K=function(e){var t=e.colIndex,n=Object(o.useState)(!1),r=Object(u.a)(n,2),i=r[0],a=r[1],l=Object(o.useState)(""),s=Object(u.a)(l,2),j=s[0],b=s[1],x=Object(d.b)(),O=function(){b(""),a(!1)},m=function(){j&&(x(h({colIndex:t,text:j})),O())};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){return a(!0)},children:"+"}),Object(c.jsx)(w,{show:i,onClose:O,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{placeholder:"message",value:j,onChange:function(e){return b(e.target.value)},onKeyDown:function(e){"Enter"!==e.key||e.ctrlKey||e.shiftKey||m()},autoFocus:!0}),Object(c.jsx)("button",{disabled:!j,onClick:m,children:"Add"})]})})]})};!function(e){e.TodoItem="TodoItem"}(D||(D={}));var L=n(55),J=Object(l.a)(Object(s.a)({container:{marginTop:"8px",border:"1px solid lightgrey",borderRadius:"4px",padding:"4px",backgroundColor:"lightgrey"}})),F=function(e){var t=e.card,n=e.colIndex,o=e.entryIndex,r=J(e),i=Object(L.a)({item:{type:D.TodoItem,item:t,startLocation:{colIndex:n,entryIndex:o}},collect:function(e){return{isDragging:e.isDragging()}}}),a=Object(u.a)(i,2),l=a[0].isDragging,s=a[1];return Object(c.jsx)("div",{ref:s,className:r.container,style:{opacity:l?.5:1},children:t.text})},M=Object(l.a)(Object(s.a)({container:{maxHeight:"500px",width:"300px",marginLeft:"8px",marginRight:"8px",marginBottom:"16px",border:"1px solid gray",borderRadius:"4px"},itemContainer:{display:"flex",flexDirection:"column",padding:"8px"}})),R=function(e){var t,n=e.colIndex,o=M(e),r=(t=n,Object(d.c)((function(e){return e.todo.columns[t]}))),i=r.name,a=r.items,l=Object(d.b)(),s=Object(T.a)({accept:D.TodoItem,collect:function(e){return{isOver:e.isOver()}},drop:function(e){l(p({item:e,sourceCol:e.startLocation.colIndex,sourceEntryIndex:e.startLocation.entryIndex,targetCol:n}))}}),j=Object(u.a)(s,2),b=j[0].isOver,x=j[1];return Object(c.jsxs)("div",{className:o.container,ref:x,style:{backgroundColor:b?"green":"transparent"},children:[Object(c.jsxs)("div",{children:[i,Object(c.jsx)(K,{colIndex:n})]}),Object(c.jsx)("div",{className:o.itemContainer,children:a.map((function(e,t){return Object(c.jsx)(F,{card:e,colIndex:n,entryIndex:t},"".concat(n).concat(t).concat(e.id))}))})]})},B=Object(l.a)(Object(s.a)({pageContainer:{height:"100vh",width:"100vw"},container:{display:"flex",flexDirection:"row",flexWrap:"wrap"}})),z=function(){var e=B(),t=Object(d.c)((function(e){return e.todo.columns.length}));!function(){var e=Object(d.b)();Object(o.useEffect)((function(){var t=JSON.parse(localStorage.getItem(A)||JSON.stringify({columns:[]}));e(O(t.todo))}),[])}();var n=Object(d.b)();return Object(c.jsxs)("div",{className:e.pageContainer,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(k,{}),Object(c.jsx)("button",{onClick:function(){return n(f())},children:"Clear"})]}),Object(c.jsx)("div",{className:e.container,children:Array.from({length:t},(function(e,t){return Object(c.jsx)(R,{colIndex:t},t)}))})]})},H=n(52),P=n(29);a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d.a,{store:E,children:Object(c.jsx)(H.a,{backend:P.a,children:Object(c.jsx)(z,{})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.609967b5.chunk.js.map