
const lenis = new Lenis({
    duration:2
});


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function nav(){
    const whatWeDo = document.querySelector('.what-we-do');
    const whatElem = document.querySelector('.what-elem');
    const whatIcon = document.querySelector('.what-icon');
    const latIcon1 = document.querySelector('.lat-icon-1');
    const latIcon2 = document.querySelector('.lat-icon-2');
    const navButton1 = document.querySelector('.nav-button1');
    const navIcon = document.querySelector('.nav-icon');
    const navBar = document.querySelector('.nav-bar');
    const nav = document.querySelector('nav');

    gsap.to(navBar, {
        height:"6vh",
        duration:10,
        ease:"expoin",
        scrollTrigger:{
            trigger:".big-text",
            scroller:"body",
            start:"top 10%",
            end:"top 30%",
            scrub:2
        }
    })

    gsap.to(nav, {
        height:"6vh",
        duration:10,
        ease:"expoin",
        scrollTrigger:{
            trigger:".big-text",
            scroller:"body",
            start:"top 10%",
            end:"top 30%",
            scrub:2
        }
    })

    whatWeDo.addEventListener('mouseenter', function(){
        gsap.to(whatElem, {
            scale:1,
            y:0,
            duration:.5,
            ease:"power2.inOut"
        })


        gsap.to(whatIcon, {
            rotate:180,
            duration:.5,
            ease:"power2.inOut"
        })
    })

    whatWeDo.addEventListener('mouseleave', function(){
        gsap.to(whatElem, {
            scale:0,
            y:250,
            duration:.5,
            ease:"power2.inOut"
        })

        gsap.to(whatIcon, {
            rotate:0,
            duration:.5,
            ease:"power2.inOut"
        })
    })

    navButton1.addEventListener('mouseenter', function(){

        gsap.to(navIcon, {
            padding:"1.2vw 1.2vw",
            duration:.5,
            ease:"power2.inOut"
        })

        gsap.to(navButton1, {
            backgroundColor:"transparent",
            duration:.5,
            ease:"all linear",
            color:"#0CBA58"
        })

        gsap.to(latIcon1, {
            scale:0,
            duration:.5,
            ease:"power2.inOut"
        })

        gsap.to(latIcon2, {
            scale:1,
            duration:.5,
            ease:"power2.inOut"
        })
    })

    navButton1.addEventListener('mouseleave', function(){

        gsap.to(navIcon, {
            padding:"0",
            duration:.5,
            ease:"power2.inOut"
        })

        gsap.to(navButton1, {
            backgroundColor:"#0CBA58",
            duration:.5,
            ease:"all linear",
            color:"#fff"
        })

        gsap.to(latIcon1, {
            scale:1,
            duration:.5,
            ease:"power2.inOut"
        })

        gsap.to(latIcon2, {
            scale:0,
            duration:.5,
            ease:"power2.inOut"
        })
    })  


}

nav();

function cursor1(){
    const video1 = document.querySelector('.video1');
    const cursor1 = document.querySelector('.cursor1');

    video1.addEventListener("mouseenter", function(){
        gsap.to(cursor1, {
            scale:1,
            opacity:1,
            duration:.5,
            ease:"power2.inOut"
        })
    })

    video1.addEventListener("mouseleave", function(){
        gsap.to(cursor1, {
            scale:0,
            opacity:0,
            duration:.5,
            ease:"power2.inOut"
        })
    })

    video1.addEventListener("mousemove", function(dets){
        gsap.to(cursor1, {
            x:dets.x-250,
            y:dets.y-150,
        })
    })


}

cursor1();

function page2(){
    const rightText = document.querySelectorAll('.right-text');

rightText.forEach(function(el){
    el.addEventListener('mouseenter', function(){
        gsap.to(el.childNodes[2], {
            opacity:1,
            duration:.5,
            ease:"power2.inOut"
        })

        gsap.to(el, {
            borderBottom:"2px solid #fff",
            duration:.1,
            ease:"power2.inOut"
        })
    })

    el.addEventListener("mouseleave", function(){
        gsap.to(el.childNodes[2], {
            opacity:0,
            duration:.5,
            ease:"power2.inOut"
        })

        gsap.to(el, {
            borderBottom:"1px solid #767171",
            duration:.1,
            ease:"power2.inOut"
        })
    })

    el.addEventListener("mousemove", function(dets){
        gsap.to(el.childNodes[2], {
            x:dets.x-el.getBoundingClientRect().x-20,
            y:dets.y-el.getBoundingClientRect().y-100,
        })
    })

    

})

}

page2();

function page3(){
    const first1 = document.querySelector('.first-1');
    const first1Video = document.querySelector('.first-video1');

    first1.addEventListener('mouseenter', function(){
        gsap.to(first1Video, {
            opacity:1,

        })
    })

    first1.addEventListener('mouseleave', function(){
        gsap.to(first1Video, {
            opacity:0,
        })
    })



    const first2 = document.querySelector('.first-2');
    const first2Video = document.querySelector('.first-video2');

    first2.addEventListener('mouseenter', function(){
        gsap.to(first2Video, {
            opacity:1,

        })
    })

    first2.addEventListener('mouseleave', function(){
        gsap.to(first2Video, {
            opacity:0,
        })
    })

    const first3 = document.querySelector('.first-3');
    const first3Video = document.querySelector('.first-video3');

    first3.addEventListener('mouseenter', function(){
        gsap.to(first3Video, {
            opacity:1,

        })
    })

    first3.addEventListener('mouseleave', function(){
        gsap.to(first3Video, {
            opacity:0,
        })
    })


    

}

page3();


function page8(){
    const manage = document.querySelector('.manage');
    const manage2 = document.querySelector('.manage-2');
    const pg8Img = document.querySelector('.pg-8-img');
    const pg9Img = document.querySelector('.pg-9-img');
    const cursor2 = document.querySelector('.cursor-2');
    const cursor3 = document.querySelector('.cursor-3');
    const videoFirst = document.querySelector('.pg-8-video-first');



    manage.addEventListener('mouseenter', function(){
        gsap.to(cursor2,{
            scale:1,
            duration:.5,
            ease:"0.45, 0, 0.55, 1"
        })

    })

    manage.addEventListener('mouseleave', function(){
        gsap.to(cursor2,{
            scale:0,
            duration:.5,
            ease:"0.45, 0, 0.55, 1"
        })
    })

    manage.addEventListener('mousemove', function(dets){
        gsap.to(cursor2,{
            x:dets.x-manage.getBoundingClientRect().x-100,
            y:dets.y-manage.getBoundingClientRect().y-190
        })
    })

    manage2.addEventListener('mouseenter', function(){
        gsap.to(cursor3,{
            scale:1,
            duration:.5,
            ease:"0.45, 0, 0.55, 1"
        })

        gsap.to(cursor2,{
            opacity:0,
        })
    })

    manage2.addEventListener('mouseleave', function(){
        gsap.to(cursor3,{
            scale:0,
            duration:.5,
            ease:"0.45, 0, 0.55, 1"
        })

        gsap.to(cursor2,{
            opacity:1,
        })
    })

    manage2.addEventListener('mousemove', function(dets){
        gsap.to(cursor3,{
            x:dets.x-manage2.getBoundingClientRect().x-100,
            y:dets.y-manage2.getBoundingClientRect().y-190
        })
    })



    manage.addEventListener('mouseenter', function(){

        gsap.to(pg8Img, {
            opacity: 0,
        })

        gsap.to(manage,{
            borderTop:"1.5px solid #fff",
            duration:.5
        })
    })

    manage.addEventListener('mouseleave', function(){
        gsap.to(pg8Img, {
            
            opacity: 1,
        })

        gsap.to(manage,{
            borderTop:"1px solid #767171",
            duration: .5,
        })

        
    })

   videoFirst.addEventListener('mouseenter', function(){


        gsap.to(pg8Img, {
            opacity: 1,
        })

        gsap.to(pg9Img, {
            opacity: 0,
        })


        gsap.to(manage2,{
            borderTop:"1.5px solid #fff",
            duration:.5
        })
    })

    videoFirst.addEventListener('mouseleave', function(){
        gsap.to(pg9Img, {
            opacity: 1,
        })

        gsap.to(manage2,{
            borderTop:"1px solid #767171",
            duration: .5,
        })

        
    })

    
}

page8();


function textAnimation2(){
    gsap.from(".page-11-text h1 span",{
    y:120,
    stagger:.03,
    scrollTrigger:{
        trigger:".page-11-text",
        start:"top 50%",
        end:"top 52%",
        scrub:2
    }
})

gsap.from(".pg-16-h1 h1 span",{
    y:120,
    stagger:.03,
    scrollTrigger:{
        trigger:".pg-16-h1",
        scroller:"body",
        start:"top 50%",
        end:"top 52%",
        scrub:2
    }
})

gsap.from(".pg-17-h1 h1 span",{
    y:120,
    stagger:.03,
    scrollTrigger:{
        trigger:".pg-17-h1",
        scroller:"body",
        start:"top 60%",
        end:"top 62%",
        scrub:2
    }
})

gsap.from(".pg-18-h1 h1 span",{
    y:100,
    stagger:.02,
    duration:.3,
    scrollTrigger:{
        trigger:".pg-18-h1",
        scroller:"body",
        start:"top 70%",
        end:"top 72%",
        scrub:2
    }



})

}
textAnimation2();

function otherEffect(){
    gsap.from(".big-text-1 span",{
    y:100,
    stagger:.01,
    duration:.3,
    delay:.3
})


gsap.from(".page-6-text-left h1 span",{
    y:"6vw",
    stagger:.02,
    duration:.4,
    scrollTrigger:{
        trigger:".page-6-text-left",
        scroller:"body",
        start:"top 60%",
        end:"top 62%",
        scrub:2
    }
})

}

otherEffect();

function page13(){

    const pg13el = document.querySelectorAll(".pg-13el-1");

    gsap.to(pg13el,{
        borderRight: "1px solid #8988887e",
        duration:3,
        scrollTrigger:{
            trigger:".pg-13el-1",
            start:"top 30%",
            end: "top 10%",
            scrub:2
        }
    })

    gsap.from(".p-13-el-2-text p",{
        x:0,
        duration:5,
        scrollTrigger:{
            trigger:".p-13-el-2-text",
            scroller:"body",
            start:"top 80%",
            end:"top 20%",
            scrub:2
        }
    })


    gsap.from(".p-13-el-3-text p",{
        x:0,
        duration:5,
        scrollTrigger:{
            trigger:".p-13-el-3-text",
            scroller:"body",
            start:"top 80%",
            end:"top 20%",
            scrub:2
        }
    })

    gsap.from(".p-13-el-4-text p",{
        x:0,
        duration:5,
        scrollTrigger:{
            trigger:".p-13-el-4-text",
            scroller:"body",
            start:"top 80%",
            end:"top 20%",
            scrub:2
        }
    })
}
page13();

function page15(){

    const page15 = document.querySelector(".page15-text");

page15.addEventListener("mouseenter", function(){
    gsap.to(".cursor-15",{
        scale:1,
        duration:.5,
    })


    gsap.to(".pg-15-ic-2",{
        scale:2,
    })
})


page15.addEventListener("mouseleave", function(){
    gsap.to(".cursor-15",{
        scale:0,
        duration:.5,
    })

    gsap.to(".pg-15-ic-2",{
        scale:1,
    })

})

page15.addEventListener("mousemove", function(dets){
    gsap.to(".cursor-15",{
        x:dets.x-950,
        y:dets.y-500
    })
})

}

page15();

function page17(){
    const dropdowns = document.querySelectorAll(".main-detail");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function () {
        const arrow = this.querySelector('.arrow-1'); 
        arrow.classList.toggle('rotated'); 
        
        this.classList.toggle('active');
    });


});
}

page17();

function page18(){
const pg18Svg = document.querySelector(".pg-18-svg");
const pg18left = document.querySelector(".pg-18-el-left");

gsap.to(pg18Svg,{
    rotate:"200deg",
    duration:25,
    scrollTrigger:{
        trigger:".pg-18-el-left",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:2
    }
})
}
page18();

function buttonanimation(){
    const btn11 = document.querySelector(".btn-11");

    btn11.addEventListener("mouseenter",()=>{


        gsap.to(".btn-11-text-1 span",{
            y:"-1vw",
            stagger:.01,
            duration:.15,
            opacity:0,
        })

        gsap.to(".btn-11-text-2 span",{
            y:"0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

    })

    btn11.addEventListener("mouseleave",()=>{

        gsap.to(".btn-11-text-2 span",{
            y:"1vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

        gsap.to(".btn-11-text-1 span",{
            y:"-0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })



    })

}
buttonanimation();

function buttonanimation2(){
    const btn12 = document.querySelector(".btn-12");

    btn12.addEventListener("mouseenter",()=>{


        gsap.to(".btn-12-text-1 span",{
            y:"-1vw",
            stagger:.01,
            duration:.15,
            opacity:0,
        })

        gsap.to(".btn-12-text-2 span",{
            y:"0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

    })

    btn12.addEventListener("mouseleave",()=>{

        gsap.to(".btn-12-text-2 span",{
            y:"1vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

        gsap.to(".btn-12-text-1 span",{
            y:"-0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })



    })

}
buttonanimation2();

function buttonanimation3(){
    const btn13 = document.querySelector(".btn-13");

    btn13.addEventListener("mouseenter",()=>{


        gsap.to(".btn-13-text-1 span",{
            y:"-1vw",
            stagger:.01,
            duration:.15,
            opacity:0,
        })

        gsap.to(".btn-13-text-2 span",{
            y:"0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

    })

    btn13.addEventListener("mouseleave",()=>{

        gsap.to(".btn-13-text-2 span",{
            y:"1vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

        gsap.to(".btn-13-text-1 span",{
            y:"-0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })



    })

}
buttonanimation3();

function buttonanimation4(){
    const btn14 = document.querySelector(".btn-14");

    btn14.addEventListener("mouseenter",()=>{


        gsap.to(".btn-14-text-1 span",{
            y:"-1vw",
            stagger:.01,
            duration:.15,
            opacity:0,
        })

        gsap.to(".btn-14-text-2 span",{
            y:"0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

    })

    btn14.addEventListener("mouseleave",()=>{

        gsap.to(".btn-14-text-2 span",{
            y:"1vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

        gsap.to(".btn-14-text-1 span",{
            y:"-0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })



    })

}
buttonanimation4();

function buttonanimation5(){
    const btn15 = document.querySelector(".btn-15");

    btn15.addEventListener("mouseenter",()=>{


        gsap.to(".btn-15-text-1 span",{
            y:"-1vw",
            stagger:.01,
            duration:.15,
            opacity:0,
        })

        gsap.to(".btn-15-text-2 span",{
            y:"0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

    })

    btn15.addEventListener("mouseleave",()=>{

        gsap.to(".btn-15-text-2 span",{
            y:"1vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

        gsap.to(".btn-15-text-1 span",{
            y:"-0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })



    })

}
buttonanimation5();

function buttonanimation6(){
    const btn16 = document.querySelector(".btn-16");

    btn16.addEventListener("mouseenter",()=>{


        gsap.to(".btn-16-text-1 span",{
            y:"-1vw",
            stagger:.01,
            duration:.15,
            opacity:0,
        })

        gsap.to(".btn-16-text-2 span",{
            y:"0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

    })

    btn16.addEventListener("mouseleave",()=>{

        gsap.to(".btn-16-text-2 span",{
            y:"1vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })

        gsap.to(".btn-16-text-1 span",{
            y:"-0vw",
            stagger:.01,
            duration:.15,
            opacity:1,
        })



    })

}
buttonanimation6();
