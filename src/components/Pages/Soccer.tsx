//1. Import all soccer images as object
import React, { useEffect, useRef, useState } from "react";
import { soccerImg } from "../Images/SoccF";

function Sports() {
    const pics = soccerImg;

    // Virtualization: initial slice and chunked loading when user scrolls
    const INITIAL_COUNT = 24;
    const CHUNK = 24;
    const [visibleCount, setVisibleCount] = useState(Math.min(INITIAL_COUNT, pics.length));
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sentinelRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCount((prev) => Math.min(prev + CHUNK, pics.length));
                    }
                });
            },
            { rootMargin: "400px" }
        );

        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [pics.length]);

    // small helper to decide loading attribute
    const getLoadingAttr = (index: number) => (index < INITIAL_COUNT ? "eager" : "lazy");

    return (
        <div className="pt-20 bg-green-100 px-4">
            {/* Use CSS multi-column (masonry-like) layout. Tailwind provides `columns-` utilities if configured. */}
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {pics.slice(0, visibleCount).map((img, index) => (
                    <div
                        key={index}
                        style={{ breakInside: "avoid" }}
                        className="mb-2 overflow-hidden rounded-lg"
                    >
                        <img
                            src={img}
                            alt={`soccer-${index}`}
                            className="w-full h-auto block object-cover"
                            loading={getLoadingAttr(index) as "lazy" | "eager"}
                        />
                    </div>
                ))}

                {/* sentinel triggers loading next chunk when it comes into view */}
                <div ref={sentinelRef} style={{ height: 1 }} />
            </div>
        </div>
    );
}

export default Sports;