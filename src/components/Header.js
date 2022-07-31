import React from 'react'

function Header() {
    return (
        <div className="flex flex-col items-center pt-6 gap-4 bg-primary">
            <h1 className="text-white font-bold text-3xl tracking-wide">Search Doctor, Make an Appointment</h1>
            <h3 className="text-white font-semibold text-xl">Discover the best doctors, clinics & hospitals in your city.</h3>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                        Doctor/Hospital
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Search" />
                </div>
            <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-last-name">
                    Location
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="City" />
            </div>
            </div>
        </div>
    )
}

export default Header
