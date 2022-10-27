import Cookies from 'js-cookie';
import LoadingImage from 'components/loader/LoadingImage';
import LoginPopup from 'components/popup/LoginPopup';
import ErrorPopup from 'components/popup/ErrorPopup';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import { useEffect, useState } from 'react';
import { getPhotos } from 'api';
import { useNavigate } from 'react-router-dom';

const Photos = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loginVal, setLoginVal] = useState(true);
  const [message, setMessage] = useState(false);

  const redirectError = () => {
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const fetchPhotos = () => {
    const isLogin = Cookies.get('token');
    if (isLogin) {
      getPhotos()
        .then((res) => {
          setTimeout(() => {
            setData(res.data);
            setIsLoading(true);
          }, 800);
        })
        .catch((err) => {
          setMessage(err.message);
          setIsError(true);
        });
      setLoginVal(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <Navigation />
      <div className='container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <LoginPopup close={loginVal} />
        <ErrorPopup message={message} open={isError} close={redirectError} />
        {isLoading ? (
          <div className='grid grid-cols-3 gap-3'>
            {data.map((data) => (
              <a
                key={data.id}
                className='block bg-white rounded-xl shadow-xl p-3'
              >
                <img
                  alt='Lava'
                  src={data.url}
                  className='h-56 w-full rounded-xl object-cover'
                />
                <div className='pt-2 px-2'>
                  <p className='text-lg font-semibold'>{data.title}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <LoadingImage />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Photos;
