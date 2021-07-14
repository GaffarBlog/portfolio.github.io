var mybtn = document.getElementById("mybtn");
var bg = document.getElementById("header");

var bgImgStore = new Array(
    "../img/bg1.png",
    "../img/bg2.png",
    "../img/bg3.png",
    "../img/bg4.png",
    "../img/bg5.png",
    "../img/bg6.png",
    "../img/bg7.png"
);
var set = setInterval(myFunction, 5000);
var a = 0;
function myFunction(){
    if(a < 6){
    bg.style.backgroundImage = 'url("'+bgImgStore[a+1]+'")';
    a++;
    }else{
        bg.style.backgroundImage = 'url(../img/bg1.png)';
        a = 0;
    }
}
bg.onclick = function(){
 clearInterval(set);
}


// sirvice slide
var btn = document.getElementsByClassName("btn");

var slide = document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0%)";
    for(a = 0; a < 3; a++){
        btn[a].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-33.33%)";
    for(a = 0; a < 3; a++){
        btn[a].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-66.666%)";
    for(a = 0; a < 3; a++){
        btn[a].classList.remove("active");
    }
    this.classList.add("active");
}

// client Slide
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slideClintRow = document.getElementById("slideClintRow");
var a = 0;
prev.onclick = function(){
    if(slideClintRow.style.transform = "translateX(-33.33%)"){
        slideClintRow.style.transform = "translateX(0%)";
    }
    
}
next.onclick = function(){
    if(slideClintRow.style.transform = "translateX(0%)"){
        slideClintRow.style.transform = "translateX(-33.33%)";
    }
}



// responsive navbar 
var open = document.getElementById("open");
var cross = document.getElementById("cross");
var nav = document.getElementById("nav");
var value = nav.style.transform;

open.onclick = function(){
        nav.style.transform = 'translateX(0%)';
        open.style.display = "none";
        cross.style.display = "block";
}
cross.onclick = function(){
    nav.style.transform = 'translateX(-100%)';
    open.style.display = "block";
    cross.style.display = "none";
}


























