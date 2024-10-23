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
      <main className='flex flex-col pt-16'>
        <Sidebar onToggleSidebar={handleToggleSidebar} />
        <div className={`bg-mainBackground rounded-tl-lg rounded-tr-lg h-fit flex mt-4 ${sidebarOpen ? 'ml-[26.3%]' : 'ml-[5.5%]'} flex-col w-[94%] text-white`}>
            <h1 className='font-bold p-4 ml-4 mt-6 text-2xl'>Browse all sections</h1>
          <div className='flex flex-col justify-start items-center'>
          <GridComponent/>
          </div>
        </div>
      <Footer sidebarOpen={sidebarOpen} />
      </main>
      <MusicPlayer />
    </>
  );
}

export default Search;