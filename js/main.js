// fixed ScrollBar
window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    document.querySelector("nav").style.backgroundColor = "white";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
});

// show nav links
let navbar = document.querySelector(".fa-bars ");
let links = document.querySelector("nav .links");

navbar.onclick = () => {
  links.classList.toggle("active");
};

// Hide nav Links
document.addEventListener("click", (e) => {
  if (e.target !== links && e.target !== navbar) {
    links.classList.remove("active");
  }
});

// Close Links
let linksClose = document.querySelector(".links i");

linksClose.onclick = () => {
  links.classList.remove("active");
};

// Show and Hide search
searchIcon = document.querySelector("nav .fa-magnifying-glass");
closeSearch = document.querySelector(".search-land .close");
let search = document.querySelector(".search-land");

searchIcon.onclick = () => {
  search.classList.add("active");
  input.focus();
};
closeSearch.onclick = () => {
  search.classList.remove("active");
};

// show delete input
let input = document.querySelector("input");
let deleteInput = document.querySelector(".search-content .delete");

input.addEventListener("input", () => {
  if (input.value !== "") {
    deleteInput.style.display = "block";
  } else {
    deleteInput.style.display = "none";
  }
});

// Remove Input
document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    input.value = "";
    input.focus();
    deleteInput.style.display = "none";
  }
});

// Slide home
var swiper = new Swiper(".home", {
  loop: true,
  navigation: {
    nextEl: ".fa-chevron-right",
    prevEl: ".fa-chevron-left",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Shop Slider
var swiper = new Swiper(".product", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".fa-chevron-right",
    prevEl: ".fa-chevron-left",
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// Reviews Slider
var swiper = new Swiper(".reviews-content", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".fa-chevron-right",
    prevEl: ".fa-chevron-left",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Blogs Slider
var swiper = new Swiper(".blogs-content ", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// company slider
var swiper = new Swiper(".company-content", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
