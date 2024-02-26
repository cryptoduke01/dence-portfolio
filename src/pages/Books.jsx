import BookImage from '../images/dyf.png';
import reviewImage from '../images/dence7.jpg';
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
              className="object-cover h-full rounded-sm mb-6 lg:ml-48 lg:h-96 lg:left-4 drop-shadow-1xl"
            />
          </div>
          <div className="w-full">
            <h2 className="font-secondary text-3xl font-bold mb-2">Don't You Forget - Psycho Thriller</h2>
            <p className="text-gray-500 text-base mb-4">
              By Confidence .C. Ezemba
            </p>
            <p className="mt-4 mb-4 font-secondary">
              She was at war with her memory, but her past was the enemy.
              She was at war with her memory, but her past was the enemy.
              She was at war with her memory, but her past was the enemy.
            </p>
            <button className="bg-[#0C262D] py-[18px] px-[50px] h-[66px] flex items-center justify-center text-base uppercase font-secondary font-semibold text-white mt-10">
              Start reading
            </button>
          </div>
        </div>
        <div className="mt-6 border-t border-primary pt-4">
          <div className='bg-white border-l-4 border-primary rounded-sm shadow-md p-4 mt-8 lg:w-1/2'>
            <h3 className="text-xl font-bold mb-2 mt-2">Description</h3>
            <p className="text-gray-500 text-base">
              The story takes place during Harry's sixth year at Hogwarts School of
              Witchcraft and Wizardry, where he discovers more about Lord Voldemort's
              past and the prophecy that foretells his defeat. With action-packed
              sequences, shocking twists, and moments of heart-wrenching tragedy,
              "Half-Blood Prince" is a must-read for any fan of the Harry Potter
              series.
            </p>
          </div>
          <div className="bg-white border-l-4 border-primary rounded-sm shadow-md p-4 mt-8 w-full lg:w-1/2">
            <h3 className="text-xl font-bold mb-2">Reviews</h3>
            <div className="mt-2 border-t border-[#A3CED7] pt-4">
            </div>
            <img
              src={reviewImage}
              className='w-14 rounded-full'
            />
            <h2 className='text-gray-700 font-bold'>New York Times</h2>
            <p className='mt-2 text-gray-600 text-base'>"A piece of art..."</p>
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
                    <h3 className="text-xl font-bold mb-2">Editors</h3>
                    <p className="text-gray-500 text-base">
                      J.K. Rowling (author), Christopher Reath, Alena Gestabon, Steve Korg
                    </p>
                  </div>
                  <div className="sm:mr-6 mt-4 sm:mt-0">
                    <h3 className="text-xl font-bold mb-2">Language</h3>
                    <p className="text-gray-500 text-base">Standard English (USA & UK)</p>
                  </div>
                  <div className="sm:mr-6 mt-4 sm:mt-0">
                    <h3 className="text-xl font-bold mb-2">Format</h3>
                    <p className="text-gray-500 text-base">
                      Paperback, paper textured, full colour, 345 pages
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <h3 className="text-xl font-bold mb-2">ISBN</h3>
                    <p className="text-gray-500 text-base">987 3 32564455 B</p>
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