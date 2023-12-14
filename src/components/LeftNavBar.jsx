import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
function LeftNavBar() {
  return (

      <div className="navbar w-[360px] h-[100%] p-4 bg-black text-white fixed left-0 top-0  z-10  ">
        <div className="buttons bg-[#171717] mb-3 p-3">
        <Link to='/'>
            <div className="home flex h-10">
            <IoMdHome size={24} className='mr-3' />
            <span>Home</span>
          </div>
          </Link>
          <Link to='/search'>
          <div className="search flex h-10">
            <FaSearch size={24} className='mr-3' />
            <span>Search</span>
          </div>
          </Link>
        </div>
        <div className="libraries flex justify-between bg-[#171717] h-[85%] p-4">
          <p> <MdQueueMusic size={28} className='inline' /> Your Library</p>
        <Link to='/addsongs'><FaPlus /></Link>


        </div>
      </div>

  )
}

export default LeftNavBar