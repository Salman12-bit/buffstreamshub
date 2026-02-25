import React from "react";

export const metadata = {
    title: "Buffstreams Billiards Matches - Live & Upcoming",
    description:
        "Watch all Billiards matches live and upcoming on Buffstreams. Stream games in HD with advanced filtering for your favorite players.",
    openGraph: {
        title: "Buffstreams Billiards Matches - Live & Upcoming",
        description:
            "Watch all Billiards matches live and upcoming on Buffstreams. Stream games in HD with advanced filtering for your favorite players.",
        url: "https://buffstreamshub.com/billiars",
        images: [
            {
                url: "https://buffstreamshub.com/images/Billiards.webp",
                width: 1200,
                height: 630,
                alt: "Watch Billiards matches live on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/billiars",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Billiards Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/billiars",
        "description":
            "Billiards streaming page showing live and upcoming matches on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "Billiards"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/Billiards.webp",
                "width": 500,
                "height": 500
            }
        },
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
