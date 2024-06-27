"use client"
import Link from "next/link"
import { useState } from "react";

export default function Topbar() {


    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
        <main className="flex md:flex-row flex-col py-8 md:px-16 px-2 bg-white md:text-lg items-center md:justify-between">
            <div className="logo py-3 md:py-0">
                <Link href={"/"}>
                    <img className="h-20 md:h-32 aspect-square object-cover rounded-full hover:border-2 shadow-xl cursor-pointer border-violet-300 transition-all"
                        src="/art/logo.jpeg"
                        alt="logo">
                    </img>
                </Link>
            </div>
            <div className="buttons flex space-x-1 sm:space-x-2 md:space-x-4 items-center justify-center text-md sm:text-lg md:text-xl">
                <Link className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/knjige">knjige</Link>
                <Link className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/nastopi">nastopi</Link>
                <Link className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/odmevi">odmevi</Link>
                <Link className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/galerija">galerija</Link>
                <div className="dropdown relative" >
                <button onMouseEnter={toggleDropdown} className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold">branja</button>
                {showDropdown && (
                    <div className="dropdown absolute bg-white shadow-md top-full rounded-sm w-[150%] mt-0 md:mt-1 left-0 text-sm md:text-md">
                        <Link onClick={toggleDropdown} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/branja/poezija">poezija</Link>
                        <Link onClick={toggleDropdown} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/branja/proza">proza</Link>
                        <Link onClick={toggleDropdown} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/branja/za-otroke">za otroke</Link>
                    </div>
                )}
                </div>
                <Link className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="#footer">kontakt</Link>
            </div>
            
            <div>
            </div>
        </main>
    )
}