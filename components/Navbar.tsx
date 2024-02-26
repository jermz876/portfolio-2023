"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav((prevNav) => !prevNav);
    };

    return (
        <header className="sticky top-0 w-full z-10  ">
            <nav className=" h-14 bg-gray-800 text-white shadow-lg ">
                <div className=" flex justify-between items-center max-w-7xl mx-auto w-full h-full px-8 ">
                    {/* LOGO */}
                    <a href="/">
                        <h2 className="text-blue-500 font-bold text-2xl ">J-Binns</h2>
                    </a>

                    {/* NAV Links */}
                    <div>
                        <ul className=" hidden md:flex gap-8 ">
                            <Link href="#about">
                                <li className="text-md uppercase  hover:text-blue-300 ">About</li>
                            </Link>

                            <Link href="#portfolio">
                                <li className="text-md uppercase hover:text-blue-300 ">Portfolio</li>
                            </Link>
                            <Link href="#contact">
                                <li className="text-md uppercase hover:text-blue-300 ">Contact</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Hamburger */}
                    <div onClick={handleNav} className="md:hidden cursor-pointer mx-4">
                        <AiOutlineMenu size={20} />
                    </div>
                </div>

                {/* mobile navbar */}
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-gray-800 p-10  ease-in duration-300"
                            : "fixed left-[-100%] top-0 w-[65%]  h-screen ease-in duration-300 "
                    }
                >
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className=" cursor-pointer">
                            <AiOutlineClose size={20} />
                        </div>
                    </div>
                    <div>
                        <ul className=" flex flex-col my-4 ">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className=" uppercase hover:text-blue-300 cursor-pointer font-bold my-4">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className=" uppercase hover:text-blue-300  cursor-pointer font-bold my-4">
                                    About
                                </li>
                            </Link>
                            <Link href="/#portfolio">
                                <li onClick={() => setNav(false)} className=" uppercase hover:text-blue-300  cursor-pointer font-bold my-4">
                                    Portfolio
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className=" uppercase hover:text-blue-300  cursor-pointer font-bold my-4">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                {/* End Mobile navbar */}
            </nav>
        </header>
    );
};

export default Navbar;
