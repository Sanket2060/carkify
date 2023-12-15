import React, { useEffect } from 'react'
import Input from './Input'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddSongs() {
    const { register, handleSubmit } = useForm();
    const submitSong = (data) => {
        console.log("From submitSong");
    }
    const { formState: { errors } } = useForm();
    useEffect(()=>{
        if (errors[0]){
            console.log("Error is:",errors[0]);
             errors? toast.error(`${errors[0]}`, {
            position: toast.POSITION.TOP_CENTER,
          }):null;
        }
   
    },[errors])
    
    return (

        <div className="p-3 py-5 mt-4 addsongscontainer flex flex-col justify-start items-center  text-white font-Roboto bg-[#262626] w-full h-[100vh] ml-[23rem]">
            <div className="welcometext text-3xl mb-7 ">Add a song</div>
            <div className="newestsongs text-base mb-3 ">Upload an mp3 file</div>


            <form onSubmit={handleSubmit(submitSong)} className='flex flex-col'>

                <Input placeholder="Song Name" type="text" {...register("songName", {
                    required: "Song name is required.",
                    maxLength: {
                        value: 10,
                        message: "Song name exceed maxLength.",
                      }
                        })} />
                <Input placeholder="Song Author" type="text" {...register("songAuthor", {
                    required: "Song Author is required.",
                    maxLength: {
                        value: 10,
                        message: "Song Author exceed maxLength.",
                      }
                       
                })} />
                <div className="selectfile">
                    <p className='text-start mb-4'>Select a song file</p>
                    <Input type="file" className="pt-5" {...register("songFile",{
                       required: "Song file is required.",
                       
                           
                      
                    })} />
                </div>
                <div className="selectimage">
                    <p className='mb-4'> Select an image</p>
                    <Input type="file" className="pt-5" {...register("songImageFile",{
                        required: "Song image is required.",
                       
                           
                    })} />
                </div>
                <button type='submit'  className='bg-[#21be5b] w-80 h-12 rounded-full px-6 mt-8'>Submit</button>
            </form>

        </div>


    )
}

export default AddSongs