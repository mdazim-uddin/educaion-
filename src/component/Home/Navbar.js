import React,{useState} from 'react';
import logo from '../../assest/image/logo.png'
import { MenuIcon } from "@heroicons/react/outline";
import {XCircleIcon} from "@heroicons/react/outline";

export default function Navbar ()  {
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (
          <>
          <header className="flex items-center justify-between 
          py-4 px-6 bg-white sticky shadow-md top-0 p-4 z-20 ">
          <a href="/">
            <img
              src={logo}
              className="w-40 h-12 object-contain"
              alt=""
            />
          </a>
          <div className="hidden lg:flex  space-x-6 ">
            <a className="link">course</a>
            <a className="link">Be Topper</a>
            <a className="link">Hire Topper</a>
            <a className="link">Programming Descusing</a>
            <a className="link">job peparetion</a>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-white p-2 rounded-full text-2xl md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
            >
            sign up
            </button>
            <button
            className="bg-white p-2 rounded-full text-2xl md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium">
                      sign in
          </button>
          </div>
          <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
          {(isSideMenuOpen) ? <XCircleIcon className="h-9 text-black cursor-pointer" />   :   <MenuIcon className="h-9 text-black cursor-pointer" />}
      </button>
      {(isSideMenuOpen) ? SideMenu() : ''}
        </header>
          </>
    );
};

function SideMenu(){
    return(
        <div className="h-56 w-96 sm:w-96 lg:hidden bg-blue-500 absolute top-20 left-0">
            <div className="text-center capitalize cursor-pointer pt-10">
            <h5 >course</h5>
            <h5>Be Topper</h5>
            <h5>Hire Topper</h5>
            <h5>Programming Descusing</h5>
            <h5>job peparetion</h5>
            </div>
        </div>
    )
}