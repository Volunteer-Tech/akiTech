import gsap  from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";

const useCharAnimation = (cls) => {
  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
      tl.to(cls, { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: .5 });
  }, []);

};

export default useCharAnimation;
