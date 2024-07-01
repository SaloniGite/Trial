gsap.to(".page2  h1     ",{
    x:"-180%",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        scrub:3,
        pin:true
    }
})


