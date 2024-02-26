// import React from "react";
import HTML from "../public/assets/html.png";
import CSS from "../public/assets/css.png";
import JavaScript from "../public/assets/javascript.png";
import ReactImg from "../public/assets/react.png";
import Tailwind from "../public/assets/tailwind.png";
import Github from "../public/assets/github.png";
import Image from "next/image";

const Skills = () => {
    return (
        <section id="skills" className="w-full lg:h-screen">
            <div className="max-w-5xl w-full h-full mx-auto px-6 py-10 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] border-b-4 border-b-pink-600  max-w-fit mb-2 ">Skills</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-[#ccd6f6] ">These are the technologies I have worked with</h3>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-8 text-[#8892b0]">
                    <div className="shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
                        <Image src={HTML} alt="icon" className="w-20 mx-auto" />
                        <p>HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
                        <Image src={CSS} alt="icon" className="w-20 mx-auto" />
                        <p>CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
                        <Image src={JavaScript} alt="icon" className="w-20 mx-auto" />
                        <p>JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
                        <Image src={ReactImg} alt="icon" className="w-20 mx-auto" />
                        <p>React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
                        <Image src={Tailwind} alt="icon" className="w-20 mx-auto" />
                        <p>Tailwind</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:shadow-pink-600 hover:scale-110 duration-500">
                        <Image src={Github} alt="icon" className="w-20 mx-auto" />
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
