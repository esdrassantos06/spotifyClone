import React from 'react';
import { useEffect } from 'react';
import '../App.css';

function Home() {
  useEffect(() => {
    document.body.classList.add('bg-black', 'w-full', 'h-screen');

    return () => {
      document.body.classList.remove('bg-black', 'w-full', 'h-screen');
    };
  }, []);

  return (
      <main>
        <div className=' bg-mainBackground text-white'>
          {/* Conteúdo principal aqui */}
        </div>
      </main>
  );
}

export default Home;
