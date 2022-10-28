import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import LoadingButton from 'components/loader/LoadingButton';
import axios from 'axios';
import { useState } from 'react';
import { urlAccount } from 'utils/Url';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [account, setAccount] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`${urlAccount}/signup`, {
        username: account.username,
        email: account.email,
        password: account.password,
      })
      .then(() => navigate('/login'))
      .catch((err) => {
        setError(err.response.data.message);
        setIsLoading(false);
        throw err;
      });
  };

  return (
    <>
      <Navigation />
      <div className='mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Create an Account</h1>

          <p className='mt-6 mb-12 text-gray-500 text-sm sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action=''
          className='mx-auto mt-8 mb-0 max-w-md space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='username' className='sr-only'>
              Username
            </label>
            <div className='relative'>
              <input
                type='text'
                className='border-gray-200 w-full rounded-lg p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter username'
                name='username'
                value={account.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>

            <div className='relative'>
              <input
                type='email'
                className='border-gray-200 w-full rounded-lg p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter email'
                name='email'
                value={account.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <div className='relative'>
              <input
                type={`${seePassword ? 'text' : 'password'}`}
                className='border-gray-200 w-full rounded-lg p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter password'
                name='password'
                value={account.password}
                onChange={handleChange}
                required
              />
              <span
                className='absolute inset-y-0 right-4 inline-flex items-center cursor-pointer'
                onClick={() => setSeePassword(!seePassword)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className='flex justify-center'>
            <p className='text-sm font-medium text-red-500 ml-3 mt-1'>
              {error}
            </p>
          </div>

          <div className='flex justify-center'>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                type='submit'
                className='ml-3 text-center rounded-lg bg-blue-500 px-8 py-3 text-sm font-medium text-white'
              >
                Register
              </button>
            )}
          </div>
        </form>
        <div className='text-center mt-4'>
          <p className='text-sm text-gray-500'>
            Already have account?
            <a className='underline ml-1' onClick={() => navigate('/login')}>
              Login Here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
