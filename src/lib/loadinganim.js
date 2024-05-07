import gsap from "gsap";

export const LoadAnim = (delayDuration) => {
const loadP = document.getElementById("load");

if (loadP){
    const tl =gsap.timeline()

    tl.set(loadP,{
        yPercent:0,
    }).to(loadP,{
        yPercent:100,
        opacity:0,
        duration:1,
        ease:"power1.inOut",
        delay:delayDuration,
    })
}
}


