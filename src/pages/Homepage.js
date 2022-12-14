import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const Homepage = () => {
  return (
    <>
      <Navigation />
      <section className='bg-white py-32'>
        <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
          <div className='mx-auto max-w-lg text-center'>
            <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
              Welcome To CMS App
            </h2>

            <p className='text-gray-500 mt-4'>
              A content management system (CMS) is an application that is used
              to manage content, allowing multiple contributors to create, edit
              and publish.
            </p>
          </div>

          <div className='mx-auto mt-8 max-w-xl'>
            <form action='#' className='sm:flex sm:gap-4'>
              <div className='sm:flex-1'>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>

                <input
                  type='email'
                  placeholder='Email address'
                  className='w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400'
                />
              </div>

              <button
                type='submit'
                className='group mt-4 flex w-full items-center justify-center rounded-md bg-emerald-700 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto'
              >
                <span className='text-sm font-medium'> Get Newsletter </span>

                <svg
                  className='ml-3 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
