import { useEffect, useRef } from "react";

export const useScrollAnimation = (options = {}) => {
     const elementRef = useRef(null);
     const { threshold = 0.1, rootMargin = "0px", animationClass = "animated" } = options;

     useEffect(() => {
          const element = elementRef.current;
          if (!element) return;

          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              entry.target.classList.add(animationClass);
                         }
                    });
               },
               {
                    threshold,
                    rootMargin,
               }
          );

          observer.observe(element);

          return () => {
               if (element) {
                    observer.unobserve(element);
               }
          };
     }, [threshold, rootMargin, animationClass]);

     return elementRef;
};
