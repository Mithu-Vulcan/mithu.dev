import Link from "next/link"
import { Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

const navLinks = [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/#about"},
    {label: "Projects", href: "/projects"},
    {label: "Contact", href: "/contact"},
];

const socials = [
    {
        label: "Email",
        href: "mailto:hello@mithu.lk",
        icon: Mail
    },
    {
        label: "Whatsapp",
        href: "https://wa.me/94714582317",
        icon: FaWhatsapp
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jonathan-mithushanth-9a97702a1",
        icon: FaLinkedin
    },
    {
        label: "Github",
        href: "https://github.com/Mithu-Vulcan",
        icon: FaGithub
    },
]

export default function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t bg-background">
            <div className="px-6 py-14 max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    <div className="space-y-3 col-span-2 md:col-span-1">
                        <Link href={"/"} className="text-3xl font-bold tracking-tight">Mithu.</Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">Web Developer &amp; Python backend engineer based in Srilanka.
                            Building Solutions for the Web
                        </p>
                    </div>

                    <div className="space-y-3">
                        <p className="font-semibold md:text-right text-sm">Navigation</p>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}
                                className="text-sm text-muted-foreground md:text-right hover:text-foreground transition-colors">
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <p className="font-semibold md:text-right text-sm">Socials</p>
                        <ul className="space-y-2">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return(
                                <li key={social.label}>
                                    <a href={social.href} target="blank" rel="nooperner noreferrer"
                                    className="flex items-center text-sm text-muted-foreground md:justify-end transition-colors hover:text-foreground">
                                        <Icon className="h-4 w-4 shrink-0"/>
                                        {social.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-50"/>
                                    </a>
                                </li>
                            )})}
                        </ul>
                    </div>

                </div>
                
                <Separator className="my-8"/>

                <div className="flex flex-col text-xs text-muted-foreground items-center justify-between gap-3">
                    <p className="text-center"> {year} J.Jonathan Mithushanth. All rights reserved. Made with NextJS with Shadcn ui</p>
                    <Link href={"#top"} className="hidden md:block">
                    <Button className="cursor-pointer">Back to top <ArrowUp/></Button>
                    </Link>
                </div>

                
            </div>
        </footer>
    )
}