import React from "react";

export const metadata = {
    title: "Buffstreams American Football Matches - Live & Upcoming",
    description:
        "Watch all American Football matches live and upcoming on Buffstreams. Stream games in HD with advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreams American Football Matches - Live & Upcoming",
        description:
            "Watch all American Football matches live and upcoming on Buffstreams. Stream games in HD with advanced filtering for your favorite teams.",
        url: "https://buffstreamshub.com/americanfootball",
        images: [
            {
                url: "https://buffstreamshub.com/images/AmericanFootball.webp",
                width: 1200,
                height: 630,
                alt: "Watch American Football matches live on Buffstreams in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com/americanfootball",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "American Football Live Streams on Buffstreams",
        "url": "https://buffstreamshub.com/americanfootball",
        "description":
            "American Football streaming page showing live and upcoming games on Buffstreams.",
        "about": {
            "@type": "Thing",
            "name": "American Football"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreams",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamshub.com/images/AmericanFootball.webp",
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
