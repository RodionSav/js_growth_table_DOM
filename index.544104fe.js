var e=document.querySelector(".field"),n=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),t=document.querySelector(".remove-column"),l=e.rows.length,c=e.rows[0].cells.length,d=function(){n.disabled=l>=10,o.disabled=c>=10,r.disabled=l<=2,t.disabled=c<=2};n.addEventListener("click",function(){if(l<10){for(var n=e.insertRow(),r=0;r<c;r++)n.insertCell();l++,d()}}),r.addEventListener("click",function(){l>2&&(e.deleteRow(-1),l--,d())}),o.addEventListener("click",function(){if(c<10){for(var n=0;n<l;n++)e.rows[n].insertCell();c++,d()}}),t.addEventListener("click",function(){if(c>2){for(var n=0;n<l;n++)e.rows[n].deleteCell(-1);c--,d()}});//# sourceMappingURL=index.544104fe.js.map

//# sourceMappingURL=index.544104fe.js.map
