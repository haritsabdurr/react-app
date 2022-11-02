import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import UpdatedToast from 'components/popup/toast/UpdatedToast';
import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from 'utils/Url';

const MetaEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [isEdit, setIsEdit] = useState(false);

  const [title, setTitle] = useState(data.meta_title);
  const [url, setUrl] = useState(data.meta_url);
  const [desc, setDesc] = useState(data.meta_desc);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`${baseUrl}/meta/${data.id}`, {
        meta_title: title,
        meta_url: url,
        meta_desc: desc,
      })
      .then(setIsEdit(true))
      .then(setTimeout(() => setIsEdit(false), 2200));
    setTimeout(() => {
      navigate('/metaInput');
    }, 2000).catch((err) => {
      throw err;
    });
  };

  return (
    <>
      <Navigation />
      <UpdatedToast open={isEdit} />
      <div className='mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Meta Edit</h1>
        </div>

        <form
          action=''
          className='mx-auto mt-8 mb-0 max-w-md space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='meta title' className='sr-only'>
              Meta Title
            </label>

            <div className='relative'>
              <input
                type='text'
                name='meta_title'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Meta Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='meta url' className='sr-only'>
              Meta URL
            </label>
            <div className='relative'>
              <input
                type='text'
                name='meta_url'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Meta URL'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='meta description' className='sr-only'>
              Meta Description
            </label>
            <div className='relative'>
              <input
                type='text'
                name='meta_desc'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm '
                placeholder='Meta Description'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
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

export default MetaEdit;
