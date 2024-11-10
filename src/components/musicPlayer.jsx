import React from 'react';
import '../App.css';
import a7xAlbum from '../assets/albums/hail-to-the-king.jpg';
import { CirclePlus } from 'lucide-react';
import { Shuffle } from 'lucide-react';
import { SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { Play } from 'lucide-react';
import { Repeat } from 'lucide-react';
import { ChevronUp } from 'lucide-react';


function MusicPlayer() {
    return (
        <div className='music-player h-[90px] text-white fixed bottom-0 z-[999]  w-full flex flex-row items-center justify-between bg-black'>
            <div className="flex-row flex items-center">
                <div className='ml-7 group flex-row flex relative'>
                    <img src={a7xAlbum} className='w-16 mr-2'></img>
                    <ChevronUp size={24} color='#FFF' className='hover:scale-110 hidden group-hover:flex absolute right-2 top-2 bg-dark-gray bg-opacity-80 rounded-full transform' />
                </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm hover:underline'>Hail To The King</p>
                <p className='text-xs hover:underline'>Avenged Sevenfold</p>
            </div>
            <div>
            <CirclePlus size={18} color='#B3B3B3' className='ml-2 hover:scale-105 transform' />
            </div>
            </div>
            <div className='flex flex-col items-center justify-center flex-1'>
                <div className='topIcons gap-5 items-center flex flex-row'>
                <Shuffle size={22} color='#B3B3B3' className='hover:scale-105 transform'/>
                <SkipBack size={22} color='#B3B3B3' className='hover:scale-105 transform'/>
                <Play size={22} color='#000' className='hover:scale-105 fill-black flex items-center justify-center bg-white rounded-full transform'/>
                <SkipForward size={22} color='#B3B3B3' className='hover:scale-105 transform'/>
                <Repeat size={22} color='#B3B3B3' className='hover:scale-105 transform'/>
                </div>
                <div className='TimeAndBar flex flex-row justify-center items-center'>
                    <p className='text-xs'>0:00</p>
                    <div></div>
                </div>
            </div>
            <div className='flex flex-row'>
                <p className='text-sm'>03:27</p>
                <p className='text-xs'>3:48</p>
            </div>
        </div>
    );
}

export default MusicPlayer;