import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
     return (
          <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container ">
               <div className="flex-1">
                    <img
                         src={offer}
                         width={773}
                         height={687}
                         alt="image"
                         className="object-contain w-full transition-all duration-700 hover:scale-105 hover:-rotate-2 max-sm:ml-4"
                    />
               </div>
               <div className="flex flex-1 flex-col ">
                    <h2 className="mt-10 font-palanquin text-3xl sm:text-4xl capitalize font-bold lg:max-w-lg">
                         <span className="text-coral-red">Special </span>Offer
                    </h2>

                    <p className="mt-4 lg:max-w-lg info-text">
                         Embark on a shopping journey that redefines your experience with unbeatable
                         deals. From premier selections to incredible savings, we offer unparalleled
                         value that sets us apart.
                    </p>

                    <p className="mt-6 lg:max-w-lg">
                         Navigate a realm of possibilities designed to fulfill your unique desires,
                         surpassing the loftiest expectations. Your journey with us is nothing short
                         of exceptional.
                    </p>

                    <div className="mt-11 flex flex-wrap gap-4 max-sm:flex max-sm:flex-col max-sm:items-center">
                         <Button label="shop now" iconURl={arrowRight} />
                         <Button
                              label="learn more"
                              backgroundColor="bg-white"
                              borderColor="border-slate-gray"
                              textColor="text-slate-gray"
                         />
                    </div>
               </div>
          </section>
     );
};

export default SpecialOffer;
