"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="/#hero">
            <motion.div initial={{ opacity: 0, y: -75 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="w-full h-screen">
                <div className="max-w-5xl w-full h-full mx-auto px-6 flex flex-col justify-center">
                    <p className="text-5xl text-[#ccd6f6] font-semibold">Hi There 👋 I'm</p>
                    <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">Jeremie Binns</h1>
                    <h2 className="text-2xl md:text-5xl font-bold text-[#ccd6f6]">
                        <span className=" bg-gradient-to-tl from-blue-400 to-blue-500 bg-clip-text text-transparent">
                            <ReactTyped strings={["Web Developer", "Problem Solver", "Force User"]} typeSpeed={95} backSpeed={50} loop />{" "}
                        </span>
                    </h2>

                    <p className="text-[#8892b0] my-2 w-2/3 ">Front-End Web Developer bringing conceptual ideas and designs to life.</p>
                    <div className="text-white">
                        <Link href={"/#about"} className="inline-block">
                            <button className="group border-2 px-5 py-2 my-2 flex items-center hover:bg-indigo-500 hover:border-indigo-500 ">
                                About me{" "}
                                <span className=" ml-2 group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
