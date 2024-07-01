// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"pink",
//     borderRadius:"50%"
// })

// gsap.to moves from initial to final position 

// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1,
//     repeat:2,
//     yoyo:true   
// })

// yoyo to make it move in both direction and repeat used to repeat the animation 

// gsap.from moves from final to initial position 
// given property ko chod kr na orignal le leta h 

// gsap.from("h1",{
//     opacity:0,
//     y:20,
//     duration:2,
//     delay:1,
//     // stagger:1 
//     stagger:-1
// })

// stagger is used to get the animation one by one if it is being applied on more than one 

// TIME LINE  to get the animations on element one after another

var tl = gsap.timeline()

tl.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"pink",
    borderRadius:"50%"
})

tl.from("#box2",{
    x:1200,
    duration:2,
    delay:1,
    repeat:2,
    yoyo:true   
})
