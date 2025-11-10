import { star } from "../assets/icons";
const PopularProductsCard = ({ imgURL, name, price }) => {
     return (
          <div className="flex flex-1 flex-col w-full max-sm:w-full group cursor-pointer">
               <div className="overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 group-hover:shadow-2xl">
                    <img
                         src={imgURL}
                         alt={name}
                         className="w-[280px] h-[280px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
               </div>
               <div className="mt-8 flex justify-start gap-2.5 transition-transform duration-300 group-hover:translate-x-2">
                    <img src={star} alt="rating" width={24} height={24} className="animate-pulse" />
                    <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
               </div>
               <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin transition-colors duration-300 group-hover:text-coral-red">
                    {name}
               </h3>
               <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2">
                    {price}
               </p>
          </div>
     );
};

export default PopularProductsCard;
