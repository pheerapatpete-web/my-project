export function initPortfolio() {
  console.log("Portfolio Loaded Successfully");

  setupSmoothScroll();
  setupViewMoreAlert();
}
function setupSmoothScroll() {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

function setupViewMoreAlert() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
    });
  });
}