import React from "react";
import Image from "next/image";
import laptop from "../public/laptop.webp";

const Contact = () => {
    return (
        <section id="contact" className="w-full   text-[#8892b0]">
            <div className="max-w-5xl w-full h-full mx-auto px-6 py-20 flex flex-col justify-center items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] border-b-4 border-b-pink-600  max-w-fit mb-2 ">Contact</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-[#ccd6f6] ">Lets Connect</h3>
                <form className="flex flex-col max-w-xl w-full mx-auto my-8">
                    <input className="mb-4 p-2 bg-[#ccd6f6] outline-none" type="text" placeholder="Name" />
                    <input className="mb-4 p-2 bg-[#ccd6f6] outline-none" type="text" placeholder="Email" />
                    <textarea className="p-2 bg-[#ccd6f6] outline-none" name="message" id="message" cols={30} rows={8} placeholder="Message"></textarea>
                    <div className="text-center text-white">
                        <button className="border-2 px-5 py-2 my-4 rounded-xl hover:bg-pink-600 hover:border-pink-600 ">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
