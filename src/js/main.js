let btn = document.querySelector(".part4btn1");
let btn2 = document.querySelector(".part4btn2");
let btn3 = document.querySelector(".part4btn3");
let part4mains1 = document.querySelector(".part4mains1");
let part4mains = document.querySelector(".part4mains");
let part4mains2 = document.querySelector(".part4mains2");
let btnhover1 = document.querySelector(".part4btn1:hover");
let btnhover2 = document.querySelector(".part4btn2:hover");
let btnhover3 = document.querySelector(".part4btn3:hover");
let topbtn = document.querySelector(".topbtn");
topbtn.addEventListener('click', tophand );
window.addEventListener('scroll', namewindow); 
function tophand(){
    if (window.pageYOffset > 0) {
        window.scrollBy(0,-20)
        setTimeout(tophand, 0.1)
    }
    
};  
function namewindow(){
    const offset = window.pageYOffset;
    const myheight = document.documentElement.clientHeight;
    if (offset > myheight) {
        topbtn.classList.add("topbtn1");
    }
    else{
        topbtn.classList.remove("topbtn1");
    };

    
}; 
btn.addEventListener('click', function(){
    btn.style = "color:#555555;  border:1.5px solid grey; cursor: default ;transition: 0.2s all; border-bottom: none ;";
    btn2.style = "color: #337ab7; border: white; transition: 0.5s all;";
    btn3.style = "color: #337ab7; border: white;  transition: 0.5s all;";
    part4mains.style = "display: block;";
    part4mains1.style = "display: none;";
    part4mains2.style = "display: none;";
});
btn2.addEventListener('click', function(){
    btn.style = "color: #337ab7; border: white;  transition: 0.5s all;";
    btn2.style = "color:#555555; border:1.5px solid grey; cursor: default ;transition: 0.2s all; border-bottom: none; ";
    btn3.style = "color: #337ab7; border: white;  transition: 0.5s all;";
    part4mains.style = "display: none;";
    part4mains1.style = "display: block;";
    part4mains2.style = "display: none;";
});
btn3.addEventListener('click', function(){
    btn.style = "color: #337ab7; border: white;  transition: 0.5s all;";
    btn2.style = "color: #337ab7; border: white;  transition: 0.5s all;";
    btn3.style = "color:#555555; border:1.5px solid grey; cursor: default ; transition: 0.2s all; border-bottom: none;";
    part4mains.style = "display: none;";
    part4mains1.style = "display: none ;";
    part4mains2.style = "display: block;";
});








































































































































































// const goTopBtn = document.querySelector(".go-top");

// goTopBtn.addEventListener('click', goTop);
// window.addEventListener('scroll', myScroll);



// function myScroll(){
//     const offset = window.pageYOffset;
//     const myHeight = document.documentElement.clientHeight;
//     if(offset > myHeight){
//         goTopBtn.classList.add("go-top-show");
//     }
//     else{
//         goTopBtn.classList.remove("go-top-show");
//     }
// }


// function goTop(){
//     if (window.pageYOffset > 0){
//         window.scrollBy(0, -55);
// setTimeout(goTop, 0);
//     }
// }

