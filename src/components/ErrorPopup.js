import { motion } from 'framer-motion';

const ErrorPopup = ({ message, open, close }) => {
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
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
    <div
      className={`${
        open ? 'block' : 'hidden'
      } overflow-y-auto overflow-x-hidden pt-6 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-50`}
    >
      <motion.div
        className='mx-auto mt-32 rounded-lg bg-white p-8 shadow-2xl w-80'
        initial='exit'
        animate={open ? 'enter' : ''}
        variants={subMenuAnimate}
      >
        <h2 className='text-lg font-bold text-center'>Oops!</h2>
        <h4 className='text-center mt-2'>Something went wrong.</h4>
        <h4 className='text-center'>{message}</h4>
        <div className='mt-8 flex items-center justify-center text-xs'>
          <button
            type='button'
            onClick={close}
            className='rounded bg-red-600 px-4 py-2 font-medium text-white'
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPopup;
