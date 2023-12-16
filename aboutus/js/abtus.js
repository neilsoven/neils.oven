gsap.registerPlugin(ScrollTrigger);

import SplitType from "split-type";

const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const bg = char.dataset.bgColor;
  const fg = char.dataset.fgColor;
  const text = new SplitType(".reveal-type", { absolute: true });

  gsap.fromTo(
    text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    }
  );
});
