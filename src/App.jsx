import './App.css';

import { Outlet } from 'react-router-dom';

import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

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
    <header className='bg-black w-screen p-3'>
        <Navbar />
      </header>
    <Outlet />
    <footer className='bg-mainBackground'>
      <Footer />
    </footer>
    </>
  );
}

export default App;
