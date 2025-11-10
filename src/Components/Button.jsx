const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
     return (
          <button
               className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
              ${
                   backgroundColor
                        ? `${backgroundColor} ${textColor} ${borderColor}`
                        : "bg-coral-red text-white border-coral-red hover:scale-105 hover:text-coral-red hover:bg-black hover:border-black active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl"
              } rounded-full ${fullWidth && "w-full"} group relative overflow-hidden`}
          >
               <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    {label}
               </span>

               {iconURL && (
                    <img
                         src={iconURL}
                         alt="arrow right icon"
                         className="ml-2 rounded-full bg-white w-5 h-5 relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-45"
                    />
               )}

               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
          </button>
     );
};

export default Button;
