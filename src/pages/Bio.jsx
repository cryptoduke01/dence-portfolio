import DenceImg from '../images/collage.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const Bio = () => {
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
        className="container mx-auto lg:h-full relative"
      >
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'>
            <img
              src={DenceImg}
              alt="Confidence Ezemba"
              className='bw-image'
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className="h1">Biography</h1>
            <p className='mb-12 max-w-lg border-l-2 border-primary px-4'>
              Confidence Ezemba was born and raised in Jos, Nigeria. He is a third year pre-medicine student, pursuing a bachelor's degree in Biology and Psychology at New York University.
              <br />
              <br />
              From a young age, Confidence has been drawn to the art of storytelling, using writing as a creative outlet to explore the depths of the human psyche and the complexities of the human experience.
              <br />
              <br />
              He hopes to continue using storytelling as a means of inspiring others to think critically about the world around them.
            </p>
            {/* Open Portfolio in a New Tab */}
            <a href="https://www.instagram.com/drdnce/" target="_blank" rel="noopener noreferrer" className='btn'>
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Bio;
