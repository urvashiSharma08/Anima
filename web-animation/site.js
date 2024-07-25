// function locoWithGsp(){
//     gsap.registerPlugin(ScrollTrigger);
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector(".smooth-scroll"),
//       smooth: true
//     });
    
//     locoScroll.on("scroll", ScrollTrigger.update);
    
   
//     ScrollTrigger.scrollerProxy(".smooth-scroll", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       }, 
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
    
//       pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
//     });
        
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();
    
// }
// locoWithGsp();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#body'),
//     smooth: true
// });


var tl = gsap.timeline()
    
tl.from("#logo", {
    x:-80,
    duration:1,
    opacity:0,
})
tl.from("#list-item", {
    y:-50,
    duration:2,
    delay:0.5,
    opacity:0,
},"-=1.2")
tl.from("#Partnership" , {
    y:-10,
    duration:4,
    delay:7,
    stagger:0.3
})
gsap.from("#orange-mockup" , {
    x:200,
    duration:1.4,
    delay:0,
    ease: "bounce.out",
})
gsap.from("#more" , {
    y:-30,
    duration:4,
    delay:3,
})
gsap.from("#shop" , {
    y:-30,
    duration:4,
    delay:4
})
gsap.from("main .offer" , {
    scale:0,
    duration:1,
    delay:.6,
    rotate:360
})
// page-add
gsap.from("#section-add img" , {
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#background-2",
        scroller:"body",
        markers:false,
        start:"top 80%",
    }
})
gsap.from("#section-add h1" , {
    x:-500,
    opacity:0,
    duration:1,
    scrollTrigger:{
        // trigger:"#background-2",
        scroller:"body",
        markers:false,
        start:"top 80%",
        end:"top 10%",
        
    }
})
// sec-2
gsap.from(".left .taste img", {
    y:-200,
    duration:2,
    opacity:0,
    ease: "bounce.out",
    scrollTrigger:{
        trigger:".left .taste img",
        stagger:"body",
        markers:false,
        start:"top 30%",
        end: "top 50%",
    }
})
gsap.from(".sec-two .left .fruit ", {
    scale:0.3,
    duration:1,
    opacity:0,
    // ease: "bounce.out",
    scrollTrigger:{
        trigger:".sec-two .left .fruit ",
        stagger:"body",
        markers:false,
        start:"-400 30%",
        end: "top 50%",
    }
})
gsap.from(".right #ul li", {
    y:200,
    duration:1,
    opacity:0,
    scrub:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".right #ul li",
        stagger:"body",
        markers:false,
        start:"-600 40%",
        end : "top 50%"
    }
})
// #sec-3
gsap.from("#sec-three #h-four", {
    color:"red",
    textShadow: "2px 2px 20px red",
    scale:0.3,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-three #h-four",
        stagger:"body",
        markers:false,
        start:"-300 40%",
        end : "top 50%"
    }
})

gsap.from("#sec-three #cart #cart-one", {
    x:-200,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-three #cart #cart-one",
        stagger:"body",
        markers:false,
        start:"-240 40%",
        end : "top 50%"
    }
},"anime")
gsap.from("#sec-three #cart #cart-two", {
    y:-160,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-three #cart #cart-two",
        stagger:"body",
        markers:false,
        start:"-90 40%",
        end : "top 50%"
    }
},"anime")
gsap.from("#sec-three #cart #cart-three", {
    y:200,
    duration:1.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-three #cart #cart-three",
        stagger:"body",
        markers:false,
        start:"-430 40%",
        end : "top 50%"
    }
},"anime")
gsap.from("#sec-three #cart #cart-four", {
    x:100,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-three #cart #cart-four",
        stagger:"body",
        markers:false,
        start:"-250 40%",
        end : "top 50%"
    }
},"anime")
// sec-four
gsap.from("#sec-four .top h2", {
    x:-200,
    duration:1.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-four .top h2",
        stagger:"body",
        markers:false,
        start:"-170 40%",
        end : "top 50%",
    }
})
gsap.from("#sec-four .top p", {
    scale:0.4,
    duration:1.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-four .top p",
        stagger:"body",
        markers:false,
        start:"-200 40%",
        end : "top 50%",
    }
})

gsap.from("#sec-four .container .card img", {
    scale:0.3,
    rotate:90,
    duration:1.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-four .container .card img",
        stagger:"body",
        markers:false,
        start:"-270 40%",
        end : "top 50%",
        
    }
})
gsap.from("#sec-four .container .card h1", {
    color:"green",
    scale:0.3,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-four .container .card h1",
        stagger:"body",
        markers:false,
        start:"-300 40%",
        end : "top 50%",
    }
},"-=2")
gsap.from("#sec-four #seemore", {
    duration:.2,
    scale:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-four #seemore",
        stagger:"body",
        markers:false,
        start:"-220 40%",
        end : "top 50%",
    }
})
// sec-five
gsap.from("#sec-five h1", {
    duration:0.8,
    delay:0.3,
    color:"black",
    scale:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-five h1",
        stagger:"body",
        markers:false,
        start:"-100 40%",
        end : "top 50%",
    }
})
gsap.from("#sec-five .slider #gsp-top", {
    duration:0.5,
    x:-300,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-five .slider #gsp-top",
        stagger:"body",
        markers:false,
        start:"-200 40%",
        end : "top 50%",
    }
},"slide")
gsap.from("#sec-five .slider #gsp-mid", {
    duration:0.5,
    scale:0.2,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-five .slider #gsp-mid",
        stagger:"body",
        markers:false,
        start:"-210 40%",
        end : "top 50%",
    }
},"slide")
gsap.from("#sec-five .slider #gsp-bottom", {
    duration:.5,
    x:200,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-five .slider #gsp-bottom",
        stagger:"body",
        markers:false,
        start:"-200 40%",
        end : "top 50%",
    }
},"slide")

// sec-six
gsap.from("#sec-six form h2", {
    duration:.4,
    scale:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-six form h2",
        stagger:"body",
        markers:false,
        start:"-40 40%",
        end : "top 50%",
    }
})
gsap.from("#sec-six .text-container div h4", {
    duration:.8,
    x:50,
    scrub:1,
    stagger:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-six .text-container div h4",
        stagger:"body",
        markers:false,
        start:"-220 40%",
        end : "top 50%",
    }
})
// footer
gsap.from("#sec-seven footer #apple-icon", {
    duration:.8,
    scrub:1,
    scale:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-seven footer #apple-icon",
        stagger:"body",
        markers:false,
        start:"-100 40%",
        end : "top 50%",
    }
},"footer")
gsap.from("#sec-seven footer #right h3", {
    duration:.8,
    scrub:1,
    scale:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-seven footer #right h3",
        stagger:"body",
        markers:false,
        start:"-100 40%",
        end : "top 50%",
    }
},"footer")
gsap.from("#sec-seven footer #mid #center-logo", {
    duration:.8,
    scrub:1,
    y:-50,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec-seven footer #mid #center-logo",
        stagger:"body",
        markers:false,
        start:"-100 40%",
        end : "top 50%",
    }
},"footer")
