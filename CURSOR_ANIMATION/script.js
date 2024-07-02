var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var image = document.querySelector(".image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"power4.out"
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML=`View More`
    gsap.to(cursor,{
        scale:6
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML=` `
    gsap.to(cursor,{
        scale:1
    })
})