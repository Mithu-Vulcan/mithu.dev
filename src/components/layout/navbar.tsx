"use client"

import { motion } from "motion/react"
import Link from "next/link";

const links = [
    {label : "About", href : "/#about"},
    {label : "Projects", href : "/#projects"},
    {label : "Contact", href : "/#contact"},
    {label : "Blog", href : "/blog"}
]

export default function Navbar () {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm border-b bg-background/80">
            <nav className="mx-auto flex items-center justify-between max-w-5xl px-6 py-6">
                <Link href="/" className="font-bold text-2xl tracking-tight">Mithu.</Link>
            

                <ul className="flex items-center gap-6">
                    {links.map((link) => (<li key={link.href}>
                        <motion.div
                            whileHover={{y : -1}}
                            whileTap={{scale: 0.95}}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                            <Link 
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >{link.label}</Link>
                        </motion.div>
                    </li>))}
                </ul>
            </nav>
        </header>
    );
}