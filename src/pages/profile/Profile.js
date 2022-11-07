import React from 'react';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import LoadingSpinner from 'components/loader/LoadingSpinner';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { urlAccount } from 'utils/Url';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {
  const params = useParams();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserById = async () => {
    const token = Cookies.get('token');

    try {
      const response = await axios.get(`${urlAccount}/users/${params.id}`, {
        headers: {
          token: `${token}`,
        },
      });
      setTimeout(() => {
        setUserData(response.data);
        setIsLoading(true);
      }, 700);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <Navigation />
      <div className='py-36'>
        {isLoading ? (
          <section className='w-96 mx-auto rounded-2xl px-8 py-6 shadow-xl border border-gray-300'>
            <div className='flex items-center justify-center'>
              <span className='text-gray-600 text-sm'>User Account</span>
            </div>
            <div className='mt-8 w-fit mx-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-24 h-24'
              >
                <path
                  fillRule='evenodd'
                  d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            <div className='mt-8 text-center'>
              <h2 className='text-black font-bold text-2xl tracking-wide'>
                {userData.username}
              </h2>
            </div>
            <p className='text-emerald-600 font-semibold mt-2.5 text-center'>
              {userData.email}
            </p>

            <div className='mt-9 text-white text-sm flex justify-center'>
              <Link to={`/profileEdit/${params.id}`} state={userData}>
                <button className='bg-yellow-500 py-2 px-3 rounded-md font-medium'>
                  Edit Profile
                </button>
              </Link>
            </div>
          </section>
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
