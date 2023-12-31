import React from 'react'
import { FaRegHeart } from "react-icons/fa";

function SingleSong({className,large=false}) {
  return (
    <div className={`play-section w-full mt-4 h-28  p-10 ${large?'':' bg-black'} text-white flex justify-between`}>
      <div className="songdetails font-Roboto flex justify-between ">
        <div className="song flex ">

          <div 
            className={`${large ? className : 'w-12 h-12'} songimage rounded-md mr-4`}            
            style={{
              backgroundImage: 'url("https://static.toiimg.com/thumb/msid-87755795,width-1280,resizemode-4/87755795.jpg")',
              backgroundSize:'contain'
            }
            }>
          </div>
          <div className={`songdetailswords mr-2 ${large?'pt-12 mr-[1vw]':''} `}>
            <div className="songtitle text-base pb-1 mr-4">Radhe Krishna Chant</div>
            <div className="singer text-sm ">By-Mohit Lalwani</div>
          </div>
        </div>
        
      </div>
      <div className={`addtofavourites mr-4 mt-3 flex ${large?'pt-10':''} `}>
          <FaRegHeart size={28} className='flex justify-center items-center mr-3' />
          {/* <img className='songplaygif' src='https://cdn.dribbble.com/users/223661/screenshots/1718151/play-that-funky-music.gif'></img> */}
        </div>
    </div>
  )
}

export default SingleSong