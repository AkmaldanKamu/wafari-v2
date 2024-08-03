import React from 'react';
import image from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'



function Beranda() {
  // let object = [
  //   nama = ["niki", "ahmad", "hamdani"]
  // ]

  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-4'>
      <h1 className='beranda-text text-start mb-5 text-3xl text-white'>Temukan Yang Ingin Anda Cari</h1>
      <div className='w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        <div className='relative flex items-center justify-between sm:inline rounded-md shadow-lg overflow-hidden'>
          <img src={image2} alt='' className='sm:w-full relative sm:h-full w-52 h-28 object-cover rounded-md' />
          <p className='text-xl font-bold text-white'>Monumen Nasional</p>
          <div className='absolute hidden sm:inline left-0 bottom-0 right-0 w-full bg-black bg-opacity-50 p-4'>
            <h1 className='font-bold text-3xl text-white'>Monumen Nasional</h1>
          </div>
        </div>

        <div className='relative flex items-center justify-between sm:inline rounded-md shadow-lg overflow-hidden'>
          <img src={image} alt='' className='sm:w-full relative sm:h-full w-52 h-28 object-cover rounded-md' />
          <p className='text-xl font-bold text-white'>Wisata Rekreasi</p>
          <div className='absolute hidden sm:inline left-0 bottom-0 right-0 w-full bg-black bg-opacity-50 p-4'>
            <h1 className='font-bold text-3xl text-white'>Wisata Rekreasi</h1>
          </div>
        </div>

        <div className='relative flex items-center justify-between sm:inline rounded-md shadow-lg overflow-hidden'>
          <img src={image3} alt='' className='sm:w-full relative sm:h-full w-52 h-28 object-cover rounded-md' />
          <p className='text-xl font-bold text-white'>Wisata Kuliner</p>
          <div className='absolute hidden sm:inline left-0 bottom-0 right-0 w-full bg-black bg-opacity-50 p-4'>
            <h1 className='font-bold text-3xl text-white'>Wisata Kuliner</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Beranda;
