"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 더미 이미지 데이터 (실제 이미지가 없으므로 플레이스홀더 사용)
const arts = [
    { id: 1, src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop", title: "가을맞이 사생대회" },
    { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop", title: "과학의 날 행사" },
    { id: 3, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop", title: "둔지미 예술제 리허설" },
    { id: 4, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", title: "동아리 발표회" },
];

export function ArtGallery() {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
                >
                    Gallery
                    <span className="ml-2 block text-lg font-normal text-zinc-500">둔산의 추억</span>
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {arts.map((art, index) => (
                        <motion.div
                            key={art.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900"
                        >
                            <Image
                                src={art.src}
                                alt={art.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-all duration-300 group-hover:bottom-2 group-hover:opacity-100">
                                <p className="text-lg font-bold text-white">{art.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
