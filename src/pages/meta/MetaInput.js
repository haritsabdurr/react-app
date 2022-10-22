import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api';
import Modal from '../../components/Modal';
import ErrorPopup from '../../components/ErrorPopup';
import LoadingTable from '../../components/LoadingTable';

const MetaInput = () => {
  const navigate = useNavigate();
  const [meta, setMeta] = useState();
  const [data, setData] = useState([]);

  const [isWarning, setIsWarning] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target.value;
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const redirectError = () => {
    setTimeout(() => {
      navigate('/');
    }, 600);
  };

  const fetchUsers = () => {
    getUser()
      .then((res) => {
        setTimeout(() => {
          setIsLoading(true);
          setData(res.data);
        }, 2000);
      })
      .catch((err) => {
        setMeta(err.message);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ErrorPopup message={meta} open={isError} close={redirectError} />
      <Modal open={isWarning} close={() => setIsWarning(false)} />
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Meta Input</h1>
        </div>

        <form
          action=''
          className='mx-auto mt-8 mb-0 max-w-md space-y-4'
          onSubmit={handleSubmit}
        >
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
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className='px-4'>
        <h1 className='text-center text-xl font-semibold py-4'>Meta Data</h1>
        <div className='container mx-auto overflow-hidden overflow-x-auto rounded-lg border border-gray-200 max-w-screen-md mb-12'>
          {isLoading ? (
            <table className='w-full divide-y divide-gray-200 text-sm'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                    Meta Title
                  </th>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                    Meta URL
                  </th>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                    Meta Description
                  </th>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {data?.map((data) => (
                  <tr key={data?.id}>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
                      {data?.name}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
                      {data?.phone}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
                      {data?.email}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
                      <div className='flex justify-start items-center gap-4'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          onClick={() => navigate('/metaEdit')}
                          className='w-5 h-5 hover:text-green-500'
                        >
                          <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z' />
                          <path d='M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z' />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          onClick={() => setIsWarning(true)}
                          className='w-5 h-5 hover:text-red-500'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <LoadingTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default MetaInput;