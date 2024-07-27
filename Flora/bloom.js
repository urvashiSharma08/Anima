const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Lenis
    const lenis = new Lenis({
      lerp:0.04
    })
    lenis.on('scroll', (e) => {
      // console.log(e)
      
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
//gsap
    
gsap.to("nav #logo", {
    x:80,
    duration:1,
})
gsap.from("nav a", {
    y:-50,
    stagger:0.3,
    opacity:0,
    duration:1,
})
gsap.from("#mid #Right",{
  x:-40,
  duration:.9,
  opacity:0,
 scrollTrigger:{
   trigger:"#mid #Right",
   scroller:"body",
   markers:false,
   start:"-400 20%",
   end:"top 80%"
 }
})
gsap.from("#mid #left",{
  x:40,
  duration:.9,
  opacity:0,
 scrollTrigger:{
   trigger:"#mid #Right",
   scroller:"body",
   markers:false,
   start:"-350 20%",
   end:"top 80%"
 }
})
gsap.from("main #shop-product",{
   x:50,
   duration:.9,
   opacity:0,
  scrollTrigger:{
    trigger:"main #shop-product",
    scroller:"body",
    markers:false,
    start:"-300 20%",
    end:"top 80%"
  }
})
gsap.from("main #sub-p",{
   x:-50,
   duration:.9,
   opacity:0,
  scrollTrigger:{
    trigger:"main",
    scroller:"body",
    markers:false,
    start:"-300 20%",
    end:"top 80%"
  }
})
// gsap.from("#shop-cards #card-container-first",{
//    y:10,
//    duration:.9,
//    opacity:0,
//    stagger:0.2,
//    scrollTrigger:{
//     trigger:"#shop-cards #card-container-first",
//     scroller:"body",
//     markers:false,
//     start:"-250 40%",
//      end : "center 50%",
//   }
// })
gsap.from("#shop-cards #card-container-2",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.3,
  scrollTrigger:{
    trigger:"#shop-cards #card-container-2",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #card-container-3",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.6,
  scrollTrigger:{
    trigger:"#shop-cards #card-container-3",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #card-container-4",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.9,

  scrollTrigger:{
    trigger:"#shop-cards #card-container-4",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
// 2nd-raw
gsap.from("#shop-cards #card-1",{
   y:70,
   duration:.9,
   opacity:0,

   scrollTrigger:{
    trigger:"#shop-cards #card-1",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #card-2",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.3,

  scrollTrigger:{
    trigger:"#shop-cards #card-2",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #card-3",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.6,
  scrollTrigger:{
    trigger:"#shop-cards #card-3",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #card-4",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.9,

  scrollTrigger:{
    trigger:"#shop-cards #card-4",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
// 3nd-raw
gsap.from("#shop-cards #container-1",{
   y:70,
   duration:.9,
   opacity:0,

   scrollTrigger:{
    trigger:"#shop-cards #container-1",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #container-2",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.3,

  scrollTrigger:{
    trigger:"#shop-cards #container-2",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #container-3",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.6,

  scrollTrigger:{
    trigger:"#shop-cards #container-3",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
})
gsap.from("#shop-cards #container-4",{
   y:70,
   duration:.9,
   opacity:0,
   delay:0.9,

  scrollTrigger:{
    trigger:"#shop-cards #container-4",
    scroller:"body",
    markers:false,
    start:"-250 40%",
     end : "center 50%",
  }
 })
// blog
gsap.from("#blog #blog-product",{
   x:100,
   duration:1.5,
   opacity:0,
   ease: "bounce.out",
   scrollTrigger:"#blog"
})
gsap.from("#blog-card #article-1",{
   x:-60,
   duration:1.5,
   opacity:0,
  //  ease: "elastic.out(1,0.4)",
   scrollTrigger:{
     trigger:"#article-1",
     scroller:"body",
     markers:false,
     start:"-50 60%",
     end:"center 80%"
   }
},"article")
gsap.from("#blog-card #article-2",{
   y:-60,
   duration:1.5,
   opacity:0,
   delay:.2,
  //  ease: "elastic.out(1,0.4)",
   scrollTrigger:{
     trigger:"#article-2",
     scroller:"body",
     markers:false,
     start:"-50 60%",
     end:"center 80%"
   }
},"article")
gsap.from("#blog-card #article-3",{
   x:60,
   duration:1.5,
   opacity:0,
  //  ease: "elastic.out(1,0.4)",
   scrollTrigger:{
     trigger:"#article-3",
     scroller:"body",
     markers:false,
     start:"-50 60%",
     end:"center 80%"
   }
},"article")

// about
gsap.from("#about #abt-title",{
  scale:1.5,
  duration:1.5,
  opacity:0,
  delay:.2,
  scrollTrigger:{
    trigger:"#abt-title",
    scroller:"body",
    markers:false,
    start:"-40 60%",
    end:"center 80%"
  }
},"about-headings")
gsap.from("#about #abt-subtitle",{
  scale:0.4,
  duration:1.5,
  opacity:0,
 color:"#F68EB1",
  scrollTrigger:{
    trigger:"#abt-subtitle",
    scroller:"body",
    markers:false,
    start:"-40 60%",
    end:"center 80%"
  }
},"about-headings")

// abt-section
gsap.from("#box #abt-sec-1",{
 x:-50,
  duration:1.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#abt-sec-1",
    scroller:"body",
    markers:false,
    start:"-30 60%",
    end:"center 80%"
  }
})
gsap.from("#box #abt-sec-2",{
 x:50,
  duration:1.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#abt-sec-2",
    scroller:"body",
    markers:false,
    start:"-30 60%",
    end:"center 80%"
  }
})
gsap.from("#box svg",{
   rotate:80,
   ease: "back.out(2)",
   duration:2,
   opacity:0,
   scrollTrigger:{
     trigger:"svg",
     scroller:"body",
     markers:false,
     start:"-20 80%",
     end:"center 90%"
   }
 })
gsap.from("#about-team .team",{
   scale:.3,
   ease: "back.out(3)",
   color:"black",
   duration:2,
   opacity:0,
   textDecoration:"underline",
   scrollTrigger:{
     trigger:".team",
     scroller:"body",
     markers:false,
     start:"-20 80%",
     end:"center 90%"
   }
 })
gsap.from(".team-container .team-member",{
   scale:.3,
   ease: "slow(0.5,0.7,false)",
   duration:2,
   stagger:.5,
   opacity:0,
   scrollTrigger:{
     trigger:".team-member",
     scroller:"body",
     markers:false,
     start:"-20 80%",
     end:"center 90%"
   }
 })
//  price-section
gsap.from("#price-cards #plans",{
   scale:.3,
   ease: "elastic.out(1.4,0.3)",
   duration:2,
   opacity:0,
   scrollTrigger:{
     trigger:"#plans",
     scroller:"body",
     markers:false,
     start:"-30 80%",
     end:"center 90%"
   }
 })
gsap.from("#price-cards #event-container",{
   y:-90,
   duration:1,
   stagger:.7,
   opacity:0,
   scrollTrigger:{
     trigger:"#event-container",
     scroller:"body",
     markers:false,
     start:"-30 80%",
     end:"center 90%"
   }
 })
//intro-sec 
gsap.from("#service-intro #service-intro-box",{
    scale:0.4,
   duration:2,
   stagger:.7,
   opacity:0,
   scrollTrigger:{
     trigger:"#service-intro-box",
     scroller:"body",
     markers:false,
     start:"-30 80%",
     end:"center 90%"
   }
 })
// facility
gsap.from(".facility h1",{
  x:40,
 duration:2,
 stagger:.7,
 opacity:0,
 scrollTrigger:{
   trigger:"h1",
   scroller:"body",
   markers:false,
   start:"5200 80%",
   end:"center 90%"
 }
})
gsap.from(".facility h3",{
  x:-40,
 duration:2,
 stagger:.7,
 opacity:0,
 scrollTrigger:{
   trigger:"h3",
   scroller:"body",
   markers:false,
   start:"4800 80%",
   end:"center 90%"
 }
})
gsap.from(".facility-container .facility-box",{
  y:-70,
 duration:1,
 ease:"bounce.out",
 stagger:.3,
 opacity:0,
 scrollTrigger:{
   trigger:".facility-box",
   scroller:"body",
   markers:false,
   start:"-100 80%",
   end:"center 90%"
 }
})
gsap.from("footer #svg",{
  y:-30,
 duration:1,
 ease:"bounce.out",
 stagger:.3,
 opacity:0,
 scrollTrigger:{
   trigger:"#svg",
   scroller:"body",
   markers:false,
   start:"-100 80%",
   end:"center 90%"
 }
})
gsap.from("#footer-logo .svg",{
  rotate:360,
  scale:2,
 duration:1,
  delay:.3,
 stagger:.3,
 opacity:0,
 scrollTrigger:{
   trigger:".svg",
   scroller:"body",
   markers:false,
   start:"2500 80%",
   end:"bottom 90%"
 }
})

