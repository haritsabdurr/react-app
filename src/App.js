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
import Profile from 'pages/profile/Profile';
import ProfileEdit from 'pages/profile/ProfileEdit';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/metaInput' element={<MetaInput />} />
        <Route path='/metaEdit/:id' element={<MetaEdit />} />
        <Route path='/bannerInput' element={<BannerInput />} />
        <Route path='/bannerEdit/:id' element={<BannerEdit />} />
        <Route path='/descInput' element={<CategoryInput />} />
        <Route path='/descEdit/:id' element={<CategoryEdit />} />
        <Route path='/photoGallery' element={<Photos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/profileEdit/:id' element={<ProfileEdit />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
