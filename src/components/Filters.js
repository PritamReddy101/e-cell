import React from 'react'

function Filters() {
    return (
        <div className="flex justify-center  w-1/4 mt-4">
        <div className="flex flex-col pt-5 items-center bg-yellow-400 rounded-xl h-fit gap-5">
            <h2 className="text-gray-800 font-bold text-lg">Filters</h2>
            <div className="flex flex-col items-center">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Speciality
                </label>
                <input class="appearance-none h-5 w-3/5 block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Search" />
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>Cardiologist</label>
                </div>
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>Cardiologist</label>
                </div>
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>Cardiologist</label>
                </div>
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>Cardiologist</label>
                </div>
            </div>
            <div className="flex flex-col items-center mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Qualification
                </label>
                <input class="appearance-none h-5 w-3/5 block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Search" />
                <div className="flex flex-col">
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>MD</label>
                </div>
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>RMP</label>
                </div>
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>MBBS</label>
                </div>
                <div className="flex items-center mt-1">
                    <input className="h-4 w-4 mr-1 border-gray-800" type="checkbox"></input>
                    <label>MD foreign</label>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Filters
