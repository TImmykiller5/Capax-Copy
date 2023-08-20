import React from 'react'
import './button.css'

function Button({text}) {
  return (
    <button className='button w-44 relative z-10 text-white font-semibold text-sm px-5 py-2 rounded-3xl'>{text}</button>
  )
}

export default Button