var dragValue;
function move(id){
    var element  = document.querySelector(".map img");
    element.style.position="absolute";
    element.onmousedown=function(){
        dragValue=element;
    }
}
document.onmouseup=function(e){
    dragValue=null;
}
document.onmousemove=function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left=x+"px";
    dragValue.style.right=y+"px";
}