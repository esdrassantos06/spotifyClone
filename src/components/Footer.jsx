import React from 'react';
import '../App.css';

const Footer = ({ sidebarOpen }) => {
    return (
        <footer className=' mb-24 z-[999]' >
            <div className={`flex flex-row items-start justify-between relative bg-mainBackground text-gray-300 bottom-0 ${sidebarOpen ? 'ml-[26.3%]' : 'ml-[6%]'} border-b-[1px] border-gray-700 p-4`}>
                <div className='flex gap-1 flex-col'>
                    <p className='text-white spotify-mix-bold'>Company</p>
                    <a href='#' className=' select-text hover:underline'>About</a>
                    <a href='#' className=' select-text hover:underline'>Jobs</a>
                    <a href='#' className=' select-text hover:underline'>For the Record</a>
                </div>

                <div className='flex gap-1 flex-col'>
                    <p className='text-white spotify-mix-bold'>Community</p>
                    <a href='#' className=' select-text hover:underline'>For Artists</a>
                    <a href='#' className=' select-text hover:underline'>Developers</a>
                    <a href='#' className=' select-text hover:underline'>Advertising</a>
                    <a href='#' className=' select-text hover:underline'>Investors</a>
                    <a href='#' className=' select-text hover:underline'>Suppliers</a>
                </div>

                <div className='flex gap-1 flex-col'>
                    <p className='text-white spotify-mix-bold'>Useful links</p>
                    <a href='#' className='select-text hover:underline'>Support</a>
                    <a href='#' className='select-text hover:underline'>Free mobile app</a>
                </div>

                <div className='flex gap-1 flex-col'>
                    <p className='text-white spotify-mix-bold'>Spotify Plans</p>
                    <a href='#' className='select-text hover:underline'>Premium Individual</a>
                    <a href='#' className='select-text hover:underline'>Premium Duo</a>
                    <a href='#' className='select-text hover:underline'>Premium Family</a>
                    <a href='#' className='select-text hover:underline'>University Premium</a>
                    <a href='#' className='select-text hover:underline'>Spotify Free</a>
                </div>

                <div className='flex flex-row mr-3 mt-2 gap-3'>
                    <div className='instagram p-2 bg-zinc-800 hover:bg-zinc-500 rounded-full'>
                        <a href='https://instagram.com' target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='cursor-default' viewBox="0 0 24 24" width="24px" height="24px" fill='#fff'>
                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                            </svg>
                        </a>
                    </div>
                    <div className='twitter p-2 bg-zinc-800 cursor-default hover:bg-zinc-500 rounded-full'>
                        <a href='https://twitter.com' target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='cursor-default' viewBox="0 0 24 24" width="24px" height="24px" fill='#fff'>
                                <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
                            </svg>
                        </a>
                    </div>
                    <a href='https://facebook.com' target='_blank' rel="noreferrer">
                        <div className='facebook p-2 bg-zinc-800 cursor-default hover:bg-zinc-500 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 24 24" width="24px" height="24px" className='cursor-default'>
                                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div className={`flex flex-row ${sidebarOpen ? 'ml-[26.3%]' : 'ml-[6%]'} bg-mainBackground text-sm justify-between h-32 items-center text-gray-300 `}>
                <div className='flex ml-7 justify-center items-center flex-row gap-5'>
                    <a href='#' className='select-text hover:text-white transform hover:scale-105'>Legal</a>
                    <a href='#' className='select-text hover:text-white transform hover:scale-105'>Security and Privacy Center</a>
                    <a href='#' className='select-text hover:text-white transform hover:scale-105'>Privacy Policy</a>
                    <a href='#' className='hover:underline transform hover:scale-105'>Cookie settings</a>
                    <a href='#' className='select-text hover:text-white transform hover:scale-105'>About ads</a>
                    <a href='#' className='select-text hover:text-white transform hover:scale-105'>Accessibility</a>
                </div>
                <div className='mr-10 select-text'>&copy; 2024 Spotify AB</div>
            </div>
        </footer>
    );
}

export default Footer;
