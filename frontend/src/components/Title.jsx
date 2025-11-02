import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3' >
        <p className='text-gray-700 montserrat-bold' > {text1} <span className='text-gray-700 font-bold montserrat-bold'>{text2} </span> </p>
    </div>
  )
}

export default Title