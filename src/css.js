/* ============================================================
   PORTFOLIO ANIMATIONS — scroll reveal + cursor + extras
   Drop this script at the bottom of your <body>
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── 1. CUSTOM MAGNETIC CURSOR ─────────────────────────── */
  const cursor = document.createElement("div");
  cursor.id = "cursor-dot";
  cursor.style.cssText = `
    width: 12px; height: 12px;
    background: #00d4ff;
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, width 0.2s, height 0.2s;
    mix-blend-mode: difference;
    transform: translate(-50%,-50%);
  `;

  const cursorRing = document.createElement("div");
  cursorRing.id = "cursor-ring";
  cursorRing.style.cssText = `
    width: 36px; height: 36px;
    border: 1.5px solid rgba(0,212,255,0.5);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), width 0.3s, height 0.3s, opacity 0.3s, border-color 0.3s;
    transform: translate(-50%,-50%);
    will-change: transform;
  `;

  document.body.appendChild(cursor);
  document.body.appendChild(cursorRing);

  let mouseX = 0,
    mouseY = 0;
  let ringX = 0,
    ringY = 0;
  let isVisible = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      cursor.style.opacity = "1";
      cursorRing.style.opacity = "1";
      isVisible = true;
    }

    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Lag the ring for a smooth trailing effect
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Magnetic hover on interactive elements
  document
    .querySelectorAll(
      "a, button, .btn, .portfolio--section--card, .skills--section--card",
    )
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.background = "#ff3cac";
        cursorRing.style.width = "60px";
        cursorRing.style.height = "60px";
        cursorRing.style.borderColor = "rgba(255,60,172,0.4)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.width = "12px";
        cursor.style.height = "12px";
        cursor.style.background = "#00d4ff";
        cursorRing.style.width = "36px";
        cursorRing.style.height = "36px";
        cursorRing.style.borderColor = "rgba(0,212,255,0.5)";
      });
    });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursorRing.style.opacity = "0";
    isVisible = false;
  });

  /* ── 2. SCROLL REVEAL (IntersectionObserver) ────────────── */
  const revealClasses = ["reveal", "reveal-left", "reveal-right"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Only unobserve non-repeating elements
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  // Auto-tag sections for reveal
  const autoReveal = [
    { selector: ".about--section--content", cls: "reveal" },
    { selector: ".about--section--img", cls: "reveal-left" },
    { selector: ".achievement--item", cls: "reveal" },
    { selector: ".skills--section--card", cls: "reveal" },
    { selector: ".portfolio--section--card", cls: "reveal" },
    { selector: ".testimonial--card", cls: "reveal" },
    { selector: ".contact--item", cls: "reveal-left" },
    { selector: ".contact--form--container", cls: "reveal-right" },
    { selector: ".footer--section", cls: "reveal" },
    { selector: ".footer--brand", cls: "reveal-left" },
  ];

  autoReveal.forEach(({ selector, cls }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add(cls);
      el.style.transitionDelay = `${i * 0.07}s`;
      observer.observe(el);
    });
  });

  // Also observe manually tagged .reveal elements
  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach((el) => {
      observer.observe(el);
    });

  /* ── 3. NAVBAR SCROLL STATE ─────────────────────────────── */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ── 4. ACTIVE NAV LINK (on scroll) ─────────────────────── */
  const navLinks = document.querySelectorAll(".navbar--items ul li a");
  const sections = [];

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) sections.push({ link, target });
    }
  });

  if (sections.length) {
    const activateLink = () => {
      let current = null;
      sections.forEach(({ target }) => {
        if (window.scrollY >= target.offsetTop - 120) current = target;
      });
      sections.forEach(({ link, target }) => {
        link.classList.toggle("navbar--active-content", target === current);
      });
    };
    window.addEventListener("scroll", activateLink, { passive: true });
  }

  /* ── 5. HAMBURGER MENU ──────────────────────────────────── */
  const hamburger = document.querySelector(".nav__hamburger");
  const navItems = document.querySelector(".navbar--items");

  if (hamburger && navItems) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navItems.classList.toggle("active");
    });

    // Close on link click (mobile)
    navItems.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navItems.classList.remove("active");
      });
    });
  }

  /* ── 6. ANIMATED NUMBER COUNTER ─────────────────────────── */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const raw = el.textContent.trim();
        const numMatch = raw.match(/\d+/);
        if (!numMatch) return;

        const endVal = parseInt(numMatch[0]);
        const suffix = raw.replace(numMatch[0], "");
        const duration = 1600;
        const start = performance.now();

        const easeOut = (t) => 1 - Math.pow(1 - t, 3);

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = Math.round(easeOut(progress) * endVal) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll(".stat h3, .achievement--item h3").forEach((el) => {
    counterObserver.observe(el);
  });

  /* ── 7. TYPING HEADLINE EFFECT ──────────────────────────── */
  // Finds elements with data-type attribute and types them
  document.querySelectorAll("[data-type]").forEach((el) => {
    const phrases = el.dataset.type.split("|");
    const speed = parseInt(el.dataset.speed || 80);
    const pause = parseInt(el.dataset.pause || 2000);
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
      const current = phrases[phraseIdx];
      if (deleting) {
        charIdx--;
        el.textContent = current.substring(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 400);
          return;
        }
      } else {
        charIdx++;
        el.textContent = current.substring(0, charIdx);
        if (charIdx === current.length) {
          setTimeout(() => {
            deleting = true;
            tick();
          }, pause);
          return;
        }
      }
      setTimeout(tick, deleting ? speed * 0.5 : speed);
    };
    tick();
  });

  /* ── 8. TILT EFFECT on cards ─────────────────────────────── */
  document
    .querySelectorAll(
      ".portfolio--section--card.enhanced, .skills--section--card.enhanced",
    )
    .forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const tiltX = y * -8;
        const tiltY = x * 8;
        card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
        card.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)";
        setTimeout(() => {
          card.style.transition = "";
        }, 600);
      });
    });

  /* ── 9. PARALLAX HERO IMAGE ─────────────────────────────── */
  const heroImg = document.querySelector(".hero--section--img");
  if (heroImg) {
    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.scrollY;
        heroImg.style.transform = `translateY(${scrolled * 0.12}px)`;
      },
      { passive: true },
    );
  }

  /* ── 10. SMOOTH SCROLL for anchor links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ── 11. GLITCH effect on hover for hero title ──────────── */
  const heroTitle = document.querySelector(".hero--section--title");
  if (heroTitle) {
    heroTitle.addEventListener("mouseenter", () => {
      heroTitle.style.animation = "none";
      heroTitle.style.textShadow = "2px 0 #ff3cac, -2px 0 #00d4ff";
      heroTitle.style.transition = "text-shadow 0.1s";
      setTimeout(() => {
        heroTitle.style.textShadow = "";
        heroTitle.style.transition = "text-shadow 0.3s";
      }, 200);
    });
  }
});
