import { useEffect, useState } from 'react';
import { getPhotos } from '../../api';
import LoadingImage from '../../components/LoadingImage';
import ErrorPopup from '../../components/ErrorPopup';
import { useNavigate } from 'react-router-dom';

const Photos = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [meta, setMeta] = useState(false);

  const redirectError = () => {
    setTimeout(() => {
      navigate('/');
    }, 600);
  };

  const fetchPhotos = () => {
    getPhotos()
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
          setIsLoading(true);
        }, 1000);
      })
      .catch((err) => {
        setMeta(err.message);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className='container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <ErrorPopup message={meta} open={isError} close={redirectError} />
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
  );
};

export default Photos;
