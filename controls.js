//------ NAV BAR ------//

window.onscroll = function() {scrollFunction()};

var navContainer = document.getElementById("home");
var imgContainer = document.getElementById("imgContainer");

function scrollFunction(){
    if ( document.documentElement.scrollTop > 80){
        navContainer.style.top = "-32px";
        imgContainer.style.width = "120px";
        navContainer.style.background = "linear-gradient( to right, #530000c4, #8a0000c9, #530000c4)";

    }
    else{
        navContainer.style.top = "0px";
        imgContainer.style.width = "180px";
        navContainer.style.background = "linear-gradient( to right, #ff010157, #ff000036, #ff000048)";
    }
}

//------ BANNER IMAGE ------// 

