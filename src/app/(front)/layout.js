
import React from 'react';

export const metadata = {
    title: "Buffstreams: Free HD Live NFL, NBA, UFC & WWE Streaming",
    description:
        "Stream live sports in HD for free on Buffstreams! Watch NFL, NBA, UFC, WWE, Soccer, Boxing & more with a smooth, user-friendly interface.",
    openGraph: {
        title: "Buffstreams: Free HD Live NFL, NBA, UFC & WWE Streaming",
        description:
            "Stream live sports in HD for free on Buffstreams! Watch NFL, NBA, UFC, WWE, Soccer, Boxing & more with a smooth, user-friendly interface.",
        url: "https://buffstreamshub.com",
        images: [
            {
                url: "https://buffstreamshub.com/images/preview.jpg",
                width: 1200,
                height: 630,
                alt: "Buffstreams - Watch NFL, NBA, UFC, WWE live in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamshub.com",
    },
};

export default function RootLayout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Buffstreams",
        url: "https://buffstreamshub.com",
        description:
            "Stream live sports in HD for free on Buffstreams!",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://buffstreamshub.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
        publisher: {
            "@type": "Organization",
            name: "Buffstreams",
            logo: {
                "@type": "ImageObject",
                url: "https://buffstreamshub.com/favicon.webp",
            },
        },
    };

    return (
        <html lang="en">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </body>
        </html>
    );
}
