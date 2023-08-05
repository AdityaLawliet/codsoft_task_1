const selectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
},
  {
    // In the Viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  });
obs.observe(selectionHeroEl);

// smoth scroll
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});


// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navBarEl = document.querySelector(".nav-bar");

btnNavEl.addEventListener("click", function () {
  navBarEl.classList.toggle("nav-open");
});