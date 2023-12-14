import React from 'react'

function Input({className,...properties}) {
  return (
    <input type="search" name="" id="" className={`p-2 w-80 h-16 mb-4 focus:outline-none placeholder:font-Roboto placeholder:text-white bg-[#404040] rounded-xl ${className}`} {...properties} />
  )
}

export default Input