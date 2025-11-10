/** @type {import('tailwindcss').Config} */
export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
          fontSize: {
               xs: ["12px", "16px"],
               sm: ["14px", "20px"],
               base: ["16px", "19.5px"],
               lg: ["18px", "21.94px"],
               xl: ["20px", "24.38px"],
               "2xl": ["24px", "29.26px"],
               "3xl": ["28px", "50px"],
               "4xl": ["48px", "58px"],
               "8xl": ["96px", "106px"],
          },
          extend: {
               fontFamily: {
                    palanquin: ["Palanquin", "sans-serif"],
                    montserrat: ["Montserrat", "sans-serif"],
               },
               colors: {
                    primary: "#ECEEFF",
                    "coral-red": "#FF6452",
                    "slate-gray": "#6D6D6D",
                    "pale-blue": "#F5F6FF",
                    "white-400": "rgba(255, 255, 255, 0.80)",
               },
               boxShadow: {
                    "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
               },
               backgroundImage: {
                    hero: "url('assets/images/collection-background.svg')",
                    card: "url('assets/images/thumbnail-background.svg')",
               },
               screens: {
                    wide: "1440px",
               },
               keyframes: {
                    fadeIn: {
                         "0%": { opacity: "0", transform: "translateY(20px)" },
                         "100%": { opacity: "1", transform: "translateY(0)" },
                    },
                    slideInLeft: {
                         "0%": { opacity: "0", transform: "translateX(-50px)" },
                         "100%": { opacity: "1", transform: "translateX(0)" },
                    },
                    slideInRight: {
                         "0%": { opacity: "0", transform: "translateX(50px)" },
                         "100%": { opacity: "1", transform: "translateX(0)" },
                    },
                    slideInUp: {
                         "0%": { opacity: "0", transform: "translateY(50px)" },
                         "100%": { opacity: "1", transform: "translateY(0)" },
                    },
                    scaleIn: {
                         "0%": { opacity: "0", transform: "scale(0.8)" },
                         "100%": { opacity: "1", transform: "scale(1)" },
                    },
                    bounce: {
                         "0%, 100%": { transform: "translateY(0)" },
                         "50%": { transform: "translateY(-10px)" },
                    },
                    float: {
                         "0%, 100%": { transform: "translateY(0px)" },
                         "50%": { transform: "translateY(-20px)" },
                    },
               },
               animation: {
                    fadeIn: "fadeIn 0.8s ease-out",
                    slideInLeft: "slideInLeft 0.8s ease-out",
                    slideInRight: "slideInRight 0.8s ease-out",
                    slideInUp: "slideInUp 0.8s ease-out",
                    scaleIn: "scaleIn 0.6s ease-out",
                    bounce: "bounce 2s infinite",
                    float: "float 3s ease-in-out infinite",
               },
          },
     },
     plugins: [],
};
