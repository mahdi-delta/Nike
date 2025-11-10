import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
     return (
          <div className="flex justify-center items-center flex-col group hover:scale-105 transition-all duration-500 cursor-pointer p-6 rounded-2xl hover:shadow-2xl hover:bg-gray-50">
               <img
                    src={imgURL}
                    className="rounded-full object-cover w-[120px] h-[120px] transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-coral-red/30"
                    alt=""
               />
               <p className="mt-6 max-w-sm text-center info-text transition-colors duration-300 group-hover:text-gray-800">
                    {feedback}
               </p>
               <div className="mt-3 flex justify-center items-center gap-2.5">
                    <img
                         src={star}
                         width={24}
                         height={24}
                         className="object-contain m-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                         alt=""
                    />
                    <p className="text-xl font-montserrat text-slate-gray transition-colors duration-300 group-hover:text-coral-red">
                         {rating}
                    </p>
               </div>
               <h3 className="mt-1 font-palanquin text-3xl text-center font-bold transition-all duration-300 group-hover:text-coral-red">
                    {customerName}
               </h3>
          </div>
     );
};

export default ReviewCard;
