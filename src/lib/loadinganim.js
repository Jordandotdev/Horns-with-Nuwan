import gsap from "gsap";

export const LoadAnim = (delayDuration) => {
  return new Promise((resolve) => {
    const loadP = document.getElementById("load");

    if (loadP) {
      const tl = gsap.timeline();

      tl.set(loadP, { opacity: 1 })
        .to(loadP, {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          delay: delayDuration,
          onComplete: () => {
            loadP.style.display = "none";
            resolve(); 
          }
        });
    } else {
      resolve(); 
    }
  });
};
