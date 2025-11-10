import { useState, useEffect } from "react";
import { arrowRight } from "../assets/icons";

const BackToTop = () => {
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          const toggleVisibility = () => {
               if (window.scrollY > 500) {
                    setIsVisible(true);
               } else {
                    setIsVisible(false);
               }
          };

          window.addEventListener("scroll", toggleVisibility);
          return () => window.removeEventListener("scroll", toggleVisibility);
     }, []);

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: "smooth",
          });
     };

     return (
          <button
               onClick={scrollToTop}
               className={`fixed bottom-8 right-8 z-40 p-4 bg-coral-red text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-black hover:rotate-180 active:scale-95 ${
                    isVisible
                         ? "opacity-100 translate-y-0"
                         : "opacity-0 translate-y-16 pointer-events-none"
               }`}
               aria-label="Back to top"
          >
               <img
                    src={arrowRight}
                    alt="arrow up"
                    className="w-6 h-6 -rotate-90 brightness-0 invert"
               />
          </button>
     );
};

export default BackToTop;
