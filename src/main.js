import './style.css'
import gsap from 'gsap'

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

