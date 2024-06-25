import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Footer () {
    return (
        <footer id="footer" className="bg-primary-100 text-white p-2">
            <div className="flex justify-center">
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-lg font-semibold">Kontakt</h2>
                    <div className="flex space-x-2 items-center">
                        <Mail size={20}/>
                        <p className="text-md">petojca@gmail.com</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <Phone size={20}/>
                        <p className="text-md">+386 51 368 588</p>
                    </div>
                    <div className="flex space-x-4 items-center justify-center">
                        <Link href="https://www.facebook.com/mojca.andrej" target="_blank">
                            <Facebook size={22}/>
                        </Link>

                        <Link href="https://www.instagram.com/mojcaandrej/" target="_blank">
                            <Instagram size={22}/>
                        </Link>

                        <Link href="https://www.youtube.com/channel/UCFa7IHSXM1oKzEXmXG3NC5Q" target="_blank">
                            <Youtube size={24}/>
                        </Link>
                    </div>
                    <div className="flex items-center pt-4 opacity-90">
                        <p className="text-sm">© 2024 Mojca Andrej. Vse pravice pridržane.</p>
                    </div>
                </div>   
            </div>
        </footer>
    )
}