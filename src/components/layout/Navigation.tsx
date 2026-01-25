"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "학교소개", href: "#about" },
    { name: "학생마당", href: "#student" },
    { name: "학습마당", href: "#learning" },
    { name: "열린마당", href: "#community" },
];

export function Navigation() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6"
        >
            <nav className="flex items-center gap-8 rounded-full border border-white/10 bg-black/50 px-8 py-4 backdrop-blur-xl shadow-2xl transition-all hover:bg-black/70 hover:border-white/20">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white mr-4">
                    DUNSAN MS
                </Link>
                <ul className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="relative text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
