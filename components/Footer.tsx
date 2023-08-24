import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a192f]">
            <div className="max-w-[1440px] w-full mx-auto px-4 py-6 text-white text-center">
                <div className=" flex justify-center items-center space-x-8 p-4 ">
                    <a href="https://www.linkedin.com/in/jeremie-binns-4bb90525a/">
                        <AiFillLinkedin className="text-3xl hover:text-pink-600 cursor-pointer duration-300" />
                    </a>
                    <a href="https://github.com/jermz876">
                        <AiFillGithub className="text-3xl hover:text-pink-600 cursor-pointer duration-300" />
                    </a>
                </div>
                <p className="text-[#efecec] font-light opacity-50">Built by Jeremie Binns</p>
            </div>
        </footer>
    );
};

export default Footer;
