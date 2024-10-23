import React, { useState, useEffect } from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
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
        <div className={`bg-mainBackground flex flex-wrap mt-4 ${sidebarOpen ? 'ml-[26.3%]' : 'ml-[6%]'} flex-col w-full text-white`}>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
          <div>Conteudo gigante</div>
        </div>
      </main>
      <Footer sidebarOpen={sidebarOpen} className="fixed bottom-0 left-0 w-full z-[999]" />
      <MusicPlayer className="fixed bottom-0 left-0 w-full z-[1000] h-28" />
    </>
  );
}

export default Home;
