"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const [text, setText] = useState("");
    const fullText = "꿈과 희망을 키우는 교실,\n신뢰받는 즐거운 학교";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center">
            {/* Background Elements */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
            />

            {/* 3D Floating Grid or Particles could go here */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Content */}
            <div className="z-10 flex flex-col items-center gap-6 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl"
                >
                    DUNSAN
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        MIDDLE SCHOOL
                    </span>
                </motion.h1>

                <div className="h-24"> {/* Spacer for typing text height stability */}
                    <p className="whitespace-pre-line text-xl font-medium text-zinc-400 md:text-2xl">
                        {text}
                        <span className="animate-pulse cursor-default">|</span>
                    </p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 animate-bounce text-zinc-500"
            >
                Scroll to Explore
            </motion.div>
        </section>
    );
}
