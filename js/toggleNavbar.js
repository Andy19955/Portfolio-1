export function toggleNavigation() {
  const navbar = document.querySelector("#navigation-collapsable");
  const toggleNavButton = document.querySelector("#toggle-nav-button");
  const navigationLinks = document.querySelectorAll(".navigation-link");

  toggleNavButton.addEventListener("click", () => {
    navbar.classList.toggle("visible");
  });

  navigationLinks.forEach((navigationLink) => {
    navigationLink.addEventListener("click", () => {
      if (navbar.classList.contains("visible")) {
        navbar.classList.toggle("visible");
      }
    });
  });
}
