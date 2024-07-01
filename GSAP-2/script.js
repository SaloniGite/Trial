gsap.from(".page1 .box",{
    rotate:360,
    duration:2,
    borderRadius:"50%"
})

gsap.from(".page2 .box",{
    rotate:360,
    duration:3,
    delay:1,
    borderRadius:"50%",
    
    // scrollTrigger:".page2 .box"

    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start : "top 60%",
        end: "top 30%",
        // scrub: true  
        scrub:2,
        // it is used for scrolling effect 
        pin:true
    }
})

gsap.from(".page3 .box",{
    rotate:360,
    duration:2,
    borderRadius:"50%",
    // scrollTrigger:".page3 .box"
})