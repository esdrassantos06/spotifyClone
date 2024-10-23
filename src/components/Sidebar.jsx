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
import { Bookmark } from 'lucide-react';
import { Pin } from 'lucide-react';
import { Heart } from 'lucide-react';
import { LibraryBig } from 'lucide-react';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    '& .MuiTooltip-tooltip': {
        backgroundColor: "#121212",
        color: 'white',
        fontSize: '0.875rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        boxShadow: "#121212",
    },
    '& .MuiTooltip-arrow': {
        color: '#121212',
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
        { name: 'Bruno Mars', img: brunophoto },
        { name: 'Tyler The Creator', img: tyler },
        { name: 'Drake', img: drake },
        { name: 'Eminem', img: eminem },
    ];

    const albums = [
        { name: 'IGOR', artist: 'Album', img: tylerAlbum },
        { name: 'Greatest Hits', artist: 'Album', img: TupacAlbum },
        { name: 'Hail to The King', artist: 'Album', img: a7xAlbum },
        //
        { name: 'IGOR', artist: 'Album', img: tylerAlbum },
        { name: 'Greatest Hits', artist: 'Album', img: TupacAlbum },
        { name: 'Hail to The King', artist: 'Album', img: a7xAlbum },
        { name: 'Hail to The King', artist: 'Album', img: a7xAlbum },
        { name: 'Hail to The King', artist: 'Album', img: a7xAlbum },
        { name: 'Hail to The King', artist: 'Album', img: a7xAlbum },
        { name: 'Hail to The King', artist: 'Album', img: a7xAlbum },
        { name: 'Hail to The King', artist: 'Album', img: a7xAlbum },
    ];

    return (
        <div className={`flex fixed left-0 flex-col h-[86%] z-40 mt-4 justify-start items-start mr-3 p-1 bg-mainBackground rounded-md transition-all duration-300 ${isOpen ? 'w-1/4' : 'w-[10%'} ml-3`}>

            <div className="library-container z-30 shadow-2xl flex items-center bg-mainBackground justify-center w-full mb-2">
                <div className="Library flex items-center group p-1 rounded-xl w-full">
                    <button onClick={toggleSidebar} className="flex items-center w-full">
                        <div className='w-12 rounded-lg h-12 flex items-center justify-center'>
                            <LibraryBig color='#B3B3B3' size={35} className='group-hover:stroke-white transition' />
                        </div>
                        {showNames ? (
                            <span className="ml-3 text-white font-bold">Library</span>
                        ) : (
                            <CustomTooltip
                                title={<div className="flex flex-col whitespace-nowrap"><span>Library</span></div>}
                                placement="right"
                                arrow
                                enterDelay={800}
                                leaveDelay={0}
                            >
                                <span className="ml-3 absolute opacity-0">Library</span>
                            </CustomTooltip>
                        )}
                    </button>
                </div>
            </div>

            <div className={`sidebar-content z-50 flex mr-1 flex-col items-start w-full`}>

                <div className="flex flex-col items-start w-full">
                    <div className="LikedSongs flex items-center hover:bg-neutral-700 p-1 rounded-xl w-full">
                        <div className='gradientBG w-12 rounded-lg h-12 flex items-center justify-center'>
                            <Heart size={22} color='#fff' className='fill-white' />
                        </div>
                        {showNames ? (
                            <span className="ml-3 text-white">Liked Songs</span>
                        ) : (
                            <CustomTooltip
                                title={
                                    <div className="flex flex-col whitespace-nowrap">
                                        <span>Liked Songs</span>
                                        <span className="text-gray-400 flex flex-row justify-center items-center gap-1">
                                            <Pin color='#1ED45F' className='fill-[#1ED45F]' size={10} /> Playlist • 0 Songs
                                        </span>
                                    </div>
                                }
                                placement="right"
                                arrow
                                enterDelay={800}
                                leaveDelay={0}
                            >
                                <span className="ml-3 absolute opacity-0">Liked Songs</span>
                            </CustomTooltip>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-start w-full">
                    <div className="epSaved flex items-center hover:bg-neutral-700 p-1 mt-1 rounded-xl w-full">
                        <div className='bg-[#00614E] w-12 rounded-lg h-12 flex items-center justify-center'>
                            <Bookmark color='#1ED45F' className='fill-[#1ED45F]' />
                        </div>
                        {showNames ? (
                            <span className="ml-3 text-white">Episodes</span>
                        ) : (
                            <CustomTooltip
                                title={
                                    <div className="flex flex-col whitespace-nowrap">
                                        <span>Episodes</span>
                                        <span className="text-gray-400 flex flex-row justify-center items-center gap-1"><Pin color='#1ED45F' className='fill-[#1ED45F]' size={10} /> Saved and downloaded episodes</span>
                                    </div>
                                }
                                placement="right"
                                arrow
                                enterDelay={800}
                                leaveDelay={0}
                            >
                                <span className="ml-3 absolute opacity-0">Liked Songs</span>
                            </CustomTooltip>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-start w-full">
                    {artists.map((artist, index) => (
                        showNames ? (
                            <div key={index} className="flex items-center hover:bg-neutral-700 p-1 gap-1 rounded-xl w-full">
                                <div className='w-12 rounded-full h-12 flex items-center justify-center'>
                                    <img src={artist.img} className="rounded-full w-full h-full" alt={artist.name} />
                                </div>
                                <span className="ml-3 text-white">{artist.name}</span>
                            </div>
                        ) : (
                            <CustomTooltip
                                key={index}
                                title={
                                    <div className="flex flex-col gap-1 whitespace-nowrap">
                                        <span>{artist.name}</span>
                                    </div>
                                }
                                placement="right"
                                arrow
                                enterDelay={800}
                                leaveDelay={0}
                            >
                                <div className="flex items-center hover:bg-neutral-700 p-1 rounded-xl w-full">
                                    <div className='w-12 rounded-full h-12 flex items-center justify-center'>
                                        <img src={artist.img} className="rounded-full w-full h-full" alt={artist.name} />
                                    </div>
                                    <span className="ml-3 absolute opacity-0">{artist.name}</span>
                                </div>
                            </CustomTooltip>
                        )
                    ))}
                </div>

                <div className="flex flex-col items-start w-full">
                    {albums.map((album, index) => (
                        showNames ? (
                            <div key={index} className="flex items-center hover:bg-neutral-700 p-1 gap-1 rounded-xl w-full">
                                <div className='w-12 rounded-lg h-12 flex items-center justify-center'>
                                    <img src={album.img} className="rounded-lg w-full h-full" alt={album.name} />
                                </div>
                                <span className="ml-3 text-white">{album.name}</span>
                            </div>
                        ) : (
                            <CustomTooltip
                                key={index}
                                title={
                                    <div className="flex flex-col gap-1 whitespace-nowrap">
                                        <span>{album.name}</span>
                                        <span className="text-gray-400 flex flex-row justify-center items-center gap-1">{album.artist}</span>
                                    </div>
                                }
                                placement="right"
                                arrow
                                enterDelay={800}
                                leaveDelay={0}
                            >
                                <div className="flex items-center hover:bg-neutral-700 p-1 rounded-xl w-full">
                                    <div className='w-12 rounded-lg h-12 flex items-center justify-center'>
                                        <img src={album.img} className="rounded-lg w-full h-full" alt={album.name} />
                                    </div>
                                    <span className="ml-3 absolute opacity-0">{album.name}</span>
                                </div>
                            </CustomTooltip>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
