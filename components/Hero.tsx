import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="/#hero">
            <div className="w-full h-screen">
                <div className="max-w-5xl w-full h-full mx-auto px-6 flex flex-col justify-center">
                    <p className="text-pink-600 font-semibold">Hi, my name is</p>
                    <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">Jeremie Binns</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#8892b0]">
                        I&apos;m a <span className=" bg-gradient-to-br from-pink-600 to-purple-600 bg-clip-text text-transparent">Web Developer</span>
                    </h2>
                    <p className="text-[#8892b0] my-2 w-2/3 ">Front-End Web Developer bringing conceptual ideas and designs to life.</p>
                    <div className="text-white">
                        <Link href={"/#about"} className="inline-block">
                            <button className="group border-2 px-5 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
                                About me{" "}
                                <span className=" ml-2 group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
