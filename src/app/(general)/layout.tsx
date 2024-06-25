import Topbar from "./components/topbar";
import Footer from "./components/footer";

import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Topbar/>
            <main className="px-4 py-8 md:px-16 xl:px-32 bg-white">
            {children}
            </main>
            <Footer/>
        </div>
    )
}