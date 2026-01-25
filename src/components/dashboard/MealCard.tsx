"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

export function MealCard() {
    // 실제 데이터 연동 전 더미 데이터
    const todayMeal = [
        "통잡곡밥",
        "돈육김치찌개",
        "고등어무조림",
        "시금치나물",
        "깍두기",
        "디저트(요구르트)"
    ];

    return (
        <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-md transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

            <div className="z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
                    <Utensils className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">오늘의 급식</h3>
                <ul className="space-y-2 text-zinc-400">
                    {todayMeal.map((menu, index) => (
                        <li key={index} className="text-lg font-medium">{menu}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
