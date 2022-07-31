import React from 'react'
import Navbar from '../components/Navbar'
import db from '../firebase'

db.collection("doctor").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

function Book() {
    return (
        <div className="flex flex-col justify-center">
            <Navbar></Navbar>
            <div className="flex flex-col items-center w-full border-solid border-b">
                <div class="flex flex-wrap mx-3 mb-4 mt-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
                        Doctor/Hospital
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Search" />
                    </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-last-name">
                    Location
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="City" />
                </div>
                </div>
            </div>
            <div className="flex bg-bgColor h-full">
            <div className="flex mt-6">
                <img className="ml-8 mr-4 w-36 h-36 rounded-full object-contain" src="http://jjarulhospital.com/images/doctor-profile.jpg" alt="img" />
                <div className="flex flex-col justify-around pr-16">
                <h2 className="text-primary font-bold text-lg">Dr. Santosh Tiwari</h2>
                <h3 className="text-base font-medium">Dentist</h3>
                <p className=" text-sm text-gray-700">30 years experience overall</p>
                <p className="text-sm font-medium">Kukatpally, Hyderabad</p>
                <p className="text-sm text-gray-700">Dr. Sunny Soni has completed Endodontics from DAPM RV Dental College and Hospital. He is updated with the latest advances in the field of Dentistry, he expertise's in advanced rotary Endodontics, Micro-Endodontics, re-treatment, rehabilitation of badly broken teeth, post Endodontics Restorations (Fibre Posts, Pins, Cast Post), Full Mouth Rehabilitation, Periapical Surgery, Veneers, Smile Design, Inlays, Onlays, Hemisection, etc.</p>
            </div>
            </div>
            
            </div>
            <h1 className="font-bold text-xl text-primary ml-8 mt-8">Slots</h1>
        </div>
    )
}

export default Book
