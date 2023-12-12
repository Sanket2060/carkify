import React from 'react'

function Buttons({ className, shape }) {
    return (
        <button className={`buttoncontainer p-2 rounded-full ${className} text-black flex justify-center items-center bg-white`}>
            {shape}
        </button>
    )
}

export default Buttons