import React from 'react'
import {useNavigate} from "react-router-dom";

function Doctors() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/book");
    };

    return (
        <div className="flex justify-center border border-gray-200 h-fit p-2 mb-8 bg-white rounded-lg gap-4">
            <img className="mr-4 w-36 h-36 rounded-full object-contain" src="http://jjarulhospital.com/images/doctor-profile.jpg" alt="img" />
            <div className="flex flex-col justify-around pr-16">
                <h2 className="text-primary font-bold text-lg">Dr. Santosh Tiwari</h2>
                <h3 className="text-base font-medium">Dentist</h3>
                <p className=" text-sm text-gray-700">30 years experience overall</p>
                <p className="text-sm font-medium">Kukatpally, Hyderabad</p>
                <p className="text-sm text-gray-700">Aesthetic Dental Clinic</p>
            </div>
            <div className="flex flex-col justify-end items-center gap-3">
                <h2 className="text-green-600 font-semibold">Available today</h2>
                <button onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Book Appointment</button>
            </div>
            
        </div>
    )
}

export default Doctors
