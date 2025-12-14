import { gsap } from "gsap";
import { SplitText } from "gsap/all";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  const container = document.querySelector(".container");
  const navToggle = document.querySelector(".nav-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuContent = document.querySelector(".menu-content");
  const menuLabel = document.querySelector(".menu-label");
  const body = document.body;
  const menuLinks = document.querySelectorAll(".menu-link a");

  let isMenuOpen = false;
  let isMenuAnimating = false;

  menuLinks.forEach((link) => {
    const chars = link.querySelectorAll("span");
    document.fonts.ready.then(() => {
      chars.forEach((char, charIndex) => {
        const split = new SplitText(char, { type: "chars" });
        split.chars.forEach((char) => {
          char.classList.add("char");
        });
        if (charIndex === 1) {
          gsap.set(split.chars, { y: "110%" });
        }
      });
    });
  });

  gsap.set(menuContent, { y: "50%", opacity: 0.25 });
  gsap.set(menuLinks, { y: "150%" });

  function closeMenuAnimation() {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(menuOverlay, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.set(menuLinks, { y: "100%" });
        gsap.set(menuContent, { y: "50%" });
        gsap.set(".menu-link", { overflow: "hidden" });

        isMenuOpen = false;
        isMenuAnimating = false;
        body.classList.remove("menu-open");

        if (menuLabel) menuLabel.textContent = "Menu";
      },
    });

    tl.to(menuLinks, {
      y: "100%",
      duration: 1.25,
      stagger: 0.1,
      delay: 0.1,
      ease: "expo.inOut",
    });

    tl.to(
      container,
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        delay: 0.25,
        ease: "expo.inOut",
      },
      0.4
    );

    tl.to(
      menuOverlay,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        ease: "expo.inOut",
      },
      "<"
    );

    return tl;
  }

  // --------------------------------------------------------------------
  // TOGGLE MENU
  // --------------------------------------------------------------------
  function toggleMenu() {
    if (isMenuAnimating) return;
    isMenuAnimating = true;

    if (!isMenuOpen) {
      body.classList.add("menu-open");

      if (menuLabel) {
        menuLabel.textContent = "Close";
      }

      gsap.to(container, {
        y: "0%",
        opacity: 0.25,
        duration: 1,
        ease: "expo.out",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "expo.out",
        onComplete: () => {
          gsap.set(container, { y: "40%" });
          gsap.set(".menu-link", { overflow: "hidden" });
          isMenuOpen = true;
          isMenuAnimating = false;
        },
      });

      gsap.to(menuContent, {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "expo.out",
      });

      gsap.to(menuLinks, {
        y: "0%",
        duration: 1.25,
        stagger: 0.1,
        delay: 0.25,
        ease: "expo.out",
      });
    } else {
      closeMenuAnimation();
    }
  }

  navToggle.addEventListener("click", toggleMenu);

  // --- Menu Link Hover Animations ---
  const menuLinkContainers = document.querySelectorAll(".menu-link");
  menuLinkContainers.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (window.innerWidth < 1000) return;

      const linkCopy = link.querySelectorAll("a span");
      const visibleCopy = linkCopy[0];
      const animatedCopy = linkCopy[1];

      const visibleChars = visibleCopy.querySelectorAll(".char");
      gsap.to(visibleChars, {
        y: "-110%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });

      const animatedChars = animatedCopy.querySelectorAll(".char");
      gsap.to(animatedChars, {
        y: "0%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });
    });

    link.addEventListener("mouseleave", () => {
      if (window.innerWidth < 1000) return;

      const linkCopy = link.querySelectorAll("a span");
      const visibleCopy = linkCopy[0];
      const animatedCopy = linkCopy[1];

      const animatedChars = animatedCopy.querySelectorAll(".char");
      gsap.to(animatedChars, {
        y: "110%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });

      const visibleChars = visibleCopy.querySelectorAll(".char");
      gsap.to(visibleChars, {
        y: "0%",
        stagger: 0.03,
        duration: 0.5,
        ease: "expo.inOut",
      });
    });
  });
});
