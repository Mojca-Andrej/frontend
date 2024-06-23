import Topbar from "./components/topbar";
import Footer from "./components/footer";

import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Topbar/>
            {children}
            <Footer/>
        </div>
    )
}