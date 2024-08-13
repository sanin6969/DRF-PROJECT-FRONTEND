import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function HomepageView() {
    const [doctor, setDoctor] = useState([]);
    let baseUrl = 'http://127.0.0.1:8000/'
    const { authTokens ,user} = useContext(AuthContext)
    console.log(user);
    
    const DoctorProfilesViews = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/doctor/', {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            });
            console.log('doctorview', response.data);
            if (response.status === 200) {
                const verifiedDoctors = response.data.doctors.filter(doctorData => doctorData.is_verified);
                console.log(verifiedDoctors,'verified doctors');
                
                setDoctor(verifiedDoctors);
            }
        } catch (error) {
            toast.error(error);
        }
    };
    useEffect(() => {
        DoctorProfilesViews();
    }, []);
    return (
        <>
            <div className="w-full text-center">
                <h1 className="text-xl font-bold text-gray-700 md:text-6xl">DOCTORS</h1>
            </div>

            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
                    {doctor.map((doctorData) => (
                        <div
                            key={doctorData.id}
                            className="relative group w-full h-80 overflow-hidden bg-black m-auto mt-4"
                        >
                            <img
                                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                                src={`${baseUrl + doctorData.profile_picture}`}
                            />
                            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                                <div className="absolute w-full flex place-content-center">
                                    <p className="capitalize font-serif font-bold text-2xl text-center shadow-2xl text-white mt-10">
                                        {doctorData.doctor.username}
                                    </p>
                                </div>
                                <div className="absolute w-full flex place-content-center mt-20">
                                    <p className="font-sans text-center w-4/5 text-white mt-5">
                                        {doctorData.department}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomepageView;
