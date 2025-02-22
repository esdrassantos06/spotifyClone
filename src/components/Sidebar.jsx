import  { useState } from 'react';
import brunophoto from '../assets/photos/brunoMars.jpg';
import drake from '../assets/photos/drake.jpg';
import eminemImage from '../assets/photos/eminem.jpg';
import tyler from '../assets/photos/tyler.jpg';
import tylerAlbum from '../assets/albums/tylerAlbum.jpg';
import TupacAlbum from '../assets/albums/greatest-hits2pac.jpg';
import a7xAlbum from '../assets/albums/hail-to-the-king.jpg';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Bookmark, Heart, Plus, ArrowRight, Search, List } from 'lucide-react';
import { PushPin, Queue } from "phosphor-react";


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

const Sidebar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [showNames, setShowNames] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setShowNames(!isOpen);
    };

    const artists = [
        { id: 1, name: 'Bruno Mars', img: brunophoto, role: 'Artist' },
        { id: 2, name: 'Tyler The Creator', img: tyler, role: 'Artist' },
        { id: 3, name: 'Drake', img: drake, role: 'Artist' },
        { id: 4, name: 'Eminem', img: eminemImage, role: 'Artist' },

    ];

    const albums = [
        { id: 1, name: 'IGOR', artist: 'Album • Tyler The Creator', img: tylerAlbum },
        { id: 2, name: 'Greatest Hits', artist: 'Album • Tupac', img: TupacAlbum },
        { id: 3, name: 'Hail to The King', artist: 'Album • Avenged Sevenfold', img: a7xAlbum },
    ];


    return (
        <>
            <div className={`flex flex-col ${isOpen ? 'w-[28%]' : ''} h-[calc(100vh-170px)] rounded-lg mt-2 bg-mainBackground ml-2`}>


                <CustomTooltip title={isOpen ? '' : 'Library'} arrow placement="right">
                    <div className={`flex flex-row ${isOpen ? 'shadow-md' : 'shadow-none'} shadow-bottom items-center justify-center`}>

                        <button
                            onClick={toggleSidebar}
                            className={`flex items-center w-full group justify-between ${isOpen ? 'ml-3' : 'ml-[10px]'} mt-2 px-3 py-2`}
                        >
                            <div className="flex justify-center gap-2 items-center">
                                <Queue size={30} className='text-[#B3B3B3] group-hover:text-white' />
                                {showNames && <span className=" font-medium group-hover:text-white text-[#B3B3B3]">{isOpen ? 'Library' : ''}</span>}
                            </div>
                        </button>
                        {isOpen && (
                            <div className="flex pr-4 items-center">
                                <Plus size={22} className="ml-2 hover:scale-110 hover:bg-neutral-800 rounded-full   hover:stroke-white" color="#B3B3B3" />
                                <ArrowRight size={22} className="ml-2 lg:block hidden hover:scale-110 hover:bg-neutral-800 rounded-full hover:stroke-white" color="#B3B3B3" />
                            </div>
                        )}
                    </div>
                </CustomTooltip>

                <div className={`flex flex-col ${isOpen ? '' : 'items-center'} overflow-hidden hover:overflow-y-auto scrollbar overflow-x-hidden  p-2 w-full`}>
                    <div className={`flex flex-col gap-2`}>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-row gap-2 text-white items-center justify-start ml-3`}>
                            <div className='hover:bg-zinc-700 bg-zinc-800 rounded-full px-2 py-0.5'>
                                <button>Playlists</button>
                            </div>

                            <div className='hover:bg-zinc-700 bg-zinc-800 rounded-full px-2 py-0.5'>
                            <button>Artists</button>
                            </div>

                            <div className='hover:bg-zinc-700 bg-zinc-800 rounded-full px-2 py-0.5'>
                            <button>Albums</button>
                            </div>

                        </div>

                        <div className={`flex-row p-1 items-center ${isOpen ? 'flex' : 'hidden'} justify-between mx-2`}>
                            <div className='hover:bg-zinc-800 transition-all duration-500 rounded-full p-1'>
                                <Search color='#B3B3B3' size={22} />
                            </div>

                            <p className={`flex gap-1 hover:scale-105 hover:text-white text-[#B3B3B3] items-center justify-center`}>
                                Recents
                                <List size={22} />
                            </p>
                        </div>

                        {/* Liked Songs closed */}

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
                                <div className="relative w-14 h-14 mt-1 flex items-center justify-center cursor-pointer group transition duration-200 hover:bg-neutral-700 rounded-md">
                                    <div className="flex gradientBG items-center w-12 h-12 justify-center rounded-lg">
                                        <Heart color="white" size={24} className="fill-white" />
                                    </div>
                                </div>
                            </CustomTooltip>
                        )

                            : (

                                <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800 rounded-xl transition duration-200">
                                    <div className="gradientBG w-12 h-12 flex items-center rounded-lg justify-center">
                                        <Heart color="white" size={24} className="fill-white" />
                                    </div>
                                    <span className="ml-2">Liked Songs</span>
                                </div>
                            )}
                        {/* Open */}



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
                                <div className="relative w-14 h-14 flex items-center justify-center rounded-md cursor-pointer group transition duration-200 hover:bg-neutral-700">
                                    <div className="bg-[#00614E] w-12 h-12 flex items-center justify-center rounded-lg">
                                        <Bookmark color="#1ED45F" size={24} className="fill-[#1ED45F]" />
                                    </div>
                                </div>
                            </CustomTooltip>
                        ) : (
                            <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800 rounded-xl transition duration-200">
                                <div className="bg-[#00614E] w-12 h-12 flex items-center rounded-lg justify-center">
                                    <Bookmark color="#1ED45F" size={24} className="fill-[#1ED45F]" />
                                </div>
                                <span className="ml-2">Episodes</span>
                            </div>
                        )}


                        {/* List Artists */}
                        {artists.map((artist) => (
                            <div key={artist.id}>
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
                                        <div className="relative w-14 h-14 hover:bg-neutral-700 flex items-center justify-center cursor-pointer rounded-md group z-10">
                                            <div className='w-12 h-12'>
                                                <img
                                                    src={artist.img}
                                                    alt={artist.name}
                                                    className="rounded-full h-full w-full object-cover group-hover:bg-neutral-700"
                                                />
                                            </div>
                                        </div>
                                    </CustomTooltip>
                                ) : (
                                    <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800 rounded-xl" key={artist.id}>
                                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full z-10">
                                            <img
                                                src={artist.img}
                                                alt={artist.name}
                                                className="rounded-full h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-2 flex flex-col">
                                            <span>{artist.name}</span>
                                            <span className="text-zinc-400 text-sm">{artist.role}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}










                        {/* List Albums */}
                        {albums.map((album) => (
                            <div key={album.id}>
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
                                        <div className="relative w-14 h-14 flex items-center justify-center cursor-pointer rounded-md group hover:bg-neutral-700">
                                            <div className='w-12 h-12'>
                                                <img
                                                    src={album.img}
                                                    alt={album.name}
                                                    className="rounded-lg h-full w-full object-cover group-hover:outline group-hover:outline-4 group-hover:outline-neutral-700"
                                                />
                                            </div>
                                        </div>
                                    </CustomTooltip>
                                ) : (
                                    <div className="flex items-center p-2 text-white cursor-pointer group hover:bg-neutral-800 rounded-xl">
                                        <div className="relative w-12 h-12 flex items-center justify-center rounded-lg z-10">
                                            <img
                                                src={album.img}
                                                alt={album.name}
                                                className="rounded-lg h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-2 flex flex-col">
                                            <span>{album.name}</span>
                                            <span className="text-zinc-400 text-sm">{album.artist}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
