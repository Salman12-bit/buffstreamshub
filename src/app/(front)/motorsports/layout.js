import React from "react";

export const metadata = {
    title: "Buffstreams Motorsports Matches - Live & Upcoming",
    description:
        "Watch all Motorsports events live and upcoming on Buffstreams. Stream races in HD with schedule updates and advanced filtering for your favorite drivers and teams.",
    openGraph: {
        title: "Buffstreams Motorsports Matches - Live & Upcoming",
        description:
            "Watch all Motorsports events live and upcoming on Buffstreams. Stream races in HD with schedule updates and advanced filtering for your favorite drivers and teams.",
        url: "https://buffstreamshub.com/motorsports",
        images: [
            {
                url: "https://buffstreamshub.com/images/Motorsports.webp", 
                width: 1200,
                height: 630,
                alt: "Watch Motorsports events live and upcoming on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/motorsports",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Motor Sports Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/motorsports",
        "description":
            "Motor Sports streaming page showing live and upcoming matches on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "Motor Sports"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/Motorsports.webp",
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
