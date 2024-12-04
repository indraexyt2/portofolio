import React from 'react'

const CircleButton = ({ icon, onClick }) => {
  return (
    <button 
        onClick={onClick}
        className='flex justify-center items-center p-2 w-10 h-10 rounded-full bg-yellow-300 border-2 border-slate-900 hover:bg-yellow-500'>
        <span>
            { icon }
        </span>
    </button>
  )
}

export default CircleButton
