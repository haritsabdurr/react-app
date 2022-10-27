import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import MetaInput from 'pages/meta/MetaInput';
import MetaEdit from 'pages/meta/MetaEdit';
import BannerInput from 'pages/banner/BannerInput';
import BannerEdit from 'pages/banner/BannerEdit';
import CategoryInput from 'pages/category/CategoryInput';
import CategoryEdit from 'pages/category/CategoryEdit';
import Page404 from 'pages/404';
import Photos from 'pages/gallery/Photos';
import Login from 'pages/Login';
import Register from 'pages/Register';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/metaInput' element={<MetaInput />} />
        <Route path='/metaEdit' element={<MetaEdit />} />
        <Route path='/bannerInput' element={<BannerInput />} />
        <Route path='/bannerEdit' element={<BannerEdit />} />
        <Route path='/categoryInput' element={<CategoryInput />} />
        <Route path='/categoryEdit' element={<CategoryEdit />} />
        <Route path='/photoGallery' element={<Photos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/404' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
