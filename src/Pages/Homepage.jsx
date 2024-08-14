import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function HomepageView() {
    const [doctor, setDoctor] = useState([]);
    let baseUrl = 'http://127.0.0.1:8000/'
    const { authTokens, user } = useContext(AuthContext)
    const [doc, setDoc] = useState({
        doctor: {
            username: '',
            email: '',
            first_name: '',
            last_name: ''
        },
        department: '',
        profile_picture: '',
        doctor_proof: ''
    });

    const DoctorProfilesViews = async () => {
        try {
            let response;

            if (user?.is_doctor) {
                response = await axios.get('http://127.0.0.1:8000/api/doctorgetedit/', {
                    headers: {
                        'Authorization': `Bearer ${authTokens.access}`
                    }
                });
                console.log('doctorview', response.data);
                console.log('username:==', response.data.doctor.username);
                console.log('email:==', response.data.doctor.email);
                console.log('department:==', response.data.department);

                if (response.status === 200) {
                    setDoc(response.data);
                    console.log(doc, 'docccccccccccccc');

                }

            } else {
                response = await axios.get('http://127.0.0.1:8000/api/doctor/', {
                    headers: {
                        'Authorization': `Bearer ${authTokens.access}`
                    }
                });
                console.log('doctorview', response.data);

                if (response.status === 200) {
                    const verifiedDoctors = response.data.doctors.filter(doctorData => doctorData.is_verified);
                    console.log(verifiedDoctors, 'verified doctors');

                    setDoctor(verifiedDoctors);
                }
            }
        } catch (error) {
            toast.error(error.message || 'An error occurred');
        }
    };




    useEffect(() => {
        DoctorProfilesViews();
    }, []);
    return (
        <>
            {user?.is_doctor ? (
                <div className="flex flex-col items-center mt-10 w-full max-w-4xl mx-auto">
                    <div className="flex w-full">
                        <div className="relative w-1/2 h-80">
                            <img
                                className="object-cover w-full h-full"
                                src={`${baseUrl + doc.profile_picture}`}
                                alt="Profile" />
                        </div>
                        <div className="relative w-1/2 h-80">
                            <img
                                className="object-cover w-full h-full"
                                src={`${baseUrl + doc.doctor_proof}`}
                                alt="Doctor Proof"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-4xl mt-8">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center w-full">
                                <div className="flex flex-col md:flex-row w-full p-4 bg-gray-800 rounded-lg">
                                    <div className="flex-1 flex items-center justify-between p-2">
                                        <p className="font-sans text-base text-white">Username:<span className='uppercase font-bold'> {doc?.doctor?.username}</span></p>
                                        <p className="font-sans text-base text-white">Email: <span className='uppercase font-medium'>{doc?.doctor?.email}</span></p>
                                    </div>
                                    <div className="flex-1 flex items-center justify-between p-2 mt-4 md:mt-0">
                                        <p className="font-sans text-base text-white">Department: <span className='uppercase font-bold'>{doc?.department}</span></p>
                                        <p className="font-sans text-base text-white">Full Name: {doc?.doctor?.first_name } {doc?.doctor?.last_name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
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
                                        alt="Doctor"
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
            )}
        </>
    );
}

export default HomepageView;
