import Link from "next/link"

export default function Topbar() {
    return (
        <main className="flex flex-wrap py-8 md:px-16 px-4 bg-white md:text-lg items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl text-primary-100">Mojca Andrej</h1>
            </div>
            <div className="buttons flex space-x-2 md:space-x-4 items-center justify-center text-md md:text-lg">
                <Link className="text-neutral-500 hover:text-black" href={"/knjige"}>knjige</Link>
                <Link className="text-neutral-500 hover:text-black" href={"/nastopi"}>nastopi</Link>
                <Link className="text-neutral-500 hover:text-black" href={"/odmevi"}>odmevi</Link>
                <Link className="text-neutral-500 hover:text-black" href={"/galerija"}>galerija</Link>
                <Link className="text-neutral-500 hover:text-black" href={"#footer"}>kontakt</Link>
            </div>
            <div></div>
        </main>
    )
}