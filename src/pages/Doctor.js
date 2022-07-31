import React from 'react'
import Doctors from '../components/Doctors'
import Filters from '../components/Filters'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Doctor() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="flex w-full">
                <Filters/>
                <div  className="mt-4">
                <Doctors/>
                <Doctors/>
                <Doctors/>
                <Doctors/>
                </div>
            </div>
        </div>
    )
}

export default Doctor
