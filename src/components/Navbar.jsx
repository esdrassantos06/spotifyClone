import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import spotifyBlackLogo from '../assets/iconSpotify.png';
import bellNotification from '../assets/notificationBell.png';
import userIcon from "../assets/IconUser.png";
import RedirectIcon from "../assets/redirect.png";
import { CircleArrowDown } from 'lucide-react';
import { House } from 'phosphor-react';
import { BoxArrowUp, MagnifyingGlass, Bell } from '@phosphor-icons/react';

import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip
        {...props}
        classes={{ popper: className }}
        PopperProps={{
            modifiers: [
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: 'viewport',
                    },
                },
                {
                    name: 'hide',
                    enabled: false,
                },
            ],
            disablePortal: false,
        }}
    />
))(({ theme }) => ({
    '& .MuiTooltip-tooltip': {
        backgroundColor: "#282828",
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '0.875rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        boxShadow: "#121212",
    },
    '& .MuiTooltip-arrow': {
        color: '#282828',
    },
}));

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
            <div className="flex ml-32 flex-grow items-center justify-center relative">
                <CustomTooltip title='Home'>
                    <Link
                        to="/"
                        className="p-2 mr-2 bg-dark-gray rounded-full cursor-pointer active:grayscale transition transform active:scale-100 hover:scale-105"
                        id="home"
                    >
                        {isHomePage ? (
                            <House color="#fff" weight="fill" size={28} />
                        ) : (
                            <House color="#B3B3B3" size={28} />
                        )}
                    </Link>
                </CustomTooltip>
                <Link to="/Search">
                    <div className="relative flex-row flex items-center group  justify-center">
                        <CustomTooltip title='Search'>
                            <MagnifyingGlass size='32' color='#B3B3B3' className='h-7 absolute group-hover:fill-white left-2 cursor-pointer z-10' alt="Search Icon" />
                        </CustomTooltip>
                        <input type="text" placeholder="What do you want to hear?" className="w-96 h-12 flex focus:ring-1 border border-transparent hover:border hover:border-white focus:ring-white transition duration-200 text-white placeholder:text-silvergray bg-dark-gray rounded-full py-2 px-14 outline-none focus:cursor-text cursor-pointer" />
                        <div className="border-l absolute right-11 top-2">
                            <CustomTooltip title={`Navigate`}>
                                <BoxArrowUp size={32} weight={isSearchPage ? 'fill' : 'regular'} className={`absolute ${isSearchPage ? 'text-white' : 'text-[#B3B3B3]'} transform hover:scale-105 group-hover:text-white border-zinc-700 active:scale-100`} />
                            </CustomTooltip>
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
                <CustomTooltip title="News">
                    <Bell size='20' color='#b3b3b3' className=" transform active:scale-100 hover:scale-105" />
                </CustomTooltip>
                <div className="relative inline-block">
                    <div className="flex bg-dark-gray rounded-full p-2 flex-row cursor-pointer" onClick={toggleDropdown}>
                        <CustomTooltip title={`${isOpen ? '' : 'User'}`}>
                            <img src={userIcon} className="w-8 filter invert transform hover:scale-105" alt="User Icon" />
                        </CustomTooltip>
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