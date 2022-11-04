import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import React from 'react';

const Page404 = () => {
  return (
    <>
      <Navigation />
      <div className='flex justify-center items-center text-3xl font-semibold py-72'>
        404 | Page Not Found
      </div>
      <Footer />
    </>
  );
};

export default Page404;
