/* =====================================================
   SELECT ELEMENTS
===================================================== */

const sideNav = document.querySelector(".sideNav");

const cancel = document.querySelector(".cancel");

const hamburger = document.querySelector(".hamburger");

const sideLinks = document.querySelectorAll(".sideLinks a");

const themeButtons = document.querySelectorAll(".themeToggle");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightboxImage");

const lightboxClose = document.querySelector(".lightboxClose");

const portfolioImages =
  document.querySelectorAll(".portofolio img");


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

function displayNav() {

  hamburger.addEventListener("click", () => {

    sideNav.style.display = "block";

  });


  cancel.addEventListener("click", () => {

    sideNav.style.display = "none";

  });


  /*
    Close the side navigation after
    clicking any navigation link.
  */

  sideLinks.forEach((link) => {

    link.addEventListener("click", () => {

      sideNav.style.display = "none";

    });

  });

}


displayNav();


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

function updateThemeButtons() {

  const darkMode =
    document.body.classList.contains("dark");


  themeButtons.forEach((button) => {

    if (darkMode) {

      button.innerHTML = "☀️ Light Mode";

      button.setAttribute(
        "aria-label",
        "Switch to light mode"
      );

    } else {

      button.innerHTML = "🌙 Dark Mode";

      button.setAttribute(
        "aria-label",
        "Switch to dark mode"
      );

    }

  });

}


/*
  Check whether the user previously
  selected a theme.
*/

const savedTheme =
  localStorage.getItem("ptech-theme");


if (savedTheme === "dark") {

  document.body.classList.add("dark");

}


updateThemeButtons();


/*
  All theme buttons use the same
  theme-changing function.

  Desktop gets one button.
  Mobile gets another button.
*/

themeButtons.forEach((button) => {

  button.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const darkMode =
      document.body.classList.contains("dark");


    if (darkMode) {

      localStorage.setItem(
        "ptech-theme",
        "dark"
      );

    } else {

      localStorage.setItem(
        "ptech-theme",
        "light"
      );

    }


    updateThemeButtons();

  });

});


/* =====================================================
   LIGHTBOX
===================================================== */


/*
  Open image preview
*/

portfolioImages.forEach((image) => {

  image.addEventListener("click", () => {

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");

    lightbox.setAttribute(
      "aria-hidden",
      "false"
    );

    /*
      Prevent the page from scrolling
      while the image preview is open.
    */

    document.body.style.overflow = "hidden";

  });

});


/*
  Close lightbox
*/

function closeLightbox() {

  lightbox.classList.remove("active");

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  lightboxImage.src = "";

  document.body.style.overflow = "";

}


lightboxClose.addEventListener(
  "click",
  closeLightbox
);


/*
  Close when clicking the dark
  area outside the image.
*/

lightbox.addEventListener("click", (event) => {

  if (event.target === lightbox) {

    closeLightbox();

  }

});


/*
  Escape key closes the preview.
*/

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    if (lightbox.classList.contains("active")) {

      closeLightbox();

    }


    if (
      window.innerWidth <= 375 &&
      sideNav.style.display === "block"
    ) {

      sideNav.style.display = "none";

    }

  }

});