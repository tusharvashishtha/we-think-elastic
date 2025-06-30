import './style.css'
import gsap from 'gsap'

const images = document.querySelectorAll('.loaderImg');
const tl = gsap.timeline({ repeat: -1 });

images.forEach((img) => {
  tl.to(img, {
    opacity: 1,
    duration: 0.1,
  })
  .to(img, {
    opacity: 0,
    duration: 0.1,
  });
});
