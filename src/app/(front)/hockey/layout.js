import React from "react";

export const metadata = {
    title: "Buffstreams Hockey Matches - Live & Upcoming",
    description:
        "Watch all Hockey matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreams Hockey Matches - Live & Upcoming",
        description:
            "Watch all Hockey matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
        url: "https://buffstreamshub.com/hockey",
        images: [
            {
                url: "https://buffstreamshub.com/images/Hockey.webp", 
                width: 1200,
                height: 630,
                alt: "Watch Hockey matches live and upcoming on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/hockey",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Hockey Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/hockey",
        "description":
            "Hockey streaming page showing live and upcoming matches on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "Hockey"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/Hockey.webp",
                "width": 500,
                "height": 500
            }
        }
    };

    return (
        <>
            {children}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </>
    );
}
