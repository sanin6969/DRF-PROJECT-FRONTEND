import React from 'react';

function HomepageView() {
    return (
        <>
        <div className="  w-full text-center">
                    <h1 className="text-xl font-bold  text-gray-700 md:text-6xl">DOCTORS</h1>
                </div>
            <div className="flex justify-center mt-10 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
                    <div className="relative group w-full h-80 overflow-hidden bg-black m-auto mt-4">
                        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                            src='https://img.freepik.com/free-photo/annoyed-young-female-doctor-medical-robe-with-stethoscope-puts-hand-shoulder-looks-camera-isolated-white-background-with-copy-space_141793-34238.jpg?t=st=1722674661~exp=1722678261~hmac=0fd62b66f270cb3b0dff5dbd409a646edbe96c3a04045f7d2e15b90b6aa632b8&w=740' />
                        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                            <div className="absolute w-full flex place-content-center">
                                <p className="capitalize font-serif font-bold text-2xl text-center shadow-2xl text-white mt-10">SARASSU OP</p>
                            </div>
                            <div className="absolute w-full flex place-content-center mt-20">
                                <p className="font-sans text-center w-4/5 text-white mt-5">HOMEOPATHY</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group w-full h-80 overflow-hidden bg-black m-auto mt-4">
                        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                            src='https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg' />
                        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                            <div className="absolute w-full flex place-content-center">
                                <p className="capitalize font-serif font-bold text-2xl text-center shadow-2xl text-white mt-10">SUMATHI OK</p>
                            </div>
                            <div className="absolute w-full flex place-content-center mt-20">
                                <p className="font-sans text-center w-4/5 text-white mt-5">DERMATOLOGIST</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group w-full h-80 overflow-hidden bg-black m-auto mt-4">
                        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                            src='https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg' />
                        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                            <div className="absolute w-full flex place-content-center">
                                <p className="capitalize font-serif font-bold text-2xl text-center shadow-2xl text-white mt-10">SUSHEELA PK</p>
                            </div>
                            <div className="absolute w-full flex place-content-center mt-20">
                                <p className="font-sans text-center w-4/5 text-white mt-5">DENTIST</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group w-full h-80 overflow-hidden bg-black m-auto mt-4">
                        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                            src='https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg' />
                        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                            <div className="absolute w-full flex place-content-center">
                                <p className="capitalize font-serif font-bold text-2xl text-center shadow-2xl text-white mt-10">AMMU KUTTY</p>
                            </div>
                            <div className="absolute w-full flex place-content-center mt-20">
                                <p className="font-sans text-center w-4/5 text-white mt-5">GYNAGOLOGIST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default HomepageView;
