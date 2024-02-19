import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Books from '../pages/Books';
import NewsLetter from '../pages/NewsLetter';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/modelling' element={<Portfolio />} />
        <Route path='/books' element={<Books />} />
        <Route path='/newsletter' element={<NewsLetter />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimRoutes;