const heroImg = document.querySelector(".hero-img");
const discount = document.querySelector(".discount ");
const discountP = document.querySelector(".hero-section p");
const stats = document.querySelector(".stats div");

document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.querySelector(".discount-price")
    
    var options = {
      strings: ["Enticing rates","24/7 Protection","Great deals","20% Discount"],
      typeSpeed: 100,
      loop: true, 
    };
    
    var typed = new Typed(animatedText, options);
    })

    const timeline = gsap.timeline()

    timeline.from(heroImg,{
    x: 500,
    duration: 2,
    ease: "easeInOut",
    opacity: 0, 
    })

    gsap.from(discount,{
    y: -500,
    duration: 1,
    ease: "easeInOut",
    opacity: 0, 
    delay: 1,
    })

    gsap.from(discountP,{
     y: 500,
     duration: 2,
     ease : "easeInOut",
     opacity: 0,
    })

    timeline.from("#home h1",{
     x: -1000,
     duration: 1,
     ease: "easeInOut",
     opacity: 0,
     
    })

    
    const moveAnimation = gsap.from(stats.children, {
        y: 500,
        opacity: 0,
        duration: 1.5,
        ease: "easeInOut",
        stagger: 0.5, 
    });
    

let scrollLength = 470;

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
  

