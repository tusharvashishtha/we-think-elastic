import './style.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import 'remixicon/fonts/remixicon.css'


const images = document.querySelectorAll('.loaderImg');
const tl = gsap.timeline();

images.forEach((img) => {
  tl.to(img, {
    opacity: 1,
    duration: 0.1,
  })
  .to(img, {
    opacity: 0,
    duration: 0.1,
  })
});

tl.to(images, {
  height: 0,
  duration: 0.1,
  ease: 'power1.inOut'
})

tl.to("#loader", {
  height: 0,
  duration: 1,
  delay: 0.2,
  ease: 'power1.inOut'
});

tl.to(".hello", {
   translateY: 1,
   duration: 1,
   stagger: 0.1,

},"-=0.5")

gsap.to("#video", {
  scale: 1,
  scrollTrigger: {
    trigger: "#video",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
    // markers: true
  }
})

gsap.to(".page3span", {
    translateY: 1,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power1.inOut',
    scrub: 2,
    scrollTrigger: ".page3span"
})

gsap.to(".page4Svg2", {
  rotate: 360,
  duration: 10,
  ease: "none",
  repeat: -1
})

gsap.to("#page5 h1", {
  transform: "translateX(-150%)",
  duration: 4,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "body",

    start: "top -10%",
    end: "top -350%",
    scrub: 2,
    pin: true
  }
})

gsap.to("#page8 h2", {
  translateY: 1,
 duration: 0.5,


    scrollTrigger: {
      trigger: "#page8 h2",
      scroller: "body",
      // markers: true,
      start: "top 100%",
      end: "top 45%",
      scrub: 2,
    }
})




const cursorDivs = document.querySelectorAll('.cursordiv');

cursorDivs.forEach(div => {
  const cursor = div.querySelector('.cursor');

  cursor.classList.add('hidden');

  div.addEventListener('mouseenter', () => {
    cursor.classList.remove('hidden');
  });

  div.addEventListener('mouseleave', () => {
    cursor.classList.add('hidden');
  });

  div.addEventListener('mousemove', (e) => {
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = 25;
    const offsetY = 25;

    cursor.style.left = `${x - offsetX}px`;
    cursor.style.top = `${y - offsetY}px`;
    

  });
});

let lastScroll = 0;

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    gsap.to("#navbar", {
      y: "-100%",
      duration: 0.1,
     
    });
  } else {
    gsap.to("#navbar", {
      y: "0%",
      duration: 0.1,
     
    });
  }
});



let lastScrollY = window.scrollY;
window.addEventListener('scroll', function () {
  const navBar = document.getElementById('navbar');
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
   
    navBar.style.transform = 'translateY(-100%)';
  } else {
  
    navBar.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;
});