import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const LoadAnim = () => {
const loadP = document.getElementById("load");

if (loadP){
    const tl =gsap.timeline()

    tl.set(loadP,{
        yPercent:0,
    }).to(loadP,{
        yPercent:100,
        duration:1,
        ease:"power1.inOut",
        delay:1
    })
}
}


