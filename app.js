const navSlide = () => {
  const burger = document.querySelector(".nav_burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");
  //Toggle nav

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s cubic-bezier(0.61, -0.31, 0.33, 1.22) forwards ${index /
          7 +
          0.15}s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
