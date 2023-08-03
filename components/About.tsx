import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <section id="about" className="w-full lg:h-screen text-[#8892b0]">
            <div className="max-w-5xl w-full h-full  mx-auto px-6 py-20 flex flex-col justify-center ">
                <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] border-b-4 border-b-pink-600  max-w-fit mb-2 ">About</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-[#ccd6f6] "> Hi, I'm Jeremie. Please have a look around</h3>
                <p>
                    <br />
                    I'm a self-taught Frontend Developer based in Atlanta, Georgia. I am passionate about building excellent software applications. Currently I'm focused
                    on building responsive frontend web applicaitions while learning backend technologies.
                    <br />
                    <br />
                    This is a portfolio of work that demonstrates my skills and dedication. I'm committed to creating beautiful, user-friendly experiences that meet the
                    needs of clients and users across all platforms.
                </p>
                <p>
                    <br />
                    Often on the weekends I am checking out new technologies, creating new projects or online Sim Racing.
                </p>
            </div>
        </section>
    );
};

export default About;
