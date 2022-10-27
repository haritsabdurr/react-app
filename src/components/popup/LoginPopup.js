import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ close }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        close ? 'block' : 'hidden'
      } overflow-y-auto overflow-x-hidden pt-6 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-50`}
    >
      <div className='mx-auto mt-32 rounded-lg bg-white p-8 shadow-2xl w-80'>
        <div className='flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 sm:h-9 sm:w-9 mb-3 text-yellow-500'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
            />
          </svg>
        </div>
        <h2 className='text-lg font-bold text-center'>
          You Need Login To Access This Page!
        </h2>
        <div className='flex justify-center mt-4'>
          <button
            className='bg-blue-500 py-1 px-5 text-white font-medium rounded-md'
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
