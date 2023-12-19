import React, { useState, useEffect } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Buttons from './buttons';
import auth from '../../Appwrite/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MainNavBar() {
    const [userData, setUserData] = useState([]);
    // const googleAuth = (e) => {
    //     e.preventDefault();
    //       auth.loginWithGoogle();
    //     try {
    //         setUserData(auth.getCurrentUser())
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

    const googleAuth = async (e) => {
        e.preventDefault();
        
        try {
          await auth.loginWithGoogle();
          const currentUser = await auth.getCurrentUser();
          if (currentUser){
              setUserData(currentUser);
              toast.success("Logged in Successfully", {
                  position: toast.POSITION.TOP_CENTER,
                });
          }
        } catch (error) {
          console.log(error);
          toast.error(`${error}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      };
      
    // useEffect(()=>{
    //     if (userData.length>0){
    //         toast.success("Loggedin Succesfully", {
    //             position: toast.POSITION.TOP_CENTER,
    //             // className:"toastzindex",
    //           });  
    //         }
    //         else {
    //             toast.error("Login Failed", {
    //                 position: toast.POSITION.TOP_CENTER,
    //                 // className:"toastzindex",
    //             });        
    //         }
    //         console.log(userData);    
    // },[userData])

    return (
        <div className="mainnavbar  bg-[#171717] flex justify-between">
            <div className="leftbuttons flex">
                <Buttons shape={<IoMdHome size={24} />} className="mr-3  sm:hidden" />
                <Buttons shape={<FaSearch size={24} />}  className="sm:hidden"/>
                <Buttons shape={<IoChevronBack size={24} />} className="mr-3 hidden sm:block" />
                <Buttons shape={<IoChevronForward size={24} />} className="hidden sm:block" />


            </div>
            <div className="rightbuttons flex">
                <button className='rounded-2xl p-2 px-4  bg-white mr-3 text-black' onClick={(e)=>googleAuth(e)}>Login</button>
                <Buttons shape={<FaUserAlt size={24} />} />

            </div>
        </div>
    )
}

export default MainNavBar