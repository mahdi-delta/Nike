const ServiceCard = ({ imgURL, label, subtext }) => {
     return (
          <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white ">
               <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-coral-red group-hover:to-pink-500 ">
                    <img
                         src={imgURL}
                         alt={label}
                         width={24}
                         height={24}
                         className="transition-transform duration-300 group-hover:scale-110"
                    />
               </div>
               <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold transition-colors duration-300 group-hover:text-coral-red">
                    {label}
               </h3>
               <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray transition-all duration-300 group-hover:text-gray-700">
                    {subtext}
               </p>
          </div>
     );
};

export default ServiceCard;
