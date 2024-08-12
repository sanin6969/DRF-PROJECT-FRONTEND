import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
function Profile() {

    const { user ,authTokens} = useContext(AuthContext)
    console.log(user,'user details');
    const id=user.user_id
    let [userDetail,setUserDetail]=useState([])
    const navgate=useNavigate()
    let editUser = async (e) => {
            try {
                e.preventDefault();
                const formData = new FormData();
                formData.append('username', e.target.username.value);
                formData.append('email', e.target.email.value);
                formData.append('first_name', e.target.first_name.value);
                formData.append('last_name', e.target.last_name.value);
                console.log(formData);
                const response = await axios.patch(`http://127.0.0.1:8000/api/user/${id}`,formData, {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            });
                console.log(formData);
                
                if (response.status === 200) {
                    setUserDetail(response.data);
                    navgate('/profile');
                    toast.success('profile edited succesfully')
                    console.log('profile updated');
                }
            } catch (error) {
                console.log(error);
                toast.error(error)
            }
        }    

    const UserViews = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            });
            if (response.status === 200) {
                console.log('userdata', response.data);
                setUserDetail(response.data)
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            toast.error(error.response?.data?.detail || error.message);
        }
    };
    useEffect(() => {
        UserViews();
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center px-4 py-2 mt-14 lg:py-0">
        <form 
            onSubmit={editUser}
            className="w-full max-w-lg bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-700"
        >
            <div className="p-4 flex flex-col items-center">
                {user?.is_doctor?.is_verified
                    ? null
                    : <h2 className="text-lg font-bold text-red-500 mb-4 text-center">You are not verified !!</h2>}
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
                                defaultValue={userDetail.first_name}
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue={userDetail.last_name}
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
                                defaultValue={userDetail.username}
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-sm dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue={userDetail.email}
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
                                        placeholder="DERMATOLOGY"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                                    <input
                                        type="file"
                                        name="profile_picture"
                                        id="profile_picture"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="profile_picture"
                                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-gray-500"
                                    >
                                        Choose File
                                    </label>
                                </div>
                            </div>
                        </>
                    )}
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="w-full bg-gray-500 bg-opacity-70 text-gray-400 hover:bg-gray-900 hover:text-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600"
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
