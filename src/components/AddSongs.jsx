import React, { useEffect } from 'react'
import Input from './Input'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddSongs() {
    const { register, handleSubmit } = useForm();
    const submitSong = (data) => {
        console.log("It happened");
    }
    const { formState: { errors } } = useForm();
    useEffect(()=>{
        toast.error(`${errors}`, {
            position: toast.POSITION.TOP_CENTER,
          });
    },[errors])
    
    return (

        <div className="p-3 py-5 mt-4 addsongscontainer flex flex-col justify-start items-center  text-white font-Roboto bg-[#262626] w-full h-[100vh] ml-[23rem]">
            <div className="welcometext text-3xl mb-7 ">Add a song</div>
            <div className="newestsongs text-base mb-3 ">Upload an mp3 file</div>


            <form onSubmit={handleSubmit(submitSong)} className='flex flex-col'>

                <Input placeholder="Song Name" type="text" {...register("songName", {
                    maxLength: 12,
                    required:true,
                    message: 'Song name should be shorter'
                })} />
                <Input placeholder="Song Author" type="text" {...register("songAuthor", {
                    maxLength: 12,
                    required:true,
                    message: 'Author name should be shorter'
                })} />
                <div className="selectfile">
                    <p className='text-start mb-4'>Select a song file</p>
                    <Input type="file" className="pt-5" {...register("songFile",{
                        
                        required:true,
                        message:'Song file is required'
                    })} />
                </div>
                <div className="selectimage">
                    <p className='mb-4'> Select an image</p>
                    <Input type="file" className="pt-5" {...register("songImageFile",{
                        required:true,
                        message:'Song image file is required'
                    })} />
                </div>
                <button type='submit'  className='bg-[#21be5b] w-80 h-12 rounded-full px-6 mt-8'>Submit</button>
            </form>

        </div>


    )
}

export default AddSongs