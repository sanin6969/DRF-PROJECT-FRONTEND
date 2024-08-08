import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
function Signin() {
    return (
        <>

            <>
                <div className="flex flex-col items-center justify-center px-6 py-8  mt-14 lg:py-0">
                    <div className="w-full max-w-sm bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="flex justify-center items-center space-x-4">
                                <NavLink to="/signin">
                                <h1 className="text-xl font-bold text-gray-950 md:text-2xl bg-gray-400 rounded-md p-2">
                                    Sign In
                                </h1>
                                </NavLink>
                                <NavLink to="/signup">
                                <h1 className="text-3xl font-bold text-gray-400 md:text-2xl">
                                    Sign Up
                                </h1>
                                </NavLink>
                            </div>

                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-black">Not a user
                                    <NavLink to="/signup">
                                        <span  className="hover:text-gray-500"> Sign Up?</span>
                                    </NavLink>
                                </p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <NavLink to="/admin">
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-500 bg-opacity-70 text-gray-400 hover:bg-gray-900 hover:text-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600">
                                        Sign In
                                    </button>
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default Signin