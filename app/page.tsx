import Image from "next/image";
import { Hero, About, Contact } from "@/components";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </>
    );
}
