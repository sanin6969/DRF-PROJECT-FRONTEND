import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
function Profile() {
    const { user, authTokens } = useContext(AuthContext)
    const id = user.user_id
    let [userDetail, setUserDetail] = useState([])
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
    const navgate = useNavigate()

    let editDoctor = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('username', e.target.username.value);
            formData.append('email', e.target.email.value);
            formData.append('first_name', e.target.first_name.value);
            formData.append('last_name', e.target.last_name.value);
            formData.append('department', e.target.department.value);  
            
            // const profilePicture = e.target.profile_picture.files[0];
            // if (profilePicture) {
            //     formData.append('profile_picture', profilePicture);
            // } else{
            //     formData.append('profile_picture', doc.profile_picture);
            // }


            // const doctorProof = e.target.doctor_proof.files[0];
            // if (doctorProof) {
            //     formData.append('doctor_proof', doctorProof);
            // } else {
            //     formData.append('doctor_proof', doc.doctor_proof);
            // }          


            let response = await axios.patch('http://127.0.0.1:8000/api/doctorgetedit/', formData,{
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`,
                    
                }
            });
            if (response.status === 200) {
                setDoc(response.data);
                console.log('updated');
                toast.success('Profile updated Successfully')
                navgate('/homepage')
            }

        } catch (error) {
            toast.error(error)
        }
    }

    let editUser = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('username', e.target.username.value);
            formData.append('email', e.target.email.value);
            formData.append('first_name', e.target.first_name.value);
            formData.append('last_name', e.target.last_name.value);
            const response = await axios.patch(`http://127.0.0.1:8000/api/user/`, formData, {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            });
            if (response.status === 200) {
                setUserDetail(response.data);
                toast.success('profile edited succesfully')
                navgate('/homepage');
            }
        } catch (error) {
            toast.error(error)
        }
    }
    const UserViews = async () => {
        if (user?.is_doctor) {
            try {
                let response = await axios.get('http://127.0.0.1:8000/api/doctorgetedit/', {
                    headers: {
                        'Authorization': `Bearer ${authTokens.access}`
                    }
                });
                // console.log('doctorview', response.data);
                // console.log('doctorview', response.data.doctor.email);

                if (response.status === 200) {
                    setDoc(response.data);
                }
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            try {
                let response = await axios.get('http://127.0.0.1:8000/api/user/', {
                    headers: {
                        'Authorization': `Bearer ${authTokens.access}`
                    }
                });
                if (response.status === 200) {
                    // console.log('userdata', response.data);
                    const userData = response.data;
                    if (!userData.is_doctor) {
                        setUserDetail(userData);
                    }
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    }

    useEffect(() => {
        UserViews();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center px-4 py-2 mt-14 lg:py-0">
            <form
                onSubmit={user.is_doctor ? editDoctor : editUser}
                className="w-full max-w-lg bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-700"
            >
                <div className="p-4 flex flex-col items-center">
                    {/* {user?.is_doctor?.is_verified
                    ? null
                    : <h2 className="text-lg font-bold text-red-500 mb-4 text-center">You are not verified !!</h2>} */}
                    <div className="w-full flex flex-col justify-center px-4 space-y-4 bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-lg">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">My Details</h2>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={user.is_doctor ? doc.doctor.first_name : userDetail.first_name}
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={user.is_doctor ? doc.doctor.last_name : userDetail.last_name}
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={user.is_doctor ? doc.doctor.username : userDetail.username}
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={user.is_doctor ? doc.doctor.email : userDetail.email}
                                />
                            </div>
                        </div>
                        {user?.is_doctor && (
                            <>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="department" className="block text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                        <input
                                            type="text"
                                            name="department"
                                            id="department"
                                            className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            defaultValue={doc.department}
                                        />
                                    </div>
                                    {/* <div className="w-1/2">
                                        <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                                        <input
                                            type="file"
                                            name="profile_picture"
                                            id="profile_picture"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="profile_picture"
                                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-500 dark:border-gray-500"
                                        >
                                            Choose File
                                        </label>
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-900 dark:text-white">Doctor Proof</label>
                                        <input
                                            type="file"
                                            name="doctor_proof"
                                            id="doctor_proof"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="doctor_proof"
                                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-500 dark:border-gray-500"
                                        >
                                            Choose File
                                        </label>
                                    </div> */}
                                </div>
                            </>
                        )}
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="w-full bg-gray-500 bg-opacity-70 mb-2 text-gray-400 hover:bg-gray-900 hover:text-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


    );
}

export default Profile;
