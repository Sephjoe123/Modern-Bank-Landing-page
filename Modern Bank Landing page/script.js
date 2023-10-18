const heroImg = document.querySelector(".hero-img")
const discount = document.querySelector(".discount ");
const discountP = document.querySelector(".hero-section p");
const stats = document.querySelector(".stats div");

document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.querySelector(".discount-price")
    
    var options = {
      strings: ["24/7 Protection","Great deals","20% Discount"],
      typeSpeed: 100,
      loop: true, 
    };
    
    var typed = new Typed(animatedText, options);
    })

gsap.defaults({ duration: 0.7, ease:"easeInOut", }); 

const timeline = gsap.timeline();



timeline.from(discount, {
    y: -500,
    opacity: 0,
});

timeline.from(discountP, {
    y: 500,
    opacity: 0,
});

timeline.from("#home h1", {
    x: -1000,
    opacity: 0,
});

timeline.from(heroImg, {
    x: 500,
    opacity: 0,
});

    
    const moveAnimation = gsap.from(stats.children, {
        y: 300,
        opacity: 0,
        duration: 1.5,
        ease: "easeInOut",
        stagger: 0.5, 
    });
    

let scrollLength = 400;

function triggerScroll() {
    console.log(window.scrollY)

    if(window.scrollY >= scrollLength){
     moveAnimation.play()
    }
    else{
        moveAnimation.pause()
    }
  }
  
    window.addEventListener("scroll", triggerScroll);
    triggerScroll()
  

