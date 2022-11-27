import React from 'react'

const DisplayNumber = ({children}) => {
  return (
    <div  className='display'>
      <h2>{children}</h2>
    </div>
  )
}

export default DisplayNumber