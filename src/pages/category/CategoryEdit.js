import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import UpdatedToast from 'components/popup/toast/UpdatedToast';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { baseUrl } from 'utils/Url';

const CategoryEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [isEdit, setIsEdit] = useState(false);

  const [title, setTitle] = useState(data?.title);
  const [desc, setDesc] = useState(data?.desc);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`${baseUrl}/desc/${data.id}`, {
        title: title,
        desc: desc,
      })
      .then(setIsEdit(true))
      .then(setTimeout(() => setIsEdit(false), 2200));
    setTimeout(() => {
      navigate('/descInput');
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
          <h1 className='text-2xl font-bold sm:text-3xl'>Description Edit</h1>
        </div>

        <form
          action=''
          className='mx-auto mt-8 mb-0 max-w-md space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='title' className='sr-only'>
              Title
            </label>

            <div className='relative'>
              <input
                type='text'
                name='title'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='desc' className='sr-only'>
              Desc
            </label>
            <div className='relative'>
              <input
                type='text'
                name='desc'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Desc'
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

export default CategoryEdit;
