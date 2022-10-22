const LoadingTable = () => {
  return (
    <table className='w-full divide-y divide-gray-200 text-sm animate-pulse'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='whitespace-nowrap px-4 py-2 text-center font-medium'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-500'></div>
          </th>
          <th className='whitespace-nowrap px-4 py-2 text-center font-medium'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-500'></div>
          </th>
          <th className='whitespace-nowrap px-4 py-2 text-center font-medium'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-500'></div>
          </th>
          <th className='whitespace-nowrap px-4 py-2 text-center font-medium'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-500'></div>
          </th>
        </tr>
      </thead>

      <tbody className='divide-y divide-gray-200'>
        <tr>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
        </tr>
        <tr>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-900'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300'></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LoadingTable;
