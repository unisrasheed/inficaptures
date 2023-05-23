// select the icon element by ID
let check1 = document.getElementById("checboxdiv");
let check2 = document.getElementById("checboxdiv2");
console.log(check2);
// add a click event listener to the icon element
check1.addEventListener("change", function () {
  // select all images with the "img" class

  let images = document.querySelectorAll(".black");

  // loop through the images and toggle the "filter" style property
  images.forEach(function (image) {
    if (image.style.filter === "none") {
      image.style.filter = "grayscale(100%)";
    } else {
      image.style.filter = "none";
    }
  });
});

check2.addEventListener("change", function () {
  // select all images with the "img" class

  let images = document.querySelectorAll(".black");

  // loop through the images and toggle the "filter" style property
  images.forEach(function (image) {
    if (image.style.filter === "none") {
      image.style.filter = "grayscale(100%)";
    } else {
      image.style.filter = "none";
    }
  });
});
