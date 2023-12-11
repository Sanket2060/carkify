import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
function LeftNavBar() {
  return (

    <div className="navbar w-80 h-[87%] p-4 bg-black text-white">
      <div className="buttons bg-[#171717] mb-3 p-3">
        <div className="home flex h-14">
          <IoMdHome size={24} className='mr-3'/>
          <span>Home</span>
        </div>
        <div className="search flex h-14">
          <FaSearch size={24} className='mr-3'  />
          <span>Search</span>
        </div>
      </div>
      <div className="libraries flex justify-between bg-[#171717] h-[80%] p-4">
        <p> <MdQueueMusic size={28} className='inline'/> Your Library</p>
        <FaPlus/>


      </div>
    </div>

  )
}

export default LeftNavBar