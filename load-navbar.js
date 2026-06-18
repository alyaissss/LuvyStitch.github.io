const baseUrl = new URL(
  ".",
  document.currentScript?.src || window.location.href,
);

async function loadHtmlComponent(filename, containerId) {
  try {
    const url = new URL(filename, baseUrl);
    const html = await fetchText(url);
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
  }
}

async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    return await response.text();
  } catch (fetchError) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url.href, true);
      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 0) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`XHR failed: ${xhr.status}`));
        }
      };
      xhr.onerror = () => reject(fetchError);
      xhr.send();
    });
  }
}

async function loadNavbar() {
  await loadHtmlComponent("navbar.html", "navbar-container");
  initializeNavbar();
}

async function loadFooter() {
  await loadHtmlComponent("footer.html", "footer-container");
}

async function loadComponents() {
  await Promise.all([loadNavbar(), loadFooter()]);
}

// Initialize navbar functionality
function initializeNavbar() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");

      const spans = mobileMenuBtn.querySelectorAll("span");
      if (mobileNav.classList.contains("hidden")) {
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";
      } else {
        spans[0].style.transform = "rotate(45deg) translate(10px, 10px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
      }
    });
  }

  const joinBtn = document.getElementById("join-btn");
  const heroJoinBtn = document.getElementById("hero-join");
  const joinModal = document.getElementById("join-modal");
  const closeModal = document.getElementById("close-modal");
  const joinForm = document.getElementById("join-form");

  if (joinBtn && joinModal) {
    joinBtn.addEventListener("click", () => {
      joinModal.classList.remove("hidden");
    });
  }

  if (heroJoinBtn && joinModal) {
    heroJoinBtn.addEventListener("click", () => {
      joinModal.classList.remove("hidden");
    });
  }

  if (closeModal && joinModal) {
    closeModal.addEventListener("click", () => {
      joinModal.classList.add("hidden");
    });

    joinModal.addEventListener("click", (e) => {
      if (e.target === joinModal) {
        joinModal.classList.add("hidden");
      }
    });
  }

  if (joinForm && joinModal) {
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Welcome to LuvyStitch! 🧶");
      joinForm.reset();
      joinModal.classList.add("hidden");
    });
  }

  const mobileLinks = document.querySelectorAll("#mobile-nav a");
  if (mobileNav && mobileMenuBtn) {
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
        const spans = mobileMenuBtn.querySelectorAll("span");
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";
      });
    });
  }

  updateActiveNav();
}

// Update active navigation
function updateActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#desktop-nav a, #mobile-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("text-primary", "font-bold");
      link.classList.remove("text-on-surface-variant");
    }
  });
}

// Load navbar and footer when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadComponents);
} else {
  loadComponents();
}
