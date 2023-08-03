import Image from "next/image";
import { Hero, About, Projects, Contact, Test, Skills } from "@/components";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <div className=" bg-[#0a192f]">
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    );
}
