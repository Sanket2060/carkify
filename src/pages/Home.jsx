import React from 'react'
import MainNavBar from '../components/MainNavBar'
import { FaRegHeart } from "react-icons/fa";
import Song from '../components/Song';


function Home() {
  return (
    <>
      <div className="home w-[2340px] h-fit p-6 pb-28 mt-4 bg-[#171717] font-Roboto text-white relative sm:ml-[23rem]">
        <MainNavBar />
        <div className="welcometext text-3xl mt-7">Welcome back</div>
        <div className="likedsongs w-72 h-16 bg-black mt-7 rounded-xl flex border border-black ">
          <div className="loveshape w-[23%] bg-gradient-to-br from-[#4b2aaf] to-[#75848e] rounded-md flex justify-center items-center"><FaRegHeart size={24} /></div>
          <div className="text bg-[#171717] p-5 w-[77%]">Liked songs</div>
        </div>
        <div className="newestsongs text-3xl mt-7">Newest songs</div>
        <div className="songslist flex flex-wrap mt-4 pl-4 justify-center ">
          <Song />
          <Song />
          <Song/>
          <Song/>
          <Song/>
          <Song/>
          <Song/>


        </div>
      </div>
    </>
  )
}

export default Home