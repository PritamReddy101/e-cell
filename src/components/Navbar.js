import React from 'react'

function Navbar() {
    return (
        <div className="flex justify-center h-12 border-solid border-b">
            <div className="flex items-center justify-between max-w-screen-lg w-full">
                <h2 className="font-extrabold">DoctorPls</h2>
                <div className="flex justify-between">
                    <h2 className="cursor-pointer ml-5 py-1 px-2">Home</h2>
                    <h2 className="cursor-pointer ml-5 py-1 px-2">Doctor</h2>
                    <h2 className="cursor-pointer ml-5 py-1 px-2">Profile</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar
