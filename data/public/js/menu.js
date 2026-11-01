document.addEventListener("DOMContentLoaded", () => {
  console.log("[menu.js] initializing");

  const btn =
    document.getElementById("menu-button") ||
    document.querySelector(".hamburger") ||
    document.querySelector("#menu-button");

  const navNode =
    document.querySelector(".nav") || document.querySelector("nav");
  const header = document.querySelector(".header");
  const SCROLL_THRESHOLD = 10;

  if (!btn || !navNode) {
    console.error(
      "[menu.js] critical elements missing: menu button or nav — aborting menu setup"
    );
    return;
  }

  try {
    btn.type = btn.type || "button";
  } catch (e) {}

  const ICON_MENU = `
<svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" aria-hidden="true">
  <path fill="currentColor" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
</svg>`;
  const ICON_CLOSE = `
<svg class="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" aria-hidden="true">
  <path fill="currentColor" d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
</svg>`;

  btn.innerHTML = ICON_MENU;

  let overlay = document.querySelector(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);
  }

  const navCloseBtn = navNode.querySelector(".nav-close");
  if (navCloseBtn) navCloseBtn.innerHTML = ICON_CLOSE;

  function toggleMenu(open) {
    navNode.classList.toggle("open", open);
    navNode.setAttribute("aria-hidden", String(!open));
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.classList.toggle("is-active", open);
    btn.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    document.body.classList.toggle("nav-scrolled", open);
    if (header)
      header.classList.toggle(
        "scrolled",
        open || window.pageYOffset > SCROLL_THRESHOLD
      );
    overlay.classList.toggle("visible", open);
    if (navCloseBtn) navCloseBtn.classList.toggle("visible", open);
    console.log(`[menu.js] menu ${open ? "opened" : "closed"}`);
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(!navNode.classList.contains("open"));
  });

  if (navCloseBtn) {
    navCloseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu(false);
    });
  }

  overlay.addEventListener("click", () => toggleMenu(false));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) toggleMenu(false);
  });

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset > SCROLL_THRESHOLD;
        if (header) {
          header.classList.toggle("scrolled", scrolled);
          if (!navNode.classList.contains("open")) {
            document.body.classList.toggle("nav-scrolled", scrolled);
          }
        }
        ticking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" || ev.key === "Esc") toggleMenu(false);
  });

  document.addEventListener("click", (e) => {
    if (!navNode.classList.contains("open")) return;
    if (!navNode.contains(e.target) && !btn.contains(e.target))
      toggleMenu(false);
  });

  const navLinks = Array.from(navNode.querySelectorAll('a[href^="#"]'));
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.split("#")[1];
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      if (navNode.classList.contains("open")) toggleMenu(false);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

// Enhanced scroll behavior for header
const bannerSection = document.querySelector(".banner");
if (header && bannerSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle("over-hero", entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  observer.observe(bannerSection);
}

// Add scroll animations for elements
const observeElements = () => {
  const elements = document.querySelectorAll(
    ".stat, .about-title, .about-text, .speaker-card, .invite-card, .member, .faq-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
};

// Initialize animations when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", observeElements);
} else {
  observeElements();
}
