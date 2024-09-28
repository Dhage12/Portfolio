var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 =gsap.timeline();
var tl4 = gsap.timeline();


tl.from(".left-nav img,.left-nav h1,.right-nav a,third-nav i",{
    // y:-100,
    scale:0,
    duration:3,
    opacity:0,
    repeat:-1,
    
})


tl2.from(".homepage h1,.homepage p,.homepage button",{
    scale:-1,
    opacity:0,
    duration:1,
    stagger:.5,
    
})
tl3.from(".social-media i",{
    x:-15,
    scale:0,
    opacity:0,
    duration:1,
    stagger:.3,
   
})
tl3.from(".upper-info h1, .upper-info p",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.2,
    
    

})
tl3.from(".left-lower-about h2, .left-lower-about p,.left-lower-about button,.right-lower-about h1,.right-lower-about button,.heading-project h1,.heading-project p",{
    y:200,
    scale:0,
    opacity:0,
    duration:2,
    stagger:.1,
    

})
tl3.from(".row img,.row h1,.row p,.row button , .top-contact h1",{
    scale:0,
    opacity:0,
    duration:2,
    stagger:.1,
    

})
tl3.from("form,.top-contact p",{
    scale:-1,
    opacity:0,
    duration:3,
    
    
})
tl3.from(".left-top-footer h1,.left-top-footer p",{
    y:100,
    opacity:0,
    duration:1,
    stagger:.1,
    
})
tl3.from(".right-top-footer h1,.right-top-footer i",{
    x:-100,
    opacity:0,
    duration:.5,
    stagger:.1,
    
    
})
tl3.from(".end-footer i,.end-footer p",{
    x:-300,
    opacity:0,
    duration:1,
    
    
})

