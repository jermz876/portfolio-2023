import Image from "next/image";
import React from "react";
import Todos from "../public/assets/todos.png";
import Data from "../public/assets/dataPage.png";
import Weather from "../public/assets/weatherApp.png";

const Portfolio = () => {
    return (
        <section id="portfolio" className="w-full  text-white ">
            <div className="max-w-5xl w-full h-full mx-auto px-6 py-20 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] border-b-4 border-b-pink-600  max-w-fit mb-2">Portfolio</h2>
                <p className="text-xl md:text-2xl font-semibold text-[#ccd6f6] mb-6">Check out some of my recent work </p>

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
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Demo</span>
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
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Demo</span>
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
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
