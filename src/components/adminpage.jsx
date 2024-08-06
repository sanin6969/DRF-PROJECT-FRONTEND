import React from 'react'

function AdminPage() {
    return (
        <>
            <div className="w-full text-center mb-4">
                <h1 className="text-xl font-bold text-gray-950 md:text-6xl">ADMIN</h1>
            </div>

            <div className="flex flex-wrap">
                {/* DOCTORS SECTION */}
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-gray-900 rounded-2xl bg-opacity-45 backdrop-blur-sm shadow">
                        <div className="w-full text-center">
                            <h1 className="text-xl font-bold text-gray-300 md:text-4xl">DOCTORS</h1>
                        </div>
                        {/* STARTING OF DOCTOR CARDS */}
                        <div className="flex flex-wrap">
                            {/* Doctor Card */}
                            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 p-2">
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <div className="flex flex-col items-center">
                                        <img className="w-24 h-20 mb-2 rounded-full shadow-md" src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" alt="Bonnie Green" />
                                        <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">Doctor</span>
                                        <div className="flex mt-2">
                                            <button className="py-1 text-xs font-mono px-3 text-gray-100 focus:outline-none bg-slate-600 hover:bg-red-600 hover:text-black rounded-md">BLOCK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* USERS SECTION */}
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-gray-900 rounded-2xl bg-opacity-45 backdrop-blur-sm shadow">
                        <div className="w-full text-center">
                            <h1 className="text-xl font-bold text-gray-300 md:text-4xl">USERS</h1>
                        </div>
                        {/* STARTING OF USER CARDS */}
                        <div className="flex flex-wrap ">
                            {/* User Card */}
                            <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 p-2">
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <div className="flex flex-col items-center">
                                        <img className="w-24 h-20 mb-2 rounded-full shadow-md" src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="Manavaalan" />
                                        <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white">MANAVAALAN</h5>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">USER</span>
                                        <div className="flex mt-2">
                                            <button className="py-1 text-xs font-mono px-3 text-gray-100 focus:outline-none bg-slate-600 hover:bg-red-600 hover:text-black rounded-md">BLOCK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage
