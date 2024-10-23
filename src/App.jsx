import './App.css';

import { Outlet } from 'react-router-dom';


import Navbar from "./components/Navbar"




import { useEffect } from 'react';
import * as React from "react";
import './index.css';



function App() {
  useEffect(() => {
      document.body.classList.add('bg-black', 'w-full', 'h-screen', 'select-none');

      return () => {
          document.body.classList.remove('bg-black', 'w-full', 'h-screen', 'select-none');
      };
  }, []);

  return (
      <>
          <header className='bg-black fixed z-[999] w-screen p-3'>
              <Navbar />
          </header>
          <div className='rounded-lg'>
                  <Outlet />
          </div>
      </>
  );
}

export default App;
