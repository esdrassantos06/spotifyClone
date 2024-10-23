import React, { useState } from 'react';
import brunophoto from '../assets/photos/brunoMars.jpg';
import drake from '../assets/photos/drake.jpg';
import eminem from '../assets/photos/eminem.jpg';
import tyler from '../assets/photos/tyler.jpg';
import tylerAlbum from '../assets/albums/tylerAlbum.jpg';
import TupacAlbum from '../assets/albums/greatest-hits2pac.jpg';
import a7xAlbum from '../assets/albums/hail-to-the-king.jpg';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Bookmark, Heart, LibraryBig, Plus, ArrowRight } from 'lucide-react';
import { PushPin } from "phosphor-react";

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
        fontSize: '0.875rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        boxShadow: "#121212",
    },
    '& .MuiTooltip-arrow': {
        color: '#282828',
    },
}));

const Sidebar = ({ onToggleSidebar }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNames, setShowNames] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setShowNames(!isOpen);
        onToggleSidebar(!isOpen);
    };

    const artists = [
        { name: 'Bruno Mars', img: brunophoto, role: 'Artist' },
        { name: 'Tyler The Creator', img: tyler, role: 'Artist' },
        { name: 'Drake', img: drake, role: 'Artist' },
        { name: 'Eminem', img: eminem, role: 'Artist' },

    ];

    const albums = [
        { name: 'IGOR', artist: 'Album • Tyler The Creator', img: tylerAlbum },
        { name: 'Greatest Hits', artist: 'Album • Tupac', img: TupacAlbum },
        { name: 'Hail to The King', artist: 'Album • Avenged Sevenfold', img: a7xAlbum },
    ];

    return (
        <div className={`flex flex-col ${isOpen ? 'w-1/4' : 'w-[4%]'} rounded-md bg-mainBackground ml-3 pl-3 min-h-screen fixed left-0 top-20`}>

            <CustomTooltip title={isOpen ? '' : 'Library'} arrow placement="right">
                <button
                    onClick={toggleSidebar}
                    className={`flex items-center group justify-between bg-mainBackground rounded-md shadow-2xl ${isOpen ? 'ml-2' : 'ml-0'} py-6 px-[12px]`}
                >
                    <div className="flex items-center">
                        <LibraryBig size={30} color="#B3B3B3" className='group-hover:stroke-white' />
                        {showNames && <span className="ml-2 text-white">{isOpen ? 'Library' : ''}</span>}
                    </div>
                    {isOpen && (
                        <div className="flex items-center">
                            <Plus size={22} className="ml-2 hover:scale-110 hover:bg-neutral-800 rounded-full   hover:stroke-white" color="#B3B3B3"/>
                            <ArrowRight size={22} className="ml-2 hover:scale-110 hover:bg-neutral-800 rounded-full hover:stroke-white" color="#B3B3B3" />
                        </div>
                    )}
                </button>
            </CustomTooltip>






            <div className="flex flex-col gap-2 overflow-y-auto ml-1 max-h-[calc(100vh-300px)]">

                {/* Liked Songs */}
                {!isOpen ? (
                    <CustomTooltip
                        title={
                            <div>
                                <span>Liked Songs</span>
                                <br />
                                <span className='flex items-center text-zinc-400 justify-center flex-row'>
                                    <PushPin size={13} color='#1ED45F' className='mr-1' weight="fill" />
                                    Playlist • 0 Songs
                                </span>
                            </div>
                        }
                        arrow
                        placement="right"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer group transition duration-200 hover:outline hover:outline-4 hover:outline-neutral-700">
                            <div className="gradientBG flex items-center justify-center w-full h-full rounded-lg">
                                <Heart color="white" size={24} className="fill-white" />
                            </div>
                        </div>
                    </CustomTooltip>
                ) : (
                    <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800 transition duration-200">
                        <div className="gradientBG w-12 h-12 flex items-center rounded-lg justify-center">
                            <Heart color="white" size={24} className="fill-white" />
                        </div>
                        <span className="ml-2">Liked Songs</span>
                    </div>
                )}



                {/* Episodes */}
                {!isOpen ? (
                    <CustomTooltip
                        title={
                            <div>
                                <span>Episodes</span>
                                <br />
                                <span className='flex items-center text-zinc-400 justify-center flex-row'>
                                    <PushPin size={13} color='#1ED45F' className='mr-1' weight="fill" />
                                    Saved & downloaded episodes
                                </span>
                            </div>
                        }
                        arrow
                        placement="right"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer group transition duration-200 hover:outline hover:outline-4 hover:outline-neutral-700">
                            <div className="bg-[#00614E] flex items-center justify-center w-full h-full rounded-lg">
                                <Bookmark color="#1ED45F" size={24} className="fill-[#1ED45F]" />
                            </div>
                        </div>
                    </CustomTooltip>
                ) : (
                    <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800 transition duration-200">
                        <div className="bg-[#00614E] w-12 h-12 flex items-center rounded-lg justify-center">
                            <Bookmark color="#1ED45F" size={24} className="fill-[#1ED45F]" />
                        </div>
                        <span className="ml-2">Episodes</span>
                    </div>
                )}


                {/* List Artists */}
                {artists.map((artist) => (
                    <div key={artist.name}>
                        {!isOpen ? (
                            <CustomTooltip
                                title={
                                    <div>
                                        <span>{artist.name}</span>
                                        <br />
                                        <span className="text-zinc-400">{artist.role}</span>
                                    </div>
                                }
                                arrow
                                placement="right"
                            >
                                <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer rounded-full group z-10">
                                    <img
                                        src={artist.img}
                                        alt={artist.name}
                                        className="rounded-full h-full w-full object-cover group-hover:outline group-hover:outline-4 group-hover:outline-neutral-700"
                                    />
                                </div>
                            </CustomTooltip>
                        ) : (
                            <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800" key={artist.name}>
                                <div className="relative w-12 h-12 flex items-center justify-center rounded-full z-10">
                                    <img
                                        src={artist.img}
                                        alt={artist.name}
                                        className="rounded-full h-full w-full object-cover"
                                    />
                                </div>
                                <div className="ml-2 flex flex-col">
                                    <span>{artist.name}</span>
                                    <span className="text-zinc-400">{artist.role}</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}









                {/* List Albums */}
                {albums.map((album) => (
                    <div key={album.name}>
                        {!isOpen ? (
                            <CustomTooltip
                                title={
                                    <div>
                                        <span>{album.name}</span>
                                        <br />
                                        <span className="text-zinc-400">{album.artist}</span>
                                    </div>
                                }
                                arrow
                                placement="right"
                            >
                                <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg group hover:bg-neutral-700">
                                    <img
                                        src={album.img}
                                        alt={album.name}
                                        className="rounded-lg h-full w-full object-cover group-hover:outline group-hover:outline-4 group-hover:outline-neutral-700"
                                    />
                                </div>
                            </CustomTooltip>
                        ) : (
                            <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800">
                                <div className="relative w-12 h-12 flex items-center justify-center rounded-lg z-10">
                                    <img
                                        src={album.img}
                                        alt={album.name}
                                        className="rounded-lg h-full w-full object-cover"
                                    />
                                </div>
                                <div className="ml-2 flex flex-col">
                                    <span>{album.name}</span>
                                    <span className="text-zinc-400">{album.artist}</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Sidebar;
