import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Buttons from './buttons';
function MainNavBar() {
    return (
        <div className="mainnavbar  bg-[#171717] flex justify-between">
            <div className="leftbuttons flex">
                <Buttons shape={<IoMdHome size={24} />} className="mr-3" />
                <Buttons shape={<FaSearch size={24} />} />
                <Buttons shape={<IoChevronBack size={24} />} className="mr-3 invisible md:visible" />
                <Buttons shape={<IoChevronForward size={24} />} className="invisible md:visible" />


            </div>
            <div className="rightbuttons flex">
                <button className='rounded-2xl p-2 px-4  bg-white mr-3 text-black'>Logout</button>
                <Buttons shape={<FaUserAlt size={24} />} />

            </div>
        </div>
    )
}

export default MainNavBar