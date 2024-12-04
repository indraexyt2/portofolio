import React from 'react'

const Title = ({children}) => {
  return (
    <h2 className='title w-max text-3xl sm:text-3xl md:text-4xl font-semibold text-slate-700'>
        { children }
    </h2>
  )
}

export default Title
