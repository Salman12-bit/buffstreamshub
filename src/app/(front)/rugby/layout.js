import React from "react";

export const metadata = {
    title: "Buffstreams Rugby Matches - Live & Upcoming",
    description:
        "Watch all Rugby matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreams Rugby Matches - Live & Upcoming",
        description:
            "Watch all Rugby matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
        url: "https://buffstreamshub.com/rugby",
        images: [
            {
                url: "https://buffstreamshub.com/images/Rugby.webp",
                width: 1200,
                height: 630,
                alt: "Watch Rugby matches live and upcoming on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/rugby",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Rugby Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/rugby",
        "description":
            "Rugby streaming page showing live and upcoming matches on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "Rugby"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/Rugby.webp",
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
