import React, { useState, useEffect } from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import MusicPlayer from "../components/musicPlayer"

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
          <div className={`bg-mainBackground h-fit flex flex-wrap mt-4 ${sidebarOpen ? 'ml-[26.3%]' : 'ml-[5.5%]'} flex-col w-full text-white`}>
            <div>Seach</div>
            <div>Seach</div>
            <div>Seach</div>
            <div>Seach</div>
            <div>Seach</div>
            <div>Seach</div>
            <div>Seach</div>
          </div>
        </main>
        <MusicPlayer />
        <Footer sidebarOpen={sidebarOpen} />
      </>
    );
  }

export default Search;