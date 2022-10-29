import React from 'react';

const UpdatedToast = () => {
  return (
    <div
      id='toast-success'
      className='absolute top-24 right-10 flex items-center p-4 mb-4 w-full max-w-[16rem] text-white bg-blue-600 rounded-lg shadow'
      role='alert'
    >
      <div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-600 bg-blue-100 rounded-lg'>
        <svg
          aria-hidden='true'
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          ></path>
        </svg>
        <span className='sr-only'>Check icon</span>
      </div>
      <div className='ml-5 text-sm font-normal'>Item updated successfully!</div>
    </div>
  );
};

export default UpdatedToast;
