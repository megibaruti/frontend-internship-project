document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide1', {
      type: 'carousel',
      perView: 1, 
    }).mount();
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide-featured', { 
        type: 'carousel',
        perView: 5,
        focusAt:'center',
        breakpoints: {
            1200: { perView: 3 },
            768: { perView: 3 }
        }
    }).mount();
});


document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide-about-us', { 
      type: 'carousel',
      perView: 4,
      focusAt:'center',
      breakpoints: {
        1024: {perView: 2},
          640: { perView: 1.5 }
      }
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide-new-products', { 
      type: 'carousel',
      perView: 4,
      focusAt:'center',
      breakpoints: {
          1024: { perView: 2 },
      }
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
      mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
  });
});
