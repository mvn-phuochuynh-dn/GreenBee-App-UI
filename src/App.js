import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './assets/scss/styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Home from './pages/Features/Home';
import Categories from './pages/Features/Categories';
import ProductDetail from './pages/Features/ProductDetail';
import Contact from './pages/Features/Contact';
import Blog from './pages/Features/Blog';
import About from './pages/Features/About';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='main'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
