import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";

const Nav = () => {
     return (
          <header className="py-8 absolute z-10 w-full animate-slideInUp">
               <nav className="flex justify-between items-center max-container">
                    <a href="/" className="transition-all duration-300 hover:scale-110">
                         <img src={headerLogo} alt="Logo" width={130} height={29} />
                    </a>
                    <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
                         {navLinks.map((item, index) => (
                              <li
                                   key={item.label}
                                   className={`animate-fadeIn delay-${index * 100}`}
                              >
                                   <a
                                        href={item.href}
                                        className="font-montserrat loading-normal text-lg text-slate-gray relative after:w-0 after:h-[2px] after:absolute after:left-0 after:-bottom-2 after:bg-coral-red hover:after:w-full after:transition-all after:duration-300 hover:text-coral-red transition-colors duration-300"
                                   >
                                        {item.label}
                                   </a>
                              </li>
                         ))}
                    </ul>
                    <div className="hidden max-lg:block cursor-pointer hover:scale-110 transition-transform duration-300 active:scale-95">
                         <img src={hamburger} alt="hamburgur" width={25} height={25} />
                    </div>
               </nav>
          </header>
     );
};

export default Nav;
