import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
import { useState } from "react";

const Nav = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     const closeMenu = () => {
          setIsMenuOpen(false);
     };

     return (
          <header className="py-8 fixed top-0 z-50 w-full bg-white shadow-sm left-0 border-b-4 border-gray-200">
               <nav className="flex justify-between items-center max-container padding-x relative z-50">
                    <a href="/" className="transition-all duration-300 hover:scale-110">
                         <img src={headerLogo} alt="Logo" width={130} height={29} />
                    </a>

                    {/* Desktop Menu */}
                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                         {navLinks.map((item) => (
                              <li key={item.label}>
                                   <a
                                        href={item.href}
                                        className="font-montserrat text-lg text-slate-gray relative after:w-0 after:h-[2px] after:absolute after:left-0 after:-bottom-2 after:bg-coral-red hover:after:w-full after:transition-all after:duration-300 hover:text-coral-red transition-colors duration-300"
                                   >
                                        {item.label}
                                   </a>
                              </li>
                         ))}
                    </ul>

                    {/* Hamburger Icon */}
                    <div
                         className="hidden max-lg:block cursor-pointer hover:scale-110 transition-transform duration-300 active:scale-95 z-50"
                         onClick={toggleMenu}
                    >
                         {isMenuOpen ? (
                              <div className="w-6 h-6 flex flex-col justify-center items-center">
                                   <span className="block w-6 h-0.5 bg-coral-red transform rotate-45 translate-y-0.5"></span>
                                   <span className="block w-6 h-0.5 bg-coral-red transform -rotate-45 -translate-y-0.5"></span>
                              </div>
                         ) : (
                              <img src={hamburger} alt="menu" width={25} height={25} />
                         )}
                    </div>

                    <div
                         className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
                              isMenuOpen ? "translate-x-0" : "translate-x-full"
                         } z-40`}
                    >
                         <div className="flex flex-col pt-24 px-8">
                              {navLinks.map((item, index) => (
                                   <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className={`font-montserrat text-lg text-slate-gray py-4 border-b border-gray-200 hover:text-coral-red hover:translate-x-2 transition-all duration-300 animate-slideInRight`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                   >
                                        {item.label}
                                   </a>
                              ))}
                         </div>
                    </div>

                    {isMenuOpen && (
                         <div
                              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                              onClick={closeMenu}
                         ></div>
                    )}
               </nav>
          </header>
     );
};

export default Nav;
