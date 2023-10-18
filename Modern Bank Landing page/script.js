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
  
  const images = document.querySelectorAll("img");
  images.forEach(img =>{
    img.setAttribute("loading", "lazy");
  })

})
