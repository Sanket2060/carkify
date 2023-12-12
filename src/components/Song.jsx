import React from 'react'

function Song() {
  return (
    <div className='song w-64 rounded-lg bg-black h-80 font-Roboto text-white p-4 m-1' >
        <div className='songimg w-full h-[70%] mb-4 rounded-md' style={{
          backgroundImage:"url('https://c.saavncdn.com/281/Radha-Krishna-Naamawali-Chant-Single-Hindi-2019-20191224043319-500x500.jpg')",
          backgroundSize:"contain"
      }} ></div>
        <div className="songdescription">
          <p className='songname text-md mb-2'>Radha Krishna Naamawali</p>
          <p className='singer text-sm'>By - Mohit Lalwani</p>
        </div>
    </div>
  )
}

export default Song
