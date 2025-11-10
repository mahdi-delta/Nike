import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => {
     return (
          <footer className="max-container">
               <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                    <div className="flex flex-col items-start">
                         <a href="/" className="transition-transform duration-300 hover:scale-110">
                              <img src={footerLogo} alt="footer image" w={150} height={46} />
                         </a>
                         <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                              Get shoes ready for the new term at your nearest Nike store. Find Your
                              perfect Size In Store. Get Rewards
                         </p>
                         <div className="flex items-center gap-5 mt-8">
                              {socialMedia.map((icon) => (
                                   <div
                                        key={icon.alt}
                                        className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-coral-red hover:-translate-y-2 hover:shadow-lg"
                                   >
                                        <img
                                             src={icon.src}
                                             alt={icon.alt}
                                             width={24}
                                             height={24}
                                             className="transition-transform duration-300 hover:rotate-12"
                                        />
                                   </div>
                              ))}
                         </div>
                    </div>

                    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-3">
                         {footerLinks.map((section) => (
                              <div key={section.title}>
                                   <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                                        {section.title}
                                   </h4>
                                   {section.links.map((link) => (
                                        <li
                                             key={link.name}
                                             className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red transition-all duration-300 hover:translate-x-2 cursor-pointer"
                                        >
                                             <a href="">{link.name}</a>
                                        </li>
                                   ))}
                              </div>
                         ))}
                    </div>
               </div>

               <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                    <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer hover:text-white transition-colors duration-300">
                         <img
                              src={copyrightSign}
                              alt="copyright"
                              width={20}
                              height={20}
                              className="rounded-full m-0 transition-transform duration-300 hover:rotate-180"
                         />
                         <p>Copyright. All rights reserved</p>
                    </div>
                    <p className="font-montserrat cursor-pointer hover:text-coral-red transition-colors duration-300">
                         Terms && Conditions
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
