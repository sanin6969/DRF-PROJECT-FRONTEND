import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';
function Home() {
    let {user}=useContext(AuthContext)
    return (
        <>
            <div className="flex flex-wrap justify-center h-auto bg-zinc-700 m-4 rounded-2xl bg-opacity-65 backdrop-blur-sm shadow">
                <div className="w-full text-center mb-4">
                    <h1 className="text-xl font-bold text-gray-800 md:text-6xl">DOCTORS HUB</h1>
                </div>
                {user?null:<div className="w-full flex justify-center items-center space-x-4 mb-3">
                    <NavLink to="signin">
                    <button className="text-3xl m-2 font-bold text-gray-950 md:text-md lg:text-md p-3 rounded-lg hover:text-gray-400 ">
                        Sign In
                    </button>
                    </NavLink>
                    <NavLink to="signup">
                    <button className="text-3xl m-2 font-bold text-gray-400 md:text-md lg:text-md  p-3 rounded-lg hover:text-gray-950 ">
                        Sign Up
                    </button>
                    </NavLink>
                </div>}
                

                <div className="relative flex bg-clip-border rounded-xl bg-gray-950  bg-opacity-65 text-gray-300 shadow-md w-full max-w-5xl flex-row mb-3">
                    <div className="relative w-2/5 m-0 overflow-hidden  bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img
                            src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1722927037~exp=1722930637~hmac=0c516c41808b0c6ffd7e08ff94120f0007e7c740c471c77e2083ebaba9e7db6b&w=826"
                            alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6 w-3/5">

                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Check for available doctors for you
                        </h4>
                        <ol className="list-disc pl-5 mb-8 font-sans text-base font-normal leading-relaxed">
                            <li className="transition-colors duration-900 ease-in-out hover:text-white">
                                Find the best doctors tailored to your specific health needs.
                            </li>
                            <li className="transition-colors duration-300 ease-in-out hover:text-white">
                                Our network connects you with leading professionals in every field.
                            </li>
                            <li className="transition-colors duration-300 ease-in-out hover:text-white">
                                Access top-rated physicians for precise and effective treatment.
                            </li>
                            <li className="transition-colors duration-300 ease-in-out hover:text-white">
                                Trust in our curated selection of the best doctors for every illness.
                            </li>
                        </ol>
                        <NavLink to="Homepage">
                            <button className="flex items-center gap-2 px-6 py-3 font-sans text-md font-bold text-center text-gray-200  align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900 " type="button">
                                Check for Doctors
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home