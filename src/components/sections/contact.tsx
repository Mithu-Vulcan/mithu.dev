"use client"

import { ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "motion/react"
import { MdProductionQuantityLimits } from "react-icons/md";
import { Separator } from "@/components/ui/separator";


const contacts = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@mithu.lk",
        href: "mailto:hello@mithu.lk"
    },
    {
        icon: FaGithub,
        label: "Github",
        value: "github.com/Mithu-Vulcan",
        href: "https://github.com/Mithu-Vulcan"
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "jonathan-mithushanth",
        href: "https://www.linkedin.com/in/jonathan-mithushanth-9a97702a1/"
    }
];

const fadeUp = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0}
};

export default function Contact () {
    return (
        <section
        id="contact" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24 sm:px-8">
            <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.15 }}
            variants={{show: {transition: {staggerChildren: 0.12}}}}>

                <motion.div
                variants={fadeUp}
                transition={{duration: 0.5}}
                className="space-y-3">
                    <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">Don&apos; be a stranger</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                </motion.div>

                <motion.p
                variants={fadeUp}
                transition={{duration: 0.5}}
                className="text-muted-foreground leading-relaxed">
                    I&apos;m open to freelance work, collaborations, and new opportunities.
                    Whether you have a new project in mind or just want to say hi, my inbox is always open.
                </motion.p>

                <Separator/>

                <motion.div
                 variants={fadeUp}
                transition={{duration: 0.5}}
                className="space-y-12">
                    {
                        contacts.map((item) => {
                            const Icon = item.icon

                            return <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                                rel="noopener norferrer"
                                className="group flex items-center justify-between rounded-xl border bg-card transition-colors p-5 hover:bg-accent">
                                
                                <div className="flex items-center gap-4">
                                    <Icon className="h-5 w-5 shrink-0 text-muted-foreground"/>
                                    <div>
                                        <p className="text-xs text-muted-foreground">{item.label}</p>
                                        <p className="text-sm font-medium">{item.value}</p>
                                    </div>
                                </div>

                                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"/>

                            </a>
                        })
                    }
                </motion.div>

                <Separator/>

                <motion.p
                variants={fadeUp}
                transition={{duration: 0.5}}
                className="text-muted-foreground text-sm">
                    I&apos;ll get back to you as soon as I can. Usually within a day or two.
                </motion.p>

            </motion.div>
        </section>
    )
}