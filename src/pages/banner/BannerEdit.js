import React from 'react';

const BannerEdit = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Banner Edit</h1>
      </div>

      <form action='' className='mx-auto mt-8 mb-0 max-w-md space-y-4'>
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
  );
};

export default BannerEdit;
