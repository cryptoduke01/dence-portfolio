import DenceImg from '../images/dence5.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';


const About = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
        className="container mx-auto h-full relative"
      >
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={DenceImg} alt="Confidence Ezemba" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className="h1">About Me</h1>
            <p className='mb-12 max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. <b>Explicabo laborum dolore</b>
              aborum doloreaborum dolore
              adipisicing elit. Explicabo laborum dolore
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, optio?
            </p>
            <Link to={'/modelling'} className='btn'>View Portfolio</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About