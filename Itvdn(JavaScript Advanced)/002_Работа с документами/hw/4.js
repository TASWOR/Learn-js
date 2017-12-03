var get={};
get.class=function () {
    var a = document.getElementsByClassName("class");
    for(var i = 0;i<a.length;i++){
        a[i].style.color="red";
    }
};
get.class2=function () {
    var a=document.getElementsByClassName("class2");
    for(var i=0;i<a.length;i++){
        a[i].style.color="blue";
    }
};
get.borderClass = function () {
    var a = document.getElementsByClassName("class");
    for(var i=0;i<a.length;i++){
        a[i].style.border="1px solid red";
    }
};
get.borderClass2=function () {
    var a =document.getElementsByClassName("class2");
    for(var i=0;i<a.length;i++){
        a[i].style.border="1px solid blue";
    }
};
get.all=function () {
    var a = document.getElementById("all");
    a.style.border="1px solid yellow";
}