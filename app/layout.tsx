import { Navbar, Footer } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jeremie Binns Portfolio",
    description: "created by Jeremie binns",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="{inter.className} bg-gray-700  ">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
// bg-[#0a192f]
