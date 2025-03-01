import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Footer () {
    return (
        <footer id="footer" className="bg-gradient-to-tr from-sky-300 to-purple-300 via-violet-400  pt-4 pb-2">
            <div className="flex justify-center">
                <div className="flex flex-col items-center space-y-1">
                    <h2 className="text-lg font-semibold text-white">Kontakt</h2>
                    <div className="flex space-x-2 items-center text-neutral-100">
                        <Mail size={20}/>
                        <p className="text-base">petojca@gmail.com</p>
                    </div>
                    <div className="flex space-x-2 items-center text-neutral-100">
                        <Phone size={20}/>
                        <p className="text-base">+386 51 368 588</p>
                    </div>
                    <div className="flex space-x-3 items-center justify-center text-neutral-100">
                        <Link href="https://www.facebook.com/mojca.andrej" target="_blank">
                            <Facebook size={22} className="hover:text-black"/>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCFa7IHSXM1oKzEXmXG3NC5Q" target="_blank">
                            <Youtube strokeWidth={2} size={24} className="hover:text-black"/>
                        </Link>
                        <Link href="https://www.instagram.com/mojcaandrej/" target="_blank">
                            <Instagram size={22} className="hover:text-black"/>
                        </Link>
                    </div>
                    <div className="flex items-center pt-4 opacity-90">
                        <p className="text-sm">© 2025 Mojca Andrej. Vse pravice pridržane.</p>
                    </div>
                </div>   
            </div>
        </footer>
    )
}