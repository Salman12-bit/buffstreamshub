import React from "react";

export const metadata = {
    title: "Buffstreams Cricket Matches - Live & Upcoming",
    description:
        "Watch all Cricket matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreams Cricket Matches - Live & Upcoming",
        description:
            "Watch all Cricket matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
        url: "https://buffstreamshub.com/cricket",
        images: [
            {
                url: "https://buffstreamshub.com/images/Cricket.webp",
                width: 1200,
                height: 630,
                alt: "Watch Cricket matches live and upcoming on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/cricket",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Cricket Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/cricket",
        "description":
            "Cricket streaming page showing live and upcoming matches on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "Billiards"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/Cricket.webp",
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
