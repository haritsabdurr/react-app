import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import UpdatedToast from 'components/popup/toast/UpdatedToast';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { urlAccount } from 'utils/Url';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);

  const [seePassword, setSeePassword] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('token');

    await axios
      .patch(
        `${urlAccount}/users/${data._id}`,
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then(setIsEdit(true))
      .then(setTimeout(() => setIsEdit(false), 2200));
    setTimeout(() => {
      navigate(`/profile/${data._id}`);
      Cookies.set('user', username);
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
          <h1 className='text-2xl font-bold sm:text-3xl'>Profile Edit</h1>
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
                name='username'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                type='text'
                name='email'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                name='password'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm '
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className='absolute inset-y-0 right-4 inline-flex items-center'
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

export default ProfileEdit;
