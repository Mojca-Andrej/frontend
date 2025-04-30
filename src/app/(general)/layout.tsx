import Topbar from "./components/topbar";
import Footer from "./components/footer";

import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Topbar />
      <main className="px-4 pt-8 pb-16 md:px-16 xl:px-32 bg-white min-h-[70vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
