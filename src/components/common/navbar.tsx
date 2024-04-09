'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    {
        title: "Home",
        url: '/'
    },
    {
        title: "Work",
        url: '#social'
    },
    {
        title: 'About',
        url: '#about'
    },
    {
        title: 'Newsletter',
        url: '#'
    }
]
export default function NavBar(){

    const pathname = usePathname()

    return (
        <nav className="glassmorphism rounded-3xl fixed center bottom-12 z-50 navbar place-self-center">
            <ul className="flex gap-4">
                {links.map((link) => (
                    <li className={clsx("p-5 transition-all duration-500 hover:text-[#DCA63D] hover:animate-bounce", pathname === link.url? 'text-[#DCA63D] font-bold' : 'text-gray-200')} key={link.title}><Link href={link.url}>{link.title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}






/*
'use client'
import Magnetic from "@/components/Animations/Magnetic";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="glassmorphism rounded-3xl fixed bottom-12 z-50 navbar">
            <ul className="flex gap-4">
                {links.map((link) => (
                    <li className={cn("p-5 transition-all duration-500 hover:text-[#DCA63D]", pathname === link.url ? 'text-[#DCA63D]' : 'text-gray-200')} key={link.title}><Magnetic className="left"><Link href={link.url}>{link.title}</Link></Magnetic></li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;*/