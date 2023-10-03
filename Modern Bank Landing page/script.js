function changeBgOnScroll (){
  let scroll = window.scrollY;
  let scrollMenu = document.getElementById("scroll-menu");
  if(scroll < 82){
    scrollMenu.classList.remove("background-scroll");
  }
  else{
    scrollMenu.classList.add("background-scroll");
  }
}


window.addEventListener("scroll",changeBgOnScroll);
window.addEventListener("scroll",animateOnScroll);

function animateOnScroll (){
    let reveal = document.getElementsByClassName("visible");
     for( let i = 0; i < reveal.length; i++){
        let scrollHeight = window.innerHeight;
        let scrollTop = reveal[i].getBoundingClientRect().top;
        let revealPoint = 200;
        if(scrollTop < scrollHeight - revealPoint){
           reveal[i].classList.add("show");
        }
    else{
        reveal[i].classList.remove("show")
    }
     }
}

document.addEventListener("DOMContentLoaded", function() {
let animatedText = document.querySelector(".discount-price")

var options = {
  strings: ["Enticing rates","24/7 Protection","Great deals","20% Discount"],
  typeSpeed: 100,
  loop: true, 
};

var typed = new Typed(animatedText, options);

})
