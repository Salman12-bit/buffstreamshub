import React from "react";

export const metadata = {
    title: "Buffstreams Darts Matches - Live & Upcoming",
    description:
        "Watch all Darts matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
    openGraph: {
        title: "Buffstreams Darts Matches - Live & Upcoming",
        description:
            "Watch all Darts matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
        url: "https://buffstreamshub.com/dart",
        images: [
            {
                url: "https://buffstreamshub.com/images/Darts.webp",
                width: 1200,
                height: 630,
                alt: "Watch Darts matches live and upcoming on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/dart",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Darts Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/dart",
        "description":
            "Darts streaming page showing live and upcoming matches on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "Darts"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/Darts.webp",
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
