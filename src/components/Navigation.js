import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [profile, setProfile] = useState(false);

  const logoutHandler = () => {
    navigate('/');
    setTimeout(() => {
      setIsLogin(false);
    }, 1000);
    window.location.reload();
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.2,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -19,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
    <header
      aria-label='Site Header'
      className='bg-white dark:bg-gray-900 sticky top-0 z-50'
    >
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='md:flex md:items-center md:gap-12'>
            <a className='block text-white' href='/'>
              <span className='sr-only'>Home</span>
              <h1 className='font-bold text-xl underline underline-offset-1 underline-em'>
                CMS App
              </h1>
            </a>
          </div>

          <div className='hidden md:block'>
            <nav aria-label='Site Nav'>
              <ul className='flex items-center gap-6 text-sm'>
                <li>
                  <a
                    className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer'
                    onClick={() => {
                      navigate('/metaInput');
                    }}
                  >
                    Meta
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer'
                    onClick={() => {
                      navigate('/bannerInput');
                    }}
                  >
                    Banner
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer'
                    onClick={() => {
                      navigate('/categoryInput');
                    }}
                  >
                    Category
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer'
                    onClick={() => {
                      navigate('/photoGallery');
                    }}
                  >
                    Photos
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='hidden sm:flex sm:gap-4'>
              {isLogin ? (
                <a
                  className='flex justify-center items-center space-x-2 text-white cursor-pointer'
                  onClick={() => setProfile(!profile)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-4 h-4 border border-white rounded-full'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-sm'>Username</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-3 h-3 mt-0.5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              ) : (
                <>
                  <a
                    className='rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500 cursor-pointer'
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </a>

                  <div className='hidden sm:flex'>
                    <a
                      className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
                      href='/'
                    >
                      Register
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className='block md:hidden'>
              <button
                className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          profile ? 'block' : 'hidden'
        } absolute right-6 mymd:right-[21rem] z-10 mt-1.5 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg`}
        role='menu'
      >
        <div className='flow-root py-2'>
          <div className='-my-2 divide-y divide-gray-100'>
            <div className='p-2'>
              <a
                href='#'
                className='block rounded-lg px-4 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                role='menuitem'
              >
                Profile Settings
              </a>
            </div>

            <div className='py-2 px-4'>
              <a
                className='text-white text-center bg-red-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                onClick={logoutHandler}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className={`${
          isOpen ? 'block sm:hidden' : 'hidden'
        } sm:hidden z-40 mt-0.5 absolute bg-white w-full rounded-sm border-gray-500 shadow-lg`}
        id='mobile-menu'
        initial='exit'
        animate={isOpen ? 'enter' : 'exit'}
        variants={subMenuAnimate}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 text-center'>
          <a
            className='text-slate-900 hover:bg-emerald-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => {
              navigate('/metaInput');
            }}
          >
            Meta
          </a>

          <a
            className='text-slate-900 hover:bg-emerald-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => {
              navigate('/bannerInput');
            }}
          >
            Banner
          </a>

          <a className='text-slate-900 hover:bg-emerald-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
            Category
          </a>

          <a className='text-slate-900 hover:bg-emerald-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
            Users
          </a>
          <hr className='pb-1' />
          {isLogin ? (
            <>
              <a className='flex justify-center items-center space-x-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Username</span>
              </a>
              <a
                className='text-white bg-red-600 block px-3 py-2 rounded-md text-base font-medium'
                onClick={logoutHandler}
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a
                className='text-white bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsLogin(true)}
              >
                Login
              </a>
              <a className='text-emerald-700 bg-white block px-3 py-2 rounded-md text-base border border-emerald-700 font-medium'>
                Register
              </a>
            </>
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default Navigation;
