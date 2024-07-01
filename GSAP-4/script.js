gsap.to(".page2  .main    ",{
    x:"-110%",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 0%",
        end:"top -160%",
        scrub:3,
        pin:true
    }
})