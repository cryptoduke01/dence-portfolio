import Home from '../pages/Home';
import Bio from '../pages/Bio';
import Portfolio from '../pages/Portfolio';
import Books from '../pages/Books';
import NewsLetter from '../pages/NewsLetter';
import Tailwind from '../pages/class/Tailwind';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/books' element={<Books />} />
        <Route path='/modelling' element={<Portfolio />} />
        <Route path='/newsletter' element={<NewsLetter />} />
        <Route path='/tailwindclass' element={<Tailwind />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimRoutes;