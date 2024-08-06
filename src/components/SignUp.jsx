import React from "react";

function SignUp() {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8  mt-14 lg:py-0">
                <div className="w-full max-w-sm bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex justify-center items-center space-x-4">
                            <h1 className="text-3xl font-bold text-gray-900 md:text-2xl dark:text-slate-950">
                                <span className="text-gray-950">Sign Up</span>
                            </h1>
                            <h1 className="text-3xl font-bold text-gray-600 md:text-2xl dark:text-gray-400">
                                Sign In
                            </h1>
                        </div>

                        <form className="space-y-4 md:space-y-6" action="#">
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
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <input
                                        type="password"
                                        name="password1"
                                        id="password1"
                                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-900 dark:bg-opacity-35 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
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

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
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
