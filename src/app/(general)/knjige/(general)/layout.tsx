import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-white pb-16 px-4 md:px-16">
            {children}
        </div>
    )
}