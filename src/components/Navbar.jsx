import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import spotifyBlackLogo from '../assets/iconSpotify.png';
import searchIcon from '../assets/searchIcon.png';
import bellNotification from '../assets/notificationBell.png';
import userIcon from "../assets/IconUser.png";
import RedirectIcon from "../assets/redirect.png";
import { CircleArrowDown } from 'lucide-react';
import { House } from 'phosphor-react';
import { BoxArrowUp } from '@phosphor-icons/react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const isHomePage = location.pathname === "/";
    const isSearchPage = location.pathname === "/Search";

    return (
        <nav className='flex z-[999] flex-row w-full justify-between items-center'>
            <div className="flex items-center ml-4 flex-shrink-0 space-x-4">
                <Link to="/">
                    <img src={spotifyBlackLogo} className="h-10 filter invert cursor-pointer" alt="Spotify" />
                </Link>
            </div>
            <div className="flex ml-32 flex-grow items-end justify-center relative">
                <Link
                    to="/"
                    className="p-2 mr-2 bg-dark-gray rounded-full cursor-pointer active:grayscale transition transform active:scale-100 hover:scale-105"
                    id="home"
                >
                    {isHomePage ? (
                        <House color="#fff" weight="fill" size={28} />
                    ) : (
                        <House color="#fff" size={28} />
                    )}
                </Link>
                <Link to="/Search" className="">
                    <div className="relative flex-row flex items-center  justify-center">
                        <img src={searchIcon} className='h-7 absolute left-2 cursor-pointer z-10' alt="Search Icon" />
                        <input type="text" placeholder="What do you want to hear?" className="w-96 h-12 flex focus:ring-1 border border-transparent hover:border hover:border-white focus:ring-white transition duration-200 text-white placeholder:text-silvergray bg-dark-gray rounded-full py-2 px-14 outline-none focus:cursor-text cursor-pointer" />
                        <div className="border-l absolute right-11 top-2">
                            <BoxArrowUp size={32} weight={isSearchPage ? 'fill' : 'regular'} className={`absolute ${isSearchPage ? 'text-white' : 'text-[#B3B3B3]'} transform hover:scale-105 border-zinc-700 active:scale-100`} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex items-center flex-shrink-0 mr-2 space-x-4">
                <Link to="/Premium">
                    <button className="bg-white rounded-full px-4 py-2 font-medium text-sm transform hover:scale-105">Upgrade to Premium</button>
                </Link>
                <div className="flex flex-row items-center gap-1 hover:scale-105 text-white text-sm">
                    <CircleArrowDown size={18} color="#fff" />
                    <p>Install the app</p>
                </div>
                <img src={bellNotification} className="w-6 transform active:scale-100 hover:scale-105"></img>
                <div className="relative inline-block">
                    <div className="flex bg-dark-gray rounded-full p-2 flex-row cursor-pointer" onClick={toggleDropdown}>
                        <img src={userIcon} className="w-8 filter invert transform hover:scale-105" alt="User Icon" />
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 p-1 w-56 bg-almostBlack rounded-md shadow-lg z-10">
                            <ul className="text-white text-sm">
                                <li className="flex items-center w-full justify-between p-2 py-3 rounded-sm hover:bg-almostBlackHover cursor-default">
                                    Account
                                    <img src={RedirectIcon} className="h-6 ml-auto invert filter" />
                                </li>
                                <li className="p-2 py-3 rounded-sm hover:bg-almostBlackHover cursor-default hover:underline">Profile</li>

                                <li className="flex items-center p-2 py-3 rounded-sm hover:bg-almostBlackHover cursor-default hover:underline">

                                    <Link to="/Premium" className="flex items-center w-full justify-between">
                                        Upgrade to Premium
                                        <img src={RedirectIcon} className="h-6 ml-auto invert filter" />
                                    </Link>
                                </li>

                                <div className="border-b border-zinc-700">
                                    <li className="p-2 py-3 rounded-sm hover:bg-almostBlackHover cursor-default hover:underline">Settings</li>
                                </div>
                                <li className="p-2 py-3 rounded-sm hover:bg-almostBlackHover cursor-default">Log out</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </nav>
    );
}

export default NavBar;