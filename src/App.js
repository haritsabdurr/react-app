import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import MetaInput from './pages/meta/MetaInput';
import MetaEdit from './pages/meta/MetaEdit';
import BannerInput from './pages/banner/BannerInput';
import BannerEdit from './pages/banner/BannerEdit';
import CategoryInput from './pages/category/CategoryInput';
import CategoryEdit from './pages/category/CategoryEdit';
import Page404 from './pages/404';
import Photos from './pages/gallery/Photos';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/metaInput' element={<MetaInput />} />
        <Route path='/metaEdit' element={<MetaEdit />} />
        <Route path='/bannerInput' element={<BannerInput />} />
        <Route path='/bannerEdit' element={<BannerEdit />} />
        <Route path='/categoryInput' element={<CategoryInput />} />
        <Route path='/categoryEdit' element={<CategoryEdit />} />
        <Route path='/photoGallery' element={<Photos />} />
        <Route path='/404' element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
