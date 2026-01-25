"use client";

import { motion } from "framer-motion";
import { Bell, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const notices = [
    { id: 1, title: "2024학년도 2학기 기말고사 안내", date: "2024.11.20", type: "notice" },
    { id: 2, title: "학교폭력 예방 교육 자료", date: "2024.11.18", type: "notice" },
    { id: 3, title: "겨울방학 방과후학교 신청 안내", date: "2024.11.15", type: "letter" },
    { id: 4, title: "학부모님께 드리는 감사 인사", date: "2024.11.10", type: "letter" },
];

export function NoticeBoard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-md"
        >
            <div className="mb-6 flex items-end justify-between">
                <h3 className="text-2xl font-bold text-white">최신 소식</h3>
                <Link href="/news" className="flex items-center text-sm text-zinc-500 hover:text-white transition-colors">
                    더보기 <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
            </div>

            <div className="space-y-4">
                {notices.map((notice, index) => (
                    <motion.div
                        key={notice.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${notice.type === 'notice' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                                {notice.type === 'notice' ? <Bell className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                            </div>
                            <div>
                                <p className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                                    {notice.title}
                                </p>
                                <span className="text-xs text-zinc-500">{notice.date}</span>
                            </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-zinc-600 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
