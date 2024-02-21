import BookImage from '../images/dyf.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';


const Books = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section overflow-auto py-16 md:py-24">
      <div className="container mx-auto h-full relative">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'>
            <h1 className="h1">Books</h1>
            <p className='mb-12 max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. <b>Explicabo laborum dolore</b>
              aborum doloreaborum dolore
              adipisicing elit. Explicabo laborum dolore
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, optio?
            </p>
            <Link to={'/about'} className='btn mb-[30px] mx-auto lg:mx-0'>Read More</Link>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='grid grid-cols-3 lg:gap-2 sm:gap-4'
          >
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[320px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[320px] hover:scale-110 transition-all duration-500' src={BookImage} alt="" />
            </div>

            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[320px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[320px] hover:scale-110 transition-all duration-500' src={BookImage} alt="" />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[320px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[320px] hover:scale-110 transition-all duration-500' src={BookImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Books;