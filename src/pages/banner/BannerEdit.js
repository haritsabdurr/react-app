import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import UpdatedToast from 'components/popup/toast/UpdatedToast';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from 'utils/Url';

const BannerEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [isEdit, setIsEdit] = useState(false);

  const [banner, setBanner] = useState(data.banner);
  const [alt, setAlt] = useState(data.alt);
  const [link, setLink] = useState(data.link);
  // const [banner, setBanner] = useState(data.banner);
  // const [alt, setAlt] = useState(data.alt);
  // const [link, setLink] = useState(data.link);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`${baseUrl}/banner/${data.id}`, {
        banner: banner,
        alt: alt,
        link: link,
      })
      .then(setIsEdit(true))
      .then(setTimeout(() => setIsEdit(false), 2200));
    setTimeout(() => {
      navigate('/bannerInput');
    }, 2000).catch((err) => {
      throw err;
    });
  };

  const cekBanner = () => {
    console.log(data);
  };

  useEffect(() => {
    cekBanner();
  }, []);

  return (
    <>
      <Navigation />
      <UpdatedToast open={isEdit} />
      <div className='mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Banner Edit</h1>
        </div>

        <form
          action=''
          className='mx-auto mt-8 mb-0 max-w-md space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='banner name' className='sr-only'>
              Banner Name
            </label>

            <div className='relative'>
              <input
                type='text'
                name='banner'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Meta Title'
                value={banner}
                onChange={(e) => setBanner(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='banner alternative' className='sr-only'>
              Banner Alternative
            </label>
            <div className='relative'>
              <input
                type='text'
                name='alt'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Meta URL'
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='banner link' className='sr-only'>
              Banner Link
            </label>
            <div className='relative'>
              <input
                type='text'
                name='link'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Meta Description'
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='ml-3 inline-block rounded-lg bg-blue-500 px-8 py-3 text-sm font-medium text-white'
            >
              Edit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BannerEdit;
