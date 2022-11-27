import React from 'react'

const Boton = ({children,funcion}) => {
  return (
    <button 
    className='
    p-2
    w-12
    m-2
    border 
    text-white
    text-xl
    rounded-xl
    hover:bg-slate-700
    '
    onClick={funcion}>{children}</button>
  )
}

export default Boton