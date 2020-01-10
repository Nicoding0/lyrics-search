(this["webpackJsonpreact-lyrics"]=this["webpackJsonpreact-lyrics"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/31.24d95baa.gif"},23:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(19),l=a.n(n),s=a(8),m=a(6);var o=function(){return r.a.createElement("nav",{style:{backgroundColor:"#5378ace1"},className:"navbar navbar-dark mb-5"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"Lyrics Search"))},i=a(2),u=a(11),b=a.n(u),g=Object(c.createContext)();function h(e){var t=e.children,a=Object(c.useState)({track_list:[],heading:""}),n=Object(i.a)(a,2),l=n[0],s=n[1];return Object(c.useEffect)((function(){var e="".concat("https://cors-anywhere.herokuapp.com/","https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=fr&f_has_lyrics=1&apikey=").concat("9a0a6bc31aa00ec4927862b877b5cb15");!function(){var t,a;b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,b.a.awrap(fetch(e));case 2:return t=c.sent,c.next=5,b.a.awrap(t.json());case 5:a=c.sent,s({track_list:a.message.body.track_list,heading:"Top 20 Tracks"});case 7:case"end":return c.stop()}}))}()}),[]),r.a.createElement(g.Provider,{value:[l,s]},t)}var d=a(20),p=a.n(d);var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:p.a,alt:"Loading...",style:{width:"140px",margin:"150px auto",display:"block"}}))};var f=function(e){var t=e.track;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{style:{backgroundColor:"#5378ace1"},className:"card text-white mb-4 shadow rounded-lg"},r.a.createElement("div",{className:"card-body shadow"},r.a.createElement("h5",null,t.artist_name),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,r.a.createElement("i",{className:"fas fa-play mr-2"})),"Track: ",t.track_name,r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("i",{className:"fas fa-compact-disc mr-2"})),"Album: ",t.album_name),r.a.createElement(s.b,{to:"/lyrics-search/lyrics/track/".concat(t.track_id),className:"btn btn-light btn-block"},r.a.createElement("i",{className:"fas fa-chevron-right"})," View Lyrics"))))};var k=function(){var e=Object(c.useContext)(g),t=Object(i.a)(e,1)[0],a=t.track_list,n=t.heading;return void 0===a||0===a.length?r.a.createElement(E,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-center mb-4"},n),r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(f,{key:e.track.track_id,track:e.track})}))))},y=a(10),v=a.n(y);var _=function(){var e=Object(c.useContext)(g),t=Object(i.a)(e,2),a=(t[0],t[1]),n=Object(c.useState)(""),l=Object(i.a)(n,2),s=l[0],m=l[1],o=Object(c.useState)(),u=Object(i.a)(o,2),b=u[0],h=u[1],d=Object(c.useState)(!1),p=Object(i.a)(d,2),E=p[0],f=p[1],k=Object(c.useState)(""),y=Object(i.a)(k,2),_=y[0],w=y[1],N=Object(c.useState)(""),x=Object(i.a)(N,2),j=x[0],O=x[1];return Object(c.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/music.genres.get&apikey=".concat("9a0a6bc31aa00ec4927862b877b5cb15")).then((function(e){return e.json()})).then((function(e){var t=e.message.body.music_genre_list;t.sort(),h(t),f(!0)}))}),[]),r.a.createElement("div",{style:{backgroundColor:"#5378ace1"},className:"card card-body text-white mb-4 p-4 shadow"},r.a.createElement("h1",{className:"display-4 text-center"},r.a.createElement("i",{className:"fas fa-music"})," Search For A Track"),r.a.createElement("p",{className:"lead text-center"},"Get Lyrics for your song"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t="".concat("https://cors-anywhere.herokuapp.com/","https://api.musixmatch.com/ws/1.1/track.search?q_track=").concat(s,"&f_music_genre_id=").concat(_,"&q_artist=").concat(j,"&f_has_lyrics=1&page_size=20&page=1&s_track_rating=desc&apikey=").concat("9a0a6bc31aa00ec4927862b877b5cb15");fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.message.body.track_list;a({track_list:t,heading:"Search Results"}),m("")})).catch((function(e){return console.log("Something went wrong: ".concat(e))}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Track Title...",name:"userQuery",value:s,onChange:function(e){m(e.target.value)}})),r.a.createElement("button",{type:"button","data-target":"#moreFilters",className:"btn btn-light mb-3 btn-sm font-weight-bold","data-toggle":"collapse","aria-expanded":"false","aria-controls":"moreFilters"},"More..."),r.a.createElement("div",{className:"collapse",id:"moreFilters"},r.a.createElement("div",{className:"form-group bg-dark d-inline"},r.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Artist Name...",onChange:function(e){O(e.target.value)}}),r.a.createElement("select",{onChange:function(e){w(e.target.value)},className:"custom-select mb-3"},r.a.createElement("option",{defaultValue:!0},"Genre..."),!0!==E?b=[1,2,3]:b.sort().map((function(e){return r.a.createElement("option",{className:"font-weight-bold",value:e.music_genre.music_genre_id,key:v.a.v4()},e.music_genre.music_genre_name_extended)}))))),r.a.createElement("button",{className:"btn btn-light btn-lg btn-block mb-5 font-weight-bold",type:"submit"},"Search For Lyrics")))};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(k,null))};var N=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),l=n[0],m=n[1],o=Object(c.useState)({}),u=Object(i.a)(o,2),b=u[0],g=u[1],h=Object(c.useState)({}),d=Object(i.a)(h,2),p=d[0],f=d[1];Object(c.useEffect)((function(){var e="https://cors-anywhere.herokuapp.com/",a="".concat(e,"https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=").concat(t.params.id,"&apikey=").concat("9a0a6bc31aa00ec4927862b877b5cb15");fetch(a).then((function(e){return e.json()})).then((function(a){var c=a.message.body.lyrics;return m({lyrics:c}),fetch("".concat(e,"https://api.musixmatch.com/ws/1.1/track.get?track_id=").concat(t.params.id,"&apikey=").concat("9a0a6bc31aa00ec4927862b877b5cb15"))})).then((function(e){return e.json()})).then((function(t){var a=t.message.body.track;g({track:a});var c=t.message.body.track.album_id;return fetch("".concat(e,"https://api.musixmatch.com/ws/1.1/album.get?album_id=").concat(c,"&apikey=").concat("9a0a6bc31aa00ec4927862b877b5cb15"))})).then((function(e){return e.json()})).then((function(e){var t=e.message.body.album;f({album:t})})).catch((function(e){return console.log("Something went wrong: ".concat(e))}))}),[t]);var k={color:"#adb3b8"},y={backgroundColor:"#5378ace1"};return void 0===l||void 0===b||0===Object.keys(l).length||0===Object.keys(b).length||0===Object.keys(p).length?r.a.createElement(E,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/lyrics-search/",style:y,className:"btn btn-sm mb-4 text-white font-weight-bold"},"Go Back"),r.a.createElement("div",{className:"card shadow"},r.a.createElement("h5",{style:y,className:"card-header text-center text-white shadow"},r.a.createElement("span",{style:k}," ",b.track.track_name)," by"," ",r.a.createElement("span",{style:k},b.track.artist_name)),r.a.createElement("div",{className:"card-body bg-light"},r.a.createElement("p",{className:"card-text text-center"},l.lyrics.lyrics_body.split(/(\r\n|\n|\r)/gm).map((function(e){return r.a.createElement(r.a.Fragment,{key:v.a.v4()},e,r.a.createElement("br",null))}))))),r.a.createElement("ul",{className:"list-group mt-4 shadow"},r.a.createElement("li",{className:"list-group-item bg-light"},r.a.createElement("strong",null,"Rating"),": ",b.track.track_rating,"/100"),r.a.createElement("li",{className:"list-group-item bg-light shadow-sm"},r.a.createElement("strong",null,"Album"),": ",b.track.album_name),0===b.track.primary_genres.music_genre_list.length?r.a.createElement("li",{className:"list-group-item bg-light shadow-sm"},r.a.createElement("strong",null,"Genre"),": N/A"):r.a.createElement("li",{className:"list-group-item bg-light shadow-sm"},r.a.createElement("strong",null,"Genre"),":"," ",b.track.primary_genres.music_genre_list[0].music_genre.music_genre_name),r.a.createElement("li",{className:"list-group-item bg-light shadow-sm"},r.a.createElement("strong",null,"Explicit"),":"," ",0===b.track.explicit?"No":"Yes"),r.a.createElement("li",{className:"list-group-item bg-light shadow-sm"},r.a.createElement("strong",null,"Likes"),": ",b.track.num_favourite),r.a.createElement("li",{className:"list-group-item bg-light shadow-sm"},r.a.createElement("strong",null,"Release Date"),": ",p.album.album_release_date),r.a.createElement("li",{className:"list-group-item bg-light shadow-sm"},r.a.createElement("strong",null,"Full Lyrics"),":"," ",r.a.createElement("a",{className:"text-dark",href:b.track.track_share_url,target:"_blank",rel:"noopener noreferrer"},"Click Me"))),r.a.createElement("ul",{className:"list-group mt-5 shadow"},r.a.createElement("li",{className:"list-group-item bg-light shadow-sm text-center"},p.album.album_copyright)),r.a.createElement("footer",{style:y,className:"navbar navbar-dark mt-5 fixed-bottom text-white small mx-auto"},r.a.createElement("small",{className:"mx-auto"},l.lyrics.lyrics_copyright)))};a(36);var x=function(){return r.a.createElement(h,null,r.a.createElement(s.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/lyrics-search/",component:w}),r.a.createElement(m.a,{path:"/lyrics/track/:id",component:N}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4c836b35.chunk.js.map