document.addEventListener('DOMContentLoaded', () => {
  /* ===== Mobile menu ===== */
  const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.toggle("show-mobile-menu");
    });
  }

  if (menuCloseButton && menuOpenButton) {
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
  }

  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => menuOpenButton && menuOpenButton.click());
  });

  /* ===== Swiper sliders ===== */
  if (window.Swiper) {
    new Swiper(".slider-wrapper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
      pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: { 0:{slidesPerView:1}, 768:{slidesPerView:2}, 1024:{slidesPerView:3} }
    });
  }

  /* ===== "Read more" expanders ===== */
  document.querySelectorAll(".expand-button").forEach((button) => {
    button.addEventListener("click", () => {
      const moreText = button.previousElementSibling;
      const isExpanded = moreText && moreText.style.display === "inline";
      if (moreText) moreText.style.display = isExpanded ? "none" : "inline";
      button.textContent = isExpanded ? "Read more" : "Read less";
    });
  });

  /* ===== Courses toggle (link) ===== */
  const link = document.getElementById('toggle-courses');
  const panel = document.getElementById('course-images');
  if (link && panel) {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // stop #jump
      const isOpen = panel.classList.toggle('is-visible');
      panel.classList.toggle('is-hidden', !isOpen);
      link.setAttribute('aria-expanded', String(isOpen));
      panel.setAttribute('aria-hidden', String(!isOpen));
      link.textContent = isOpen
        ? 'Hide courses introduction'
        : 'Click here to see two courses introduction';
    });
  }
});





