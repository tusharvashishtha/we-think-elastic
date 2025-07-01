import './style.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll('.loaderImg');
const tl = gsap.timeline();

// images.forEach((img) => {
//   tl.to(img, {
//     opacity: 1,
//     duration: 0.1,
//   })
//   .to(img, {
//     opacity: 0,
//     duration: 0.1,
//   })
// });

// tl.to(images, {
//   height: 0,
//   duration: 0.1,
//   ease: 'power1.inOut'
// })

// tl.to("#loader", {
//   height: 0,
//   duration: 1,
//   delay: 0.2,
//   ease: 'power1.inOut'
// });

tl.from(".hello", {
   height : 0,
   duration: 0.6,
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