const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".expand-button").forEach((button) => {
    button.addEventListener("click", () => {
      const moreText = button.previousElementSibling;
      const isExpanded = moreText.style.display === "inline";

      moreText.style.display = isExpanded ? "none" : "inline";
      button.textContent = isExpanded ? "Read more" : "Read less";
    });
  });
});

new Swiper(".testimonials-swiper-2", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  pagination: {
    el: ".testimonials-swiper-2 .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".feedback-next",
    prevEl: ".feedback-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('show-courses-btn');
  const panel = document.getElementById('course-images');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const isHidden = panel.hasAttribute('hidden');
    if (isHidden) {
      panel.removeAttribute('hidden');
      panel.style.display = 'flex'; // ensure layout
      btn.textContent = 'Hide courses introduction';
      btn.setAttribute('aria-expanded', 'true');
    } else {
      panel.setAttribute('hidden', '');
      btn.textContent = 'Click here to see two courses introduction';
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('toggle-courses');
  const panel = document.getElementById('course-images');

  if (!link || !panel) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = panel.classList.toggle('is-visible');
    panel.classList.toggle('is-hidden', !isOpen);

    link.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
    link.textContent = isOpen
      ? 'Hide courses introduction'
      : 'Click here to see two courses introduction';
  });
});




