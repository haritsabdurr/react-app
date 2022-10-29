const Modal = ({ open, del, close }) => {
  return (
    <div
      className={`${
        open ? 'block' : 'hidden'
      } overflow-y-auto overflow-x-hidden pt-6 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-50`}
    >
      <div className='mx-auto mt-32 rounded-lg bg-white p-8 shadow-2xl w-80'>
        <h2 className='text-lg font-bold text-center'>
          Are you sure you want to delete data?
        </h2>

        <div className='mt-8 flex items-center justify-center text-xs'>
          <button
            type='button'
            className='rounded bg-red-600 px-4 py-2 font-medium text-white'
            onClick={del}
          >
            Yes, I'm sure
          </button>
          <button
            type='button'
            onClick={close}
            className='ml-2 rounded bg-gray-100 px-4 py-2 font-medium text-gray-800'
          >
            No, go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
