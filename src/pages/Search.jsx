import React from 'react'
import LeftNavBar from '../components/LeftNavBar'
import MainNavBar from '../components/MainNavBar'
import { FaRegHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Song from '../components/Song';
import SingleSong from '../components/SingleSong';


function Search() {
  return (
    <>
      <div className="home w-[2340px] h-fit p-6 mt-4 bg-[#171717] font-Roboto text-white  ml-[23rem]">
        <MainNavBar />
        <div className="searchtext text-3xl mt-7">Search</div>
        
        <div className="songslist  mt-7 ">
            <SingleSong/>
            <SingleSong/>
            <SingleSong/>
            <SingleSong/>
            <SingleSong/>



        </div>
      </div>
    </>
  )
}

export default Search