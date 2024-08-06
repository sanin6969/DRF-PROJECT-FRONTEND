import React from 'react';

function Profile() {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-2 mt-14 lg:py-0">
            <div className="w-full max-w-lg bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow dark:border sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-700">
                <div className="p-2 md:p-4 flex flex-col items-center">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">My Details</h2>
                    <div className="flex w-full">
                        
                        <img
                            className="w-1/2 h-auto rounded-3xl shadow-lg"
                            src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg"
                            alt="Bonnie image"
                        />
                        
                        <div className="w-1/2 flex flex-col justify-center px-2 space-y-3">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-center"
                                    placeholder="SUSHEEEELA OK"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="susheela@gmail.com"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-2 w-full">
                        <form action="" className="space-y-3 w-full">
                            <div className="flex space-x-3">
                                <div className="w-1/2">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Edit Password"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                    <input
                                        type="text"
                                        name="department"
                                        id="department"
                                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-center"
                                        placeholder="DERMATOLOGY"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gray-500 bg-opacity-70 text-gray-400 hover:bg-gray-900 hover:text-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
