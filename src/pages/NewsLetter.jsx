import DenceImg from '../images/denceTest.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const NewsLetter = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section bg-white overflow-auto">
      <div className="container mx-auto h-full">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='lg:flex-1 lg:pt-32 px-4'
          >
            <h1 className="h1">Newsletter</h1>
            <p className='mb-12'>Stay up to date with the roadmap progress, announcements, and exclusive discounts.</p>
            <form className='flex flex-col gap-y-4'>
              <div className='sm:flex sm:flex-col gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="text"
                  placeholder='Your Name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="email"
                  placeholder='Email Address'
                />
              </div>
              <label htmlFor="consentCheckbox" className="text-sm font-semibold">
                <input type="checkbox" className="mr-2 accent-primary" checked />
                I consent to Confidence Ezemba collecting my details through this form.
              </label>
              <button className='btn mb-[30px] w-full mx-auto lg:mx-0 self-start'>Sign Up</button>

            </form>
          </div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'>
            <img src={DenceImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default NewsLetter