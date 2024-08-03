import React from 'react'

export const Options = ({text}) => {
  return (
    <div className='inline-block'>
        <div className='p-3 cursor-pointer px-3 py-1 bg-white border border-black rounded-full shadow-md'>
            <p className='text-slate-700 font-semibold'>{text}</p>
        </div>
    </div>
  )
}
