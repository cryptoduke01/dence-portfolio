import BookImage from '../images/dyf.png';
import dailySun from '../images/daily.png';
import vanguard from '../images/vanguard.png'
import guardian from '../images/guardian.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext, useState, useEffect } from 'react';
import { CursorContext } from '../context/CursorContext';
import LoadingScreen from '../components/LoadingScreen';

const Books = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="section overflow-x-hidden py-16 md:py-24"
    >
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className="section overflow-x-hidden py-16 md:py-24"
      >
        <div className="container mx-auto px-4 py-8 max-w-6xl"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between-gap-4">
            <div className="w-full lg:w-2/5">
              <img
                src={BookImage}
                alt="Book cover"
                className="object-cover rounded-sm mb-6 max-w-full h-auto lg:max-h-96 drop-shadow-xl"
              />
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="font-secondary text-3xl font-bold mb-2">Don't You Forget - Psychological Thriller</h2>
              <p className="text-gray-500 text-base mb-4">
                By Confidence .C. Ezemba
              </p>
              <p className="mt-4 mb-4 font-secondary">
                <b>Amara Amadi</b> is locked up in a hospital room with no memory of how she got there. Her shaky grip on reality is, however, the start of the mystery beginning to unfold around her.
                <b> Amara</b> quickly grows suspicious of the hospital staff who refuse to answer her questions and sedate her when she demands answers.
              </p>
              <button className="btn mt-8 lg:w-full">
                Start reading
              </button>
            </div>
          </div>
          <div className="mt-6 border-t border-primary pt-4">
            <div className='bg-white border-l-2 border-primary rounded-sm shadow-md p-4 mt-8 lg:w-full'>
              <h3 className="text-xl font-bold mb-2 mt-0">Description</h3>
              <div className="mt-2 border-t border-primary pt-2"></div>
              <p className="text-gray-500 text-base">
                Amara Amadi is locked up in a hospital room with no memory of how she got there. Her shaky grip on reality is, however, the start of the mystery beginning to unfold around her.
                Amara quickly grows suspicious of the hospital staff who refuse to answer her questions and sedate her when she demands <a className='text-[#3660ad]' href="https://www.amazon.com/Dont-You-Forget-Gripping-Psychological/dp/B0CHLNR8LP/ref=sr_1_1?crid=2I2V0R68S616K&keywords=don%27t+you+forget+confidence+ezemba&qid=1706824989&sprefix=Don%27t+you+forget+confidence%2Caps%2C655&sr=8-1#detailBullets_feature_div">read more.</a>
              </p>
            </div>

            <div className="bg-white border-l-2 border-primary rounded-sm shadow-md p-4 mt-8 w-full">
              <h3 className="text-xl font-bold mb-2">Reviews</h3>
              <div className="mt-2 border-t border-primary pt-2">
              </div>
              <div className="flex items-center mt-4">
                <img src={vanguard} className="w-14 rounded-full mr-4" />
                <div>
                  <h2 className="font-bold">Vanguard</h2>
                  <p className="mt-0 text-gray-600 text-base">"Utterly captivating and brimming with tension... A must-read"</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img src={guardian} className="w-14 rounded-full mr-4" />
                <div>
                  <h2 className="font-bold">The Guardian</h2>
                  <p className="mt-0 text-gray-600 text-base">"Unsettling, immersive, and brilliantly executed"</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img src={dailySun} className="w-14 rounded-full mr-4" />
                <div>
                  <h2 className="font-bold">Daily Sun</h2>
                  <p className="mt-0 text-gray-600 text-base">"Blurring the lines between memory and reality, this thriller is in a league of its own. A book that will leave you spellbound"</p>
                </div>
              </div>
            </div>

            {/* Right Column (Details) */}
            <div className="w-full">
              <div className="border-l-2 p-4 shadow-md border-primary flex flex-wrap justify-between mb-8 mt-8">
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                  <h3 className="h3 text-xl font-bold mb-2">Editors</h3>
                  <p className="text-gray-500 text-base">Confidence Ezemba</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                  <h3 className="h3 text-xl font-bold mb-2">Language</h3>
                  <p className="text-gray-500 text-base">English</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                  <h3 className="text-xl font-bold mb-2">Paperback</h3>
                  <p className="text-gray-500 text-base">321 pages</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                  <h3 className="text-xl font-bold mb-2">ISBN</h3>
                  <p className="text-gray-500 text-base">979-8218261771</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.section>
  )
}

export default Books;