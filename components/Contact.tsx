"use client";

import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="w-full   text-[#8892b0]">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
                className="max-w-5xl w-full h-full mx-auto px-6 py-20 flex flex-col justify-center items-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] border-b-4 border-b-blue-500  max-w-fit mb-10 ">Get In Touch</h2>

                <form className="flex flex-col max-w-xl w-full mx-auto">
                    <input className="mb-4 p-2 bg-[#ccd6f6] outline-none" type="text" placeholder="Name" />
                    <input className="mb-4 p-2 bg-[#ccd6f6] outline-none" type="text" placeholder="Email" />
                    <textarea className="p-2 bg-[#ccd6f6] outline-none" name="message" id="message" cols={30} rows={8} placeholder="Message"></textarea>
                    <div className="text-center text-white">
                        <button className="border-2 px-5 py-2 my-4 rounded-xl hover:bg-indigo-600 hover:border-indigo-600 ">Submit</button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
