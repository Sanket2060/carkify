import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { RxLoop } from "react-icons/rx";
import { AiFillSound } from "react-icons/ai";
function Play() {
    return (
        <>
            <div className="play-section h-28 bg-black p-10 text-white flex justify-between">
                <div className="songdetails font-Roboto flex ">
                    <div className="songimage w-12 h-12 rounded-md mr-4"
                        style={{
                            backgroundImage: 'url("https://c.saavncdn.com/281/Radha-Krishna-Naamawali-Chant-Single-Hindi-2019-20191224043319-500x500.jpg")',
                        }
                        }>
                    </div>
                    <div className="songdetailswords mr-2">
                        <div className="songtitle text-base pb-1 mr-4">Radhe Krishna Chant</div>
                        <div className="singer text-sm">Mohit Lalwani</div>
                    </div>
                    <div className="addtofavourites mr-4 mt-3 flex">
                        <FaRegHeart size={28} className='flex justify-center items-center mr-3' />
                        {/* <img className='songplaygif' src='https://cdn.dribbble.com/users/223661/screenshots/1718151/play-that-funky-music.gif'></img> */}
                        <span class="loader flex justify-center items-center mt-1"></span>

                    </div>
                </div>

                <div className="controller flex flex-col">
                    <div className="songbuttons flex justify-around w-96 pl-4 ">
                        <IoShuffle  size={28} className='smallestDevices:max-smallDevices:invisible'/>
                        <MdSkipPrevious size={30} className='smallestDevices:max-smallDevices:invisible'/>
                        <FaPlay size={30}  />
                        <MdSkipNext size={30} className='smallestDevices:max-smallDevices:invisible'/>
                        <RxLoop size={28} className='smallestDevices:max-smallDevices:invisible'/>
                    </div>
                    <div className='songprogress flex w-full smallestDevices:max-smallDevices:invisible'>
                    <span className='mr-2'>0:00</span>
                    <div className=" border-2 border-b-4 border-x-0 border-t-0 h-4  border-[#525252] w-80 mr-2"></div>
                    <span >5:20</span>
                    </div>
                </div>
                <div className='sounds flex mt-3 smallestDevices:max-smallDevices:invisible'>
                    <AiFillSound size={40} className='mr-2'/>
                <input type="range" className='h-3 mt-3' name="" id="" />
                </div>

            </div>

        </>
    )
}

export default Play