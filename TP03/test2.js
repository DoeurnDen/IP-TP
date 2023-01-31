function textStyle(){
    text.style.background = "pink";
    text.style.color = "blue";
    text.style.fontSize = "2rem";
}
function eraseTextStyle(){
    text.style.background = "";
    text.style.color = "";
    text.style.fontSize = "";
}
// text.onmouseover = textStyle;
text.addEventListener("mouseover", function () {
    textStyle();
});
text.addEventListener("mouseout",eraseTextStyle);