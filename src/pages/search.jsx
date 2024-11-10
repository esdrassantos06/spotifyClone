import React, { useState, useEffect } from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import MusicPlayer from "../components/musicPlayer"
import GridComponent from '../components/GridComponent';

const Search = () => {
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
          <div className={`bg-mainBackground rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg flex mt-2 ml-2 flex-col w-[99%] text-white`}>
            <div className='h-[calc(100vh-171.4px)]'>
              <div className='sticky scrollbar h-full max-h-[100vh] overflow-y-hidden hover:overflow-y-scroll'>
                <h1 className='font-bold p-4 ml-4 mt-6 text-2xl'>Browse all sections</h1>
                <div className='flex flex-col justify-start items-center'>
                  <GridComponent />
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

export default Search;