import Image1 from '../images/dence1.jpg';
import Image2 from '../images/dence2.jpg';
import Image3 from '../images/collage.jpg';
import Image4 from '../images/dence5.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import Carousel from './Carousel';

const slides = [Image1, Image2, Image4];

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <>
      {/* <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className="section overflow-scroll">
        <div className="container mx-auto h-full absolute">
          <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-36 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaverHandler}
              initial={{ opacity: 0, y: '-80%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-80%' }}
              transition={transition1}
              className='flex flex-col lg:items-start'>
            </motion.div>
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaverHandler}
              className='grid grid-cols-3 lg:gap-1'
            >
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}
      <Carousel autoSlide={true}>
        {[
          ...slides.map((s) => <img src={s} width={500} height={300} />),

        ]}
      </Carousel>
    </>
  )
}

export default Portfolio