"use client"

import { motion } from "motion/react"
import { Globe, Terminal, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const cards = [
  {
    icon: Globe,
    title: "Web Development",
    body: "Building responsive, modern web apps with Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Terminal,
    title: "Python Backend",
    body: "Writing backend logic, REST APIs, and automation scripts with Python.",
  },
  {
    icon: BookOpen,
    title: "Self-Taught First",
    body: "Most of my knowledge comes from online learning, docs, and building real projects.",
  },
];

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C#"] },
  { category: "Frontend",  items: ["React", "Next.js", "Tailwind CSS", "Vanila HTML, CSS"] },
  { category: "UI & Tools", items: ["shadcn/ui","radix-Ui","React Icons","VS code","Claude", "Lucide Icons", "Git"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0  },
};

export default function About() {
    return (
        <section
        id="about"
        className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24 sm:px-8">
            <motion.div
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.15}}
            variants={{show: {transition: {staggerChildren: 0.12}}}}
            className="space-y-12">

                <motion.div
                variants={fadeUp}
                transition={{duration: 0.5}}
                className="space-y-3">

                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-[0.2em]">Get to know me</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>

                </motion.div>

                <motion.div
                variants={fadeUp}
                transition={{duration: 0.5}}
                className="space-y-3">

                    <p className="text-muted-foreground leading-relaxed">
                        I&apos;m Mithushanth, a software engineering student from Batticaloa,
                        Sri Lanka. Most of what I know comes from learning online. building
                        things, breaking them, and figuring out why. My HND at Esoft Metro
                        Campus puts an official stamp on that knowledge, but the curiosity
                        came first.
                    </p>

                    <blockquote className="border-1-2 border-muted-foreground italic leading-relaxed pl-4">&ldquo;If you can solve it with software, you should.&rdquo;</blockquote>

                </motion.div>

                <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                variants={fadeUp}
                transition={{duration: 0.5}}>
                    {
                        cards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div
                                className="space-y-2 rounded-xl bg-card border p-5"
                                key={card.title}>
                                    <Icon className="h-5 w-5 text-muted-foreground"/>
                                    <p className="text-sm font-semibold ">{card.title}</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                                </div>
                            )
                        })
                    }

                </motion.div>

                <Separator/>

                <motion.div
                className="flex gap-4"
                variants={fadeUp}
                transition={{duration: 0.5}}>
                    <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-muted-foreground"/>
                    <div className="space-y-2">
                        <p className="font-semibold">L3 Diploma in Information Technology</p>
                        <p className="text-sm text-muted-foreground"> Esoft Metro Campus. Srilanka</p>
                        <p className="text-xs text-muted-foreground">2025 - 2026</p>
                    </div>
                </motion.div>
                <motion.div
                className="flex gap-4"
                variants={fadeUp}
                transition={{duration: 0.5}}>
                    <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-muted-foreground"/>
                    <div className="space-y-2">
                        <p className="font-semibold">HND in Software Engineering</p>
                        <p className="text-sm text-muted-foreground"> Esoft Metro Campus. Srilanka</p>
                        <p className="text-xs text-muted-foreground">Currently Studying</p>
                    </div>
                </motion.div>

                <Separator/>

                <motion.div
                className="space-y-4"
                variants={fadeUp}
                transition={{duration: 0.5}}>
                    
                    <p className="font-semibold">Tech &amp; Skills</p>

                    <div className="space-y-3">
                        {skills.map((group) => (
                        <div key={group.category} className="space-y-1.5 sm:space-y-0">
                            <span className="block text-xs text-muted-foreground sm:hidden mt-0.5">
                              {group.category}
                            </span>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="hidden w-24 shrink-0 text-xs text-muted-foreground sm:block">
                                    {group.category}
                                </span>
                                    {group.items.map((item) => (
                                        <Badge key={item} variant="secondary" className="text-xs">
                                            {item}
                                        </Badge>
                                ))}
                            </div>
                        </div>
                        ))}
                    </div>

                </motion.div>

                <Separator/>

                <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="inline-block"
                    >
                        <Link href={"/#contact"}>
                            <Button className="gap-2">
                              Get in Touch <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>



            </motion.div>
        </section>
    )
}