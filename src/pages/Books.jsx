import BookImage from '../images/dyf.png';
import dailySun from '../images/daily.png';
import vanguard from '../images/vanguard.png'
import guardian from '../images/guardian.png'
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <img
              src={BookImage}
              alt="Book cover"
              className="object-cover rounded-sm mb-6 lg:ml-20 lg:h-96 lg:left-4 drop-shadow-1xl"
            />
          </div>
          <div className="w-full">
            <h2 className="font-secondary text-3xl font-bold mb-2">Don't You Forget - Psycho Thriller</h2>
            <p className="text-gray-500 text-base mb-4">
              By Confidence .C. Ezemba
            </p>
            <p className="mt-4 mb-4 font-secondary">
              <b>Amara Amadi</b> is locked up in a hospital room with no memory of how she got there. Her shaky grip on reality is, however, the start of the mystery beginning to unfold around her.
              <b> Amara</b> quickly grows suspicious of the hospital staff who refuse to answer her questions and sedate her when she demands answers.
            </p>
            <button className="btn mt-10 lg:w-full">
              Start reading
            </button>
          </div>
        </div>
        <div className="mt-6 border-t border-primary pt-4">
          <div className='bg-white border-l-4 border-primary rounded-sm shadow-md p-4 mt-8 lg:w-1/2'>
            <h3 className="text-xl font-bold mb-2 mt-2">Description</h3>
            <p className="text-gray-500 text-base">
              Amara Amadi is locked up in a hospital room with no memory of how she got there. Her shaky grip on reality is, however, the start of the mystery beginning to unfold around her.
              Amara quickly grows suspicious of the hospital staff who refuse to answer her questions and sedate her when she demands answers. The only explanation she is ... <a href="https://www.amazon.com/Dont-You-Forget-Gripping-Psychological/dp/B0CHLNR8LP/ref=sr_1_1?crid=2I2V0R68S616K&keywords=don%27t+you+forget+confidence+ezemba&qid=1706824989&sprefix=Don%27t+you+forget+confidence%2Caps%2C655&sr=8-1#detailBullets_feature_div">read More...</a>
            </p>
          </div>

          <div className="bg-white border-l-4 border-primary rounded-sm shadow-md p-4 mt-8 w-full lg:w-1/2">
            <h3 className="text-xl font-bold mb-2">Reviews</h3>
            <div className="mt-2 border-t border-[#A3CED7] pt-2">
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


          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column (Image, Description, Reviews) */}
              <div className="w-full lg:w-1/2">
                {/* ... Your left column content ... */}
              </div>

              {/* Right Column (Details) */}
              <div className="w-full lg:w-1/2">
                <div className="border-l-4 p-4 shadow-md border-primary flex flex-col justify-end mb-8 mt-8">
                  <div className="sm:mr-6"> {/* Adjust margin as needed */}
                    <h3 className="h3 text-xl font-bold mb-2">Editors</h3>
                    <p className="text-gray-500 text-base">
                      Confidence Ezemba, Wole Soyinka
                    </p>
                  </div>
                  <div className="sm:mr-6 mt-4 sm:mt-0">
                    <h3 className=" h3 text-xl font-bold mb-2">Language</h3>
                    <p className="text-gray-500 text-base">English</p>
                  </div>
                  <div className="sm:mr-6 mt-4 sm:mt-0">
                    <h3 className="text-xl font-bold mb-2">Paperback</h3>
                    <p className="text-gray-500 text-base">
                      321 pages
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <h3 className="text-xl font-bold mb-2">ISBN</h3>
                    <p className="text-gray-500 text-base">979-8218261771</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Books;