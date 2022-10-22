import React from 'react';

const MetaEdit = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Meta Edit</h1>
      </div>

      <form action='' className='mx-auto mt-8 mb-0 max-w-md space-y-4'>
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
              name='meta_descrption'
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

export default MetaEdit;
