import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
    const navigate = useNavigate();
    let UserRegister = async (e) => {
        e.preventDefault();
        const isDoctor = document.getElementById('doctor').checked
        const formData = new FormData();
        formData.append('username', e.target.username.value);
        formData.append('email', e.target.email.value);
        formData.append('password', e.target.password.value);
        formData.append('confirm_password', e.target.password2.value);
        formData.append('profile_picture', e.target.profilepicture.files[0]);
        formData.append('is_doctor', isDoctor);
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/register/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }});

            const data = response.data;
            toast.success('registration successfull')
            navigate('/signin');
            console.log(data, 'data');
            console.log(response.status, 'response status');

        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.message?.email?.[0]
                || error.response?.data?.message?.username?.[0]
                || error.response?.data?.message?.non_field_errors?.[0]
            console.log(errorMessage, 'jii');
            toast.error(errorMessage)
        }
    }

    return (
        <>
            {/* <ToastContainer /> */}
            <div className="flex flex-col items-center justify-center px-6 py-8  mt-14 lg:py-0">
                <div className="w-full max-w-sm bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex justify-center items-center space-x-4">

                            <NavLink to="/signup">
                                <h1 className="text-3xl font-bold text-gray-900 md:text-2xl dark:text-slate-950 bg-gray-400 p-2 rounded-md">
                                    <span className="text-gray-950">Sign Up</span>
                                </h1>
                            </NavLink>
                            <NavLink to="/signin">
                                <h1 className="text-3xl font-bold text-gray-600 md:text-2xl dark:text-gray-400">
                                    Sign In
                                </h1>
                            </NavLink>
                        </div>

                        <form className="space-y-4 md:space-y-6" onSubmit={UserRegister}>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Username"
                                    required
                                />
                            </div>
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <input
                                        type="password"
                                        name="password2"
                                        id="password2"
                                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="">
                                <input
                                    type="file"
                                    name="profilepicture"
                                    id="profilepicture"
                                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>


                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-black">Already a user
                                    <NavLink to="/signin">
                                        <span className="hover:text-gray-400"> Sign In?</span>
                                    </NavLink>
                                </p>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="doctor"
                                            name="doctor"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3  mr-2 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300">
                                            Are You a Doctor?
                                        </label>
                                    </div>
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
        </>
    );
}

export default SignUp;
