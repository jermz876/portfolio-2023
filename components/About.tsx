"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="w-full  text-[#ccd6f6]">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
                className="max-w-5xl w-full h-full  mx-auto px-6 lg:pt-14 lg:pb-28 flex flex-col justify-center "
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white  border-b-4 border-b-blue-500  max-w-fit mb-2">About Me</h2>

                <p className="text-lg font-semibold">
                    <br />
                    My name is Jeremie and I enoying creating fun and interactive software applications.
                    <br /> Currently, I'm focused on building responsive front-end web applicaitions along with learning backend technologies.
                    <br />
                    <br />
                    This is a portfolio of work that demonstrates my skills and dedication. I'm committed to creating beautiful, user-friendly experiences that meet the
                    needs of clients across all platforms.
                    <br />
                    <br />
                    If I am not building software apps, you can find me checking out the latest digital trends or searching for Korok seeds in the Hyrule.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
