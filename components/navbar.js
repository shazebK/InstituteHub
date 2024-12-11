"use client"

import { MenuIcon, CloseIcon} from "@/assets/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const [menuVisible,setMenuVisible] = useState(false);
    const menuHandler = () => {
        setMenuVisible(prevState => !prevState);
    }

    const path = usePathname();

    return (
        <nav className={`w-screen ${menuVisible ? "h-screen" : "h-16"} flex flex-col md:flex-row justify-around items-center bg-white shadow-md px-4 fixed top-0 z-50`}>
            <div className="w-full h-16 flex justify-between items-center">
                <h1 className="text-4xl font-semibold hidden md:block"><Link href = "/">InstituteHub</Link></h1>
                <h1 className="text-4xl font-semibold md:hidden"><Link href="/">IH</Link></h1>

                <span onClick={menuHandler} className="md:hidden">{menuVisible ? <CloseIcon/> : <MenuIcon/>}</span>
            </div>

            <ul className = {`${menuVisible ? "flex flex-col" : "hidden md:flex"} md:flex-row justify-around w-full md:w-2/3 h-full items-center`}>
                <li className={`${path === "/" && "text-orange-500"}`}><Link href = "/">Home</Link></li>
                <li className={`${path.startsWith("/events") && "text-orange-500"}`}><Link href = "/events">Events</Link></li>
                <Link href = "/auth/login"><button className="w-28 h-10 p-2 mx-4 flex justify-center items-center rounded-md text-black hover:bg-black hover:text-white border-black border-2 transition duration-200 ease-in-out">Login</button></Link>
            </ul>

        </nav>
    )
}

