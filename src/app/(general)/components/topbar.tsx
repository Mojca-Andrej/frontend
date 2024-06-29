"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Topbar() {
    const [showDropdownBranja, setShowDropdownBranja] = useState(false);
    const [showDropdownPrevodi, setShowDropdownPrevodi] = useState(false);


    const branjaRef = useRef<HTMLDivElement>(null);
    const prevodiRef = useRef<HTMLDivElement>(null);

    const toggleDropdownBranja = () => {
      setShowDropdownBranja(!showDropdownBranja);
      setShowDropdownPrevodi(false);
    };

    const toggleDropdownPrevodi = () => {
        setShowDropdownPrevodi(!showDropdownPrevodi);
        setShowDropdownBranja(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (branjaRef.current && !branjaRef.current.contains((event.target as Node))) {
            setShowDropdownBranja(false);
        }
        if (prevodiRef.current && !prevodiRef.current.contains((event.target as Node))) {
            setShowDropdownPrevodi(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
            <div className="buttons flex space-x-3 flex-wrap md:space-x-4 items-center justify-center text-base sm:text-lg md:text-xl">
                <Link onMouseEnter={() => {setShowDropdownBranja(false); setShowDropdownPrevodi(false)}} className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/knjige">knjige</Link>
                <Link onMouseEnter={() => {setShowDropdownBranja(false); setShowDropdownPrevodi(false)}} className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/nastopi">nastopi</Link>
                <div ref={branjaRef} className="dropdown relative">
                <button onMouseEnter={toggleDropdownBranja} className="text-neutral-500 hover:text-violet-400">branja</button>
                {showDropdownBranja && (
                    <div className="dropdown absolute bg-white shadow-md top-full rounded-sm min-w-[150%] w-fit mt-0 md:mt-1 left-0 text-xs md:text-sm z-10">
                        <Link onClick={toggleDropdownBranja} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/branja/poezija">poezija</Link>
                        <Link onClick={toggleDropdownBranja} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/branja/proza">proza</Link>
                        <Link onClick={toggleDropdownBranja} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/branja/za-otroke">za otroke</Link>
                    </div>
                )}
                </div>
                <div ref={prevodiRef} className="dropdown relative">
                <button onMouseEnter={toggleDropdownPrevodi} className="text-neutral-500 hover:text-violet-400">prevodi</button>
                {showDropdownPrevodi && (
                    <div className="dropdown absolute bg-white shadow-md top-full rounded-sm min-w-[150%] w-fit mt-0 md:mt-1 left-0 text-xs md:text-sm z-10">
                        <Link onClick={toggleDropdownPrevodi} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/prevodi/ang">Angleško</Link>
                        <Link onClick={toggleDropdownPrevodi} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/prevodi/hrv">Hrvaško</Link>
                        <Link onClick={toggleDropdownPrevodi} className="block hover:bg-neutral-50 px-2 py-2 text-neutral-800 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/prevodi/mkd">Makedonsko</Link>
                    </div>
                )}
                </div>  
                <Link onMouseEnter={() => {setShowDropdownBranja(false); setShowDropdownPrevodi(false)}} className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/odmevi">odmevi</Link>
                <Link onMouseEnter={() => {setShowDropdownBranja(false); setShowDropdownPrevodi(false)}} className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="/galerija">galerija</Link>
                <Link onMouseEnter={() => {setShowDropdownBranja(false); setShowDropdownPrevodi(false)}} className="text-neutral-500 hover:text-violet-400 focus:text-violet-300 focus:font-semibold hover-border-bottom" href="#footer">kontakt</Link>
            </div>
            
            <div>
            </div>
        </main>
    );
}