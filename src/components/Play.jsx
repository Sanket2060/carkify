import React, { useEffect, useRef, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { RxLoop } from "react-icons/rx";
import { AiFillSound } from "react-icons/ai";
import { FaPause } from "react-icons/fa";
import conf from '../../conf/conf';
function Play() {
    const audioTag=useRef();
    const soundRange=useRef();
    const [currentSong,setCurrentSong]=useState(
        {
            songTitle:"Animal",
            singer:"",
            songUrl:"https://www.macaronisoup.com/songs/mp3/HelloEverybody.mp3",
            songImage:"",
              
          }
    );
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongNumber,setCurrentSongNumber]=useState(0);
    const songs=[
        {
          songTitle:"DaTweekaz",
          singer:"",
          songUrl:"https://www.macaronisoup.com/songs/mp3/BINGO.mp3",
           songImage:"",
            
        },
       
          {
            songTitle:"Previous favourite",
            singer:"",
            songUrl:"http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
             songImage:"",
              
          },
          {
            songTitle:"Previous favourite",
            singer:"",
            songUrl:"https://www.macaronisoup.com/songs/mp3/WalkinShoes.mp3",
             songImage:"",
              
          }
          

    ]
    
    const PlayPause = () => {  
        setIsPlaying((initial) => !initial);
       if (isPlaying){
           audioTag.current.pause();
       }
       else{
        audioTag.current.play();
       }
    }
    const NextSong=()=>{
        
        setCurrentSong(songs[currentSongNumber]);
        setCurrentSongNumber(currentSongNumber+1);
        if (currentSongNumber==songs.length-1){               //0 1 2 3   3 3 3 3
            setCurrentSongNumber(0);   
        }
        // PlayPause();
        // audioTag.current.play();

    }
    const PreviousSong=()=>{
        
        setCurrentSong(songs[currentSongNumber]);
        setCurrentSongNumber(currentSongNumber-1);
        if (currentSongNumber==0){               //0 1 2 3   3 3 3 3
            setCurrentSongNumber(songs.length-1);   
        }

    }
    
    const HandleSoundChange=()=>{
        const value=soundRange.current.value;
        audioTag.current.volume=parseInt((value/100)*10); //must be *1
        console.log("value:",(value/100)*1); 
    }
    const ShuffleSongs=()=>{
        setCurrentSongNumber(Math.round(Math.random()*(songs.length-1)));
        setCurrentSong(songs[currentSongNumber]);
    }
    useEffect(() => {
        if (isPlaying){
            console.log("Current song:",currentSong);
            audioTag.current.play();
        }
    }, [currentSong]);
    useEffect(()=>{
        console.log("Currentsongnumber:",currentSongNumber);
    },[currentSongNumber])

    return (


        <>
        <audio src={`${currentSong.songUrl}`} ref={audioTag}></audio>
            <div className="play-section h-28 w-full bg-black p-10 text-white flex justify-between fixed bottom-0 z-10">
                <div className="songdetails font-Roboto flex ">
                    <div className="songimage w-12 h-12 rounded-md mr-4 hover:cursor-pointer"
                        style={{
                            backgroundImage: 'url("https://i.ytimg.com/vi/Ng12hf3uVp4/maxresdefault.jpg")',
                            backgroundSize: 'contain'
                        }
                        }>
                    </div>
                    <div className="songdetailswords mr-2 hover:cursor-pointer">
                        <div className="songtitle text-base pb-1 mr-4">Radhe Krishna Chant</div>
                        <div className="singer text-sm">Mohit Lalwani</div>
                    </div>
                    <div className="addtofavourites mx-16 sm:mr-4 mt-3 flex  ">
                        <FaRegHeart size={28} className='flex justify-center items-center mr-3 hover:cursor-pointer hidden sm:block' />
                        {/* <img className='songplaygif' src='https://cdn.dribbble.com/users/223661/screenshots/1718151/play-that-funky-music.gif'></img> */}
                    {isPlaying?<span class="loader flex justify-center items-center mt-1"></span>:null}    

                    </div>
                </div>

                <div className="controller flex flex-col ">
                    <div className="songbuttons flex justify-around w-96 pl-4 ">
                        <IoShuffle size={28} className='smallestDevices:max-smallDevices:invisible hover:cursor-pointer hidden sm:block' onClick={ShuffleSongs} />
                        <MdSkipPrevious size={30} className='smallestDevices:max-smallDevices:invisible hover:cursor-pointer hidden sm:block' onClick={PreviousSong} />
                       {!isPlaying?
                        <FaPlay size={30} className='hover:cursor-pointer' onClick={PlayPause} />
                        :
                        <FaPause size={30} className='hover:cursor-pointer' onClick={PlayPause} />
                        }
                        <MdSkipNext size={30} className='smallestDevices:max-smallDevices:invisible hover:cursor-pointer hidden sm:block' onClick={NextSong} />
                        <RxLoop size={28} className='smallestDevices:max-smallDevices:invisible hover:cursor-pointer hidden sm:block' />
                    </div>
                    <div className="container hidden sm:block">

                        <div className='songprogress flex w-full '>
                            <span className='mr-2 '>0:00</span>
                            <div className=" border-2 border-b-4 border-x-0 border-t-0 h-4  border-[#525252] w-80 mr-2 "></div>
                            <span className='' >5:20</span>
                        </div>
                    </div>
                </div>
                <div className='sounds flex mt-3 '>
                    <AiFillSound size={40} className='mr-2' />
                    <input type="range" className='h-3 mt-3' name="" id="" ref={soundRange} onChange={HandleSoundChange}/>
                </div>

            </div>

        </>
    )
}

export default Play