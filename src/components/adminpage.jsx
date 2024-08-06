import React from 'react'

function AdminPage() {
    return (
        <>
                <div className="  w-full text-center">
                    <h1 className="text-xl font-bold  text-gray-950 md:text-6xl">ADMIN</h1>
                </div>

            <div className="flex flex-wrap items-start justify-start  min-h- bg-gray-900 m-9 rounded-2xl bg-opacity-50 backdrop-blur-lg shadow">
                {/* STARTING OF USER CARD */}
                <div className="min-w-fit sm:w-1/2 md:w-1/4 lg:w-1/4  rounded-lg m-2 bg-gray-800">
                    <div className="flex flex-col items-center pb-3">
                        <img className="w-24 h-24 mb-1 rounded-full shadow-lg mt-2" src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Doctor</span>

                        <div className="flex mt-1 md:mt-1">
                            <button className="py-1.5 text-sm font-medium text-gray-100 p-6 focus:outline-none bg-slate-600 hover:bg-slate-400 hover:text-slate-600 rounded-md ">BLOCK</button>
                        </div>
                    </div>
                </div>
                {/* END OF USER CARD */}
                {/* STARTING OF USER CARD */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4  rounded-lg m-2 bg-gray-800">
                    <div className="flex flex-col items-center pb-3">
                        <img className="w-24 h-24 mb-1 rounded-full shadow-lg mt-2" src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">MANAVAALAN</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">User</span>

                        <div className="flex mt-1 md:mt-1">
                            <button className="py-1.5 text-sm font-medium text-gray-100 p-6 focus:outline-none bg-slate-600 hover:bg-slate-400 hover:text-slate-600 rounded-md ">BLOCK</button>
                        </div>
                    </div>
                </div>
                {/* END OF USER CARD */}

            </div>
        </>

    )
}

export default AdminPage
