function getData(e){e.addEventListener("click",function(){var e=document.querySelector(".formTask").value,t=document.querySelector(".error"),n=document.querySelector(".masonry_root");checkStr(e,t,n,new Masonry(n,{itemSelector:".element_msnry",columnWidth:150}))})}function checkStr(e,t,n,r){""===e?(t.setAttribute("class","d-block"),t.setAttribute("class","error")):t.setAttribute("class","d-none")}function checkLength(){var e=document.querySelector(".formTask");e.addEventListener("keypress",function(){19<e.value.length&&event.preventDefault()})}window.addEventListener("load",function(){getData(document.querySelector(".btn_data")),checkLength()});
//# sourceMappingURL=main.js.map
