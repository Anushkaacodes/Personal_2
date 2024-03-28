const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var loader=document.querySelector("#loader")
setTimeout(function(){
loader.style.top= "-100%"
},2100)




function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

page4Animation()


gsap.registerPlugin(ScrollTrigger);
gsap.from(".paraWeb p", {
    y:50,
    opacity:0,
    delay:2.8, 
    duration:0.5,
    stagger:1,
   
} )

gsap.from("leftSecondPage",{
    ScrollTrigger:{
        trigger: ".leftSecondPage",
        start: "top 20%",
        
      markers:true
    }
})

var eye = document.getElementsByClassName("eye-ball");
 document.onmousemove = function(){
    var width = window.innerWidth;
    var x = event.clientX;
    var a = x / width;
    a= a*100;
    var height = window.innerHeight;
    var y = event.clientY;
     var b = y / height;
     b=b*100;
     eye[0].style.cssText = "left:" +a+ "%; top:" + b  + "%;" + "transform.translate(-"+a+"%, -"+b+"%)";
     eye[1].style.cssText = "left:" +a+ "%; top:" + b  + "%;" + "transform.translate(-"+a+"%, -"+b+"%)";
 }

 document.querySelector(".icons").setAttribute("href", "https://github.com/Anushkaacodes");