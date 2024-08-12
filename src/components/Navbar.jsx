import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
// const navigation = [
//     { name: 'Welcome User', href: '#', current: false },

// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const navigate=useNavigate()
    let {user}=useContext(AuthContext)
    let {SignOut}=useContext(AuthContext)
    return (
        <Disclosure as="nav" className="bg-gray-800">
          <ToastContainer />
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        {/* <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton> */}
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <NavLink to="/">
                        <div className="flex flex-shrink-0 items-center">
                            <h1 className="text-3xl font-serif font-medium text-white">Doctor Hub</h1>
                        </div>
                      </NavLink>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Menu as="div" className="relative ml-3">
                            <div className="flex items-center space-x-3">
                                <span className="text-white text-sm font-medium">{user ? user.username.toUpperCase() : 'Guest'}</span>
                                {user? <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                </MenuButton>:null}
                                
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                
                                    <button onClick={() => navigate(`/profile`)}  className="block px-4 py-2 text-sm text-gray-200 data-[focus]:bg-gray-600">
                                        Your Profile
                                    </button>
                                
                                </MenuItem>
                                <MenuItem>
                                    <button onClick={SignOut} className="block px-4 py-2 text-sm text-gray-200 data-[focus]:bg-gray-600">
                                        Sign out
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}
