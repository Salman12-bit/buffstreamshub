import React from "react";

export const metadata = {
  title: "Buffstreams Golf Matches - Live & Upcoming",
  description:
    "Watch all Golf matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
  openGraph: {
    title: "Buffstreams Golf Matches - Live & Upcoming",
    description:
      "Watch all Golf matches live and upcoming on Buffstreams. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
    url: "https://buffstreamshub.com/golfs",
    images: [
      {
        url: "https://buffstreamshub.com/images/Golf.webp", 
        width: 1200,
        height: 630,
        alt: "Watch Golf matches live and upcoming on Buffstreams in HD",
      },
    ],
  },
  alternates: {
    canonical: "https://buffstreamshub.com/golfs",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Golf Live Streams on Buffstreams",
    "url": "https://buffstreamshub.com/golfs",
    "description":
      "Golf streaming page showing live and upcoming matches on Buffstreams.",
    "about": {
      "@type": "Thing",
      "name": "Golf"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Buffstreams",
      "logo": {
        "@type": "ImageObject",
        "url": "https://buffstreamshub.com/images/Golf.webp",
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
