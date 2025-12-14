
//1. Import all soccer images as object
import React, { useEffect, useRef, useState } from "react";
import { FArray } from "../Images/FootBall";

function FootBall() {
    const pics = FArray;
    const INITIAL_COUNT = 24;
    const CHUNK = 24;
    const [visibleCount, setVisibleCount] = useState(Math.min(INITIAL_COUNT, pics.length));
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sentinelRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setVisibleCount((p) => Math.min(p + CHUNK, pics.length));
                });
            },
            { rootMargin: "400px" }
        );
        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [pics.length]);

    return (
        <div className="pt-20 h-auto bg-gray-50 px-4 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
                    {pics.slice(0, visibleCount).map((img, index) => (
                        <div key={index} style={{ breakInside: "avoid" }} className="mb-4 overflow-hidden rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition">
                            <div className="relative w-full bg-gray-100">
                                <img src={img} alt={`football-${index}`} className="w-full h-full object-cover block" loading={index < INITIAL_COUNT ? "eager" : "lazy"} />
                               
                            </div>
                        </div>
                    ))}
                    <div ref={sentinelRef} style={{ height: 1 }} />
                </div>
            </div>
        </div>
    );
}

export default FootBall;