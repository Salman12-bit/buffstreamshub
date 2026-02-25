import React from "react";

export const metadata = {
    title: "Buffstreams Fight Matches - Live & Upcoming",
    description:
        "Watch all Fight matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite fighters.",
    openGraph: {
        title: "Buffstreams Fight Matches - Live & Upcoming",
        description:
            "Watch all Fight matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite fighters.",
        url: "https://buffstreamshub.com/fight",
        images: [
            {
                url: "https://buffstreamshub.com/images/Fight.webp",
                width: 1200,
                height: 630,
                alt: "Watch Fight matches live and upcoming on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/fight",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Fight Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/fight",
        "description":
            "Fight streaming page showing live and upcoming matches on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "Fight"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/Fight.webp",
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
