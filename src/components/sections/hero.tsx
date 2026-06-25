"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, MapPin, GraduationCap } from "lucide-react";

const stack = ["JavaScript", "TypeScript", "Python", "React", "Next.js"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8">
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
          [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
          [background-size:48px_48px]
          opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
          [background:radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,hsl(var(--background))_100%)]"
      />

      <motion.div
        className="w-full max-w-3xl space-y-7"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* Greeting + Name */}
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            J. Jonathan
            <br />
            Mithushanth
          </h1>
        </motion.div>

        {/* Role line */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium text-muted-foreground sm:text-xl"
        >
          Web Developer &amp; Python Backend Engineer
        </motion.p>

        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <Separator />
        </motion.div>

        {/* Meta */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0" />
            Sri Lanka
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4 shrink-0" />
            <span>HND Software Engineering · Esoft Metro Campus</span>
          </span>
        </motion.div>

        {/* Stack badges */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 pt-1"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              View My Work <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}