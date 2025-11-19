
// <!-- Carousel Script -->

  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('hidden', idx !== i);
    });
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000); // change every 3 seconds





(function () {
  const items = document.querySelectorAll('#image-gallery .gallery-item');
  let index = 0;

  function updateActiveImage() {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  updateActiveImage();

  setInterval(() => {
    index = (index + 1) % items.length;
    updateActiveImage();
  }, 2000);
})();




// import { animate } from "animejs";

// animate("span", {
//   // Property keyframes
//   y: [
//     { to: "-2.75rem", ease: "outExpo", duration: 600 },
//     { to: 0, ease: "outBounce", duration: 800, delay: 100 },
//   ],
//   // Property specific parameters
//   rotate: {
//     from: "-1turn",
//     delay: 0,
//   },
//   delay: (_, i) => i * 50, // Function based value
//   ease: "inOutCirc",
//   loopDelay: 1000,
//   loop: true,
// });