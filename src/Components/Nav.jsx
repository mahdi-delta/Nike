import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../Constants'


const Nav = () => {
  return (
    <header className=' py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo}
           alt="Logo"
           width={130}
           height={29} />
        </a>
        <ul className='flex-1 flex justify-center gap-16  max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat loading-normal text-lg text-slate-gray relative after:w-0 after:h-[2px] after:absolute after:left-0 after:-bottom-2 after:bg-slate-gray hover:after:w-full after:transition-all after:duration-200'
                >
                    {item.label}
                </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburgur' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav