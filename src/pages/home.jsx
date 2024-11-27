import React, { useState, useEffect } from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HomeTopGrid from '../components/HomeTopGrid';
import MusicPlayer from "../components/musicPlayer"

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('bg-black', 'w-full', 'h-screen');

    return () => {
      document.body.classList.remove('bg-black', 'w-full', 'h-screen');
    };
  }, []);

  const handleToggleSidebar = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  return (
    <>
      <main className='flex flex-row pt-16'>
        <Sidebar onToggleSidebar={handleToggleSidebar} />
        <div className='w-screen'>
          <div className={`bg-mainBackground rounded-bl-lg rounded-br-lg flex mt-2 ml-2 flex-col w-[99%] text-white`}>
            <div className='h-[calc(100vh-171.4px)]'>
              <div className='sticky scrollbar overflow-x-hidden rounded-tl-md rounded-tr-md h-full max-h-[100vh] overflow-y-hidden hover:overflow-y-scroll'>

                <div className='flex flex-col justify-start items-center'>
                  <div className='w-full'>
                    <div className='flex h-72 flex-col text-sm gradientHome'>

                      <div className='p-3 --3-buttons flex gap-1'>
                        <button className='rounded-full text-black hover:bg-slate-100 bg-white px-4 h-8'>All</button>
                        <button className='rounded-full bg-neutral-600 hover:bg-opacity-70 bg-opacity-60 px-4 h-8'>Music</button>
                        <button className='rounded-full px-4 h-8 bg-neutral-600 hover:bg-opacity-70 bg-opacity-60'>Podcasts</button>
                      </div>

                      <div className='topGrid'>
                      <HomeTopGrid />
                      </div>


                    </div>


                  </div>


                </div>


                <Footer sidebarOpen={sidebarOpen} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <MusicPlayer />
    </>
  );
}

export default Home;
