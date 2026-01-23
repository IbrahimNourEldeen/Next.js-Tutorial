'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
    { href: '/forgot-password', label: 'Forgot Password' },
];


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [name, setName] = useState('')
    return <div>
        <div>
            <input type="text" className="border" value = {name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href);
            return <Link href={link.href} key={link.label} 
            className={isActive ? 'font-bold mr-4' : 'text-gray-500 mr-4'}
            >
                {link.label}
            </Link>
        })
        }
        {children}
    </div>;
}