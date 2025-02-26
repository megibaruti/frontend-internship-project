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
      focusAt:'0',
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

function openTabs(evt, contentName) {
  var container = evt.currentTarget.closest(".best-sellers-container"); 
  var tabcontent = container.getElementsByClassName("products");

  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  container.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

  document.getElementById(contentName).style.display = "grid";

  evt.currentTarget.classList.add("active");
}

function openLatestTabs(evt, contentName) {
  var container = evt.currentTarget.closest(".the-latest");
  var tabcontent = container.getElementsByClassName("products");

  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  container.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

  document.getElementById(contentName).style.display = "grid";

  evt.currentTarget.classList.add("active");
}