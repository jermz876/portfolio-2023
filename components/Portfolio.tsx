"use client";

import Image from "next/image";
import React from "react";
import Todos from "../public/assets/todos.png";
import Data from "../public/assets/dataPage.png";
import Weather from "../public/assets/weatherApp.png";
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <section id="portfolio" className="w-full  text-[#ccd6f6] ">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
                className="max-w-5xl w-full h-full mx-auto px-6 py-24 flex flex-col justify-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white  border-b-4 border-b-blue-500  max-w-fit mb-10">Portfolio</h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div className=" overflow-hidden shadow-lg  transition-all hover:scale-105 duration-500  rounded-lg max-w-[420px] mx-auto">
                        <div>
                            <Image src={Todos} alt="/" className=" object-cover h-72   w-full " />
                        </div>

                        <div className="px-6 py-4 bg-slate-800">
                            <h3 className="font-bold text-xl mb-2 text-pink-600">To-do List App </h3>
                            <p className="text-gray-500 text-base">To-do list app with login feature built using React</p>
                        </div>
                        <div className="px-6 pt-4 pb-2 bg-slate-800">
                            <a href="https://todos-2023.vercel.app/">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View Demo</span>
                            </a>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-lg  transition-all hover:scale-105 duration-500  rounded-lg max-w-[420px] mx-auto ">
                        <div>
                            <Image src={Weather} alt="/" className=" object-cover h-72 w-full  " />
                        </div>
                        <div className="px-6 py-4 bg-slate-800">
                            <div className="font-bold text-xl mb-2 text-pink-600">Get Weather App</div>
                            <p className="text-gray-500 text-base">Weather App built using fetch api, JavaScript, Tailwind in React</p>
                        </div>
                        <div className="px-6 pt-4 pb-2 bg-slate-800">
                            <a href="https://weather-api-app-theta.vercel.app/">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View Demo</span>
                            </a>
                        </div>
                    </div>
                    <div className=" overflow-hidden shadow-lg transition-all hover:scale-105 duration-500  rounded-lg max-w-[420px] mx-auto">
                        <div>
                            <Image src={Data} alt="/" className=" object-cover h-72   w-full " />
                        </div>
                        <div className="px-6 py-4 bg-slate-800">
                            <div className="font-bold text-xl mb-2 text-pink-600">Data Landing Page</div>
                            <p className="text-gray-500 text-base">Landing page built using HTML, Tailwind and JavaScript in React.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2 bg-slate-800">
                            <a href="https://data-landing-page-2.vercel.app/">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
