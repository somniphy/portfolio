import gsap from "gsap";
import { CustomEase, ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {
  CustomEase.create("hop", "0.85, 0, 0.15, 1");

  const counterProgress = document.querySelector(".counter h1");
  const counter = { value: 0 };
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  let split = SplitText.create(".about-copy, .about-tools, .about-contact", {
    type: "lines",
    mask: "lines",
    linesClass: "line",
  });

  gsap.set(split.lines, { yPercent: 120 });

  const counterTl = gsap.timeline({ delay: 0.4 });
  const overlayTextTl = gsap.timeline({ delay: 0.75 });
  const revealTl = gsap.timeline({ delay: 0.5 });

  counterTl.to(counter, {
    value: 100,
    duration: 4,
    ease: "power2.out",
    onUpdate: () => {
      counterProgress.textContent = Math.floor(counter.value);
    },
  });

  overlayTextTl
    .to(".overlay-text", {
      y: "0",
      duration: 0.75,
      ease: "hop",
    })
    .to(".overlay-text", {
      y: "-2rem",
      duration: 0.75,
      ease: "hop",
      delay: 0.75,
    })
    .to(".overlay-text", {
      y: "-4rem",
      duration: 0.75,
      ease: "hop",
      delay: 0.75,
    })
    .to(".overlay-text", {
      y: "-6rem",
      duration: 0.75,
      ease: "hop",
      delay: 1,
    });
  revealTl
    .to(".img", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      ease: "hop",
    })
    .to(".hero-images", {
      gap: "0.75vw",
      stagger: 0.05,
      duration: 1,
      ease: "hop",
    })
    .to(
      ".img",
      {
        scale: 1,
        duration: 1,
        ease: "hop",
      },
      "<"
    )
    .to(".img:not(.hero-img)", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      stagger: 0.1,
      duration: 1,
      ease: "hop",
    })
    .to(".hero-overlay", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "hop",
    })
    .to(".img-profile-overlay", {
      yPercent: -100,
      duration: 1.1,
      ease: "power4.inOut",
    })
    .to(
      ".img-profile-reveal img",
      {
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      split.lines,
      {
        yPercent: 0,
        stagger: 0.15,
        duration: 1.1,
        ease: "hop",
      },
      "<+=0.3"
    )
    .to("nav", {
      zIndex: 2,
    })
    .to(".container", {
      y: "0",
      opacity: 1,
      duration: 0.75,
      ease: "hop",
      zIndex: 1,
    });
});
