import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import homeVideo from '../images/dencevideo2.mp4';

const Home = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full z-[-1] object-cover"
        src={homeVideo} // Replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[-1]"></div>

      {/* Content */}
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="h1 text-white">
              Author <br /> & Model
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 text-white">
              Manhattan, New York, USA
            </p>
            <Link to={'/bio'} className="btn lg:w-1/2 mb-[30px]">
              View Bio
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
