import Socials from './Socials';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import NewsLetter from '../pages/NewsLetter';

const Header = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <>
      <header className='bg-primary fixed w-full px-[30px] lg:px-[100px] z-30 h-[70px] lg:h-[70px] flex items-center'>
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          <Link to={'/'}>
            <h1
              className='h2 text-white font-bold max-w-[200px] font-primary'
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaverHandler}
            >Confidence Ezemba</h1>
          </Link>
          <nav
            className="hidden xl:flex gap-x-12 font-semibold"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
          >
            <Link to={'/'} className='text-[#ffffff] hover:text-white transition'>
              Home
            </Link>
            <Link to={'/bio'} className='text-[#ffffff] hover:text-white transition'>
              Bio
            </Link>
            <Link to={'/books'} className='text-[#ffffff] hover:text-white transition'>
              Books
            </Link>
            <Link to={'/modelling'} className='text-[#ffffff] hover:text-white transition'>
              Modelling
            </Link>
            <Link to={'/newsletter'} className='text-[#ffffff] hover:text-white transition'>
              Newsletter
            </Link>
          </nav>
        </div>
        <Socials />
        <MobileNav />
      </header>
    </>
  )
}

export default Header