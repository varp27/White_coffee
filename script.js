const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





var wrapper=document.querySelector(".wrapper")
var cursor=document.querySelector(".cursor")
var prdCont=document.querySelector(".products-container")
var contactdiv=document.querySelector(".contact-div")
var landingNav=document.querySelector(".landing-nav")
var landingContentP=document.querySelector(".landing-content p")
// var imgvideoBox = document.querySelector(".imgvideoBox")

// var tl9 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".imgvideoBox",
//         scroller: ".wrapper",
//         start: "top 10%",
//         end: "top 0",
//         markers:true,
//         scrub: true,
//         pin:true,
//     }
// })
// tl9.to(imgvideoBox, {
//     scale: "1.2",
//     delay: 0.5,
//     duration: 1,
// })

var tl =gsap.timeline()
function landingAnim(){
    tl.from(landingNav,{
        y:-100,
        delay:0.5,
        duration:1
    })
    tl.from(landingContentP,{
        y:-100,
        opacity:0,
        scale:0.5
    })
    tl.from(".landing-content h1",{
        y:100,
        opacity:0,
        stagger:0.2
    })
    tl.from(".landing-content .cont-div p",{
        opacity:0
    })
}
landingAnim();
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".abc",
        scroller:".wrapper",
        // markers:true,
        start:"top 90%",
        end:"top 0",
        // scrub:2,
    }
})
 tl2.from(".abc p",{
    x:-10,
    scale:0.5,
    opacity:0,
    pin:true,
 })
 tl2.from(".abc h1",{
    y:-20,
    opacity:0,
    pin:true,
    stagger:0.3
 })

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".unique",
        scroller:".wrapper",
        // markers:true,
        start:"top 90%",
        end:"top 0",
        // scrub:2,
    }
})
tl3.from(".unique h1",{
    y:-200,
    stagger:0.6,
    opacity:0,
    pin:true
})
tl3.from(".unique p",{
    x:-200,
    opacity:0,
})
tl3.from(".unique .btnn",{
    x:-500,
    opacity:0,
})

var tl4=gsap.timeline({
        scrollTrigger:{
            trigger:".stores-container",
            scroller:".wrapper",
            // markers:true,
            start:"top 90%",
            end:"top 0",
            // scrub:2,
        }
})
tl4.from(".text-div h1",{
    y:-200,
    stagger:0.8,
    opacity:0,
    pin:true
})
var tl5=gsap.timeline({
    scrollTrigger:{
        trigger:".play-text",
        scroller:".wrapper",
        // markers:true,
        start:"top 90%",
        end:"top 0",
        // scrub:2,
    }
})
tl5.from(".play-text p",{
    y:-100,
    opacity:0,
})
tl5.from(".play-text h1",{
    x:-100,
    opacity:0,
})

var tl6=gsap.timeline({
    scrollTrigger:{
        trigger:".music-name",
        scroller:".wrapper",
        // markers:true,
        start:"top 90%",
        end:"top 0",
        // scrub:2,
    }
})
tl6.from(".music-name .element",{
    x:-100,
    stagger:0.5,
    opacity:0,
})
tl6.from(".music-name .btnn",{
    x:-100,
    opacity:0
})
var tl7=gsap.timeline({
    scrollTrigger:{
        trigger:".cont-txt",
        scroller:".wrapper",
        // markers:true,
        start:"top 90%",
        end:"top 0",
        // scrub:2,
    }
})
tl7.from(".cont-txt p",{
    x:-100,
    opacity:0
})
var tl8=gsap.timeline({
    scrollTrigger:{
        trigger:".footer-div",
        scroller:".wrapper",
        // markers:true,
        start:"top 90%",
        end:"top 0",
        // scrub:2,
    }
})
tl8.from(".footer-div h1",{
    y:-50,
    opacity:0,
    stagger:0.5,
})
wrapper.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"back.out"
    })
})

prdCont.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        backgroundColor:"white"
    })
})
prdCont.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        backgroundColor:"black"
    })
})
contactdiv.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        backgroundColor:"white"
    })
})
contactdiv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        backgroundColor:"black"
    })
})
var element=document.querySelectorAll(".element")

var elemimg=document.querySelector(".elem-div img")

element.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    })
    
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    })
    
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left= dets.x + "px"
    })

})

document.querySelector(".media2").addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        height:"120px",
        width:"120px",
        backgroundColor:"white",
        innerHTML:"<i class='fas fa-volume-up' style='color:black;'></i>",
        fontSize:"30px",
        margin:"20px"
    })
})
document.querySelector(".media2").addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        width:"17px",
        height:"17px",
        backgroundColor:"black",
        innerHTML:"",
        fontSize:"initial",
        margin:"initial"
    })
})

function imgAnimation(){
gsap.to(".images-part .right1, .right2",{
    x:-200,
    y:-100,
    scrollTrigger:{
        trigger:".images-part",
        scroller:".wrapper",
        markers:false,
        start:"top 90%",
        end:"bottom -100%",
        scrub:2,
    }
})
gsap.to(".images-part .left1, .left2",{
    x:200,
    y:100,
    scrollTrigger:{
        trigger:".images-part",
        scroller:".wrapper",
        markers:false,
        start:"top 90%",
        end:"bottom -100%",
        scrub:2,
    }
})
}
imgAnimation();


document.querySelectorAll('.toggle-div').forEach(div => {
    div.addEventListener('click', function() {
        const hiddenContainer = this.querySelector('.hidden-container');
        const toggleIcon = this.querySelector('.togglebtn i');
        
        if (hiddenContainer.classList.contains('hidden')) {
            document.querySelectorAll('.hidden-container').forEach(container => {
                container.classList.add('hidden');
            });
            
            hiddenContainer.classList.remove('hidden');
            toggleIcon.classList.remove('fa-plus');
            toggleIcon.classList.add('fa-minus');
        } else {
            
            hiddenContainer.classList.add('hidden');
            toggleIcon.classList.remove('fa-minus');
            toggleIcon.classList.add('fa-plus');
        }
    });
});





