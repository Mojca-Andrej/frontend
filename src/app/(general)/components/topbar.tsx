import Link from "next/link"

export default function Topbar() {
    return (
        <main className="flex md:flex-row flex-col py-8 md:px-16 px-4 bg-white md:text-lg items-center md:justify-between">
            <div className="logo py-3 md:py-0">
                <Link href={"/"}>
                    <img className="h-20 md:h-32 aspect-square object-cover rounded-full hover:border-2 shadow-md cursor-pointer border-primary-50 transition-all"
                        src="/art/logo.jpeg"
                        alt="logo">
                    </img>
                </Link>
            </div>
            <div className="buttons flex space-x-1 sm:space-x-2 md:space-x-4 items-center justify-center text-md md:text-lg">
                <Link className="text-neutral-500 hover:text-primary-500 focus:text-primary-400 hover-border-bottom" href="/knjige">knjige</Link>
                <Link className="text-neutral-500 hover:text-primary-500 focus:text-primary-400 hover-border-bottom" href="/nastopi">nastopi</Link>
                <Link className="text-neutral-500 hover:text-primary-500 focus:text-primary-400 hover-border-bottom" href="/odmevi">odmevi</Link>
                <Link className="text-neutral-500 hover:text-primary-500 focus:text-primary-400 hover-border-bottom" href="/galerija">galerija</Link>
                <Link className="text-neutral-500 hover:text-primary-500 focus:text-primary-400 hover-border-bottom" href="/branja">branja</Link>
                <Link className="text-neutral-500 hover:text-primary-500 focus:text-primary-400 hover-border-bottom" href="#footer">kontakt</Link>
            </div>
            
            <div>
            </div>
        </main>
    )
}