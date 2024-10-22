import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import spotifyBlackLogo from '../assets/iconSpotify.png';
import searchIcon from '../assets/searchIcon.png';
import bellNotification from '../assets/notificationBell.png';
import userIcon from "../assets/IconUser.png";
import RedirectIcon from "../assets/redirect.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
 
    const isHomePage = location.pathname === "/";

    return (
        <nav className='flex flex-row w-full justify-between items-center'>
            <div className="flex items-center space-x-4">
                <Link to="/">
                    <img src={spotifyBlackLogo} className="h-10 filter invert cursor-pointer" alt="Spotify" />
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-center relative">
                <Link
                    to="/"
                    className="p-2 mr-2 bg-dark-gray rounded-full cursor-pointer active:grayscale transition transform active:scale-100 hover:scale-105"
                    id="home"
                >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="h-8"
                        viewBox="0 0 48 48"
                        style={{ enableBackground: 'new 0 0 48 48' }}
                        xmlSpace="preserve"
                    >
                        <path
                            style={{
                                fill: isHomePage ? '#fff' : 'none',
                                stroke: '#fff',
                                strokeWidth: 3,
                                strokeLinejoin: 'round',
                                strokeMiterlimit: 10,
                            }}
                            d="M8.5,41.5h10c0.552,0,1-0.448,1-1v-10c0-1.105,0.895-2,2-2h5c1.105,0,2,0.895,2,2v10c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1V21.411c0-1.838-0.843-3.575-2.287-4.713L24,5.5L9.787,16.698C8.343,17.836,7.5,19.573,7.5,21.411V40.5C7.5,41.052,7.948,41.5,8.5,41.5z"
                        />
                    </svg>
                </Link>
                <Link to="/Search">
                    <div className="relative flex-row flex items-center justify-center">
                        <img src={searchIcon} className='h-7 absolute left-2 cursor-pointer z-10' alt="Search Icon" />
                        <input type="text" placeholder="What do you want to hear?" className="w-96 h-12 flex focus:ring-1 border border-transparent hover:border hover:border-white focus:ring-white transition duration-200 text-white placeholder:text-silvergray bg-dark-gray rounded-full py-2 px-14 outline-none focus:cursor-text cursor-pointer" />
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" className="absolute right-4 transform hover:scale-105 active:scale-0" viewBox="0 -960 960 960" width="26px" fill="#B3B3B3">
                            <path d="M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" /></svg>
                    </div>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/Premium">
                    <button className="bg-white rounded-full px-4 py-2 font-bold text-sm transform hover:scale-105">Upgrade to Premium</button>
                </Link>
                <img src={bellNotification} className="w-6 transform active:scale-100 hover:scale-105"></img>
                <div className="relative inline-block">
                    <div className="flex bg-dark-gray rounded-full p-2 flex-row cursor-pointer" onClick={toggleDropdown}>
                        <img src={userIcon} className="w-8 filter invert transform hover:scale-105" alt="User Icon" />
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 p-1 w-48 bg-almostBlack rounded-md shadow-lg z-10">
                            <ul className="py-2 text-white text-sm">
                                <li className="flex items-center px-4 py-2 rounded-sm hover:bg-almostBlackHover cursor-default">
                                    Account
                                    <img src={RedirectIcon} className="h-6 ml-auto invert filter" />
                                </li>
                                <li className="px-4 py-2 rounded-sm hover:bg-almostBlackHover cursor-default hover:underline">Profile</li>
                                <li className="flex items-center px-4 py-2 rounded-sm hover:bg-almostBlackHover cursor-default hover:underline">
                                    Upgrade to Premium
                                    <img src={RedirectIcon} className="h-6 ml-auto invert filter" />
                                </li>
                                <div className="border-b border-zinc-700">
                                    <li className="px-4 py-2 rounded-sm hover:bg-almostBlackHover cursor-default hover:underline">Settings</li>
                                </div>
                                <li className="px-4 py-2 rounded-sm hover:bg-almostBlackHover cursor-default hover:underline">Log out</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </nav>
    );
}

export default NavBar;
