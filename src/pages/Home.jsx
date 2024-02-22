import DenceImg from '../images/dence7.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-auto"
    >

      <div className="container mx-auto h-full relative">
        <div className='flex flex-col justify-center'>
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className="h1 text-center">
              Author <br /> & Model
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              Manhattan, New York, USA
            </p>
            <Link to={'/about'} className='btn mb-[30px]'>
              View   Bio
            </Link>
          </motion.div>
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40 overflow-hidden'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={DenceImg} alt="Confidence Ezemba"
                width={761}
                height="auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home