import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import SingleSong from '../components/SingleSong';
function SongDescription() {
  return (
    <>
      <div className="relative songdescription w-full h-full   bg-[#171717] font-Roboto text-white   ">
        <div className="image h-[80vh] w-full blur-xl " style={{
          backgroundImage: `URL(https://i.ndtvimg.com/i/2016-01/shakira_640x480_81453894474.jpg?ver-20231203.06`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}>
         
        </div>
          <IoMdCloseCircle size={32} className=' text-white  absolute top-[2vw] right-[2vw] cursor-pointer'/>
            {/* <div className="song">

            <div className="imagesquare w-40 h-40" 
            style={{
              backgroundImage: `URL(https://i.ndtvimg.com/i/2016-01/shakira_640x480_81453894474.jpg?ver-20231203.06`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}
             >
              <div className="imagedescription">
                
              </div>
              

            </div>

            </div> */}
            
          <div className="song absolute bottom-[30vh] ">  <SingleSong className='w-36 h-36' large={true} /></div>
        <div className='w-full h-[20vh] bg-black'></div>
      </div>

    </>
  )
}

export default SongDescription