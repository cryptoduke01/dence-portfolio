import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import homeVideo from '../images/dencevideo2.mp4';

const Home = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <>
      {/* Hero Section */}
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
          src={homeVideo}
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
              <h1 className="h1 text-white">Author <br /> & Model</h1>
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

      {/* Featured Work/Portfolio Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            className="text-3xl mb-8"
          >
            Featured Work
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Work Example 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={transition1}
              className="border border-white rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <img
                src="https://via.placeholder.com/400"
                alt="Work 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl">Project Title 1</h3>
                <p className="text-gray-300">Description of the project goes here.</p>
                <div className="flex justify-between mt-4">
                  <Link to="/project1" className="text-gray-300">View More</Link>
                  <span className="text-gray-400">2023</span>
                </div>
              </div>
            </motion.div>
            {/* Work Example 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={transition1}
              className="border border-white rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <img
                src="https://via.placeholder.com/400"
                alt="Work 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl">Project Title 2</h3>
                <p className="text-gray-300">Description of the project goes here.</p>
                <div className="flex justify-between mt-4">
                  <Link to="/project2" className="text-gray-300">View More</Link>
                  <span className="text-gray-400">2022</span>
                </div>
              </div>
            </motion.div>
            {/* Work Example 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={transition1}
              className="border border-white rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <img
                src="https://via.placeholder.com/400"
                alt="Work 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl">Project Title 3</h3>
                <p className="text-gray-300">Description of the project goes here.</p>
                <div className="flex justify-between mt-4">
                  <Link to="/project3" className="text-gray-300">View More</Link>
                  <span className="text-gray-400">2021</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section with Standing Cards */}
      <section className="py-20 bg-gradient-to-r from-grey to-black text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            className="text-3xl font-bold mb-8"
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Modeling Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={transition1}
              whileHover={{ y: -10, scale: 1.05 }}
              className="service-card bg-grey p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform h-[270px] flex flex-col justify-center items-center"
            >
              <h3 className="text-xl font-bold mb-2 text-center">Modelling</h3>
              <p className="text-white text-center">I have extensive experience in fashion, commercial, and lifestyle modeling. I’ve worked with top photographers and brands to create stunning visuals.</p>
            </motion.div>

            {/* Writing Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={transition1}
              whileHover={{ y: -10, scale: 1.05 }}
              className="service-card bg-grey p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform h-[270px] flex flex-col justify-center items-center"
            >
              <h3 className="text-xl font-bold mb-2 text-center">Writing</h3>
              <p className="text-white text-center">With a passion for storytelling, I specialize in creative writing, content creation, and blog writing that resonates with audiences and inspires action.</p>
            </motion.div>

            {/* Public Speaking Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={transition1}
              whileHover={{ y: -10, scale: 1.05 }}
              className="service-card bg-grey p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform h-[270px] flex flex-col justify-center items-center"
            >
              <h3 className="text-xl font-bold mb-2 text-center">Public Speaking</h3>
              <p className="text-white text-center">I deliver engaging and inspiring public speaking sessions, focusing on motivating and empowering audiences to take action and achieve their goals.</p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Let's Collaborate Section with White and Black Gradient */}
      <section className="py-20 bg-gradient-to-r from-white to-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          className="text-3xl font-bold mb-4"
        >
          Let's Collaborate
        </motion.h2>
        <p className="mb-8">Looking for a creative and passionate professional? Let's make magic together.</p>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-52 h-12 mx-auto bg-black hover:bg-white hover:text-black"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; 2025 Confidence Ezemba. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
